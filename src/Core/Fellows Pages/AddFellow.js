import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import image from '../../Assets/khan.jpeg';
import { useHistory } from 'react-router';
import axios from 'axios';
import '../Blogs Pages/AddBlog.css';

const AddProfile = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    nameEnglish: '',
    tagLine: '',
    imagePath: '',
    jobPost: '',
    profileDesc: '',
    websiteUrl: '',
    heading: '',
    paragraph: '',
    // featuredImage:''
  });

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
      console.log('Adding');
      const formDataToSend = new FormData();

      formDataToSend.append('name', formData.name);
      formDataToSend.append('nameEnglish', formData.nameEnglish);
      formDataToSend.append('tagLine', formData.tagLine);
      formDataToSend.append('imagePath', formData.imagePath);
      formDataToSend.append('jobPost', formData.jobPost);
      formDataToSend.append('profileDesc', formData.profileDesc);
      formDataToSend.append('websiteUrl', formData.websiteUrl);
      formDataToSend.append('heading', formData.heading);
      formDataToSend.append('paragraph', formData.paragraph);
      // formDataToSend.append('featuredImage', formData.featuredImage);

      console.log('formDataToSend: ', formDataToSend);
      axios
        .post('http://localhost:4500/api/profile/createProfile', formDataToSend)
        .then((response) => {
          console.log('response: ', response);
          setFormData({
            name: '',
            nameEnglish: '',
            tagLine: '',
            imagePath: '',
            jobPost: '',
            profileDesc: '',
            websiteUrl: '',
            heading: '',
            paragraph: '',
            // featuredImage: '',
          });
          history.push('/fellows');
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
            Please fill the Fellow details in the form below to add a new
            fellow.
          </p>
          <Card className='add-product-form-card'>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Name</p>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col>
                  <div className='add-product-input-div'>
                    <p>English Name</p>
                    <input
                      type='text'
                      name='nameEnglish'
                      value={formData.nameEnglish}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Tag</p>
                    <input
                      type='text'
                      name='tagLine'
                      value={formData.tagLine}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Job Post</p>
                    <input
                      type='text'
                      name='jobPost'
                      value={formData.jobPost}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Heading</p>
                    <input
                      type='text'
                      name='heading'
                      value={formData.heading}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Paragraph</p>
                    <input
                      type='text'
                      name='paragraph'
                      value={formData.paragraph}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Profile Description</p>
                    <CKEditor
                      editor={ClassicEditor}
                      // data='<p>lets start blog content</p>'ss
                      onReady={(editor) => {}}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log('Editor Data:', data);
                        handleChange({
                          target: { name: 'profileDesc', value: data },
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
                      {/* <img src={image} alt='preview' /> */}
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

export default AddProfile;
