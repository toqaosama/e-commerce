import React from 'react';
import { Container } from 'react-bootstrap';
import "./styles/OfferSection.css";

const OfferSection = () => {
  return (
    <Container fluid className="offer-section p-0 position-relative" style={{ height: '60vh' ,marginTop:'0%' }}>
      {/* Background image or color would go here */}
      <h2 
        style={{
          fontSize: '44px',
          lineHeight: '57.2px',
          color: 'rgb(228, 1, 15)',
          fontFamily: "'hm slussen wide bold', 'hm slussen semibold fallback', 'helvetica neue'",
          whiteSpace: 'break-spaces',
          boxSizing: 'border-box',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          textAlign: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%'
        }}
      >
        SALE<br />
        UP TO 70% OFF
      </h2>
    </Container>
  );
};

export default OfferSection;