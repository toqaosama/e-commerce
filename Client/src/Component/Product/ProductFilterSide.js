// src/components/SideFilterBar/SideFilterBar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';
import { filterCategories } from '../../Core/FilterSideCategore';
import './ProductStyle/ProductFilterSide.css';

const SideFilterBar = () => {
  return (
    <aside className="side-filter-bar">
      <div className="side-filter-container" data-section-status="loaded">
        <div className="side-filter-inner">
          <div className="side-filter-content">
            <Nav className="flex-column w-100 filter-nav">
              {filterCategories.map((category) => (
                <Nav.Item key={category.title} className="filter-nav-item">
                  <Nav.Link 
                    href={category.link}
                    className={`filter-nav-link ${category.color ? 'trending' : ''}`}
                    style={category.color ? { color: category.color } : {}}
                  >
                    {category.title}
                  </Nav.Link>
                  {category.items.length > 0 && (
                    <Nav className="flex-column filter-subnav">
                      {category.items.map((item) => (
                        <Nav.Item key={item.name} className="filter-subnav-item">
                          <Nav.Link href={item.link} className="filter-subnav-link">
                            {item.name}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  )}
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideFilterBar;