// src/components/FilterBar/FilterBar.jsx
import React, { useState } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { 
  sortingOptions,
  priceRanges,
  sizes,
  colors,
  productTypes
} from '../../Core/FilterBar';
import './ProductStyle/FilterBar.css';

const FilterBar = () => {
  const [activeView, setActiveView] = useState('three-column');

  return (
    <Nav className="filter-bar">
      {/* Sort by dropdown */}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-sort" className="filter-dropdown-toggle">
          Sort by
        </Dropdown.Toggle>
        <Dropdown.Menu className="filter-dropdown-menu">
          {sortingOptions.map((option, index) => (
            <Dropdown.Item 
              key={option.value} 
              eventKey={option.value}
              className={`filter-dropdown-item ${index === 0 ? 'filter-dropdown-item-recommended' : ''}`}
            >
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Price dropdown */}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-price" className="filter-dropdown-toggle">
          Price
        </Dropdown.Toggle>
        <Dropdown.Menu className="filter-dropdown-menu">
          {priceRanges.map((range) => (
            <Dropdown.Item 
              key={range.value} 
              eventKey={range.value}
              className="filter-dropdown-item"
            >
              {range.label}
              <span className="filter-count">({range.count})</span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Size dropdown */}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-size" className="filter-dropdown-toggle">
          Size
        </Dropdown.Toggle>
        <Dropdown.Menu className="filter-dropdown-menu">
          {sizes.map((size) => (
            <Dropdown.Item 
              key={size.value} 
              eventKey={size.value}
              className="filter-dropdown-item"
            >
              {size.label}
              <span className="filter-count">({size.count})</span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Color dropdown */}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-color" className="filter-dropdown-toggle">
          Colour
        </Dropdown.Toggle>
        <Dropdown.Menu className="filter-dropdown-menu">
          {colors.map((color) => (
            <Dropdown.Item 
              key={color.value} 
              eventKey={color.value}
              className="filter-dropdown-item"
              style={{ textTransform: 'capitalize' }}
            >
              {color.color && (
                <span 
                  className="color-swatch"
                  style={{ '--color': color.color }}
                ></span>
              )}
              {color.label}
              <span className="filter-count">({color.count})</span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Product Type dropdown */}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-product-type" className="filter-dropdown-toggle">
          Product Type
        </Dropdown.Toggle>
        <Dropdown.Menu className="filter-dropdown-menu">
          {productTypes.map((type) => (
            <Dropdown.Item 
              key={type.value} 
              eventKey={type.value}
              className="filter-dropdown-item"
            >
              {type.label}
              <span className="filter-count">({type.count})</span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* All filters link */}
      <Nav.Link className="all-filters-link">
        All filters
      </Nav.Link>

      {/* Item count and view options */}
      <div className="d-flex align-items-center">
        <div>
          <p className="mb-0 item-count">55 items</p>
        </div>
        <div className="d-flex ms-2">
          <button 
            onClick={() => setActiveView('three-column')} 
            className={`view-toggle ${activeView === 'three-column' ? 'active' : ''}`}
          >
            <img 
              src="https://eg.hm.com/icons/three-column-grid-primary.svg" 
              alt="Three column view" 
            />
          </button>
          <button 
            onClick={() => setActiveView('four-column')} 
            className={`view-toggle ${activeView === 'four-column' ? 'active' : ''}`}
          >
            <img 
              src="https://eg.hm.com/icons/four-column-grid-secondary.svg" 
              alt="Four column view" 
            />
          </button>
        </div>
      </div>
    </Nav>
  );
};

export default FilterBar;