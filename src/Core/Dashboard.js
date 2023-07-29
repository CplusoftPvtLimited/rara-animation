// import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
// import Sidebar from '../Components/Sidebar';
// import { RiUser3Line } from 'react-icons/ri';
// import './Dashboard.css';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import {
  RiShoppingCart2Line,
  RiUser3Line,
  RiFeedbackLine,
} from 'react-icons/ri';
import { IoIosLaptop } from 'react-icons/io';
import { FaDollarSign } from 'react-icons/fa';
import { BsViewList } from 'react-icons/bs';
import { FaLaptopMedical } from 'react-icons/fa';
import ReactLoading from 'react-loading';

import './Dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  return (
    <div className='dashboard-parent-div'>
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className='dashboard-home-content' lg={10}>
          <h4>Dashboard</h4>
          <p>Here's an overview of your RARA.</p>
          <Row>
            <Col>
              <Card className='dashboard-card'>
                <RiUser3Line className='card-icon' />
                <h4>Our Blogs</h4>
                <p> Created Blogs</p>
              </Card>
            </Col>
            <Col>
              <Card className='dashboard-card'>
                <RiUser3Line className='card-icon' />
                <h4>Our Regions</h4>
                <p> Created Regions</p>
              </Card>
            </Col>
            <Col>
              <Card className='dashboard-card'>
                <RiUser3Line className='card-icon' />
                <h4>Our Fellow</h4>
                <p> Created Fellow</p>
              </Card>
            </Col>
            <Col>
              <Card className='dashboard-card'>
                <RiUser3Line className='card-icon' />
                <h4>Our Category</h4>
                <p> Created Category</p>
              </Card>
            </Col>
          </Row>

          <h4>Quick Links</h4>
          <Row>
            <Col>
              <Card className='dashboard-action-card'>
                <IoIosLaptop className='action-icon' />
                <h4>All Blogs</h4>
                <p>
                  <Link to='/products'>Click here</Link> to view, remove or edit
                  blogs
                </p>
              </Card>
            </Col>
            <Col>
              <Card className='dashboard-action-card'>
                <FaLaptopMedical className='action-icon' />
                <h4>Add Blogs</h4>
                <p>
                  <Link to='/products/add'>Click here</Link> to add new blogs
                </p>
              </Card>
            </Col>

            <Col>
              <Card className='dashboard-action-card'>
                <BsViewList className='action-icon' />
                <h4>All Fellows</h4>
                <p>
                  <Link to='/categories'>Click here</Link> to add, remove or
                  edit fellows
                </p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Card className='dashboard-action-card'>
                <RiShoppingCart2Line className='action-icon' />
                <h4>Add Fellows</h4>
                <p>
                  <Link to='/'>Click here</Link> to view, remove or edit fellows
                </p>
              </Card>
            </Col>
            <Col>
              <Card className='dashboard-action-card'>
                <BsViewList className='action-icon' />
                <h4> Categories</h4>
                <p>
                  <Link to='/categories'>Click here</Link> to add, remove or
                  edit categories
                </p>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className='dashboard-action-card'>
                <RiUser3Line className='action-icon' />
                <h4>Add Categories</h4>
                <p>
                  <Link to='/'>Click here</Link> to view, remove or edit
                  categories
                </p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
