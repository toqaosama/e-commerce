// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatCard from './StatCard';
import { 
  FiUsers, FiDollarSign, FiShoppingCart, FiTrendingUp 
} from 'react-icons/fi';
import './style/DashboardPage.css';

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Users",
      value: "2,543",
      change: "12% increase from last month",
      icon: <FiUsers size={20} />
    },
    {
      title: "Revenue",
      value: "$45,234",
      change: "8.2% increase from last month",
      icon: <FiDollarSign size={20} />
    },
    {
      title: "Orders",
      value: "1,234",
      change: "5% increase from last month",
      icon: <FiShoppingCart size={20} />
    },
    {
      title: "Growth",
      value: "+23%",
      change: "Compared to last quarter",
      icon: <FiTrendingUp size={20} />
    }
  ];

  return (
    <Container fluid>
      <div className="page-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back to your admin dashboard</p>
      </div>
      
      <Row className="g-4">
        {stats.map((stat, index) => (
          <Col key={index} xs={12} md={6} lg={3}>
            <StatCard {...stat} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DashboardPage;