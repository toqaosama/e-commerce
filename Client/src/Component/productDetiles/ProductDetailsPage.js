import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductDetailsImg from './productDetilesImg';
import ProductDetailsSidebar from './productDetilesSidebar';
import './styless/ProductDetailsShowPage.css';
import IntersetedCardsSection from '../../Home/HomeComponent/IntersetedCardsSection';

const ProductDetailsPage = () => {

  return (
    <Container fluid className="product-details-container p-0"> {/* Remove padding */}
      <Row className="product-details-row g-0"> {/* Remove gutters */}
        {/* Main Product Content */}
        <Col md={6} className="product-images-col pe-0"> {/* Remove right padding */}
          <ProductDetailsImg />
        </Col>
        <Col md={6} className="product-sidebar-col ps-0"> {/* Remove left padding */}
          <ProductDetailsSidebar />
        </Col>
      </Row>
      
      {/* Related Products Section */}
      <Container fluid className="px-0"> {/* Remove horizontal padding */}
        
        <Row className="g-0"> {/* Remove gutters between cards */}
            <Col > {/* Remove padding */}
              <IntersetedCardsSection  />
            </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProductDetailsPage;