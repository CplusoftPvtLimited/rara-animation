import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import { RiUser3Line } from 'react-icons/ri';
import './Dashboard.css';

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
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
