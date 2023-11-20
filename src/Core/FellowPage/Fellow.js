import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { RiDeleteBin3Line, RiEditLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Table from "react-bootstrap/Table";
import Sidebar from "../../Components/Sidebar";
import "../Blogs Pages/Blogs.css";

const Fellow = () => {
  const [fellowPageData, setFellowPageData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFellowPage();
  }, []);

  const getFellowPage = () => {
    setFellowPageData([]);
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/fellow/getFellows`,
    })
      .then((response) => {
        setFellowPageData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  const deleteFellow = (postId) => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND}/fellow/${postId}`,
    }).then((response) => {
      console.log(response);
      getFellowPage();
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
              <h4>Fellow Page</h4>
              <p>Below are the fellow page details.</p>
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
                      <th>First Paragraph</th>
                      <th>Second Paragraph</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fellowPageData.map((fellowData, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{fellowData.paragraph1}</td>
                          <td>{fellowData.paragraph2}</td>
                          <td>
                            <Link to={`/fellowPage/edit/${fellowData.id}`}>
                              <RiEditLine className="category-product-card-icon" />
                            </Link>

                            <RiDeleteBin3Line
                              onClick={(event) => {
                                event.preventDefault();
                                deleteFellow(fellowData.id);
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

export default Fellow;
