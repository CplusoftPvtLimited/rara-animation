import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { useHistory } from "react-router";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Multiselect } from "multiselect-react-dropdown";
import axios from "axios";
import "./Home.css";

function EditHome(props) {
  const [homeData, setHomeData] = useState();
  const [fellowData, setFellowData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(undefined);
  const [selectedFellowOptions, setSelectedFellowOptions] = useState([]);
  const [removedFellowOptions, setRemovedFellowOptions] = useState([]);
  const [selectedBlogOptions, setSelectedBlogOptions] = useState([]);
  const [removedBlogOptions, setRemovedBlogOptions] = useState([]);

  const history = useHistory();
  const fileInputRef = useRef(null);

  const onFellowSelectOptions = (selectedList, selectedItem) => {
    setSelectedFellowOptions([...selectedFellowOptions, selectedItem]);
  };

  const onFellowRemoveOptions = (selectedList, removedItem) => {
    setRemovedFellowOptions([...removedFellowOptions, removedItem]);
  };

  const onBlogSelectOptions = (selectedList, selectedItem) => {
    console.log(
      "🚀 ~ file: Home.js:33 ~ onBlogSelectOptions ~ selectedItem:",
      selectedItem
    );
    setSelectedBlogOptions([...selectedBlogOptions, selectedItem]);
  };

  const onBlogRemoveOptions = (selectedList, removedItem) => {
    setRemovedBlogOptions([...removedBlogOptions, removedItem]);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4500/api/blog/getAllBlogPosts",
    })
      .then((response) => {
        setBlogData(response.data.blogPosts);
        console.log(
          "***🚀 ~ file: Home.js:47 ~ .then ~ response.data.blogs:",
          response.data.blogPosts
        );
      })
      .catch((error) => {
        console.log("No blog found", error.message);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4500/api/profile/getAllProfiles",
    })
      .then((response) => {
        setFellowData(response.data.profiles);
      })
      .catch((error) => {
        console.log("No profile found", error.message);
      });
  }, []);
  useEffect(() => {
    getHome();
  }, []);

  const getHome = () => {
    setHomeData();
    axios({
      method: "get",
      url: `http://localhost:4500/api/home/getHome`,
    })
      .then((response) => {
        setHomeData(response.data.home[0]);
        console.log("homeData: ", response.data.home[0]);
      })
      .catch((err) => {
        console.log(err);
      });
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
        setHomeData((prev) => ({
          ...prev,
          imagePath: files[0],
        }));
      }
    } else {
      setHomeData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const fellowIds = selectedFellowOptions.map((option) => option.id);
  const blogIds = selectedBlogOptions.map((option) => option.id);
  console.log(
    "🚀 ~ file: Home.js:119 ~ EditHome ~ selectedBlogOptions:",
    selectedBlogOptions
  );
  console.log("****🚀 ~ file: Home.js:119 ~ EditHome ~ blogIds:", blogIds);

  const editHome = (event) => {
    event.preventDefault();
    const updatedData = new FormData();
    updatedData.append("mainHeading", homeData.mainHeading);
    updatedData.append("mainSubHeading", homeData.mainSubHeading);
    updatedData.append("mainAbout", homeData.mainAbout);
    updatedData.append("mainEstablish", homeData.mainEstablish);
    updatedData.append("mainDescription", homeData.mainDescription);
    updatedData.append("mainAim", homeData.mainAim);
    updatedData.append("mainResearchImage", homeData.mainResearchImage);
    updatedData.append("mainResearchTitle", homeData.mainResearchTitle);
    updatedData.append(
      "mainResearchDescription",
      homeData.mainResearchDescription
    );
    updatedData.append("card1Heading", homeData.card1Heading);
    updatedData.append("card1Image", homeData.card1Image);
    updatedData.append("card1Title", homeData.card1Title);
    updatedData.append("card1Description", homeData.card1Description);
    updatedData.append("card1InsideImage", homeData.card1InsideImage);
    updatedData.append("card2Heading", homeData.card2Heading);
    updatedData.append("card2Image", homeData.card2Image);
    updatedData.append("card2Title", homeData.card2Title);
    updatedData.append("card2Description", homeData.card2Description);
    updatedData.append("card2InsideImage", homeData.card2InsideImage);
    updatedData.append("card3Heading", homeData.card3Heading);
    updatedData.append("card3Image", homeData.card3Image);
    updatedData.append("card3Title", homeData.card3Title);
    updatedData.append("card3Description", homeData.card3Description);
    updatedData.append("card3InsideImage", homeData.card3InsideImage);
    updatedData.append("card4Heading", homeData.card4Heading);
    updatedData.append("card4Image", homeData.card4Image);
    updatedData.append("card4Title", homeData.card4Title);

    // if (typeof JSON !== "undefined" && typeof JSON.stringify === "function") {
    //   updatedData.append("fellows", JSON.stringify(homeData.fellows));
    // } else {
    //   updatedData.append("fellows", homeData.fellows.join(","));
    // }
    updatedData.append("fellows", fellowIds);
    updatedData.append("blogs", blogIds);
    updatedData.append("card4Description", homeData.card4Description);
    updatedData.append("card4InsideImage", homeData.card4InsideImage);
    updatedData.append(
      "cardGuidelineDescription",
      homeData.cardGuidelineDescription
    );
    updatedData.append("contactHeading", homeData.contactHeading);
    updatedData.append("contactEmail", homeData.contactEmail);
    updatedData.append("contactMailchimpKey", homeData.contactMailchimpKey);
    try {
      console.log("updatedData: ", updatedData);
      axios
        .patch(`http://localhost:4500/api/home/updateHome/1`, updatedData)
        .then((response) => {
          console.log("edit data", response);
          setHomeData({
            mainHeading: "",
            mainSubHeading: "",
            mainAbout: "",
            mainEstablish: "",
            mainDescription: "",
            mainAim: "",
            mainResearchImage: "",
            mainResearchTitle: "",
            mainResearchDescription: "",
            card1Heading: "",
            card1Image: "",
            card1Title: "",
            card1Description: "",
            card1InsideImage: "",
            card2Heading: "",
            card2Image: "",
            card2Title: "",
            card2Description: "",
            card2InsideImage: "",
            card3Heading: "",
            card3Image: "",
            card3Title: "",
            card3Description: "",
            card3InsideImage: "",
            card4Heading: "",
            card4Image: "",
            card4Title: "",
            card4Description: "",
            card4InsideImage: "",
            cardGuidelineDescription: "",
            contactHeading: "",
            contactEmail: "",
            contactMailchimpKey: "",
          });
          history.push("/");
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    } catch (err) {
      console.log("Error: " + err.message);
    }
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="add-category-content" lg={10}>
          <h4>Edit Home Page</h4>
          <p>Please fill the details in the form below to update home page.</p>
          <Card className="add-product-form-card">
            {homeData && (
              <Form>
                <Row>
                  <div className="main">
                    <h2> Main Section</h2>
                  </div>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Main Heading</p>
                      <input
                        type="text"
                        name="mainHeading"
                        value={homeData.mainHeading}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Main Subheading</p>
                      <input
                        type="text"
                        name="mainSubHeading"
                        value={homeData.mainSubHeading}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Main About</p>
                      <input
                        type="text"
                        name="mainAbout"
                        value={homeData.mainAbout}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Main Establish</p>
                      <input
                        type="text"
                        name="mainEstablish"
                        value={homeData.mainEstablish}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Main ResearchTitle</p>
                      <input
                        type="text"
                        name="mainResearchTitle"
                        value={homeData.mainResearchTitle}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Main Research Image</p>
                      <div className="product-image-div">
                        <img
                          src={imagePreviewUrl ?? homeData?.mainResearchImage}
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
                          name="mainResearchImage"
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept="image/jpeg, image/png, image/gif"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Main Description</p>
                      <CKEditor
                        style={{ height: "100px" }}
                        editor={ClassicEditor}
                        data={homeData.mainDescription}
                        onReady={(editor) => {
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log("Editor Data:", data);
                          handleChange({
                            target: { name: "content", value: data },
                          });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </div>
                  </Col>

                  <Col>
                    <div className="add-product-input-div">
                      <p>Main ResearchDescription</p>
                      <CKEditor
                        style={{ height: "100px" }}
                        editor={ClassicEditor}
                        data={homeData.mainResearchDescription}
                        onReady={(editor) => {
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log("Editor Data:", data);
                          handleChange({
                            target: { name: "content", value: data },
                          });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </div>
                  </Col>
                </Row>

                {/** Cards 1*/}

                <Row>
                  <div className="cards">
                    <h2> Card Details</h2>
                  </div>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 1 Heading</p>
                      <input
                        type="text"
                        name="card1Heading"
                        value={homeData.card1Heading}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 1 Title</p>
                      <input
                        type="text"
                        name="card1Title"
                        value={homeData.card1Title}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 1 Image</p>
                      <div className="product-image-div">
                        <img
                          src={imagePreviewUrl ?? homeData?.card1Image}
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
                          name="card1Image"
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept="image/jpeg, image/png, image/gif"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 1 Inside Image</p>
                      <div className="product-image-div">
                        <img
                          src={imagePreviewUrl ?? homeData?.card1InsideImage}
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
                          name="card1InsideImage"
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept="image/jpeg, image/png, image/gif"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 1 Description</p>
                      <CKEditor
                        style={{ height: "100px" }}
                        editor={ClassicEditor}
                        data={homeData.card1Description}
                        onReady={(editor) => {
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log("Editor Data:", data);
                          handleChange({
                            target: { name: "content", value: data },
                          });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </div>
                  </Col>
                </Row>

                {/** Cards 2*/}

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 2 Heading</p>
                      <input
                        type="text"
                        name="card2Heading"
                        value={homeData.card2Heading}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p> Card 2 Title </p>
                      <input
                        type="text"
                        name="card2Title"
                        value={homeData.card2Title}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 2 Image</p>
                      <div className="product-image-div">
                        <img
                          src={imagePreviewUrl ?? homeData?.card2Image}
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
                          name="card2Image"
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept="image/jpeg, image/png, image/gif"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 2 Inside Image</p>
                      <div className="product-image-div">
                        <img
                          src={imagePreviewUrl ?? homeData?.card2InsideImage}
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
                          name="card2InsideImage"
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept="image/jpeg, image/png, image/gif"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 2 Description</p>
                      <CKEditor
                        style={{ height: "100px" }}
                        editor={ClassicEditor}
                        data={homeData.card2Description}
                        onReady={(editor) => {
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log("Editor Data:", data);
                          handleChange({
                            target: { name: "content", value: data },
                          });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </div>
                  </Col>
                </Row>

                {/** Cards 3*/}

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 3 Heading</p>
                      <input
                        type="text"
                        name="card3Heading"
                        value={homeData.card3Heading}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>

                  <Col>
                    <div className="add-product-input-div">
                      <p> Card 3 Title </p>
                      <input
                        type="text"
                        name="card2Title"
                        value={homeData.card3Title}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 3 Image</p>
                      <div className="product-image-div">
                        <img
                          src={imagePreviewUrl ?? homeData?.card3Image}
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
                          name="card3Image"
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept="image/jpeg, image/png, image/gif"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 3 Inside Image</p>
                      <div className="product-image-div">
                        <img
                          src={imagePreviewUrl ?? homeData?.card3InsideImage}
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
                          name="card3InsideImage"
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept="image/jpeg, image/png, image/gif"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 3 Description</p>
                      <CKEditor
                        style={{ height: "100px" }}
                        editor={ClassicEditor}
                        data={homeData.card3Description}
                        onReady={(editor) => {
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log("Editor Data:", data);
                          handleChange({
                            target: { name: "content", value: data },
                          });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                {/** Cards 4*/}

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 4 Heading</p>
                      <input
                        type="text"
                        name="card4Heading"
                        value={homeData.card4Heading}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>

                  <Col>
                    <div className="add-product-input-div">
                      <p> Card 4 Title </p>
                      <input
                        type="text"
                        name="card2Title"
                        value={homeData.card4Title}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 4 Image</p>
                      <div className="product-image-div">
                        <img
                          src={imagePreviewUrl ?? homeData?.card4Image}
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
                          name="card4Image"
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept="image/jpeg, image/png, image/gif"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 4 Inside Image</p>
                      <div className="product-image-div">
                        <img
                          src={imagePreviewUrl ?? homeData?.card4InsideImage}
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
                          name="card4InsideImage"
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept="image/jpeg, image/png, image/gif"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card 4 Description</p>
                      <CKEditor
                        style={{ height: "100px" }}
                        editor={ClassicEditor}
                        data={homeData.card4Description}
                        onReady={(editor) => {
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log("Editor Data:", data);
                          handleChange({
                            target: { name: "content", value: data },
                          });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Card Guideline Description</p>
                      <CKEditor
                        style={{ height: "100px" }}
                        editor={ClassicEditor}
                        data={homeData.cardGuidelineDescription}
                        onReady={(editor) => {
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log("Editor Data:", data);
                          handleChange({
                            target: { name: "content", value: data },
                          });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                {/**MultiSelect */}
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Fellows</p>
                      <Multiselect
                        name="fellow"
                        options={fellowData}
                        onSelect={onFellowSelectOptions}
                        onRemove={onFellowRemoveOptions}
                        onChange={handleChange}
                        displayValue="name"
                        closeIcon="cancel"
                        placeholder="Select Options"
                        selectedValues={selectedFellowOptions}
                        className="multiSelectContainer"
                      />
                    </div>
                  </Col>

                  <Col>
                    <div className="add-product-input-div">
                      <p>Blogs</p>
                      <Multiselect
                        name="fellow"
                        options={blogData}
                        onSelect={onBlogSelectOptions}
                        onRemove={onBlogRemoveOptions}
                        onChange={handleChange}
                        displayValue="title"
                        closeIcon="cancel"
                        placeholder="Select Options"
                        selectedValues={selectedBlogOptions}
                        className="multiSelectContainer"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Contact Heading</p>
                      <input
                        type="text"
                        name="contactHeading"
                        value={homeData.contactHeading}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Contact Email</p>
                      <input
                        type="text"
                        name="contactEmail"
                        value={homeData.contactEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Contact Mailchimp Key</p>
                      <input
                        type="text"
                        name="contactMailchimpKey"
                        value={homeData.contactMailchimpKey}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <button
                  onClick={editHome}
                  type="submit"
                  className="add-category-btn"
                >
                  Update Info
                </button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditHome;
