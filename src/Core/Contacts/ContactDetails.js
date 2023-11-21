import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import ReactLoading from "react-loading";
import "../Blogs Pages/Blogs.css";

const ContactDetails = (props) => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const contactId = props.match.params.contactId;

  useEffect(() => {
    getContact();
  }, []);

  const getContact = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/contact/${contactId}`,
    })
      .then((response) => {
        console.log(response?.data);
        setContact(response?.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to handle file download
  const handleDownload = async (fileType) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/contact/download/${fileType}/${contact.id}`,
        { responseType: "blob" }
      );

      console.log("response: ", response);

      // Create a download link and trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${fileType}.pdf`); // Set the file name
      document.body.appendChild(link);
      link.click();

      // Clean up after the download
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
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
              <h4>Our Contact</h4>
              <p>Below are the Contact details.</p>
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
                      <p>First Name</p>
                      <input
                        type="text"
                        name="firstName"
                        value={contact?.firstName}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Last Name</p>
                      <input
                        type="text"
                        name="lastName"
                        value={contact?.lastName}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Email</p>
                      <input type="text" name="email" value={contact?.email} />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Phone Number</p>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={contact?.phoneNumber}
                      />
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
                        value={contact?.school}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Focus Area</p>
                      <input
                        type="text"
                        name="focusArea"
                        value={contact?.focusArea}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Reference Letter</p>
                      <button
                        type="button"
                        onClick={() => handleDownload("referenceLetter")}
                      >
                        Download Reference Letter
                      </button>
                    </div>
                  </Col>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Resume</p>
                      <button
                        type="button"
                        onClick={() => handleDownload("resume")}
                      >
                        Download Resume
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="add-product-input-div">
                      <p>Statement</p>
                      <button
                        type="button"
                        onClick={() => handleDownload("statement")}
                      >
                        Download Statement
                      </button>
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

export default ContactDetails;
