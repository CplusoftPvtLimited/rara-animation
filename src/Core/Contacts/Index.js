import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { RiDeleteBin3Line, RiAddFill, RiEditLine } from "react-icons/ri";
import image from "../../Assets/khan.jpeg";
import "../Blogs Pages/Blogs.css";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Index = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = () => {
    setContacts([]);
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/contact/getContacts`,
    })
      .then((response) => {
        console.log("response: ", response.data);
        setContacts(response.data.contents);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  const deletePost = (contactId) => {
    console.log("contactId", contactId);
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND}/contact/${contactId}`,
    }).then((response) => {
      console.log(response);
      getContacts();
    });
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
              <h4>Our Students Contacts</h4>
              <p>Below are the Contacts that currently added.</p>
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
              <Col lg={12}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Email</th>
                      <th>First Name</th>
                      <th>Phone Number</th>
                      <th>School</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{contact?.email}</td>
                          <td>{contact?.firstName}</td>
                          <td>{contact?.phoneNumber}</td>
                          <td>{contact?.school}</td>
                          <td>
                            <Link to={`/contact/${contact?.id}`}>
                              <RiEditLine className="category-product-card-icon" />
                            </Link>

                            <RiDeleteBin3Line
                              onClick={(event) => {
                                event.preventDefault();
                                deletePost(contact?.id);
                              }}
                              className="view-prod-btn"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
