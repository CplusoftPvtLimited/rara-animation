import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import image from '../../Assets/khan.jpeg';
import { useHistory } from 'react-router';
import axios from 'axios';
import './AddBlog.css';

const AddBlog = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    fellow: '',
    category: '',
    region: '',
    profile: '',
    imagePath: '',
  });

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'imagePath') {
      console.log('event.target.files[0]', event.target.files[0]);
      console.log('name', name);
      setFormData({
        ...formData,
        [name]: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }
  console.log('formData: ', formData);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log('Adding: image path: ', formData.imagePath);
      const formDataToSend = new FormData();

      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('fellow', formData.fellow);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('region', formData.region);
      formDataToSend.append('profile', formData.profile);
      // formDataToSend.append('imagePath', formData.imagePath);
      formDataToSend.append('imagePath', formData.imagePath); // Append the image File object here

      console.log('formDataToSend: ', formDataToSend);
      axios
        .post('http://localhost:4500/api/blog/createBlog', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log('response: ', response);
          setFormData({
            title: '',
            content: '',
            fellow: '',
            category: '',
            region: '',
            profile: '',
            imagePath: '',
          });
          history.push('/blogs');
        })
        .catch((error) => {
          console.log('Error: ' + error.message);
        });
    } catch (err) {
      console.log('Error: ' + err.message);
    }
  }

  const regionOptions = [
    'Pakistan',
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Japan',
    'China',
  ];

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
                    <select
                      name='region'
                      value={formData.region}
                      onChange={handleChange}
                      style={{ border: 'none' }}
                    >
                      <option value=''>Select Region</option>
                      {regionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Profile</p>
                    <input
                      type='text'
                      name='profile'
                      value={formData.profile}
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
                      editor={ClassicEditor}
                      // data='<p>lets start blog content</p>'ss
                      onReady={(editor) => {}}
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
                      <input
                        type='file'
                        name='imagePath'
                        // value={formData.imagePath?.name}
                        onChange={handleChange}
                      />
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
    </div>
  );
};

export default AddBlog;
