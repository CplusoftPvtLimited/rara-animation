import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { useHistory } from "react-router";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import "../Blogs Pages/AddBlog.css";
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

function EditFellow(props) {
  const [profileData, setProfileData] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);
  const [pictureSliderArray, setPictureSliderArray] = useState([]);
  const profileId = props.match.params.fellowId;
  const file1InputRef = useRef(null);
  const file2InputRef = useRef(null);
  const file3InputRef = useRef(null);
  const file4InputRef = useRef(null);
  const getFileInputRef = (name) => {
    switch (name) {
      case "pictureSlider_0":
        return file1InputRef;
      case "pictureSlider_1":
        return file2InputRef;
      case "pictureSlider_2":
        return file3InputRef;
      // Add more cases as needed...
      default:
        return null;
    }
  };

  console.log("profileId: " + profileId);
  const history = useHistory();
  const fellowOptions = ["Fellow", "Associated Fellow"];

  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    setProfileData();
    try {
      const response = await axios.get(
        `http://localhost:4500/api/profile/${profileId}`
      );
      setProfileData(response.data?.profile);
      console.log("response", response.data.profile);
      if (response.data?.profile?.pictureSlider) {
        const parsedPictureSlider = JSON.parse(
          response.data.profile.pictureSlider
        );
        setPictureSliderArray(parsedPictureSlider);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

 const handleImageInputChange = (event, name) => {
    const file = event.target.files[0];
    console.log("File:", file);
    const reader = new FileReader();
    reader.onloadend = () => {
      if (name) {
        setImagePreviewUrl((prev) => [
          ...prev,
          { path: name, file: reader.result },
        ]);
        setProfileData((prev) => ({
          ...prev,
          [name]: file,
        }));
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (fileInput) => {
    fileInput.current.click();
  };

  const editFellow = async (event) => {
    event.preventDefault();
    const updatedData = new FormData();
    const pictureSlider = [];
    if (profileData.pictureSlider_0) {
      pictureSlider.push(profileData.pictureSlider_0);
    }
    if (profileData.pictureSlider_1) {
      pictureSlider.push(profileData.pictureSlider_1);
    }
    for (const [key, value] of Object.entries(profileData)) {
      if (!key.includes("Path")) {
        updatedData.append(key, value);
      }
    }
    try {
      console.log("updatedData: ", updatedData);
      const response = await axios.patch(
        `http://localhost:4500/api/profile/updateProfile/${profileId}`,
        updatedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("edit data", response);
      setProfileData({
        name: "",
        nameEnglish: "",
        tagLine: "",
        imagePath: "",
        jobPost: "",
        profileDesc: "",
        websiteUrl: "",
        heading: "",
        paragraph: "",
        featuredImage: "",
        thumbnailPath: "",
        pictureSlider: [],
        facebookUrl: "",
        twitterUrl: "",
        ritsumeiUrl: "",
      });
      history.push("/fellows");
    } catch (err) {
      console.log("err: ", err);
    }
  };
  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="add-category-content" lg={10}>
          <h4>Edit Fellow</h4>
          <p>
            Please fill the Fellow details in the form below to update a fellow.
          </p>
          <Card className="add-product-form-card">
            {profileData && (
              <Form>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Name</p>
                      <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>English Name</p>
                      <input
                        type="text"
                        name="nameEnglish"
                        value={profileData.nameEnglish}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Tag</p>
                      <input
                        type="text"
                        name="tagLine"
                        value={profileData.tagLine}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  {/* <Col>
                    <div className='add-product-input-div'>
                      <p>Job Post</p>
                      <input
                        type='text'
                        name='jobPost'
                        value={profileData.jobPost}
                        onChange={handleChange}
                      />
                    </div>
                  </Col> */}
                  <Col>
                    <div className="add-product-input-div">
                      <p>Job Post</p>
                      <select
                        name="jobPost"
                        value={profileData.jobPost}
                        onChange={handleChange}
                        style={{ border: "none", width: "100%" }}
                      >
                        <option value="">{profileData.jobPost}</option>
                        {fellowOptions.map((fellow) => (
                          <option key={fellow} value={fellow}>
                            {fellow}
                          </option>
                        ))}
                      </select>
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
                        value={profileData.heading}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Profile Description</p>
                      <CKEditor
                        editor={ClassicEditor}
                        data={profileData.profileDesc}
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
                    </div>
                  </Col>

                  <Col>
                    <div className="add-product-input-div">
                      <p>Paragraph</p>
                      <CKEditor
                        editor={ClassicEditor}
                        data={profileData.paragraph}
                        onReady={(editor) => {}}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log("Editor Data:", data);
                          handleChange({
                            target: { name: "paragraph", value: data },
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
                      <p>Facebook URL</p>
                      <input
                        type="text"
                        name="facebookUrl"
                        value={profileData.facebookUrl}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Twitter Url</p>
                      <input
                        type="text"
                        name="twitterUrl"
                        value={profileData.twitterUrl}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Ritsumei Url</p>
                      <input
                        type="text"
                        name="ritsumeiUrl"
                        value={profileData.ritsumeiUrl}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-image-div">
                      <div className="product-image-div">
                        <img
                          src={
                            imagePreviewUrl.find(
                              (item) => item.path == "imagePath"
                            )?.file ?? profileData?.imagePath
                          }
                          alt="preview"
                          style={{
                            width: "100px",
                            height: "100px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleImageClick(file1InputRef)}
                        />
                        <input
                          type="file"
                          name="imagePath"
                          ref={file1InputRef}
                          onChange={(event) =>
                            handleImageInputChange(event, "imagePath")
                          }
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-image-div">
                      <div className="product-image-div">
                        <img
                          src={
                            imagePreviewUrl.find(
                              (item) => item.path == "thumbnailPath"
                            )?.file ?? profileData?.thumbnailPath
                          }
                          alt="preview"
                          style={{
                            width: "100px",
                            height: "100px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleImageClick(file2InputRef)}
                        />
                        <input
                          type="file"
                          name="thumbnailPath"
                          ref={file2InputRef}
                          onChange={(event) =>
                            handleImageInputChange(event, "thumbnailPath")
                          }
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div className="add-product-image-div">
                      <div className="product-image-div">
                        <img
                          src={
                            imagePreviewUrl.find(
                              (item) => item.path === "featuredImage"
                            )?.file ?? profileData?.featuredImage
                          }
                          alt="preview"
                          style={{
                            width: "100px",
                            height: "100px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleImageClick(file3InputRef)}
                        />
                        <input
                          type="file"
                          name="featuredImage"
                          ref={file3InputRef}
                          onChange={(event) =>
                            handleImageInputChange(event, "featuredImage")
                          }
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Col>
                  <div className="add-product-image-div">
                    <div className="product-image-div">
                      {/* Dropzone for uploading new images */}
                      <form
                        action="/file-upload"
                        className="dropzone"
                        id="my-awesome-dropzone"
                      >
                        <input type="file" name="file" multiple />
                      </form>
                    </div>
                  </div>
                </Col>
                <Row>
                <Col>
                {pictureSliderArray.map((imagePath, index) => (
                        <div key={index}>
                          <img
                            src={imagePath}
                            alt={`slider-image-${index}`}
                            style={{
                              width: "100px",
                              height: "100px",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              handleImageClick(
                                getFileInputRef(`pictureSlider_${index}`)
                              )
                            }
                          />
                          <input
                            type="file"
                            name={`pictureSlider_${index}`}
                            ref={getFileInputRef(`pictureSlider_${index}`)}
                            onChange={(event) =>
                              handleImageInputChange(
                                event,
                                `pictureSlider_${index}`
                              )
                            }
                            style={{ display: "none" }}
                          />
                        </div>
                      ))}
                      </Col>
                      </Row>
                <button
                  onClick={editFellow}
                  type="submit"
                  className="add-category-btn"
                >
                  Update Fellow
                </button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditFellow;
