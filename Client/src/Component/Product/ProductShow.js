// src/pages/ProductsPage.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Product/ProductCrad';
import products from '../../Core/ProductData';
import "./ProductStyle/ProductShow.css"
import ProductFilterSide from './ProductFilterSide'
import FilterBar from './FilterBar'


const ProductsPage = () => {
  return (
    <Container fluid className="products-page" style={{ width:'100%',maxWidth:'100%'  }}>
      <Row className="flex" style={{ width:'100%',maxWidth:'100%'  }}>
        
      <Col >
            <ProductFilterSide />
      </Col >
      <FilterBar />
        {products.map(product => (
          <Col key={product.id} lg={3}>
            
            <ProductCard style={{  }} product={product} />
          </Col>
      
        
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;