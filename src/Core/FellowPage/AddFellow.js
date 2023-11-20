import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { useHistory } from "react-router";
import axios from "axios";
import "../Blogs Pages/Blogs.css";

const AddFellow = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    paragraph11: "",
    paragraph12: "",
    link: "",
    imagePath: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    paragraph1: "",
    paragraph2: "",
    link: "",
    imagePath: "",
  });

  const validationFormErrors = () => {
    let errors = {};

    if (formData.paragraph1.trim() === "") {
      errors.paragraph1 = "This field is required";
    }
    if (formData.paragraph2.trim() === "") {
      errors.paragraph2 = "This field is required";
    }
    if (formData.link.trim() === "") {
      errors.link = "This field is required";
    }
    if (formData.imagePath.trim() === "") {
      errors.imagePath = "This field is required";
    }

    return errors;
  };

  function handleChange(event) {
    const { name, value } = event.target;
    console.log("name value: ", name, value);
    if (name === "imagePath") {
      const file = event.target.files[0];
      console.log("file: ", file);
      const allowedFileTypes = ["image/jpeg", "image/png", "image/gif"];

      if (file && allowedFileTypes.includes(file.type)) {
        setFormData({
          ...formData,
          [name]: file,
        });
      } else {
        setValidationErrors((prev) => ({
          ...prev,
          [name]:
            "Invalid file type. Only JPEG, PNG, and GIF files are allowed.",
        }));
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    setValidationErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form data: ", formData);
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("paragraph1", formData.paragraph1);
      formDataToSend.append("paragraph2", formData.paragraph2);
      formDataToSend.append("link", formData.link);
      formDataToSend.append("imagePath", formData.imagePath);

      axios
        .post(
          `${process.env.REACT_APP_BACKEND}/fellow/createFellow`,
          formDataToSend
        )
        .then((response) => {
          console.log("response: ", response);
          setFormData({
            paragraph1: "",
            paragraph2: "",
            link: "",
            imagePath: "",
          });
          history.push("/fellowPage");
        })
        .catch((error) => {
          console.log("Error: " + error.message);
        });
    } catch (err) {
      console.log("Error: " + err.message);
    }
  }

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="add-category-content" lg={10}>
          <h4>Add Fellow</h4>
          <p>
            Please fill the fellow details in the form below to add a new
            fellow.
          </p>
          <Card className="add-product-form-card">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col lg="6">
                  <div className="add-product-input-div">
                    <p>First Paragraph</p>
                    <textarea
                      rows="12"
                      cols="12"
                      name="paragraph1"
                      value={formData.paragraph1}
                      onChange={handleChange}
                    />
                    {validationFormErrors.paragraph1 && (
                      <p style={{ color: "red" }}>
                        {validationFormErrors.paragraph1}
                      </p>
                    )}
                  </div>
                </Col>
                <Col lg="6">
                  <div className="add-product-input-div">
                    <p>Second Paragraph</p>
                    <textarea
                      rows="12"
                      cols="12"
                      name="paragraph2"
                      value={formData.paragraph2}
                      onChange={handleChange}
                    />
                    {validationFormErrors.paragraph2 && (
                      <p style={{ color: "red" }}>
                        {validationFormErrors.paragraph2}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Link</p>
                    <input
                      type="text"
                      name="link"
                      value={formData.link}
                      onChange={handleChange}
                    />
                    {validationFormErrors.link && (
                      <p style={{ color: "red" }}>
                        {validationFormErrors.link}
                      </p>
                    )}
                  </div>
                </Col>

                <Col>
                  <div className="add-product-image-div">
                    <div className="product-image-div">
                      <input
                        type="file"
                        name="imagePath"
                        onChange={handleChange}
                      />
                      {validationFormErrors.imagePath && (
                        <p style={{ color: "red" }}>
                          {validationFormErrors.imagePath}
                        </p>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>

              <button type="submit" className="add-category-btn">
                Add Fellow
              </button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddFellow;
