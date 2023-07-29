import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import image from '../../Assets/khan.jpeg';
import { useHistory } from 'react-router';
import axios from 'axios';
import '../Blogs Pages/Blogs.css';

const AddCategory = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: '',
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
      axios
        .post('http://localhost:4500/api/category/createCategory', formData)
        .then((response) => {
          console.log('response: ', response);
          setFormData({
            title: '',
          });
          history.push('/categories');
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
          <h4>Add Category</h4>
          <p>
            Please fill the Category details in the form below to add a new
            category.
          </p>
          <Card className='add-product-form-card'>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col lg='6'>
                  <div className='add-product-input-div'>
                    <p>Category title</p>
                    <input
                      type='text'
                      name='title'
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>

              <button type='submit' className='add-category-btn'>
                Add Category
              </button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddCategory;
