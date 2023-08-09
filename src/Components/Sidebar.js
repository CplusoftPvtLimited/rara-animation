import React from 'react';
import {
  RiDashboardLine,
  RiShoppingCart2Line,
  RiUser3Line,
  RiAddFill,
  RiFileList3Line,
} from 'react-icons/ri';

import { IoIosLaptop } from 'react-icons/io';

import logo from '../Assets/logo.png';
import './Sidebar.css';
import { Link, useHistory } from 'react-router-dom';

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
    <div className='sidebar-parent-div'>
      <div className='sidebar-content-div'>
        <div className='sidebar-logo-div'>
          <h4>RARA</h4>
        </div>
        <div className='sidebar-links-div'>
          <Link to='/' className='sidebar-link'>
            <div
              className={`sidebar-item ${isActive(history, '/') && 'active'}`}
            >
              <RiDashboardLine className='sidebar-icon' />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to='/blogs' className='sidebar-link'>
            <div
              className={`sidebar-item ${
                isActive(history, '/blogs') && 'active'
              }`}
            >
              <RiFileList3Line className='sidebar-icon' />
              <p>Blogs</p>
            </div>
          </Link>
          <Link to='/blog/add' className='sidebar-link'>
            <div
              className={`sidebar-item ${
                isActive(history, '/blog/add') && 'active'
              }`}
            >
              <RiAddFill className='sidebar-icon' />
              <p>Add Blogs</p>
            </div>
          </Link>
          <Link to='/fellows' className='sidebar-link'>
            <div
              className={`sidebar-item ${
                isActive(history, '/fellows') && 'active'
              }`}
            >
              <IoIosLaptop className='sidebar-icon' />
              <p>Fellows</p>
            </div>
          </Link>
          <Link to='/fellow/add' className='sidebar-link'>
            <div
              className={`sidebar-item ${
                isActive(history, '/fellow/add') && 'active'
              }`}
            >
              <RiAddFill className='sidebar-icon' />
              <p>Add Fellow</p>
            </div>
          </Link>
          <Link to='/categories' className='sidebar-link'>
            <div
              className={`sidebar-item ${
                isActive(history, '/categories') && 'active'
              }`}
            >
              <IoIosLaptop className='sidebar-icon' />
              <p>Categories</p>
            </div>
          </Link>
          <Link to='/category/add' className='sidebar-link'>
            <div
              className={`sidebar-item ${
                isActive(history, '/category/add') && 'active'
              }`}
            >
              <RiAddFill className='sidebar-icon' />
              <p>Add Categories</p>
            </div>
          </Link>


          <Link to='/Home' className='sidebar-link'>
            <div
              className={`sidebar-item ${
                isActive(history, '/Home') && 'active'
              }`}
            >
              <p>Home</p>
            </div>
          </Link>


        </div>
      </div>
    </div>
  );
}

export default Sidebar;
