import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import image from "../../Assets/khan.jpeg";
import { useHistory } from "react-router";
import axios from "axios";
import "../Blogs Pages/AddBlog.css";

const AddProfile = () => {
  const history = useHistory();
  
  const [formData, setFormData] = useState({
    name: "",
    nameEnglish: "",
    tagLine: "",
    imagePath: "",
    jobPost: "",
    profileDesc: "",
    heading: "",
    paragraph: "",
    thumbnailPath : "",
    featuredImage : "",
    pictureSlider : "",
    websiteUrl : "",
    facebookUrl : "",
    twitterUrl : "",
    ritsumeiUrl : "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    nameEnglish: "",
    tagLine: "",
    jobPost: "",
    heading: "",
    paragraph: "",
    profileDesc: "",
    imagePath: "",
    thumbnailPath : "",
    featuredImage : "",
    pictureSlider : "",
    websiteUrl : "",
    facebookUrl : "",
    twitterUrl : "",
    ritsumeiUrl : "",
  });

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setFormData({
      ...formData,
      pictureSlider: selectedImages
    });
  };

  const fellowOptions = ["Fellow", "Associated Fellow"];
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "imagePath" || name === "thumbnailPath" || name === "featuredImage") {
      const file = event.target.files[0];
      const allowedFileTypes = ["image/jpeg", "image/png", "image/gif"];
  
      if (file && allowedFileTypes.includes(file.type)) {
        setFormData({
          ...formData,
          [name]: file,
        });
      } else {
        setValidationErrors((prev) => ({
          ...prev,
          [name]: "Invalid file type. Only JPEG, PNG, and GIF files are allowed.",
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
  

  console.log("formData: ", formData);

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    try {
      console.log("Adding");
      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.name);
      formDataToSend.append("nameEnglish", formData.nameEnglish);
      formDataToSend.append("tagLine", formData.tagLine);
      formDataToSend.append("imagePath", formData.imagePath);
      formDataToSend.append("thumbnailPath", formData.thumbnailPath);
      formDataToSend.append("featuredImage", formData.featuredImage);
      formDataToSend.append("pictureSlider", formData.pictureSlider);
      formDataToSend.append("jobPost", formData.jobPost);
      formDataToSend.append("profileDesc", formData.profileDesc);
      formDataToSend.append("heading", formData.heading);
      formDataToSend.append("paragraph", formData.paragraph);
      formDataToSend.append("websiteUrl", formData.websiteUrl);
      formDataToSend.append("facebookUrl", formData.facebookUrl);
      formDataToSend.append("twitterUrl", formData.twitterUrl);
      formDataToSend.append("ritsumeiUrl", formData.ritsumeiUrl); //

      axios
        .post(
          "http://localhost:4500/api/profile/createProfile",
          formDataToSend
        )
        .then((response) => {
          setFormData({
            name: "",
            nameEnglish: "",
            tagLine: "",
            imagePath: "",
            jobPost: "",
            profileDesc: "",
            heading: "",
            paragraph: "",
            thumbnailPath : "",
            featuredImage : "",
            pictureSlider : "",
            websiteUrl : "",
            facebookUrl : "",
            twitterUrl : "",
            ritsumeiUrl : "",
          });
          history.push("/fellows");
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

    if (formData.name.trim() === "") {
      errors.name = "This field is required";
    }

    if (formData.nameEnglish.trim() === "") {
      errors.nameEnglish = "This field is required";
    }

    if (formData.tagLine.trim() === "") {
      errors.tagLine = "This field is required";
    }

    if (formData.jobPost.trim() === "") {
      errors.jobPost = "This field is required";
    }

    if (formData.heading.trim() === "") {
      errors.heading = "This field is required";
    }

    if (formData.paragraph.trim() === "") {
      errors.paragraph = "This field is required";
    }

    if (!formData.profileDesc || formData.profileDesc.trim() === "") {
      errors.profileDesc = "This field is required";
    }

    if (!formData.imagePath) {
      errors.imagePath = "Please select an image";
    }

    return errors;
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
            Please fill the Fellow details in the form below to add a new
            fellow.
          </p>
          <Card className="add-product-form-card">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Name</p>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {validationErrors.name && (
                      <p style={{ color: "red" }}>{validationErrors.name}</p>
                    )}
                  </div>
                </Col>
                <Col>
                  <div className="add-product-input-div">
                    <p>English Name</p>
                    <input
                      type="text"
                      name="nameEnglish"
                      value={formData.nameEnglish}
                      onChange={handleChange}
                    />
                    {validationErrors.nameEnglish && (
                      <p style={{ color: "red" }}>
                        {validationErrors.nameEnglish}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Tagline</p>
                    <input
                      type="text"
                      name="tagLine"
                      value={formData.tagLine}
                      onChange={handleChange}
                    />
                    {validationErrors.tagLine && (
                      <p style={{ color: "red" }}>{validationErrors.tagLine}</p>
                    )}
                  </div>
                </Col>
                <Col>
                  <div className="add-product-input-div">
                    <p>Job Post</p>
                    <select
                      name="jobPost"
                      value={formData.jobPost}
                      onChange={handleChange}
                      style={{ border: "none", width: "100%" }}
                    >
                      <option value="">Select Fellow</option>
                      {fellowOptions.map((fellow) => (
                        <option key={fellow} value={fellow}>
                          {fellow}
                        </option>
                      ))}
                    </select>
                    {validationErrors.fellow && (
                      <p style={{ color: "red" }}>{validationErrors.fellow}</p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Heading</p>
                    <input
                      type="text"
                      name="heading"
                      value={formData.heading}
                      onChange={handleChange}
                    />
                    {validationErrors.heading && (
                      <p style={{ color: "red" }}>{validationErrors.heading}</p>
                    )}
                  </div>
                </Col>

                <Col>
                  <div className="add-product-input-div">
                    <p>Website Url</p>
                    <input
                      type="text"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                    />
                    {validationErrors.websiteUrl && (
                      <p style={{ color: "red" }}>
                        {validationErrors.websiteUrl}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Paragraph</p>
                    <CKEditor
                      editor={ClassicEditor}
                      onReady={(editor) => {}}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log("Editor Data:", data);
                        handleChange({
                          target: {
                            name: "paragraph",
                            value: data,
                          },
                        });
                      }}
                      onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                      }}
                    />
                    {validationErrors.paragraph && (
                      <p style={{ color: "red" }}>
                        {validationErrors.formData.paragraph}
                      </p>
                    )}
                  </div>
                </Col>

                <Col>
                  <div className="add-product-input-div">
                    <p>Fellow Description</p>
                    <CKEditor
                      editor={ClassicEditor}
                      // data='<p>lets start blog content</p>'ss
                      onReady={(editor) => {}}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log("Editor Data:", data);
                        handleChange({
                          target: { name: "profileDesc", value: data },
                        });
                      }}
                      onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                      }}
                    />
                    {validationErrors.profileDesc && (
                      <p style={{ color: "red" }}>
                        {validationErrors.profileDesc}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-image-div">
                    <div className="add-fellow-image">
                      <p>Fellow Image</p>
                    </div>
                    {/* <img src={image} alt='preview' /> */}
                    <div className="product-image-div">
                      <input
                        type="file"
                        name="imagePath"
                        // value={formData.imagePath?.name}
                        onChange={handleChange}
                      />
                      {validationErrors.imagePath && (
                        <p style={{ color: "red" }}>
                          {validationErrors.imagePath}
                        </p>
                      )}
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="add-product-image-div">
                    <div className="add-fellow-image">
                      <p>Fellow Thumbnail</p>
                    </div>
                    {/* <img src={image} alt='preview' /> */}
                    <div className="product-image-div">
                      <input
                        type="file"
                        name="thumbnailPath"
                        // value={formData.imagePath?.name}
                        onChange={handleChange}
                      />
                      {validationErrors.thumbnailPath && (
                        <p style={{ color: "red" }}>
                          {validationErrors.thumbnailPath}
                        </p>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-image-div">
                    <div className="add-fellow-image">
                      <p>Featured Image</p>
                    </div>
                    {/* <img src={image} alt='preview' /> */}
                    <div className="product-image-div">
                      <input
                        type="file"
                        name="featuredImage"
                        // value={formData.imagePath?.name}
                        onChange={handleChange}
                      />
                      {validationErrors.featuredImage && (
                        <p style={{ color: "red" }}>
                          {validationErrors.featuredImage}
                        </p>
                      )}
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="add-product-image-div">
                    <div className="add-fellow-image">
                      <p>Slider Images</p>
                    </div>
                    <div className="product-image-div">
                      <input
                        type="file"
                        name="pictureSlider"
                        onChange={handleImageChange}
                        multiple
                      />
                      {validationErrors.pictureSlider && (
                        <p style={{ color: "red" }}>
                          {validationErrors.pictureSlider}
                        </p>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Facebook Url</p>
                    <input
                      type="text"
                      name="facebookUrl"
                      value={formData.facebookUrl}
                      onChange={handleChange}
                    />
                    {validationErrors.facebookUrl && (
                      <p style={{ color: "red" }}>{validationErrors.facebookUrl}</p>
                    )}
                  </div>
                </Col>

                <Col>
                  <div className="add-product-input-div">
                    <p>Twitter Url</p>
                    <input
                      type="text"
                      name="twitterUrl"
                      value={formData.twitterUrl}
                      onChange={handleChange}
                    />
                    {validationErrors.twitterUrl && (
                      <p style={{ color: "red" }}>
                        {validationErrors.twitterUrl}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="add-product-input-div">
                    <p>Ritsumei Url</p>
                    <input
                      type="text"
                      name="ritsumeiUrl"
                      value={formData.ritsumeiUrl}
                      onChange={handleChange}
                    />
                    {validationErrors.ritsumeiUrl && (
                      <p style={{ color: "red" }}>{validationErrors.ritsumeiUrl}</p>
                    )}
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

export default AddProfile;
