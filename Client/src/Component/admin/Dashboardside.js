import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './style/SidebarLayout.css'; // Custom styling for layout
import HomeIcon from "../../Assetes/icon/home.png"
import UserAccont from "../../Assetes/icon/user.png"
import Settings from "../../Assetes/icon/settings.png"
import LogOut from "../../Assetes/icon/log-out.png"
import TurnOff from "../../Assetes/icon/turn-off.png"
import Development from "../../Assetes/icon/development.gif"
import World from "../../Assetes/icon/world.gif"



function SidebarLayout() {
  return (
    <div className="d-flex">
      <div className="sidebar bg-light p-3">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
          <Link to="/" className="BrandName">
            <img
              alt=""
            //   src={HomeIcon}
              width="30"
              height="30"
              marginLeft="20px"
              className="d-inline-block align-top"
            />{' '}
            Adiman Dashboard
            </Link>
          </Navbar.Brand>
          
        </Container>
      </Navbar>
        
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
            <img
              alt=""
              src={HomeIcon}
              width="30"
              height="30"
              marginLeft="20px"
              className="d-inline-block align-top"
            />Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
            <img
              alt=""
              src={UserAccont}
              width="30"
              height="30"
              marginLeft="20px"
              className="d-inline-block align-top"
            />
            Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
            <img
              alt=""
              src={Settings}
              width="30"
              height="30"
              marginLeft="20px"
              className="d-inline-block align-top"
            />
            Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
            <img
              alt=""
              src={TurnOff}
              width="30"
              height="30"
              marginLeft="20px"
              className="d-inline-block align-top"
            />
            Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
            <img
              alt=""
              src={Development}
              width="30"
              height="30"
              marginLeft="20px"
              className="d-inline-block align-top"
            />
            Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
            <img
              alt=""
              src={World}
              width="30"
              height="30"
              marginLeft="20px"
              className="d-inline-block align-top"
            />
            Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
            <img
              alt=""
              src={LogOut}
              width="30"
              height="30"
              marginLeft="20px"
              className="d-inline-block align-top"
            />
            Home</Link>
          </li>
        </ul>
        
      </div>

      <div className="content p-4 flex-grow-1">
        <Outlet /> {/* Where routed page content will be rendered */}
      </div>
    </div>
  );
}

export default SidebarLayout;
