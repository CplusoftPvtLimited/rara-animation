import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";
import "../Blogs Pages/AddBlog.css";

const Accounts = () => {
  const [account, setAccount] = useState([]);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

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
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError("Please fill in all the fields.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("New Password and Confirm New Password must match.");
      return;
    }

    if (currentPassword !== account.password) {
      setError("Current password is incorrect.");
      return;
    }

    const updatedData = {
      userId: account.id,
      password: newPassword,
    };

    try {
      axios
        .put(
          `${process.env.REACT_APP_BACKEND}/auth/changeAdminPassword`,
          updatedData
        )
        .then((response) => {
          setSuccessMessage("Password successfully updated!");
          clearMessages();
        })
        .catch((err) => {
          console.log("err: ", err);
          setError("Error updating password. Please try again.");
        });
    } catch (err) {
      console.log("Error: " + err.message);
      setError("Error updating password. Please try again.");
    }
  };

  const clearMessages = () => {
    setTimeout(() => {
      setNewPassword("");
      setConfirmNewPassword("");
      setCurrentPassword("");
      setSuccessMessage("");
    }, 3000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "currentPassword") {
      setCurrentPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmNewPassword") {
      setConfirmNewPassword(value);
    }
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
            <Form>
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
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <div className="add-product-input-div">
                    <p>Current Password</p>

                    <input
                      type="password"
                      name="currentPassword"
                      value={currentPassword}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <div className="add-product-input-div">
                    <p>New Password</p>
                    <input
                      type="password"
                      name="newPassword"
                      value={newPassword}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <div className="add-product-input-div">
                    <p>Confirm New Password</p>
                    <input
                      type="password"
                      name="confirmNewPassword"
                      value={confirmNewPassword}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {successMessage && (
                <p style={{ color: "green" }}>{successMessage}</p>
              )}

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
