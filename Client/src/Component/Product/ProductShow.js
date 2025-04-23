// src/pages/ProductsPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import ProductCard from '../Product/ProductCrad';
import products from '../../Core/ProductData';
import "./ProductStyle/ProductShow.css";
import ProductFilterSide from './ProductFilterSide';
import FilterBar from './FilterBar';
import { FiFilter } from 'react-icons/fi'; // Import filter icon

const ProductsPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);

  return (
    <Container fluid className="products-page p-0">
      {/* Filter bar at the top with toggle button for mobile */}
      
      
      {/* Mobile filter toggle button - only visible on small screens */}
      <div className="d-lg-none p-3">
        <Button 
          variant="outline-primary" 
          onClick={handleShowFilter}
          className="d-flex align-items-center gap-2"
        >
          <FiFilter /> Filters
        </Button>
      </div>
      
      <Row className="m-0">
        {/* Filter sidebar - hidden on mobile, shown as offcanvas */}
        <Col lg={3} className="px-0 d-none d-lg-block">
          <ProductFilterSide />
        </Col>
        
        {/* Offcanvas for mobile filters */}
        <Offcanvas 
          show={showFilter} 
          onHide={handleCloseFilter}
          placement="start"
          className="w-25" // Adjust width as needed
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filters</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ProductFilterSide />
          </Offcanvas.Body>
        </Offcanvas>
        
        {/* Products section */}
        <Col lg={9} xs={12}>
        <FilterBar />
          <Row className="m-0">
            {products.map(product => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;