import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import ReactLoading from "react-loading";
import "../Blogs Pages/Blogs.css";

const DonationDetails = (props) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const donationId = props.match.params.categoryId;

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    setPost();
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/donation/post/${donationId}`,
    })
      .then((response) => {
        setPost(response?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
              <h4>Our Donations</h4>
              <p>Below are the Donation details.</p>
            </Col>
          </Row>
          <hr />

          <Row className="categories-row">
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  minHeight: "200px",
                }}
              >
                <ReactLoading type="spokes" color="#2D46B9" />
              </div>
            ) : (
              <div>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Email</p>
                      <input type="text" name="email" value={post?.email} />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Organization Name</p>
                      <input
                        type="text"
                        name="organizationName"
                        value={post?.organizationName}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Contact</p>
                      <input type="text" name="contact" value={post?.contact} />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Number</p>
                      <input type="text" name="number" value={post?.number} />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Area of Support</p>
                      <input
                        type="text"
                        name="areaOfSupport"
                        value={post?.areaOfSupport}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Donation Type</p>
                      <input
                        type="text"
                        name="number"
                        value={post?.donationType}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Donation</p>
                      <input
                        type="text"
                        name="donation"
                        value={post?.donation}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Messages</p>
                      <input type="text" name="message" value={post?.message} />
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DonationDetails;
