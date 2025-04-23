import React, { useState } from 'react';
import { Button, Form, Image, Carousel } from 'react-bootstrap';
import './styless/ProductDetailsSidebar.css';
import productData from '../../Core/SidebarDataDetiles'; // Import the core data

const ProductDetailsSidebar = ({ show, handleClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAddToBasket = () => {
    // Add to basket logic
    console.log('Added to basket:', {
      productId: productData.id,
      size: selectedSize,
      quantity,
      color: productData.color
    });
    handleClose();
  };

  return (
    <div 
      className={`product-details-sidebar ${show ? 'show' : ''}`}
      style={{ width: '100%' }}
    >
      <div className="sidebar-header">
        <h3>{productData.name}</h3>
        <button className="close-button" onClick={handleClose}>×</button>
      </div>
      <div className="sidebar-body">
        {/* Product Images Carousel */}
        <div className="mb-4">
          <Carousel activeIndex={activeIndex} onSelect={setActiveIndex} indicators={false}>
            {productData.images.map((img, index) => (
              <Carousel.Item key={index}>
                <Image src={img.url} fluid className="w-100" alt={img.alt} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="d-flex justify-content-center mt-2">
            {productData.images.map((_, index) => (
              <Button
                key={index}
                variant="link"
                className={`p-0 mx-1 ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div 
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: index === activeIndex ? '#000' : '#ccc'
                  }}
                />
              </Button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="d-flex align-items-baseline mb-3">
          <h4 className="mb-0 me-2" style={{ fontWeight: 600, color: '#000' }}>{productData.price}</h4>
          <small style={{ color: '#777', fontSize: '12px' }}>Incl. VAT</small>
        </div>

        {/* Color Selection */}
        <div className="mb-4">
          <p className="mb-2">COLOR: {productData.color}</p>
          <div className="d-flex">
            {productData.colors.map((color) => (
              <a 
                key={color.code} 
                href={color.link}
                className="me-2"
                style={{ width: '90px', height: '100px' }}
              >
                <Image 
                  src={color.image} 
                  fluid 
                  className={`w-100 h-100 ${productData.color === color.name ? 'border border-dark' : ''}`}
                  alt={color.name}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className="mb-0">select size:</p>
            <a href="#" className="text-decoration-underline">SIZE GUIDE</a>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {productData.sizes.map((size) => (
              <Form.Check
                key={size}
                type="radio"
                id={`size-${size}`}
                name="size"
                label={size}
                checked={selectedSize === size}
                onChange={() => setSelectedSize(size)}
                className="size-option"
              />
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <div className="d-flex align-items-center justify-content-between border p-2" style={{ maxWidth: '150px' }}>
            <Button 
              variant="outline-secondary" 
              size="sm" 
              disabled={quantity <= 1}
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              -
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button 
              variant="outline-secondary" 
              size="sm"
              onClick={() => setQuantity(q => q + 1)}
            >
              +
            </Button>
          </div>
        </div>

        {/* Add to Basket */}
        <Button 
          variant="dark" 
          className="w-100 mb-3"
          onClick={handleAddToBasket}
          disabled={!selectedSize}
        >
          ADD TO BASKET
        </Button>

        {/* Points */}
        <div className="mb-4">
          <p>Members earn {productData.pointsEarned} point(s)</p>
          <a href="#" className="text-decoration-underline">READ MORE</a>
        </div>

        {/* Product Details Accordion */}
        <div className="mb-4">
          <div className="border-top border-bottom py-3">
            <h5 className="mb-0">Product Details</h5>
          </div>
          <div className="mt-3">
            <p>{productData.description}</p>
            <div className="mt-3">
              {productData.details.map((detail, index) => (
                <div key={index} className="d-flex mb-2">
                  <span className="me-2">{detail.label}:</span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="mb-4">
          <div className="border-top border-bottom py-3">
            <h5 className="mb-0">Delivery Options</h5>
          </div>
          <div className="mt-3">
            <p>Explore the delivery options applicable to your area</p>
            {productData.deliveryOptions.map((option, index) => (
              <div key={index} className="mb-3">
                <h6>{option.name}</h6>
                <p className="small">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Returns */}
        <div className="mb-4">
          <p>{productData.returnsInfo}</p>
          <a href="#" className="text-decoration-underline">READ MORE</a>
        </div>

        {/* Click & Collect */}
        <div className="mb-4">
          <div className="border-top border-bottom py-3">
            <h5 className="mb-0">Click & Collect</h5>
          </div>
          <div className="mt-3">
            <p>{productData.clickAndCollect.availability}</p>
            <p className="small">{productData.clickAndCollect.instructions}</p>
            <div className="d-flex mt-2">
              <Form.Control 
                type="text" 
                placeholder="Enter your area" 
                className="me-2"
              />
              <Button variant="dark">SEARCH</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSidebar;