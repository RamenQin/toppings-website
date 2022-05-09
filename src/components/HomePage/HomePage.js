import React, { useEffect, useState } from 'react';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import BlueArrowRightIcon from 'images/icons/BlueArrowRight.png';

import PhoneImage from 'images/vectors/Phone.png';
import BackgroundBoxes from 'images/vectors/BackgroundBoxes.png';

import S1i1 from 'images/vectors/S1i1.png';
import S1i2 from 'images/vectors/S1i2.png';
import S1i3 from 'images/vectors/S1i3.png';
import S1i4 from 'images/vectors/S1i4.png';
import S2i1 from 'images/vectors/S2i1.png';
import S2i2 from 'images/vectors/S2i2.png';
import S2i3 from 'images/vectors/S2i3.png';

import InnovationLabsImage from 'images/awards/InnovationLabsImage.png';
import CapitalPartnersImage from 'images/awards/CapitalPartnersImage.png';
import ProdImage from 'images/awards/ProdImage.png';

import JefesCircle from 'images/restaurants/JefesCircle.png';
import HongKongCircle from 'images/restaurants/HongKongCircle.png';
import PlayaCircle from 'images/restaurants/PlayaCircle.png';

const toppingsBlue = '#0082FF';
const grayBlue = '#3B74B2';
const HomePage = () => {
  // console.log(window.location.href);
  // isMobile detecting >
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  const getApp = () => {
    const url = isMobile
      ? 'toppingsapp.page.link/download'
      : 'https://apps.apple.com/us/app/toppings-free-food-4-friends/id1552594551';
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  // <  isMobile detecting

  const scrollTo = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 500,
      // delay: 100,
      smooth: true,
      // containerId: 'ContainerElementID',
      offset: -100, // Scrolls to element + 50 pixels down the page
    });
  };

  return (
    <div style={styles.root}>
      <div style={styles.stickyHeader}>
        <button
          style={styles.headerText}
          onClick={() => scrollTo('howItWorks')}
        >
          How It Works
        </button>
        <button style={styles.headerText} onClick={() => scrollTo('team')}>
          The Team
        </button>
        <button
          style={styles.headerText}
          onClick={() => scrollTo('partnerships')}
        >
          Partnerships
        </button>
      </div>
      <div style={{ ...styles.gradientBackground }}>
        <img
          src={BackgroundBoxes}
          style={{
            width: 455,
            height: 425,
            position: 'absolute',
            right: -48,
            top: 164,
          }}
        />
        <p style={{ ...styles.title, marginTop: 160, marginBottom: 60 }}>
          Toppings
        </p>
        <p style={{ ...styles.subtitle2, color: grayBlue }}>
          FREE FOOD WITH FRIENDS.
        </p>
        <button
          style={{
            width: 240,
            height: 60,
            borderRadius: 100,
            backgroundColor: toppingsBlue,
            margin: '160px 0px',
          }}
          onClick={getApp}
        >
          <p style={{ ...styles.subtitle1, color: '#FFF' }}>Get the app</p>
        </button>
      </div>
      <div
        style={{
          marginTop: 58,
          color: grayBlue,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          <div>
            <div style={styles.body}>
              <br />
              Student-founded at
            </div>
            <div style={styles.subtitle1}>Harvard College</div>
          </div>
        </div>
        <div
          style={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          <div>
            <div style={styles.body}>
              <br />
              Order with Toppings at
            </div>
            <div style={styles.subtitle1}>23 restaurants</div>
          </div>
        </div>
        <div
          style={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          <div>
            <div style={styles.body}>
              Users have earned <br />
              free food worth
            </div>

            <div style={styles.subtitle1}>$1802</div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: grayBlue,
          width: '50%',
          height: 2,
          marginBottom: 120,
        }}
      />
      {/* 1 */}
      <div
        style={{
          background: 'linear-gradient(90deg, #B8E7FF 0%, #F1FBFF 100%)',
          width: '70%',
          height: 80,
          borderRadius: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 65,
        }}
      >
        <Element name="howItWorks">
          <p style={{ ...styles.subtitle1, color: grayBlue }}>HOW IT WORKS</p>
        </Element>
      </div>
      <p style={styles.subtitle2}>1. TOPPINGS = FREE FOOD</p>
      <p
        style={{
          ...styles.body,
          textAlign: 'center',
          marginTop: 64,
          marginBottom: 100,
        }}
      >
        Other food apps make you order twenty items for one free item.
        <br />
        Toppings gets you <b>free food with a single order.</b>
      </p>
      <div
        style={{
          color: grayBlue,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 48,
            marginRight: 76,
          }}
        >
          <img src={S1i1} style={{ width: 142, height: 160 }} />
          <p style={styles.body}>
            You’re hungry and order
            <br />
            ahead at your fav restaurant
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 48,
            marginRight: 76,
          }}
        >
          <div style={{ paddingTop: 60 }}>
            <img src={S1i2} style={{ width: 157, height: 100 }} />
          </div>
          <p style={styles.body}>
            Friends <b>nearby</b> can
            <br />
            order there too
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 48,
            marginRight: 76,
          }}
        >
          <div style={{ paddingTop: 10 }}>
            <img src={S1i3} style={{ width: 198, height: 150 }} />
          </div>
          <p style={styles.body}>
            Pick-up and bring back
            <br />
            your food <b>and</b> your friends’ food
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          <div style={{ paddingTop: 20 }}>
            <img src={S1i4} style={{ width: 124, height: 140 }} />{' '}
          </div>
          <p style={styles.body}>
            Toppings <b>rewards</b> you
            <br />
            with free food!
          </p>
        </div>
      </div>
      {/* 2 */}
      <p style={styles.subtitle2}>2. TOPPINGS = ZERO-COST DELIVERY</p>
      <p
        style={{
          ...styles.body,
          textAlign: 'center',
          marginTop: 64,
          marginBottom: 70,
        }}
      >
        Other delivery apps make you pay $15 in delivery fees for a single item.
        <br />
        With Toppings, <b>you pay nothing.</b>
      </p>
      <div
        style={{
          color: grayBlue,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 64,
            // marginRight: 76,
          }}
        >
          <img src={S2i1} style={{ width: 418, height: 220 }} />
          <p style={styles.body}>
            Get notified when friends in your area
            <br />
            are going out to get food
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 64,
            marginRight: 76,
          }}
        >
          <div style={{ paddingTop: 70 }}>
            <img src={S2i2} style={{ width: 198, height: 150 }} />
          </div>
          <p style={styles.body}>
            Send them an order and your friend
            <br />
            will <b>bring your food back</b> too
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: 164,
            marginRight: 76,
          }}
        >
          <div style={{ paddingTop: 60 }}>
            <img src={S2i3} style={{ width: 178, height: 160 }} />
          </div>
          <p style={styles.body}>
            With Toppings, your social
            <br />
            network helps you <b>save $$$!</b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginBottom: 140,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 117,
          }}
        >
          <p style={{ ...styles.subtitle2, marginBottom: 30 }}>
            Toppings is the future of food.
          </p>
          <p style={{ ...styles.body, marginBottom: 104 }}>BLURB BLURB BLURB</p>
          <button style={{ display: 'flex' }} onClick={getApp}>
            <p style={{ ...styles.h6, color: toppingsBlue }}>GET THE APP</p>
            <img
              src={BlueArrowRightIcon}
              style={{ width: 14, height: 14, marginLeft: 16, marginTop: 7 }}
            />
          </button>
        </div>
        <img src={PhoneImage} style={{ width: 271, height: 510 }} />
      </div>
      <div
        style={{
          background: 'linear-gradient(90deg, #B8E7FF 0%, #F1FBFF 100%)',
          width: '70%',
          height: 80,
          borderRadius: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 65,
        }}
      >
        <Element name="team">
          <p style={{ ...styles.subtitle1, color: grayBlue }}>THE TEAM</p>
        </Element>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '70%',
          // justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 86,
            marginRight: 60,
          }}
        >
          <div
            style={{
              height: 140,
              width: 140,
              borderRadius: 70,
              backgroundColor: '#C4C4C4',
              marginRight: 33,
            }}
          >
            {/* IMAGE */}
          </div>
          <div>
            <p style={{ ...styles.body }}>CEO</p>
            <p style={{ ...styles.subtitle2 }}>RAYMOND</p>
            <p style={{ ...styles.body, color: grayBlue }}>
              Serial founder + CEO/COO: ICON, GRC, PROD
              <br />
              Uncommon Venture PM
              <br />
              ACL-tearer 2x / basketball
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 86,
            marginRight: 60,
          }}
        >
          <div
            style={{
              height: 140,
              width: 140,
              borderRadius: 70,
              backgroundColor: '#C4C4C4',
              marginRight: 33,
            }}
          >
            {/* IMAGE */}
          </div>
          <div>
            <p style={{ ...styles.body }}>CEO</p>
            <p style={{ ...styles.subtitle2 }}>COLIN</p>
            <p style={{ ...styles.body, color: grayBlue }}>
              Serial founder + CEO/COO: ICON, GRC, PROD
              <br />
              Uncommon Venture PM
              <br />
              ACL-tearer 2x / basketball
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 86,
            marginRight: 60,
          }}
        >
          <div
            style={{
              height: 140,
              width: 140,
              borderRadius: 70,
              backgroundColor: '#C4C4C4',
              marginRight: 33,
            }}
          >
            {/* IMAGE */}
          </div>
          <div>
            <p style={{ ...styles.body }}>CEO</p>
            <p style={{ ...styles.subtitle2 }}>SHAY</p>
            <p style={{ ...styles.body, color: grayBlue }}>
              Serial founder + CEO/COO: ICON, GRC, PROD
              <br />
              Uncommon Venture PM
              <br />
              ACL-tearer 2x / basketball
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'linear-gradient(90deg, #B8E7FF 0%, #F1FBFF 100%)',
          width: '70%',
          height: 80,
          borderRadius: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 65,
        }}
      >
        <Element name="partnerships">
          <p style={{ ...styles.subtitle1, color: grayBlue }}>PARTNERSHIPS</p>
        </Element>
      </div>
      <p style={{ ...styles.h6, marginBottom: 50 }}>
        Winner of the HUCP Innovation Fund
      </p>
      <p style={{ ...styles.h6, marginBottom: 50 }}>
        Awarded Harvard i-Labs SPARK Grant
      </p>
      <p style={{ ...styles.h6, marginBottom: 108 }}>MIT/Harvard PROD cohort</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ width: 380 }}>
          <img src={InnovationLabsImage} style={{ width: 281, height: 87 }} />
        </div>
        <div style={{ width: 380, display: 'flex', justifyContent: 'center' }}>
          <img src={CapitalPartnersImage} style={{ width: 281, height: 87 }} />
        </div>
        <div style={{ width: 380, display: 'flex', justifyContent: 'center' }}>
          <img src={ProdImage} style={{ width: 138, height: 53 }} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: grayBlue,
          width: 500,
          height: 2,
          marginBottom: 68,
          marginTop: 100,
        }}
      />
      <p style={{ ...styles.h6, color: grayBlue, marginBottom: 64 }}>
        We are committed to serving local restaurants & small businesses
      </p>
      <p style={{ ...styles.h6, marginBottom: 50 }}>El Jefe’s Tacqueria</p>
      <p style={{ ...styles.h6, marginBottom: 50 }}>Playa Bowls</p>
      <p style={{ ...styles.h6, marginBottom: 80 }}>Hongkong Restaurant</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 394,
        }}
      >
        <div style={{ width: 150 }}>
          <img src={JefesCircle} style={{ width: 110, height: 110 }} />
        </div>
        <div style={{ width: 150, display: 'flex', justifyContent: 'center' }}>
          <img src={HongKongCircle} style={{ width: 90, height: 90 }} />
        </div>
        <div
          style={{ width: 150, display: 'flex', justifyContent: 'flex-end' }}
        >
          <img src={PlayaCircle} style={{ width: 90, height: 90 }} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  h6: {
    fontFamily: 'Karla-Bold',
    // fontWeight: '700',
    fontSize: 20,
  },
  body: {
    fontFamily: 'Karla-Medium',
    fontWeight: '500',
    fontSize: 16,
  },
  subtitle1: {
    fontFamily: 'Rubik-SemiBold',
    // fontWeight: '600',
    fontSize: 24,
  },
  subtitle2: {
    fontFamily: 'Karla-Bold',
    // fontWeight: '700',
    fontSize: 24,
  },
  title: {
    fontFamily: 'Rubik-ExtraBold',
    // fontWeight: '800',
    color: '#0082FF',
    fontSize: 70,
  },
  gradientBackground: {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #CEE7FF 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '776px',
    width: '100%',
    // paddingBottom: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  headerText: {
    fontFamily: 'Karla-Medium',
    fontWeight: '500',
    fontSize: '19px',
    color: '#3B74B2',
    marginRight: '70px',
  },
  stickyHeader: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '68px',
    position: 'sticky',
    top: 0,
    boxShadow: '0px 8px 30px #CDEFFF',
    display: 'flex',
    paddingLeft: '53px',
    zIndex: 2,
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default HomePage;
