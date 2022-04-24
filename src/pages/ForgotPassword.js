import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { promisify } from 'util';

import GooglePlayButton from "../images/GooglePlayButton.png";
import IOSButton from "../images/IOSButton.png";

dayjs().format();

export default function ForgotPassword() {
  let userPoolParams = {
    UserPoolId: 'us-east-1_BZrR4rdM5',
    ClientId: '68aj8nbksgd001o2bd00gds65r',
  };

  const userPool = new CognitoUserPool(userPoolParams);
  let cognitoUser;

  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [sentCode, setSentCode] = useState(false);
  const codeRef = useRef(null);
  const passwordRef = useRef(null);

  const [success, setSuccess] = useState('');

  const [loading, setLoading] = useState(false);

  const onChangePhoneNumber = e => {
    let text = e.target.value;

    console.log(text);
    if (text.length > 12) {
      return;
    }

    if (text.length < phoneNumber.length) {
      if (text.length === 4 || text.length === 8) {
        setPhoneNumber(text.substring(0, text.length - 1));
      } else {
        setPhoneNumber(text);
      }
    } else {
      let newPhoneNumber = text;

      if (newPhoneNumber.length === 4 || newPhoneNumber.length === 8) {
        newPhoneNumber =
          newPhoneNumber.substring(0, newPhoneNumber.length - 1) +
          '-' +
          newPhoneNumber.substring(newPhoneNumber.length - 1, newPhoneNumber.length);
      }

      setPhoneNumber(newPhoneNumber);
    }
  };

  const handleSendCode = e => {
    e.preventDefault();

    setLoading(true);
    const username = '+1' + phoneNumber.replace(/[-()]/g, '');
    cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    try {
      cognitoUser.forgotPassword({
        onSuccess: function (data) {
            setLoading(false);
            setSentCode(true);
        },
        onFailure: function (err) {
          setLoading(false);
          console.log(err);
          alert(err.message || JSON.stringify(err));
          // alert(`Something went wrong: ${err.message}`);
        },
      });
    } catch (err) {
      console.log(err);
      alert(err.message || JSON.stringify(err));
    }
  };

  const handleResetPassword = e => {
    e.preventDefault();

    setLoading(true);
    const username = '+1' + phoneNumber.replace(/[-()]/g, '');
    cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    console.log(codeRef.current.value,
      passwordRef.current.value);
    try {
      cognitoUser.confirmPassword(
        codeRef.current.value,
        passwordRef.current.value,
        {
          onSuccess() {
            setLoading(false);
            setSuccess(true);
          },
          onFailure(err) {
            setLoading(false);
            console.log(err);
            alert(`Something went wrong: ${err.message}`);
          }
        }
      );
    } catch (err) {
      console.log(err);
      alert(err.message || JSON.stringify(err));
    }
  }
  
  return (
    <body className="order-online">
      <div className="container">
        <div className="header">
          {loading && <div className="loading-background"></div>}
          <h1>
            Reset Password
          </h1>
          {!sentCode && !success && (
            <form onSubmit={handleSendCode} className="checkout-form">
              <label htmlFor="phoneNumber">Your phone number:</label>
              <input id="phoneNumber" name="phone number" value={phoneNumber} onChange={onChangePhoneNumber} />
              <button type="submit" disabled={loading}>
                Submit
              </button>
            </form>
          )}
          {sentCode && !success && (
            <form onSubmit={handleResetPassword} className="checkout-form">
              <label htmlFor="code">Code:</label>
              <input type="number" id="code" name="verification code" ref={codeRef} />
              <label htmlFor="password">New Password (8 characters min):</label>
              <input type="password" id="password" name="password" ref={passwordRef} />
              <button type="submit" disabled={loading}>
                Submit
              </button>
            </form>
          )}
          {sentCode && success && (
            <h2>
              Password successfully reset.
            </h2>
          )}
        </div>
      </div>
    </body>
  );
}
