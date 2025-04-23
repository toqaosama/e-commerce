import './style/ProductManage.css';
import React from 'react';
import { Container, Row, Col, Form, Button, Table, Badge } from 'react-bootstrap';
import { Search, Plus, Tag, Pencil, Trash2 } from 'react-bootstrap-icons';
import Sidebar from "./Sidebar"
import {products} from "../../Core/productmangedata"


const Products = () => {


  return (
    
    <Container fluid className="products-container">
      
      <Row className="mb-4">
        <Col>
          <h1 className="page-title">Product Management</h1>
          <p className="page-subtitle">Manage your store products</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <div className="search-container">
            <Search className="search-icon" />
            <Form.Control 
              type="text" 
              placeholder="Search products..." 
              className="search-input"
            />
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-md-end">
          <Button variant="dark" className="add-product-btn">
            <Plus className="me-2" /> Add Product
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="table-container">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th className="image-column">Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Created</th>
                  <th className="actions-column">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>
                      <div className="product-image-container icon">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="product-image"
                        />
                      </div>
                    </td>
                    <td className="product-name">{product.name}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Tag className="me-2 category-icon" />
                        {product.category}
                      </div>
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <Badge bg="success" className="stock-badge">
                        {product.stock} in stock
                      </Badge>
                    </td>
                    <td>{product.created}</td>
                    <td className="text-end">
                      <div className="d-flex justify-content-end">
                        <Button variant="link" className="action-btn">
                          <Pencil className="text-primary" />
                        </Button>
                        <Button variant="link" className="action-btn">
                          <Trash2 className="text-danger" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;