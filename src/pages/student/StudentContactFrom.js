import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAmount } from "../../store/donationSlice";
import "../sponsership/sponsorship.css";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Dropdown,
  Card,
} from "react-bootstrap";

const StudentContactFrom = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [resetFileInputsKey, setResetFileInputsKey] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    school: "",
    focusArea: "",
    referenceLetter: null,
    resume: null,
    statement: null,
  });

  const [fileNames, setFileNames] = useState({
    referenceLetter: "",
    resume: "",
    statement: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    school: "",
    // focusArea: "",
    referenceLetter: "",
    resume: "",
    statement: "",
  });

  const handleDropdownSelect = (eventKey) => {
    handleChange({ name: "focusArea", value: eventKey });
    setSelectedOption(eventKey);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target || e;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });

      setFileNames({
        ...fileNames,
        [name]: files[0].name,
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        focusArea: name === "focusArea" ? value : prevFormData.focusArea,
      }));
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const formDataForUpload = new FormData();
      formDataForUpload.append("firstName", formData.firstName);
      formDataForUpload.append("lastName", formData.lastName);
      formDataForUpload.append("phoneNumber", formData.phoneNumber);
      formDataForUpload.append("email", formData.email);
      formDataForUpload.append("school", formData.school);
      formDataForUpload.append("focusArea", selectedOption);
      formDataForUpload.append("referenceLetter", formData.referenceLetter);
      formDataForUpload.append("resume", formData.resume);
      formDataForUpload.append("statement", formData.statement);
      console.log("formData: ", formData);

      axios
        .post(
          `${process.env.REACT_APP_SERVER}/contact/createContact`,
          formDataForUpload,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log("response response: ", response);

          setFormData({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            school: "",
            focusArea: "",
            referenceLetter: null,
            resume: null,
            statement: null,
          });

          setResetFileInputsKey((prevKey) => prevKey + 1);
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

    if (formData.firstName.trim() === "") {
      errors.firstName = "This field is required";
    }
    if (formData.lastName.trim() === "") {
      errors.lastName = "This field is required";
    }
    if (formData.phoneNumber.trim() === "") {
      errors.phoneNumber = "This field is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "This field is required";
    }
    if (formData.school.trim() === "") {
      errors.school = "This field is required";
    }

    // Check if a file is selected for referenceLetter
    if (!formData.referenceLetter) {
      errors.referenceLetter = "This field is required";
    }

    // Check if a file is selected for resume
    if (!formData.resume) {
      errors.resume = "This field is required";
    }

    // Check if a file is selected for statement
    if (!formData.statement) {
      errors.statement = "This field is required";
    }

    return errors;
  };

  return (
    <div>
      <div className="dashboard-parent-div">
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Col className="add-category-content" lg={12}>
            <Card
              className="add-product-form-card"
              style={{ backgroundColor: "none" }}
            >
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>First Name</p>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {validationErrors.firstName && (
                        <p style={{ color: "red" }}>
                          {validationErrors.firstName}
                        </p>
                      )}
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Last Name</p>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {validationErrors.lastName && (
                        <p style={{ color: "red" }}>
                          {validationErrors.lastName}
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Phone Number</p>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                      {validationErrors.phoneNumber && (
                        <p style={{ color: "red" }}>
                          {validationErrors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </Col>
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
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>School</p>
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                      />
                      {validationErrors.school && (
                        <p style={{ color: "red" }}>
                          {validationErrors.school}
                        </p>
                      )}
                    </div>
                  </Col>

                  <Col>
                    <div className="add-product-input-div">
                      <Dropdown onSelect={handleDropdownSelect}>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          {selectedOption || "Focus Area of Interest"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="BehaviouralEconomics">
                            Behavioural Economics
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="InclusiveFinancialSystems">
                            Inclusive Financial Systems
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="EthicalBanking">
                            Ethical Banking
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="SustainableDevelopmentFinance">
                            Sustainable Development Finance
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Upload Reference Letter</p>
                      <input
                        type="file"
                        name="referenceLetter"
                        key={resetFileInputsKey}
                        onChange={handleChange}
                      />
                      {validationErrors.referenceLetter && (
                        <p style={{ color: "red" }}>
                          {validationErrors.referenceLetter}
                        </p>
                      )}
                    </div>
                  </Col>

                  <Col>
                    <div className="add-product-input-div">
                      <p>Upload Resume</p>
                      <input
                        type="file"
                        name="resume"
                        key={resetFileInputsKey}
                        onChange={handleChange}
                      />
                      {validationErrors.resume && (
                        <p style={{ color: "red" }}>
                          {validationErrors.resume}
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Upload statement</p>
                      <input
                        type="file"
                        name="statement"
                        key={resetFileInputsKey}
                        onChange={handleChange}
                      />
                      {validationErrors.statement && (
                        <p style={{ color: "red" }}>
                          {validationErrors.statement}
                        </p>
                      )}
                    </div>
                  </Col>
                  <Col></Col>
                </Row>

                <button type="submit" className="add-category-btn">
                  Submit
                </button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentContactFrom;
