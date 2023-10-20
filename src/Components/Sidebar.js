import React from "react";
import {
  RiDashboardLine,
  RiShoppingCart2Line,
  RiUser3Line,
  RiAddFill,
  RiFileList3Line,
} from "react-icons/ri";

import { HiOutlineHome } from "react-icons/hi";
import { PiStudentLight } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosLaptop } from "react-icons/io";

import logo from "../Assets/logo.png";
import "./Sidebar.css";
import { Link, useHistory } from "react-router-dom";

function Sidebar() {
  const history = useHistory();

  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="sidebar-parent-div">
      <div className="sidebar-content-div">
        <div className="sidebar-logo-div">
          <h4>PECUNIA</h4>
        </div>
        <div className="sidebar-links-div">
          <Link to="/" className="sidebar-link">
            <div
              className={`sidebar-item ${isActive(history, "/") && "active"}`}
            >
              <RiDashboardLine className="sidebar-icon" />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/blogs" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/blogs") && "active"
              }`}
            >
              <RiFileList3Line className="sidebar-icon" />
              <p>Blogs</p>
            </div>
          </Link>
          <Link to="/blog/add" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/blog/add") && "active"
              }`}
            >
              <RiAddFill className="sidebar-icon" />
              <p>Add Blogs</p>
            </div>
          </Link>
          <Link to="/fellows" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/fellows") && "active"
              }`}
            >
              <IoIosLaptop className="sidebar-icon" />
              <p>Fellows</p>
            </div>
          </Link>
          <Link to="/fellow/add" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/fellow/add") && "active"
              }`}
            >
              <RiAddFill className="sidebar-icon" />
              <p>Add Fellow</p>
            </div>
          </Link>
          <Link to="/categories" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/categories") && "active"
              }`}
            >
              <IoIosLaptop className="sidebar-icon" />
              <p>Categories</p>
            </div>
          </Link>
          <Link to="/category/add" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/category/add") && "active"
              }`}
            >
              <RiAddFill className="sidebar-icon" />
              <p>Add Categories</p>
            </div>
          </Link>
          <Link to="/paymentMethods" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/paymentMethods") && "active"
              }`}
            >
              <RiFileList3Line className="sidebar-icon" />
              <p>Payment</p>
            </div>
          </Link>

          {/* <Link to='/stripeKey/add' className='sidebar-link'>
            <div
              className={`sidebar-item ${
                isActive(history, '/stripeKey/add') && 'active'
              }`}
            >
              <RiFileList3Line className='sidebar-icon' />
              <p>Add Stripe Keys</p>
            </div>
          </Link> */}

          {/* <Link to="/Home" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/Home") && "active"
              }`}
            >
              <HiOutlineHome className="sidebar-icon" />
              <p>Home</p>
            </div>
          </Link> */}

          <Link to="/student" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/student") && "active"
              }`}
            >
              <PiStudentLight className="sidebar-icon" />
              <p>Student</p>
            </div>
          </Link>
          {/** Home Page */}
          <Link to="/home" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/home") && "active"
              }`}
            >
              <AiOutlineHome className="sidebar-icon" />
              <p>Home</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
