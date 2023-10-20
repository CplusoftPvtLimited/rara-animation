// import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
// import Sidebar from '../Components/Sidebar';
// import { RiUser3Line } from 'react-icons/ri';
// import './Dashboard.css';
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Sidebar from "../Components/Sidebar";
import {
  RiShoppingCart2Line,
  RiUser3Line,
  RiFeedbackLine,
} from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { BsViewList } from "react-icons/bs";
import { FaLaptopMedical } from "react-icons/fa";
import ReactLoading from "react-loading";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();
  const [fellow, setFellows] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs();
    getFellow();
    getCategory();
  }, []);

  const getBlogs = () => {
    setBlogs();
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND}/blog/getAllBlogPosts`)
      .then((response) => {
        console.log("setBlogs: ", response.data.blogPosts.length);
        setBlogs(response?.data?.blogPosts?.length);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFellow = () => {
    setFellows();
    setLoading(true);
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/profile/getAllProfiles`,
    })
      .then((response) => {
        console.log("setFellows: ", response);
        setFellows(response?.data?.profiles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCategory = () => {
    setCategories();
    setLoading(true);
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/category`,
    }).then((response) => {
      console.log("setCategories: ", response);
      setCategories(response?.data);
      setLoading(false);
    });
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>

        <Col className="dashboard-home-content" lg={10}>
          <h4>Dashboard</h4>
          <p>Here's an overview of your RARA.</p>
          <Row>
            <Col>
              {loading ? (
                <ReactLoading
                  type="spokes"
                  color="#2D46B9"
                  height={50}
                  width={50}
                />
              ) : (
                blogs && (
                  <Card className="dashboard-card">
                    <RiUser3Line className="card-icon" />
                    <h4>Our Blogs</h4>
                    <p>{blogs}</p>
                  </Card>
                )
              )}
            </Col>

            <Col>
              <Card className="dashboard-card">
                <RiUser3Line className="card-icon" />
                <h4>Our Regions</h4>
                <p> 8</p>
              </Card>
            </Col>

            <Col>
              {loading ? (
                <ReactLoading
                  type="spokes"
                  color="#2D46B9"
                  height={50}
                  width={50}
                />
              ) : (
                fellow && (
                  <Card className="dashboard-card">
                    <RiUser3Line className="card-icon" />
                    <h4>Our Fellow</h4>
                    <p> {fellow.length}</p>
                  </Card>
                )
              )}
            </Col>

            <Col>
              {loading ? (
                <ReactLoading
                  type="spokes"
                  color="#2D46B9"
                  height={50}
                  width={50}
                />
              ) : (
                categories && (
                  <Card className="dashboard-card">
                    <RiUser3Line className="card-icon" />
                    <h4>Our Category</h4>
                    <p>{categories.length}</p>
                  </Card>
                )
              )}
            </Col>
          </Row>

          <h4>Quick Links</h4>
          <Row>
            <Col>
              <Card className="dashboard-action-card">
                <IoIosLaptop className="action-icon" />
                <h4>All Blogs</h4>
                <p>
                  <Link to="/blogs">Click here</Link> to view, remove or edit
                  blogs
                </p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-action-card">
                <FaLaptopMedical className="action-icon" />
                <h4>Add Blogs</h4>
                <p>
                  <Link to="/blog/add">Click here</Link> to add new blogs
                </p>
              </Card>
            </Col>

            <Col>
              <Card className="dashboard-action-card">
                <BsViewList className="action-icon" />
                <h4>All Fellows</h4>
                <p>
                  <Link to="/fellows">Click here</Link> to add, remove or edit
                  fellows
                </p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Card className="dashboard-action-card">
                <RiShoppingCart2Line className="action-icon" />
                <h4>Add Fellows</h4>
                <p>
                  <Link to="/fellow/add">Click here</Link> to view, remove or
                  edit fellows
                </p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-action-card">
                <BsViewList className="action-icon" />
                <h4> Categories</h4>
                <p>
                  <Link to="/categories">Click here</Link> to add, remove or
                  edit categories
                </p>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="dashboard-action-card">
                <RiUser3Line className="action-icon" />
                <h4>Add Categories</h4>
                <p>
                  <Link to="/category/add">Click here</Link> to view, remove or
                  edit categories
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
