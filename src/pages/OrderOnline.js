import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

import SelectedItemModal from "./SelectedItemModal";
import CheckoutModal from "./CheckoutModal";

export default function OrderOnline() {
  let { runId } = useParams();

  let history = useHistory();

  const [run, setRun] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  const [cart, setCart] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemVisible, setSelectedItemVisible] = useState(false);
  const handleOpenSelectedItem = item => {
    setSelectedItem(item);
    setSelectedItemVisible(true);
  };
  const handleCloseSelectedItem = () => {
    setSelectedItem(null);
    setSelectedItemVisible(false);
  };

  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const handleOpenCheckout = () => setCheckoutVisible(true);
  const handleCloseCheckout = () => setCheckoutVisible(false);

  const incrementQuantity = (e, menuItemId) => {
    console.log('ADD');
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    const item = cart.find(item => item.menuItem.id === menuItemId);
    const newCart = JSON.parse(JSON.stringify(cart));
    newCart.push(item);
    setCart(newCart);
  }
  const decrementQuantity = (e, menuItemId) => {
    console.log('DELETE');
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    let newCart = JSON.parse(JSON.stringify(cart));
    const itemIdx = cart.findIndex(item => item.menuItem.id === menuItemId);
    if (itemIdx === -1) return;
    newCart.splice(itemIdx, 1);
    setCart(newCart);
  }

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        (process.env.NODE_ENV === 'production' ? 'https://api.toppingsapp.com' : 'http://localhost:4000') +
        `/getPartyInfo/?partyId=${runId}`,
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      );
      setRun(resp.data.run);

      let restaurantData = resp.data.restaurant;
      delete restaurantData.menu[0];
      setRestaurant(restaurantData);
    };
    getData();
  }, [runId]);

  const createOrder = async (token, name, phoneNumber) => {
    try {
      await axios.post(
        (process.env.NODE_ENV === 'production' ? 'https://api.toppingsapp.com' : 'http://localhost:4000') +
        '/createOrderUnauth',
        {
          partyId: runId,
          cart: JSON.stringify(cart),
          restaurantId: run.restaurant.id,
          stripeToken: token,
          currency: 'usd',
          description: `Toppings at ${run.restaurant.name}`,
          dropoffLocation: run.dropoffLocations[0],
          name,
          phoneNumber,
        }
      );
      history.push(`/order/${runId}/success`);
    } catch (err) {
      console.log('[ERROR CREATE ORDER]:', err);
    }
  };

  if (!run || !restaurant) {
    return (
      <body className="order-online">
        <div>
          loading...
        </div>
      </body>
    )
  }
  return (
    <body className="order-online">
      <SelectedItemModal
        closeTimeoutMS={450}
        modalVisible={selectedItemVisible}
        handleModalClose={handleCloseSelectedItem}
        menuItem={selectedItem}
        cart={cart}
        setCart={setCart}
      />
      <CheckoutModal
        closeTimeoutMS={450}
        modalVisible={checkoutVisible}
        handleModalClose={handleCloseCheckout}
        cart={cart}
        createOrder={createOrder}
      />
      <div className="container">
        <div className="header">
          <h1>
            Order from {run.deliverer.name} at {run.restaurant.name}
          </h1>
          <img src={run.restaurant.thumbnail} alt={`${run.restaurant.name}`} className="restaurant-image" />
        </div>
        <div className="menu-container">
          <span className="menu-text">
            FULL MENU
          </span>
          {restaurant.menu.map(menuCategory => 
            <div key={menuCategory.name}>
              <h2>
                {menuCategory.name}
              </h2>
              {menuCategory.menuItems.map(menuItem => {
                let numItems = cart.filter(item => item.menuItem.id === menuItem.id).length;
                return (
                  <div key={menuItem.id} className="menu-item-row" onClick={() => handleOpenSelectedItem(menuItem)}>
                    <div>
                      {numItems > 0 && (
                        <QuantityCircle
                          menuItemId={menuItem.id}
                          addItem={incrementQuantity}
                          deleteItem={decrementQuantity}
                          quantity={numItems}
                        />
                      )}
                      <span>
                        {menuItem.name}
                      </span>
                    </div>
                    <img src={menuItem.image} alt={`${menuItem.name}`} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="footer" onClick={handleOpenCheckout}>
          <span>
            check out
          </span>
        </div>
      </div>
    </body>
  );
}

function QuantityCircle({ menuItemId, deleteItem, addItem, quantity }) {
  const [expanded, setExpanded] = useState(false);
  const handleToggleExpand = e => {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    setExpanded(!expanded);
  }

  return (
    <div className="quantity-circle" onClick={handleToggleExpand}>
      {expanded && (
        <button onClick={e => deleteItem(e, menuItemId)}>
          <span>
            -
          </span>
        </button>
      )}
      <span>
        {quantity}
      </span>
      {expanded && (
        <button onClick={e => addItem(e, menuItemId)}>
          <span>
            +
          </span>
        </button>
      )}
    </div>
  );
}
