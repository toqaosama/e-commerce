import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Start from './img/start.jpg'


const WomenBanner = () => {
  return (
    <div className="banner-wrapper">
      <Container fluid className="px-0" style={{height:'60vh' ,marginBottom:'10rem'}}>
        <Row className="gx-0">
          {/* First Banner Section */}
          <Col md={12} className="banner-section">
            <div className="banner-container" data-section-status="loaded">
              <div className="banner-block">
                <div className="banner-image-container">
                  <picture>
            
                    <img 
                      alt="" 
                      loading="eager" 
                      src={Start}
                      fetchpriority="high" 
                      className="banner-image"
                      style={{height:'80vh'}}
                    />
                  </picture>
                </div>
                <a 
                  href="https://eg.hm.com/en/shop-women/trending-now/city-chic" 
                  title="SARTORIAL STATEMENT" 
                  className="banner-overlay-link"
                ></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WomenBanner;