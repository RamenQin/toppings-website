import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";

import GooglePlayButton from "../images/GooglePlayButton.png";
import IOSButton from "../images/IOSButton.png";

dayjs().format();

export default function OrderOnlineSuccess() {
  let { runId } = useParams();

  let history = useHistory();

  const [run, setRun] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [deliverer, setDeliverer] = useState(null);

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
      console.log(resp.data.run.estimatedDeliveryTimeWindow);
      setRun(resp.data.run);

      let restaurantData = resp.data.restaurant;
      delete restaurantData.menu[0];
      setRestaurant(restaurantData);

      setDeliverer(resp.data.deliverer);
    };
    getData();
  }, [runId]);

  const redirectToStore = () => {
    window.location.replace('https://toppingsapp.page.link/download');
  };
  const redirectToHome = () => {
    window.location.replace("https://toppingsapp.com"); 
  }

  if (!run || !restaurant || !deliverer) {
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
      <div className="container">
        <div className="header">
          <h1>
            Thanks for ordering with Toppings!
          </h1>
          <h2 style={{ marginTop: 40 }}>
            Pick up your food at{'\n'}
            <h2 style={{ color: '#0082FF' }}>{run.dropoffLocation}</h2>{'\n'}
            from{'\n'}
            <h2 style={{ color: '#0082FF' }}>{dayjs(run.estimatedDeliveryTimeWindow.begin).format('h:mmA')} to {dayjs(run.estimatedDeliveryTimeWindow.end).format('h:mmA')}</h2>
          </h2>
          <div className="blue-background">
            <h2 style={{ color: '#FFFFFF' }}>
              Get FREE FOOD
            </h2>
            <h2 style={{ color: '#FFFFFF' }}>
              Track your order live
            </h2>
            <h2 style={{ color: '#FFFFFF' }}>
              Never miss a free delivery
            </h2>
            <h2 style={{ color: '#FFFFFF', marginTop: 10 }}>
              Download the Toppings app!
            </h2>
          </div>
          <h2 style={{ marginTop: 10 }}>
            Use {deliverer.name}'s code <h2 style={{ color: '#0082FF' }}>{deliverer.referralCode}</h2> to get both of you free food!
          </h2>
          <p style={{ fontFamily: 'Cabin', fontSize: 14, color: '#747474', fontWeight: 400 }}>
            Referral rewards are doubled for the first 100 users
          </p>
          <button onClick={redirectToStore} style={{ marginTop: 20 }}>
            <img src={IOSButton} alt={"IOS"} className="download-button-ios" />
            <img src={GooglePlayButton} alt={"Google Play"} className="download-button-android" />
          </button>
          <button onClick={redirectToHome} style = {{ borderRadius: 10, padding: "0px 10px 0px 10px", backgroundColor: "#0082FF", fontFamily: 'Cabin', fontSize: 24, color: '#ffffff', fontWeight: 500 }}>
            Return Home
          </button>
        </div>
      </div>
    </body>
  );
}
