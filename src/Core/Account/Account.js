import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";
import "../Blogs Pages/AddBlog.css";

const Accounts = () => {
  const [account, setAccount] = useState([]);

  useEffect(() => {
    getAdminAccount();
  }, []);

  const getAdminAccount = () => {
    setAccount([]);
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/auth/adminAccount`,
    })
      .then((response) => {
        setAccount(response.data.admin);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  const editAdminAccount = (event) => {
    event.preventDefault();
    const updatedData = new FormData();
    updatedData.append("password", account.password);
    updatedData.append("userId", account.id);

    try {
      axios
        .put(
          `${process.env.REACT_APP_BACKEND}/auth/changeAdminPassword`,
          account
        )
        .then((response) => {
          console.log("updated Data: ", response);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    } catch (err) {
      console.log("Error: " + err.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Row>
          <Col
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Topbar />
          </Col>
        </Row>
        <Col lg={2}>
          <Sidebar />
        </Col>

        <Col className="add-category-content" lg={10}>
          <h4>Admin Details</h4>
          <p>Here are the admin details</p>
          <Card className="add-product-form-card">
            <Form
            // onSubmit={handleSubmit}
            >
              <Row>
                <Col sm={6}>
                  <div className="add-product-input-div">
                    <p>Email</p>
                    <input
                      type="text"
                      name="email"
                      value={account?.email}
                      onChange={handleChange}
                      disabled
                    />
                    {/* {validationErrors.title && (
                      <p style={{ color: "red" }}>{validationErrors.title}</p>
                    )} */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <div className="add-product-input-div">
                    <p>Password</p>
                    <input
                      type="text"
                      name="password"
                      value={account?.password}
                      onChange={handleChange}
                    />
                    {/* {validationErrors.content && (
                      <p style={{ color: "red" }}>{validationErrors.content}</p>
                    )} */}
                  </div>
                </Col>
              </Row>

              <button
                type="submit"
                className="add-category-btn"
                onClick={editAdminAccount}
              >
                Update Admin
              </button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Accounts;
