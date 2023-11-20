import React, { useState, useEffect, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from "axios";
import Sidebar from "../../Components/Sidebar";
import "../Blogs Pages/Blogs.css";

const EditFellow = (props) => {
  const history = useHistory();
  const fileInputRef = useRef(null);
  const fellowId = props.match.params.fellowId;
  const [fellowData, setFellowData] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(undefined);
  const [validationErrors, setValidationErrors] = useState({
    paragraph1: "",
    paragraph2: "",
    link: "",
    imagePath: "",
  });

  useEffect(() => {
    getFellowPageData();
  }, []);

  const getFellowPageData = () => {
    setFellowData();
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/fellow/${fellowId}`,
    })
      .then((response) => {
        console.log("blogData: ", response);
        setFellowData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateForm = () => {
    let errors = {};

    if (!fellowData.paragraph1 || fellowData.paragraph1.trim() === "") {
      errors.paragraph11 = "This field is required";
    }
    if (!fellowData.paragraph2 || fellowData.paragraph2.trim() === "") {
      errors.paragraph2 = "This field is required";
    }
    if (!fellowData.link || fellowData.link.trim() === "") {
      errors.link = "This field is required";
    }
    if (!fellowData.imagePath) {
      errors.imagePath = "Please select an image";
    }

    return errors;
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    console.log("file: ", files);
    if (name === "imagePath") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      if (files && files.length > 0) {
        reader.readAsDataURL(files[0]);
        setFellowData((prev) => ({
          ...prev,
          imagePath: files[0],
        }));
      }
    } else if (
      name === "paragraph1" ||
      name === "paragraph2" ||
      name === "link"
    ) {
      // setFellowData((prev) => ({ ...prev, [name]: { id: value } }));
      setFellowData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFellowData((prev) => ({ ...prev, [name]: value }));
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    const updatedData = new FormData();
    updatedData.append("paragraph1", fellowData.paragraph1);
    updatedData.append("paragraph2", fellowData.paragraph2);
    updatedData.append("link", fellowData.link);
    updatedData.append("imagePath", fellowData.imagePath);

    console.log("blog updated data:", updatedData);
    try {
      axios
        .put(`${process.env.REACT_APP_BACKEND}/fellow/${fellowId}`, updatedData)
        .then((response) => {
          console.log("edit data response", response);
          setFellowData({
            paragraph11: "",
            paragraph12: "",
            link: "",
            imagePath: "",
          });
          history.push("/fellowPage");
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    } catch (err) {
      console.log("Error: " + err.message);
    }
  }
  const fixImagePath = (path) => {
    if (typeof path === "string") {
      return path.replace(/\\/g, "/");
    }
    return null;
  };

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
                      value={fellowData?.paragraph1}
                      onChange={handleChange}
                    />
                    {validationErrors.paragraph1 && (
                      <p style={{ color: "red" }}>
                        {validationErrors.paragraph1}
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
                      value={fellowData?.paragraph2}
                      onChange={handleChange}
                    />
                    {validationErrors.paragraph2 && (
                      <p style={{ color: "red" }}>
                        {validationErrors.paragraph2}
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
                      value={fellowData?.link}
                      onChange={handleChange}
                    />
                    {validationErrors.link && (
                      <p style={{ color: "red" }}>{validationErrors.link}</p>
                    )}
                  </div>
                </Col>

                <Col>
                  <div className="add-product-image-div">
                    <div className="product-image-div">
                      <img
                        // src={imagePreviewUrl ?? fellowData?.imagePath}
                        src={
                          imagePreviewUrl ?? fixImagePath(fellowData?.imagePath)
                        }
                        alt="preview"
                        style={{
                          width: "100px",
                          height: "100px",
                          cursor: "pointer",
                        }}
                        onClick={handleImageClick}
                      />
                      <input
                        type="file"
                        name="imagePath"
                        ref={fileInputRef}
                        onChange={handleChange}
                        accept="image/jpeg, image/png, image/gif"
                        style={{ display: "none" }}
                      />

                      {validationErrors.imagePath && (
                        <p style={{ color: "red" }}>
                          {validationErrors.imagePath}
                        </p>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>

              <button type="submit" className="add-category-btn">
                Update Fellow Page
              </button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditFellow;
