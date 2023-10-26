import React, { useState } from "react";
import axios from "axios";

import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAmount } from "../../store/donationSlice";
import "./sponsorship.css";

const SponserForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    organizationName: "",
    contact: "",
    email: "",
    number: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    organizationName: "",
    contact: "",
    email: "",
    number: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // const handleCheckboxChange = (event) => {
  //   const amount = event.target.checked ? 250000 : null;
  //   dispatch(setAmount(amount));
  // };

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const formDataToSend = new FormData();

      console.log("formData: ", formData);
      formDataToSend.append("organizationName", formData.organizationName);
      formDataToSend.append("contact", formData.contact);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("number", formData.number);
      formDataToSend.append("message", formData.message);
      axios
        .post("http://localhost:4500/api/sponsor/createPost", formData)
        .then((response) => {
          console.log("response response: ", response);
          setFormData({
            organizationName: "",
            contact: "",
            email: "",
            number: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("Error: " + error.message);
        });
    } catch (err) {
      console.log("Error: " + err.message);
    }
  }

  const validateForm = () => {
    let errors = {};

    if (formData.organizationName.trim() === "") {
      errors.organizationName = "This field is required";
    }
    if (formData.contact.trim() === "") {
      errors.contact = "This field is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "This field is required";
    }
    if (formData.number.trim() === "") {
      errors.number = "This field is required";
    }

    return errors;
  };

  return (
    <div className="dashboard-parent-div">
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Col className="add-category-content" lg={10}>
          <Card className="add-product-form-card">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Organization Name</p>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                    />
                    {validationErrors.organizationName && (
                      <p style={{ color: "red" }}>
                        {validationErrors.organizationName}
                      </p>
                    )}
                  </div>
                </Col>
                <Col>
                  <div className="add-product-input-div">
                    <p>Contact Person</p>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                    {validationErrors.contact && (
                      <p style={{ color: "red" }}>{validationErrors.contact}</p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Email</p>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {validationErrors.email && (
                      <p style={{ color: "red" }}>{validationErrors.email}</p>
                    )}
                  </div>
                </Col>
                <Col>
                  <div className="add-product-input-div">
                    <p>Number</p>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                    {validationErrors.number && (
                      <p style={{ color: "red" }}>{validationErrors.number}</p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Message</p>
                    <textarea
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      row="114"
                      cols="24"
                      style={{ width: "100%", height: "150px" }}
                    />
                  </div>
                </Col>
              </Row>

              {/* <button type="submit" className="add-category-btn">
                Post
              </button> */}
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SponserForm;
