import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import axios from 'axios';
import './AddBlog.css';
import { useHistory } from 'react-router';
import image from '../../Assets/khan.jpeg';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function EditBlog(props) {
  const [blogData, setBlogData] = useState();
  const blogId = props.match.params.blogId;
  console.log('blogId: ' + blogId);
  const history = useHistory();

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    console.log('getBlogs');
    setBlogData();
    axios({
      method: 'get',
      url: `http://localhost:4500/api/${blogId}`,
    })
      .then((response) => {
        setBlogData(response.data?.blogPost);
        console.log('blogData: ', response.data.blogPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const editBlog = (event) => {
    event.preventDefault();

    const updatedData = new FormData();
    updatedData.append('title', blogData.title);
    updatedData.append('content', blogData.content);
    updatedData.append('fellow', blogData.fellow);
    updatedData.append('category', blogData.category);
    updatedData.append('region', blogData.region);

    try {
      console.log('updatedData: ', updatedData);
      axios
        .patch(`http://localhost:4500/api/${blogId}`, updatedData)
        .then((response) => {
          console.log('edit data', response);
          setBlogData({
            title: '',
            fellow: '',
            category: '',
            region: '',
            content: '',
          });
          history.push('/blogs');
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    } catch (err) {
      console.log('Error: ' + err.message);
    }
  };

  console.log('blogData: ', blogData);

  return (
    <div className='dashboard-parent-div'>
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className='add-category-content' lg={10}>
          <h4>Edit Blog</h4>
          <p>
            Please fill the Blog details in the form below to update a blog.
          </p>
          <Card className='add-product-form-card'>
            {blogData && (
              <Form>
                <Row>
                  <Col>
                    {' '}
                    <div className='add-product-input-div'>
                      <p>Blog title</p>
                      <input
                        type='text'
                        name='title'
                        value={blogData.title}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Region</p>
                      <input
                        type='text'
                        name='region'
                        value={blogData.region}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Fellow</p>
                      <input
                        type='text'
                        name='fellow'
                        value={blogData.fellow}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Category</p>
                      <input
                        type='text'
                        name='category'
                        value={blogData.category}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Blog Content</p>
                      <CKEditor
                        style={{ height: '100px' }}
                        editor={ClassicEditor}
                        data={blogData.content}
                        onReady={(editor) => {
                          console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log('Editor Data:', data);
                          handleChange({
                            target: { name: 'content', value: data },
                          });
                        }}
                        onBlur={(event, editor) => {
                          console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log('Focus.', editor);
                        }}
                      />
                    </div>
                  </Col>

                  <Col>
                    <div className='add-product-image-div'>
                      <div className='product-image-div'>
                        <img src={image} alt='preview' />
                      </div>
                    </div>
                  </Col>
                </Row>
                <button
                  onClick={editBlog}
                  type='submit'
                  className='add-category-btn'
                >
                  Edit Blog
                </button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditBlog;
