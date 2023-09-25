import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { RiDeleteBin3Line, RiAddFill, RiEditLine } from "react-icons/ri";
import image from "../../Assets/khan.jpeg";
import "../Blogs Pages/Blogs.css";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    setCategories([]);
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/category`,
    })
      .then((response) => {
        console.log("response: ", response.data);
        setCategories(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  const deleteCategory = (categoryId) => {
    console.log("deleteCategory", categoryId);
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND}/category/${categoryId}`,
    }).then((response) => {
      console.log(response);
      getCategories();
    });
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="categories-content" lg={10}>
          <Row>
            <Col lg={10}>
              <h4>Our Categories</h4>
              <p>Below are the Categories that currently added.</p>
            </Col>
            <Col className="add-cat-col" lg={2}>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    <div className="add-cat-overlay">Add new Category.</div>
                  </Tooltip>
                }
              >
                <Link to="/category/add">
                  <div>
                    <RiAddFill className="add-cat-btn" />
                  </div>
                </Link>
              </OverlayTrigger>
            </Col>
          </Row>
          <hr />

          <Row className="categories-row">
            {/* {loading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  minHeight: '200px',
                }}
              >
                <ReactLoading type='spokes' color='#2D46B9' />
              </div>
            ) : ( */}
            <Col lg={12}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{category.title}</td>

                        <td>
                          <Link to={`/category/${category.id}`}>
                            <RiEditLine className="category-product-card-icon" />
                          </Link>

                          <RiDeleteBin3Line
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCategory(category.id);
                            }}
                            className="view-prod-btn"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
