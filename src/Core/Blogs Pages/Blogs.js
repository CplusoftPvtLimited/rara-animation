import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import { RiDeleteBin3Line, RiAddFill, RiEditLine } from 'react-icons/ri';
import image from '../../Assets/khan.jpeg';
import './Blogs.css';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    setBlogs([]);
    axios({
      method: 'get',
      url: 'http://localhost:4500/api/getAllBlogPosts',
    })
      .then((response) => {
        console.log('response: ', response.data.blogPosts);
        setBlogs(response.data.blogPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  const deleteBlog = (blogId) => {
    axios({
      method: 'delete',
      url: `http://localhost:4500/api/${blogId}`,
    }).then((response) => {
      console.log(response);
      getBlogs();
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
              <h4>Our Blogs</h4>
              <p>Below are the Blogs currently added.</p>
            </Col>
            <Col className='add-cat-col' lg={2}>
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip>
                    <div className='add-cat-overlay'>Add new Blog.</div>
                  </Tooltip>
                }
              >
                <Link to='/blogs/add'>
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
                      <th>Title</th>
                      <th>Category</th>
                      <th>Content</th>
                      <th>Fellow</th>
                      <th>Region</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog, index) => {
                      return (
                        <tr key={index}>
                          <td> {blog.id}</td>
                          <td>
                            <img
                              src={image}
                              // src={getImageSrc(blog.imagePath)}
                              alt='blogImage'
                              style={{ width: '100px', height: '100px' }}
                            />
                          </td>
                          <td>{blog.title}</td>
                          <td>{blog.category}</td>
                          <td
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                          ></td>
                          <td>{blog.fellow}</td>
                          <td>{blog.region}</td>
                          <td>
                            <Link to={`/blog/edit/${blog.id}`}>
                              <RiEditLine className='category-product-card-icon' />
                            </Link>

                            <RiDeleteBin3Line
                              onClick={(event) => {
                                event.preventDefault();
                                deleteBlog(blog.id);
                              }}
                              className='view-prod-btn'
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

export default Blogs;
