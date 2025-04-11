// src/components/FilterHeader/FilterHeader.jsx
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { filterHeaderItems } from '../../Core/filterHeaderItems ';
import './style/FilterHeader.css'


const FilterHeader = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
    setShowOverlay(activeMenu !== index);
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setShowOverlay(false);
  };

  return (
    <div className="filter-header-container">
      {filterHeaderItems.map((item, index) => (
        <div 
          key={item.name} 
          className="filter-header-item"
          data-gtm-name={item.name}
        >
          <Nav.Link
            href={item.link}
            className="filter-header-link"
            data-level="3"
            onClick={(e) => {
              e.preventDefault();
              handleMenuToggle(index);
            }}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </Nav.Link>

          {activeMenu === index && item.subItems && (
            <div className="filter-submenu">
              {item.subItems.map((subItem) => (
                <div 
                  key={subItem.name} 
                  className="filter-submenu-item"
                  data-gtm-name={subItem.name}
                >
                  <Nav.Link 
                    href={subItem.link} 
                    className="filter-submenu-link"
                    data-level="4"
                  >
                    <span>{subItem.name}</span>
                  </Nav.Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {showOverlay && (
        <div className="filter-overlay" onClick={closeMenu} />
      )}
    </div>
  );
};

export default FilterHeader;