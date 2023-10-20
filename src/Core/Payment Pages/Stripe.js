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

const Stripe = () => {
  const [fellows, setFellows] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getFellows();
  // }, []);

  // const getFellows = () => {
  //   setFellows([]);
  //   axios({
  //     method: 'get',
  //     url: `${process.env.REACT_APP_BACKEND}/profile/getAllProfiles`,
  //   })
  //     .then((response) => {
  //       console.log('response: ', response);
  //       setFellows(response.data.profiles);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log('error: ', err);
  //     });
  // };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
};

export default Stripe;
