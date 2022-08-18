import React, { useEffect, useState } from 'react';
import {
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { useHistory, Link } from 'react-router-dom';

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

import fatass from 'images/fatass.png';
import colin from 'images/colin.png';
import shay from 'images/shay.png';
import austin from 'images/austin.png';
import quinn from 'images/quinn.png';
import peter from 'images/peter.png';
import seth from 'images/seth.png';
import ssp from 'images/ssp.jpeg';

import InnovationLabsImage from 'images/awards/InnovationLabsImage.png';
import CapitalPartnersImage from 'images/awards/CapitalPartnersImage.png';
import ProdImage from 'images/awards/ProdImage.png';

import JefesCircle from 'images/restaurants/JefesCircle.png';
import HongKongCircle from 'images/restaurants/HongKongCircle.png';
import PlayaCircle from 'images/restaurants/PlayaCircle.png';

const toppingsBlue = '#0082FF';
const grayBlue = '#3B74B2';
const HomePage = () => {
  let history = useHistory();

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
      ? 'https://toppingsapp.page.link/download'
      : 'https://apps.apple.com/us/app/toppings-free-food-4-friends/id1552594551';
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  // <  isMobile detecting

  const openUrl = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  const scrollTo = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 500,
      // delay: 100,
      smooth: true,
      // containerId: 'ContainerElementID',
      offset: -100, // Scrolls to element + 50 pixels down the page
    });
  };

  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringSS, setIsHoveringSS] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseOverSS = () => {
    setIsHoveringSS(true);
  };

  const handleMouseOutSS = () => {
    setIsHoveringSS(false);
  };

  const pfpSize = isMobile ? {
    width: 80,
    height: 80,
  } : {
    width: 140,
    height: 140,
  };

  return (
    <div>
      <div style={{
        ...styles.stickyHeader,
        flexDirection: isMobile ? 'row' : undefined,
        justifyContent: isMobile ? 'space-evenly' : undefined,
        paddingLeft: isMobile ? 0 : 53,
      }}>
        <button
          style={{
            ...styles.headerText,
            marginRight: isMobile ? 0 : 70,
          }}
          onClick={() => scrollTo('howItWorks')}
        >
          {isMobile ? 'About' : 'How It Works'}
        </button>
        <button           
          style={{
            ...styles.headerText,
            marginRight: isMobile ? 0 : 70,
          }}
          onClick={() => scrollTo('team')}
        >
          {!isMobile && 'The '}Team
        </button>
        <button
          style={{
            ...styles.headerText,
            marginRight: isMobile ? 0 : 70,
          }}
          onClick={() => scrollTo('partnerships')}
        >
          Partners
        </button>
        <button
          style={{
            ...styles.headerText,
            marginRight: isMobile ? 0 : 70,
          }}
          onClick={() => scrollTo('contact')}
        >
          Contact
        </button>
        <Link
          style={{
            ...styles.headerText,
            marginRight: isMobile ? 0 : 70,
            marginTop: 20.25,
            height: '100%',
          }}
          to="/careers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Careers
        </Link>
        {!isMobile && (
          <button
            style={{
              ...styles.headerText,
              marginRight: isMobile ? 0 : 70,
            }}
            onClick={() => openUrl('https://toppings-dev.github.io/toppings-vendor/#/portal-auth/sign-in')}
          >
            Vendors
          </button>        
        )}
      </div>
      <div style={{
        ...styles.stickyHeader2,
        flexDirection: isMobile ? 'row' : undefined,
        justifyContent: isMobile ? 'space-evenly' : 'center',
        cursor: 'pointer'
      }}
      onClick={() => openUrl('https://toppingsapp.com/#/careers')}>
        We're hiring!
      </div>
      <div style={styles.root}>
        <div style={{ ...styles.gradientBackground }}>
          {!isMobile && (
            <img
              src={BackgroundBoxes}
              style={{
                width: 420,
                height: 425,
                objectFit: 'cover',
                objectPosition: '0% 50%',
                position: 'absolute',
                right: 0,
                top: 164,
                zIndex: 0,
              }}
            />
          )}
          <p style={{ 
            ...styles.title,
            marginTop: 160,
            marginBottom: isMobile ? 30 : 60,
            fontSize: isMobile ? 60 : 80,
            zIndex: 1,
          }}>
            Toppings
          </p>
          <p style={{ 
            ...styles.subtitle2,
            textAlign: 'center',
            color: grayBlue,
            fontSize: isMobile ? 18 : 24,
            zIndex: 1,
          }}>
            FREE FOOD WHEN YOU GO OUT
            <br />
            FREE DELIVERY WHEN YOUR FRIENDS ARE OUT
          </p>
          <button
            style={{
              margin: '160px 0px 20px 0px',
              width: 240,
              height: 60,
              borderRadius: 100,
              backgroundColor: '#FFF',

              ...styles.subtitle1,
              color: '#0082FF',
            }}
            onClick={() => openUrl('https://toppingsapp.com/#/careers')}
          >
            WE'RE HIRING!
          </button>
          <button
            style={{
              width: 240,
              height: 60,
              borderRadius: 100,
              backgroundColor: toppingsBlue,
              marginBottom: 160,
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
              textAlign: isMobile ? 'center' : undefined,
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
              textAlign: isMobile ? 'center' : undefined,
            }}
          >
            <div>
              <div style={styles.body}>
                <br />
                Order with Toppings at
              </div>
              <div style={styles.subtitle1}>22 restaurants</div>
            </div>
          </div>
          <div
            style={{
              width: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 48,
              textAlign: isMobile ? 'center' : undefined,
            }}
          >
            <div>
              <div style={styles.body}>
                Users have earned <br />
                free food worth
              </div>

              <div style={styles.subtitle1}>$4037</div>
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
            marginLeft: isMobile ? 20 : 0,
            marginRight: isMobile ? 20 : 0,
          }}
        >
          Other food apps make you order twenty items for one free item.
          {!isMobile && <br />}
          Toppings gets you <span style={{ fontFamily: 'Karla-ExtraBold' }}>free food with a single order.</span>
        </p>
        <div
          style={{
            color: grayBlue,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 80,
            flexDirection: isMobile ? 'column' : undefined,
            textAlign: isMobile ? 'center' : undefined,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 48,
              marginRight: isMobile ? 0 : 76,
            }}
          >
            <img src={S1i1} style={{ width: 142, height: 160, marginBottom: 40 }} />
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
              marginRight: isMobile ? 0 : 76,
            }}
          >
            <div style={{ paddingTop: 60 }}>
              <img src={S1i2} style={{ width: 157, height: 100, marginBottom: 40 }} />
            </div>
            <p style={styles.body}>
              Friends <span style={{ fontFamily: 'Karla-ExtraBold' }}>near you</span>
              <br />
              add their orders
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 48,
              marginRight: isMobile ? 0 : 76,
            }}
          >
            <div style={{ paddingTop: 10 }}>
              <img src={S1i3} style={{ width: 198, height: 150, marginBottom: 40 }} />
            </div>
            <p style={styles.body}>
              Pick-up and bring back
              <br />
              your food <span style={{ fontFamily: 'Karla-ExtraBold' }}>and</span> your friends’ food
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
              <img src={S1i4} style={{ width: 124, height: 140, marginBottom: 40 }} />{' '}
            </div>
            <p style={styles.body}>
              Toppings <span style={{ fontFamily: 'Karla-ExtraBold' }}>rewards</span> you
              <br />
              with free food!
            </p>
          </div>
        </div>
        {/* 2 */}
        <p style={{ ...styles.subtitle2, textAlign: isMobile ? 'center' : undefined }}>2. TOPPINGS = ZERO-COST DELIVERY</p>
        <p
          style={{
            ...styles.body,
            textAlign: 'center',
            marginTop: 64,
            marginBottom: 70,
            marginLeft: isMobile ? 20 : 0,
            marginRight: isMobile ? 20 : 0,
          }}
        >
          Other delivery apps make you pay $15 in delivery fees for a single
          item.
          {!isMobile && <br />}

          With Toppings, <span style={{ fontFamily: 'Karla-ExtraBold' }}>you pay nothing.</span>
        </p>
        <div
          style={{
            color: grayBlue,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            // alignItems: 'center',
            flexDirection: isMobile ? 'column' : undefined,
            textAlign: isMobile ? 'center' : undefined
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
            <img src={S2i1} style={{ width: 418, height: 220, marginBottom: 40 }} />
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
              marginRight: isMobile ? 0 : 76,
            }}
          >
            <div style={{ paddingTop: 70 }}>
              <img src={S2i2} style={{ width: 198, height: 150, marginBottom: 40 }} />
            </div>
            <p style={styles.body}>
              Send them an order and your friend
              <br />
              will <span style={{ fontFamily: 'Karla-ExtraBold' }}>bring your food back</span> too
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: 164,
              marginRight: isMobile ? 0 : 76,
            }}
          >
            <div style={{ paddingTop: 60 }}>
              <img src={S2i3} style={{ width: 178, height: 160, marginBottom: 40 }} />
            </div>
            <p style={styles.body}>
              With Toppings, your social
              <br />
              network helps you <span style={{ fontFamily: 'Karla-ExtraBold' }}>save $$$!</span>
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: 140,
            flexDirection: isMobile ? 'column' : undefined,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: isMobile ? 0 : 117,
            }}
          >
            <p style={{ ...styles.subtitle2, marginBottom: 30 }}>
              Toppings is the future of food.
            </p>
            <p style={{ ...styles.body, marginBottom: 104, textAlign: 'center' }}>
              Get free rewards & fee-less delivery <span style={{ fontFamily: 'Karla-ExtraBold' }}>today</span>
              <br />
              at your favorite restaurants in Harvard Square.
            </p>
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
              marginBottom: isMobile ? 36 : 86,
              width: isMobile ? '100%' : '50%',
            }}
          >
            <div
              style={{
                ...pfpSize,
                borderRadius: 70,
                backgroundColor: '#C4C4C4',
                marginRight: 33,
                overflow: 'hidden',
              }}
            >
              <img src={fatass} style={pfpSize} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ ...styles.body }}>Founder / CEO</p>
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
              marginBottom: isMobile ? 36 : 86,
              width: isMobile ? '100%' : '50%',
            }}
          >
            <div
              style={{
                ...pfpSize,
                borderRadius: 70,
                backgroundColor: '#C4C4C4',
                marginRight: 33,
                overflow: 'hidden',
              }}
            >
              <img src={colin} style={pfpSize} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ ...styles.body }}>Cofounder / Head of Technology</p>
              <p style={{ ...styles.subtitle2 }}>COLIN</p>
              <p style={{ ...styles.body, color: grayBlue }}>
                USA Coding Olympiad Gold Winner
                <br />
                Serial Builder: Application tools, zoom add-ons, minecraft servers
                <br />
                gym rat / guitar aficionado
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: isMobile ? 36 : 86,
              width: isMobile ? '100%' : '50%',
            }}
          >
            <div
              style={{
                ...pfpSize,
                borderRadius: 70,
                backgroundColor: '#C4C4C4',
                marginRight: 33,
                overflow: 'hidden',
              }}
            >
              <img src={shay} style={pfpSize} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ ...styles.body }}>Cofounder / Head of Product</p>
              <p style={{ ...styles.subtitle2 }}>SHAY</p>
              <p style={{ ...styles.body, color: grayBlue }}>
                Design Director of HUFPI at Harvard
                <br />
                Nationally awarded artist/designer
                <br />
                avalon player / concert-goer
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: isMobile ? 36 : 86,
              width: isMobile ? '100%' : '50%',
            }}
          >
            <div
              style={{
                ...pfpSize,
                borderRadius: 70,
                backgroundColor: '#C4C4C4',
                marginRight: 33,
                overflow: 'hidden',
              }}
            >
              <img src={ssp} style={pfpSize} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ ...styles.body }} onMouseOver={handleMouseOverSS} onMouseOut={handleMouseOutSS}>{isHoveringSS ? 'Kitchen Sink' : 'Founding Ops/Strategy'}</p>
              <p style={{ ...styles.subtitle2 }}>SHANSHAN</p>
              <p style={{ ...styles.body, color: grayBlue }}>
                Ex. Startup Founder
                <br />
                MIT Grad/Researcher
                <br />
                {isHoveringSS ? 'nerd' : 'foodie / board game enthusiast'}
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: isMobile ? 36 : 86,
              width: isMobile ? '100%' : '50%',
            }}
          >
            <div
              style={{
                ...pfpSize,
                borderRadius: 70,
                backgroundColor: '#C4C4C4',
                marginRight: 33,
                overflow: 'hidden',
              }}
            >
              <img src={austin} style={pfpSize} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ ...styles.body }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{isHovering ? 'Professional Software Engineer' : 'App Dev'}</p>
              <p style={{ ...styles.subtitle2 }}>AUSTIN</p>
              <p style={{ ...styles.body, color: grayBlue }}>
                Dev at CloudSafari Inc, Applied Brain Research,
                <br />
                3DQue Systems Inc
                <br />
                softball / cat dad
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: isMobile ? 36 : 86,
              width: isMobile ? '100%' : '50%',
            }}
          >
            <div
              style={{
                ...pfpSize,
                borderRadius: 70,
                backgroundColor: '#C4C4C4',
                marginRight: 33,
                overflow: 'hidden',
              }}
            >
              <img src={quinn} style={pfpSize} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ ...styles.body }}>Head of Growth - Strategy</p>
              <p style={{ ...styles.subtitle2 }}>QUINN</p>
              <p style={{ ...styles.body, color: grayBlue }}>
                Harvard College Consulting Group,
                <br />
                Charles River Growth Fund, Harvard Ventures
                <br />
                cross-country runner / spike ball
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: isMobile ? 36 : 86,
              width: isMobile ? '100%' : '50%',
            }}
          >
            <div
              style={{
                ...pfpSize,
                borderRadius: 70,
                backgroundColor: '#C4C4C4',
                marginRight: 33,
                overflow: 'hidden',
              }}
            >
              <img src={peter} style={pfpSize} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ ...styles.body }}>Advisor</p>
              <p style={{ ...styles.subtitle2 }}>PETER GLADSTONE</p>
              <p style={{ ...styles.body, color: grayBlue }}>
                Director of Consumer Goods and Services @
                <br />
                Harvard i-Labs
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 86,
              width: isMobile ? '100%' : '50%',
            }}
          >
            <div
              style={{
                ...pfpSize,
                borderRadius: 70,
                backgroundColor: '#C4C4C4',
                marginRight: 33,
                overflow: 'hidden',
              }}
            >
              <img src={seth} style={pfpSize} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ ...styles.body }}>Advisor</p>
              <p style={{ ...styles.subtitle2 }}>SETH RUBINSTEIN</p>
              <p style={{ ...styles.body, color: grayBlue }}>
                Former Chief of Staff
                <br />
                UberEats APAC
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
        <p style={{ ...styles.h6, marginBottom: 108 }}>
          MIT/Harvard PROD cohort
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : undefined,
          }}
        >
          <div style={{ width: 380, display: 'flex', justifyContent: 'center', marginBottom: isMobile ? 20 : 0 }} onClick={() => openUrl('https://innovationlabs.harvard.edu/')}>
            <img src={InnovationLabsImage} style={{ width: 281, height: 87 }} />
          </div>
          <div
            style={{ width: 380, display: 'flex', justifyContent: 'center', marginBottom: isMobile ? 20 : 0 }}
            onClick={() => openUrl('https://www.harvardcap.org/')}
          >
            <img
              src={CapitalPartnersImage}
              style={{ width: 281, height: 87 }}
            />
          </div>
          <div
            style={{ width: 380, display: 'flex', justifyContent: 'center', marginBottom: isMobile ? 20 : 0 }}
            onClick={() => openUrl('https://www.prod.so/')}
          >
            <img src={ProdImage} style={{ width: 138, height: 53 }} />
          </div>
        </div>
        <div
          style={{
            backgroundColor: grayBlue,
            width: isMobile ? 300 : 500,
            height: 2,
            marginBottom: 68,
            marginTop: 100,
          }}
        />
        <p style={{ ...styles.h6, color: grayBlue, marginBottom: 64, textAlign: 'center' }}>
          We are committed to serving local restaurants & small businesses
        </p>
        <p style={{ ...styles.h6, marginBottom: 50 }}>El Jefe’s Tacqueria</p>
        <p style={{ ...styles.h6, marginBottom: 50 }}>Playa Bowls</p>
        <p style={{ ...styles.h6, marginBottom: 50 }}>Hongkong Restaurant</p>
        <p style={{ ...styles.h6, marginBottom: 80 }}>& more!</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 80,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={{ width: 150, display: 'flex', justifyContent: 'center', marginBottom: isMobile ? 20 : 0 }}>
            <img src={JefesCircle} style={{ width: 110, height: 110 }} />
          </div>
          <div
            style={{ width: 150, display: 'flex', justifyContent: 'center', marginBottom: isMobile ? 20 : 0 }}
          >
            <img src={HongKongCircle} style={{ width: 90, height: 90 }} />
          </div>
          <div
            style={{ width: 150, display: 'flex', justifyContent: 'center', marginBottom: isMobile ? 20 : 0 }}
          >
            <img src={PlayaCircle} style={{ width: 90, height: 90 }} />
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
          <Element name="contact">
            <p style={{ ...styles.subtitle1, color: grayBlue }}>CONTACT US</p>
          </Element>
        </div>
        <p style={{ ...styles.h6, color: grayBlue, marginBottom: 24, textAlign: 'center' }}>
          raymondqin@toppingsapp.com
        </p>
        <p style={{ ...styles.h6, color: grayBlue, marginBottom: 268, textAlign: 'center' }}>
          +1 (678) 710-1220
        </p>
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
    fontSize: 80,
  },
  gradientBackground: {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #b7e7ff 100%)',
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
    fontSize: 18,
    color: '#3B74B2',
    marginRight: '70px',
  },
  stickyHeader: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '68px',
    position: 'sticky',
    top: 0,
    display: 'flex',
    paddingLeft: '53px',
    zIndex: 2,
  },
  stickyHeader2: {
    backgroundColor: '#0082FF',
    width: '100%',
    height: '68px',
    position: 'sticky',
    top: 68,
    boxShadow: '0px 8px 30px #CDEFFF',
    display: 'flex',
    zIndex: 2,
    alignItems: 'center',

    fontFamily: 'Rubik-SemiBold',
    color: '#FFF',
    fontSize: 24,
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default HomePage;
