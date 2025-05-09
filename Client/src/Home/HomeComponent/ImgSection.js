import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/ImgSection.css';

const WomenBanner = () => {
  return (
    <div className="women-banner-wrapper">
      <Container fluid className="px-0">
        <Row className="gx-0">
          {/* First Banner Section */}
          <Col md={6} className="banner-section">
            <div className="banner-container" data-section-status="loaded">
              <div className="banner-block">
                <div className="banner-image-container">
                  <picture>
                    <source 
                      media="(min-width: 600px)" 
                      type="image/webp" 
                      srcSet="https://media.alshaya.com/adobe/assets/urn:aaid:aem:e7bf439c-cbdd-4712-be92-43a3c3763f67/as/WS21L-4x5-women-startpage-wk17.jpg?preferwebp=true&width=2000&format=jpg" 
                    />
                    <source 
                      type="image/webp" 
                      srcSet="https://media.alshaya.com/adobe/assets/urn:aaid:aem:e7bf439c-cbdd-4712-be92-43a3c3763f67/as/WS21L-4x5-women-startpage-wk17.jpg?preferwebp=true&width=750&format=jpg" 
                    />
                    <source 
                      media="(min-width: 600px)" 
                      srcSet="https://media.alshaya.com/adobe/assets/urn:aaid:aem:e7bf439c-cbdd-4712-be92-43a3c3763f67/as/WS21L-4x5-women-startpage-wk17.jpg?preferwebp=true&width=2000&format=jpg" 
                    />
                    <img 
                      alt="" 
                      loading="eager" 
                      src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:e7bf439c-cbdd-4712-be92-43a3c3763f67/as/WS21L-4x5-women-startpage-wk17.jpg?preferwebp=true&width=750&format=jpg" 
                      fetchpriority="high" 
                      className="banner-image"
                    />
                  </picture>
                </div>
                <div className="banner-content">
                  <h2 className="banner-title">SARTORIAL STATEMENT</h2>
                  <div className="banner-cta">
                    <p>
                      <Link 
                        as={Link}
                        to="/" 
                        title="SHOP NOW" 
                        className="shop-now-link"
                      >
                        SHOP NOW
                      </Link>
                    </p>
                  </div>
                </div>
                <Link 
                  as={Link}
                  to="/"
                  title="SARTORIAL STATEMENT" 
                  className="banner-overlay-link"
                ></Link>
              </div>
            </div>
          </Col>

          {/* Second Banner Section */}
          <Col md={6} className="banner-section">
            <div className="banner-container" data-section-status="loaded">
              <div className="banner-block">
                <div className="banner-image-container">
                  <picture>
                    <source 
                      media="(min-width: 600px)" 
                      type="image/webp" 
                      srcSet="https://media.alshaya.com/adobe/assets/urn:aaid:aem:65d836ec-4493-4a98-a416-8fff38572916/as/DS21G-4x5-women-startpage-wk16.jpg?preferwebp=true&width=2000&format=jpg" 
                    />
                    <source 
                      type="image/webp" 
                      srcSet="https://media.alshaya.com/adobe/assets/urn:aaid:aem:65d836ec-4493-4a98-a416-8fff38572916/as/DS21G-4x5-women-startpage-wk16.jpg?preferwebp=true&width=750&format=jpg" 
                    />
                    <source 
                      media="(min-width: 600px)" 
                      srcSet="https://media.alshaya.com/adobe/assets/urn:aaid:aem:65d836ec-4493-4a98-a416-8fff38572916/as/DS21G-4x5-women-startpage-wk16.jpg?preferwebp=true&width=2000&format=jpg" 
                    />
                    <img 
                      alt="" 
                      loading="lazy" 
                      src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:65d836ec-4493-4a98-a416-8fff38572916/as/DS21G-4x5-women-startpage-wk16.jpg?preferwebp=true&width=750&format=jpg" 
                      fetchpriority="high" 
                      className="banner-image"
                    />
                  </picture>
                </div>
                <div className="banner-content">
                  <h2 className="banner-title">DENIM & FRILLS</h2>
                  <div className="banner-cta">
                    <p>
                      <Link 
                        as={Link}
                        to="/" 
                        title="SHOP NOW" 
                        className="shop-now-link"
                      >
                        SHOP NOW
                      </Link>
                    </p>
                  </div>
                </div>
                <Link 
                  as={Link}
                  to="/"
                  title="DENIM & FRILLS" 
                  className="banner-overlay-link"
                ></Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WomenBanner;