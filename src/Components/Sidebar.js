import React from "react";
import { PiStudentLight } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosLaptop } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import { RiDashboardLine, RiAddFill, RiFileList3Line } from "react-icons/ri";
import "./Sidebar.css";

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

          {/* account */}
          <Link to="/account" className="sidebar-link">
            <div
              className={`sidebar-item ${
                isActive(history, "/account") && "active"
              }`}
            >
              <RiFileList3Line className="sidebar-icon" />
              <p>Account</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
