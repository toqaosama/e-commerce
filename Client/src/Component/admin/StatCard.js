import React from 'react';
import { Card } from 'react-bootstrap';
import './style/StatCard.css';

const StatCard = ({ title, value, change, icon }) => {
  return (
    <Card className="stat-card">
      <Card.Body>
        <div className="card-header">
          <Card.Title className="card-title">{title}</Card.Title>
          <div className="card-icon">{icon}</div>
        </div>
        <div className="card-content">
          <Card.Text className="card-value">{value}</Card.Text>
          <Card.Text className="card-change">{change}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatCard;