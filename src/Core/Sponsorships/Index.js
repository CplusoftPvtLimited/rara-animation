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

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setPosts([]);
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/sponsor/posts`,
    })
      .then((response) => {
        console.log("response: ", response.data);
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  const deletePost = (postId) => {
    console.log("postId", postId);
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND}/sponsor/post/${postId}`,
    }).then((response) => {
      console.log(response);
      getPosts();
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
              <h4>Our Sponsorships</h4>
              <p>Below are the Sponsorships details.</p>
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
                    <th>Email</th>
                    <th>Donation</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{post.email}</td>
                        <td>{post.donation}</td>
                        <td>
                          <Link to={`/sponsor/${post.id}`}>
                            <RiEditLine className="category-product-card-icon" />
                          </Link>

                          <RiDeleteBin3Line
                            onClick={(event) => {
                              event.preventDefault();
                              deletePost(post.id);
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

export default Index;
