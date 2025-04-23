import React, { useState } from 'react';
import { Card, Row, Col, Image, Button, Container } from 'react-bootstrap';
import './ProductStyle/CardStyle.css';

const ProductCard = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const productImages = [
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:0492e6e0-852c-49a2-b1ae-fa907141538f/as/EID-1871ff2d0c9040c06228aa41a2e7571c5ee8b87d.jpg?width=450&height=675&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:2952e627-1ac3-4adc-9409-33ce2ed5c796/as/EID-56092585fe02c3140e4201ff6d3209e7f97717e1.jpg?width=450&height=675&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:4744b320-2136-40d4-b81e-8e651ffaeb0c/as/EID-66969c1e4eb44b31b024a59b2ce98d3e3b6ecb19.jpg?width=450&height=675&preferwebp=true'
  ];

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Container className="mb-5">
      <Row className="g-4 justify-content-center">
        <Col >
          <Card className="product-card">
            {/* Product Image Carousel */}
            <div className="product-image-container">
              <Card.Link 
                href="/en/buy-sphere-detail-front-and-back-earrings-light-pink-dark-red" 
                className="stretched-link"
              />
              
              <Image
                src={productImages[activeImageIndex]}
                alt="Sphere-detail front and back earrings"
                className="product-image"
              
              />
              
              {/* Image Indicators */}
              <div className="image-indicators">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`image-indicator ${index === activeImageIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleImageChange(index);
                    }}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Wishlist Button */}
              <button
                className="wishlist-button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleWishlist();
                }}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Image
                  src={isWishlisted 
                    ? "https://eg.hm.com/icons/wishlist-filled-plp.svg" 
                    : "https://eg.hm.com/icons/wishlist-empty-plp.svg"}
                  width={32}
                  height={32}
                  alt="Wishlist"
                />
              </button>
            </div>
            
            {/* Product Info */}
            <Card.Body className="product-info">
              <Card.Title className="product-title">
                <Card.Link 
                  href="/en/buy-sphere-detail-front-and-back-earrings-light-pink-dark-red" 
                >
                  Sphere-detail front and back earrings
                </Card.Link>
              </Card.Title>
              
              <div className="product-price-container">
                <span className="product-price">$19.99</span>
                <Button 
                  variant="outline-dark" 
                  size="sm"
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart functionality
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard;