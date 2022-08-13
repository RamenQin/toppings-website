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

import InnovationLabsImage from 'images/awards/InnovationLabsImage.png';
import CapitalPartnersImage from 'images/awards/CapitalPartnersImage.png';
import ProdImage from 'images/awards/ProdImage.png';

import JefesCircle from 'images/restaurants/JefesCircle.png';
import HongKongCircle from 'images/restaurants/HongKongCircle.png';
import PlayaCircle from 'images/restaurants/PlayaCircle.png';

const toppingsBlue = '#0082FF';
const grayBlue = '#3B74B2';
const Careers = () => {
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

  const pfpSize = isMobile ? {
    width: 80,
    height: 80,
  } : {
    width: 140,
    height: 140,
  };

  return (
    <div>
      <div style={styles.root}>
        <div style={{ ...styles.gradientBackground }}>
          <p style={{ 
            ...styles.title,
            marginTop: 160,
            marginBottom: isMobile ? 30 : 60,
            fontSize: isMobile ? 60 : 80,
          }}>
            Join Toppings
          </p>
        </div>
        {/* 1 */}
        <div style={{ marginTop: 40, display: 'flex', width: '100%', paddingLeft: 80, paddingRight: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {!isMobile && (<img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/297825535_769570057495655_1088605076071815020_n.png?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=ae9488&amp;_nc_ohc=cS7216e-bLQAX-muFRW&amp;_nc_ht=scontent-sjc3-1.xx&amp;oh=03_AVL5LjZl0Uxbefh7kiFItvuYjd7xD2z7swUXEjtROlfG_A&amp;oe=631E38CB" alt="Random Image" role="presentation" aria-hidden="true" style={{ width: '45%' }} />)}
          <div style={{ width: 80 }} />
          <div style={{ flexDirection: 'column', width: isMobile ? '100%' : '40%' }}>
            <h2 style={styles.subtitle1}>
              Revolutionize Food<br />Delivery
            </h2>
            <div style={{ height: 30 }} />
            <p style={styles.p}>Food delivery is expensive, hurts local businesses, and is unsustainable.</p>

            <p style={{ ...styles.p, fontFamily: 'Karla-Bold' }}>The future of food delivery is social and free.</p>

            <p style={styles.p}>Toppings is making a zero-fee, restaurant-friendly, and sustainably profitable delivery system.</p>

            <p style={styles.p}>Born out of the pandemic, Toppings rewards communities for turning takeout orders into delivery opportunities for friends and neighbors on the way back.</p>


            <p style={styles.p}>We have an all-star founding team from Harvard and MIT, recently raised at an 8-figure valuation, are backed by some of the top firms in our industry, and are looking for foundational members (that’s <span style={{ fontFamily: 'Karla-Bold' }}>you</span>) to join the founding team.</p>

            <p style={styles.p}>Be one of the first to build the future of delivery.</p>

            <p style={styles.p}>Apply now!</p>
          </div>
        </div>
        {/* 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 80, paddingRight: 80, width: '100%' }}>
          <h2 style={styles.subtitle1}>
            Come reimagine with us
          </h2>
          <div style={styles.line} />
          <div style={styles.jobRow}>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Role
              </p>
              <a target='_blank' href={'https://toppings.notion.site/Founding-Growth-Manager-f59d33c13b034c4097a5dfc7d3f1e92b'} style={{ ...styles.jobLarge, ...styles.link }}>
                Founding Growth Manager
              </a>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Sub-Team
              </p>
              <p style={styles.jobLarge}>
                Ops (Kitchen Sink)
              </p>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Location
              </p>
              <p style={styles.jobLarge}>
                Boston/Cambridge
              </p>
            </div>
          </div>
          <div style={styles.line} />
          <div style={styles.jobRow}>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Role
              </p>
              <a target='_blank' href={'https://toppings.notion.site/Founding-Software-Engineer-2a82d13c9fd94939afb49a5788c8f976'} style={{ ...styles.jobLarge, ...styles.link }}>
                Founding Software Engineer
              </a>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Sub-Team
              </p>
              <p style={styles.jobLarge}>
                Product
              </p>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Location
              </p>
              <p style={styles.jobLarge}>
                Boston/Cambridge
              </p>
            </div>
          </div>
          <div style={styles.line} />
          <div style={styles.jobRow}>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Role
              </p>
              <a target='_blank' href={'https://toppings.notion.site/Full-Stack-SWE-Part-Timer-810bb92bfcb44d3694ff6aa448e26c31'} style={{ ...styles.jobLarge, ...styles.link }}>
                Part-time Software Engineer
              </a>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Sub-Team
              </p>
              <p style={styles.jobLarge}>
                Product
              </p>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Location
              </p>
              <p style={styles.jobLarge}>
                Remote or Boston/Cambridge
              </p>
            </div>
          </div>
          <div style={styles.line} />
        </div>

        {/* bottom padding */}
        <div style={{ height: 200 }} />
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
    fontSize: 36,
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
  p: {
    fontFamily: 'Karla-Regular',
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#777777',
    marginTop: 20,
    marginBottom: 20,
  },
  jobRow: {
    display: 'flex',
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobColumn: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  jobSmall: {
    fontFamily: 'Karla-Light',
    fontSize: 16,
  },
  jobLarge: {
    fontFamily: 'Karla-Medium',
    fontSize: 20,
  },
  link: {
    color: '#0082FF',
    
  }
};

export default Careers;
