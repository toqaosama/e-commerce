import React from 'react';
import { Container } from 'react-bootstrap';
// import './UsersPage.css';

const UsersPage = () => {
  return (
    <Container fluid>
      <div className="page-header">
        <h1>Users Management</h1>
        <p>Manage your system users</p>
      </div>
      
      {/* Users content goes here */}
    </Container>
  );
};

export default UsersPage;