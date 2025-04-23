import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductDetailsImg from './productDetilesImg';
import ProductDetailsSidebar from './productDetilesSidebar';
import './styless/ProductDetailsShowPage.css';
import InterestedCard from '../Product/ProductCrad';

const ProductDetailsPage = () => {
  const productImages = [
    { url: '/image1.jpg', alt: 'Product 1' },
    { url: '/image2.jpg', alt: 'Product 2' },
    { url: '/image3.jpg', alt: 'Product 3' }
  ];

  const relatedProducts = [
    { id: 1, images: [{ url: '/related1.jpg', alt: 'Related 1' }] },
    { id: 2, images: [{ url: '/related2.jpg', alt: 'Related 2' }] },
    { id: 3, images: [{ url: '/related3.jpg', alt: 'Related 3' }] },
    { id: 4, images: [{ url: '/related4.jpg', alt: 'Related 4' }] }
  ];

  return (
    <Container fluid className="product-details-container p-0"> {/* Remove padding */}
      <Row className="product-details-row g-0"> {/* Remove gutters */}
        {/* Main Product Content */}
        <Col md={9} className="product-images-col pe-0"> {/* Remove right padding */}
          <ProductDetailsImg />
        </Col>
        <Col md={3} className="product-sidebar-col ps-0"> {/* Remove left padding */}
          <ProductDetailsSidebar />
        </Col>
      </Row>
      
      {/* Related Products Section */}
      <Container fluid className="px-0"> {/* Remove horizontal padding */}
        <h2 className="px-3">You Might Be Interested In</h2> {/* Add padding only to text */}
        <Row className="g-0"> {/* Remove gutters between cards */}
          {relatedProducts.map(product => (
            <Col key={product.id} xs={6} md={3} className="px-0"> {/* Remove padding */}
              <InterestedCard images={product.images} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ProductDetailsPage;