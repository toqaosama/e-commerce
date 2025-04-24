import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/SelectedCollections.css'; // We'll create this CSS file to maintain the original styles

const SelectedCollections = () => {
  const collections = [
    {
      title: "SHOES",
      link: "https://eg.hm.com/en/shop-women/shop-product/shoes",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:6c124021-9dac-4753-a42d-0fda4099eeed/as/FNP-Shoes-2x3-1-CE-Women-wk17.jpg?width=750&format=jpg&optimize=medium",
      webp: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:6c124021-9dac-4753-a42d-0fda4099eeed/as/FNP-Shoes-2x3-1-CE-Women-wk17.jpg?width=750&format=webply&optimize=medium"
    },
    {
      title: "SHORTS",
      link: "https://eg.hm.com/en/shop-women/shop-product/shorts",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:e0736e34-c893-443e-96af-12c0945ccf28/as/FNP-Shorts-2x3-2-CE-Women-wk17.jpg?width=750&format=jpg&optimize=medium",
      webp: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:e0736e34-c893-443e-96af-12c0945ccf28/as/FNP-Shorts-2x3-2-CE-Women-wk17.jpg?width=750&format=webply&optimize=medium"
    },
    {
      title: "TROUSERS",
      link: "https://eg.hm.com/en/shop-women/shop-product/trousers",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:cdf844ba-b822-4c7d-9a3e-e66b796d7067/as/FNP-Trousers-2x3-3-CE-Women-wk17.jpg?width=750&format=jpg&optimize=medium",
      webp: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:cdf844ba-b822-4c7d-9a3e-e66b796d7067/as/FNP-Trousers-2x3-3-CE-Women-wk17.jpg?width=750&format=webply&optimize=medium"
    },
    {
      title: "ACCESSORIES",
      link: "https://eg.hm.com/en/shop-women/shop-product/accessories",
      image: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:fd93478f-bdbd-44cc-b96c-814a91dde01d/as/FNP-Accessories-2x3-4-CE-Women-wk17.jpg?width=750&format=jpg&optimize=medium",
      webp: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:fd93478f-bdbd-44cc-b96c-814a91dde01d/as/FNP-Accessories-2x3-4-CE-Women-wk17.jpg?width=750&format=webply&optimize=medium"
    }
  ];

  return (
    <div className="selected-collections-wrapper">
      <Container fluid className="px-0 SelectedCollections">
        <div className="selected-collections-header">
          <h5 style={{textAlign:'center'}}><strong>SELECTED COLLECTIONS</strong></h5>
        </div>
        
        <div className="selected-collections-grid">
          <Row className="gx-0">
            {collections.map((collection, index) => (
              <Col key={index} xs={12} md={6} className="selected-collection-item">
                <a href={collection.link} className="collection-link">
                  <div className="collection-image">
                    <picture>
                      <source srcSet={collection.webp} type="image/webp" />
                      <img 
                        loading="lazy" 
                        alt={collection.title} 
                        src={collection.image} 
                        className="img-fluid"
                      />
                    </picture>
                  </div>
                  <div className="collection-info">
                    <h4>{collection.title}</h4>
                    <h3>
                      <a href={collection.link} title="EXPLORE">EXPLORE</a>
                    </h3>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SelectedCollections;