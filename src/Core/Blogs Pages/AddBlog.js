import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import image from '../../Assets/khan.jpeg';

import axios from 'axios';
import './AddBlog.css';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    fellow: '',
    category: '',
    region: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  console.log('formData: ', formData);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log('Adding');
      const formDataToSend = new FormData();
      // console.log('title: ', formData.title);
      console.log('formData: ', formData);

      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('fellow', formData.fellow);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('region', formData.region);
      console.log('formDataToSend: ', formDataToSend);
      axios
        .post('http://localhost:4500/api/createBlog', formDataToSend)
        .then((response) => {
          console.log('response: ', response);
          setFormData({
            title: '',
            content: '',
            fellow: '',
            region: '',
          });
        })
        .catch((error) => {
          console.log('Error: ' + error.message);
        });
    } catch (err) {
      console.log('Error: ' + err.message);
    }
  }
  return (
    <div className='dashboard-parent-div'>
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className='add-category-content' lg={10}>
          <h4>Add Blog</h4>
          <p>
            Please fill the Blog details in the form below to add a new blog.
          </p>
          <Card className='add-product-form-card'>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  {' '}
                  <div className='add-product-input-div'>
                    <p>Blog title</p>
                    <input
                      type='text'
                      name='title'
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Fellow</p>
                    <input
                      type='text'
                      name='fellow'
                      value={formData.fellow}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Category</p>
                    <input
                      type='text'
                      name='category'
                      value={formData.category}
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
                      value={formData.region}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  {' '}
                  <div className='add-product-input-div'>
                    <p>Blog Content</p>
                    <CKEditor
                      editor={ClassicEditor}
                      // data='<p>lets start blog content</p>'ss
                      onReady={(editor) => {
                        // console.log('Editor is ready to use!', editor);
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

              <button type='submit' className='add-category-btn'>
                Add Blog
              </button>
            </Form>
          </Card>
        </Col>
      </Row>
      {/* <Ckeditor /> */}
    </div>
  );
};

export default AddBlog;
