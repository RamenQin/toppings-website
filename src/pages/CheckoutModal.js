import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

import { BackButton } from './SelectedItemModal';

import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NODE_ENV === 'production' ? 
    'pk_live_51I3OlmG88krJDDvNicwPVnCxivqc10OdyU0HI8T0buVYK0hxTOS9UIvoD9e7nG8nffzAFRxet6R7Fg9IB278P4Al001FPb5sFe'
  :
    'pk_test_51I3OlmG88krJDDvNGxKwmv0RRBLqCfnwbsHDabdGaqmBKJltbVYoGXU2ktgLmwbwOTl2oWQZY3ekzNTWX9x5Bksp00Ih538bgN'
);

const customStyles = {
  content: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0,
  },
};

export default function CheckoutModal({ modalVisible, handleModalClose, cart, createOrder, createOrderLoading, setCreateOrderLoading }) {
  let totalCartPrice = 0;
  cart.map(item => {
    totalCartPrice += item.price;
  });
  let tax = totalCartPrice * 0.078;
  let totalCartPriceWithTax = totalCartPrice + tax;

  return (
    <Modal
      isOpen={modalVisible}
      onRequestClose={handleModalClose}
      style={customStyles}
    >
      <BackButton
        onPress={handleModalClose}
        containerStyle={{ marginBottom: 20, marginLeft: -7 }}
      />
      <div className="checkout-modal-body">
        <h1>
          Checkout
        </h1>
        <div className="checkout-items">
          {cart.map(item => {
            let price = item.price;
            item.foodOptions.map(foodOption => foodOption.options.map(option => price += option.price ? option.price : 0));

            let optionsText = '';
            if (item.foodOptions) {
              item.foodOptions.map(foodOption => {
                foodOption.options.map(option => {
                  optionsText += `${option.name}${option.price ? ` (+$${(option.price / 100).toFixed(2)})` : ''}, `;
                });
              });
              optionsText = optionsText.slice(0, optionsText.lastIndexOf(','));
            }

            return (
              <div className="checkout-item-row">
                <div className="checkout-top-row">
                  <div>
                    <h2>
                      {item.menuItem.name}
                    </h2>
                    <span>
                      ${(price / 100).toFixed(2)}
                    </span>
                  </div>
                  <img src={item.menuItem.image} alt={item.name} />
                </div>
                <span style={{ marginTop: 10 }}>
                  {optionsText}
                </span>
              </div>
            )
          })}
          <div className="checkout-totals-row">
            <span>
              subtotal
            </span>
            <span>
              {(totalCartPrice / 100).toFixed(2)}
            </span>
          </div>
          <div className="checkout-totals-row">
            <span>
              tax
            </span>
            <span>
              {(tax / 100).toFixed(2)}
            </span>
          </div>
          <div className="checkout-totals-row" style={{ marginBottom: 10 }}>
            <span>
              total
            </span>
            <span>
              ${(totalCartPriceWithTax / 100).toFixed(2)}
            </span>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm createOrder={createOrder} price={totalCartPriceWithTax} createOrderLoading={createOrderLoading} setCreateOrderLoading={setCreateOrderLoading} />
        </Elements>
      </div>
    </Modal>
  );
}

const CheckoutForm = ({ createOrder, price, createOrderLoading, setCreateOrderLoading }) => {
  const nameInput = useRef();
  const phoneNumberInput = useRef();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {

    event.preventDefault();

    setCreateOrderLoading(true);
    if (createOrderLoading) {
      return;
    }

    if (elements == null) {
      return;
    }

    const token = await stripe.createToken(elements.getElement(CardElement));
    if(!token.token) {
      setCreateOrderLoading(false);
      return; 
    }
    await createOrder(token.token.id, nameInput.current.value, phoneNumberInput.current.value);
    setCreateOrderLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <label for="name">Your name:</label>
      <input type="text" id="name" name="name" ref={nameInput} />
      <label for="phoneNumber">Phone number:</label>
      <input type="number" id="phoneNumber" name="phone number" ref={phoneNumberInput} />
      <label for="card-payment">Credit Card:</label>
      <CardElement className="card-payment" id="card-payment" />
      <button type="submit" disabled={!stripe || !elements || createOrderLoading}>
        Place Order<span style={{ fontWeight: 500, marginLeft: 5 }}>(${(price / 100).toFixed(2)})</span>
      </button>
    </form>
  );
};
