import React from 'react';
import OfferSection from './HomeComponent/OfferSection';
import { Container, Row, Col } from 'react-bootstrap';
import InterestedSection from './HomeComponent/IntersetedCardsSection';
import SelectedCollections from './HomeComponent/SelectedCollections';
import ImgSection from './HomeComponent/ImgSection';
import FixedBrandSection from './HomeComponent/FixedBrandSection';

const Home = () => {
  return (
    <Container fluid className="px-0">
      <Row className="no-gutters mx-0">
        <Col className="px-0">
          <FixedBrandSection />
        </Col>
      </Row>
      <Row className="no-gutters mx-0">
        <Col className="px-0">
          <ImgSection />
        </Col>
      </Row>
      <Row className="no-gutters mx-0">
        <Col className="px-0">
          <OfferSection />
        </Col>
      </Row>
      <Row className="no-gutters mx-0">
        <Col className="px-0">
          <SelectedCollections />
        </Col>
      </Row>
      <Row className="no-gutters mx-0">
        <Col className="px-0">
          <InterestedSection />
        </Col>
      </Row>

    </Container>
  );
};

export default Home;