import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { v4 } from 'uuid';

import ChevronLeftBlack from '../images/ChevronLeftBlack.png';
import ChevronLeftLightBlue from '../images/ChevronLeftLightBlue.png';

const customStyles = {
  content: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0,
  },
};

export default function SelectedItemModal({ modalVisible, handleModalClose, menuItem, cart, setCart }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSelectOption = opt => {
    const newSelectedOptions = JSON.parse(JSON.stringify(selectedOptions));
    const selectedOptIdx = newSelectedOptions.findIndex(selectedOpt => selectedOpt.name === opt.name);
    if (selectedOptIdx !== -1) {
      newSelectedOptions.splice(selectedOptIdx, 1);
      setSelectedOptions(newSelectedOptions);
    } else {
      newSelectedOptions.push(opt);
      setSelectedOptions(newSelectedOptions);
    }
  };

  const addToCart = () => {
    let optionsPrice = 0;
    for (const option of selectedOptions) optionsPrice += option.price ? option.price : 0;

    const newCart = JSON.parse(JSON.stringify(cart));
    newCart.push({
      id: v4(),
      menuItem,
      discount: 0,
      price: menuItem.price + optionsPrice,
      points: 0,
      quantity,
      comment: '',
      foodOptions: menuItem.foodOptions ? menuItem.foodOptions.map(foodOption => {
        const options = [];
        foodOption.options.map(option => {
          if (selectedOptions.find(selectedOpt => selectedOpt.name === option.name)) {
            options.push(option);
          }
        });
        return {
          name: foodOption.name,
          options,
        };
      }) : [],
    });

    setCart(newCart);
    setSelectedOptions([]);
    handleModalClose();
  };

  if (!menuItem) {
    return (
      <div />
    )
  }
  return (
    <Modal
      isOpen={modalVisible}
      onRequestClose={handleModalClose}
      style={customStyles}
    >
      <div className="selected-item-body">
        {menuItem.image && (
          <img src={menuItem.image} alt={menuItem.name} />
        )}
        {menuItem.image && (
          <BackButton
            onPress={handleModalClose}
            containerStyle={{ position: 'absolute', top: 20, left: 10 }}
            backgroundStyle={{ 'background-color': '#1C2547' }}
            iconColor='lightBlue'
          />
        )}
        {!menuItem.image && (
          <BackButton
            onPress={handleModalClose}
            containerStyle={{ marginTop: 20, marginLeft: 10 }}
          />
        )}
        <div className="item-content">
          <h1> {menuItem.name} </h1>
          <span> ${(menuItem.price / 100).toFixed(2)} </span>
          <p> {menuItem.description} </p>
          {menuItem.foodOptions && (menuItem.foodOptions.map(foodOption => (
            <div key={foodOption.name}>
              <h2>
                {foodOption.name}
              </h2>
              {(foodOption.numChoices || foodOption.required) && (
                <span style={{ color: '#747474', fontWeight: 700 }}>
                  {foodOption.required && '*required'} {foodOption.numChoices && `up to ${foodOption.numChoices}`}
                </span>
              )}
              {foodOption.options.map(option => (
                <div key={option.name}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOptions.find(selectedOpt => selectedOpt.name === option.name)}
                      onChange={() => handleSelectOption(option)}
                    />
                    <span>
                      {option.name} {option.price && `(${option.price > 0 ? '+' : '-'}$${(Math.abs(option.price) / 100).toFixed(2)})`}
                    </span>
                  </label>
                </div>
              ))}
            </div> 
          )))}
          {/* <div className="quantity-button">
            <div onClick={decrementQuantity}>
              <span>
                -
              </span>
            </div>
            <span>
              {quantity}
            </span>
            <div onClick={incrementQuantity}>
              <span>
                +
              </span>
            </div>
          </div> */}
        </div>

        <div className="footer" onClick={addToCart}>
          <span>
            add 1 to cart
          </span>
        </div>
      </div>
    </Modal>
  );
}

export function BackButton({ onPress, containerStyle, backgroundStyle, iconColor }) {
  let backIcon;
  switch (iconColor) {
    case 'lightBlue':
      backIcon = ChevronLeftLightBlue;
      break;
    case 'black':
      backIcon = ChevronLeftBlack;
      break;
    default:
      backIcon = ChevronLeftBlack;
      break;
  }

  return (
    <div className="back-button" style={containerStyle ? containerStyle : undefined} onClick={onPress}>
      <div style={backgroundStyle ? backgroundStyle : undefined}>
        <img src={backIcon} alt="back button" />
      </div>
    </div>
  )
}
