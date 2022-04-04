import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";

import GooglePlayButton from "../images/GooglePlayButton.png";
import IOSButton from "../images/IOSButton.png";

dayjs().format();

export default function RunExpiredPage({ run }) {
  const redirectToStore = () => {
    window.location.replace('https://toppingsapp.page.link/download');
  };

  return (
    <body className="order-online">
      <div className="container">
        <div className="header">
          <h1>
            Oops! {run.deliverer.name}'s run has expired...
          </h1>
          <h2 style={{ marginTop: 40 }}>
            Download the app to never miss your friends' runs{'\n'}
            and start earning{'\n'}
            <h2 style={{ color: '#0082FF' }}>free food</h2> now.
          </h2>
          <button onClick={redirectToStore} style={{ marginTop: 20 }}>
            <img src={IOSButton} alt={"IOS"} className="download-button-ios" />
            <img src={GooglePlayButton} alt={"Google Play"} className="download-button-android" />
          </button>
        </div>
      </div>
    </body>
  );
}
