import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import { RiDeleteBin3Line, RiAddFill, RiEditLine } from 'react-icons/ri';
import image from '../../Assets/khan.jpeg';
import '../Blogs Pages/Blogs.css';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Fellows = () => {
  const [fellows, setFellows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFellows();
  }, []);

  const getFellows = () => {
    setFellows([]);
    axios({
      method: 'get',
      url: 'http://localhost:4500/api/profile/getAllProfiles',
    })
      .then((response) => {
        console.log('response: ', response);
        setFellows(response.data.profiles);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  const deleteFellow = (fellowId) => {
    console.log('deleteFellow : ', fellowId);
    axios({
      method: 'delete',
      url: `http://localhost:4500/api/profile/deleteProfile/${fellowId}`,
    }).then((response) => {
      console.log(response);
      getFellows();
    });
  };

  return (
    <div className='dashboard-parent-div'>
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className='categories-content' lg={10}>
          <Row>
            <Col lg={10}>
              <h4>Our Fellows</h4>
              <p>Below are the Fellows are currently added.</p>
            </Col>
            <Col className='add-cat-col' lg={2}>
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip>
                    <div className='add-cat-overlay'>Add new Fellow.</div>
                  </Tooltip>
                }
              >
                <Link to='/fellow/add'>
                  <div>
                    <RiAddFill className='add-cat-btn' />
                  </div>
                </Link>
              </OverlayTrigger>
            </Col>
          </Row>
          <hr />

          <Row className='categories-row'>
            {loading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  minHeight: '200px',
                }}
              >
                <ReactLoading type='spokes' color='#2D46B9' />
              </div>
            ) : (
              <Col lg={12}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Job Post</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fellows.map((fellow, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              src={fellow.imagePath ? fellow.imagePath : image}
                              alt='blogImage'
                              style={{ width: '100px', height: '100px' }}
                            />
                          </td>
                          <td>{fellow.name}</td>
                          <td>{fellow.jobPost}</td>
                          <td>
                            <Link to={`/fellow/edit/${fellow.id}`}>
                              <RiEditLine className='category-product-card-icon' />
                            </Link>
                            <RiDeleteBin3Line
                              onClick={(event) => {
                                event.preventDefault();
                                deleteFellow(fellow.id);
                              }}
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

export default Fellows;
