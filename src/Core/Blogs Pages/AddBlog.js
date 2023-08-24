import React, { useState, useEffect } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Multiselect } from 'multiselect-react-dropdown';
import { useHistory } from 'react-router';
import axios from 'axios';
import './AddBlog.css';

const AddBlog = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [fellows, setFellows] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [removedOptions, setRemovedOptions] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    profile: '',
    category: '',
    region: '',
    fellow: '',
    associatedFellow: '',
    relatedBlogs: [],
    content: '',
    imagePath: '',
  });
  console.log('categories: ', categories);
  console.log('fellows: ', fellows);
  const [validationErrors, setValidationErrors] = useState({
    title: '',
    profile: '',
    category: '',
    region: '',
    fellow: '',
    associatedFellow: '',
    relatedBlogs: '',
    content: '',
    imagePath: '',
  });
  useEffect(() => {
    getCategories();
    getFellows();
    getBlogs();
  }, []);

  const getCategories = () => {
    setCategories([]);
    axios({
      method: 'get',
      url: 'http://localhost:4500/api/category',
    })
      .then((response) => {
        console.log('response: ', response?.data);
        setCategories(response?.data);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  const getFellows = () => {
    setCategories([]);
    axios({
      method: 'get',
      url: 'http://localhost:4500/api/profile/getAllProfiles',
    })
      .then((response) => {
        console.log('profiles: ', response?.data?.profiles);
        setFellows(response?.data?.profiles);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  const getBlogs = () => {
    setRelatedBlogs([]);
    axios({
      method: 'get',
      url: 'http://localhost:4500/api/blog/getAllBlogPosts',
    })
      .then((response) => {
        setRelatedBlogs(response?.data.blogPosts);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  const onSelectOptions = (selectedList, selectedItem) => {
    setSelectedOptions([...selectedOptions, selectedItem]);
  };

  const onRemoveOptions = (selectedList, removedItem) => {
    setRemovedOptions([...removedOptions, removedItem]);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    console.log('name value: ', name, value);
    if (name === 'imagePath') {
      const file = event.target.files[0];
      const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];

      if (file && allowedFileTypes.includes(file.type)) {
        setFormData({
          ...formData,
          [name]: file,
        });
      } else {
        setValidationErrors((prev) => ({
          ...prev,
          [name]:
            'Invalid file type. Only JPEG, PNG, and GIF files are allowed.',
        }));
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    setValidationErrors((prev) => ({ ...prev, [name]: '' }));
  }

  console.log('relatedBlogs : ', relatedBlogs);
  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const relatedBlogIds = selectedOptions.map((option) => option.id); // Extracting IDs from selected options

      console.log('relatedBlogs: ', formData.relatedBlogs);
      const formDataToSend = new FormData();

      formDataToSend.append('title', formData.title);
      formDataToSend.append('profile', formData.profile);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('region', formData.region);
      formDataToSend.append('fellow', formData.fellow);
      formDataToSend.append('associatedFellow', formData.associatedFellow);
      if (typeof JSON !== 'undefined' && typeof JSON.stringify === 'function') {
        formDataToSend.append('relatedBlogs', JSON.stringify(relatedBlogIds));
      } else {
        formDataToSend.append('relatedBlogs', relatedBlogIds.join(','));
      }
      formDataToSend.append('content', formData.content);
      formDataToSend.append('imagePath', formData.imagePath);
      console.log('formDataToSend', formDataToSend);
      axios
        .post('http://localhost:4500/api/blog/createBlog', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log('response response: ', response);
          setFormData({
            title: '',
            profile: '',
            category: '',
            region: '',
            fellow: '',
            associatedFellow: '',
            relatedBlogs: '',
            content: '',
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

  const validateForm = () => {
    let errors = {};

    if (formData.title.trim() === '') {
      errors.title = 'This field is required';
    }
    if (formData.content.trim() === '') {
      errors.content = 'This field is required';
    }
    if (formData.fellow.trim() === '') {
      errors.fellow = 'This field is required';
    }
    if (formData.associatedFellow.trim() === '') {
      errors.associatedFellow = 'This field is required';
    }

    if (formData.category.trim() === '') {
      errors.category = 'This field is required';
    }

    if (formData.region.trim() === '') {
      errors.region = 'This field is required';
    }

    if (formData.profile.trim() === '') {
      errors.profile = 'This field is required';
    }

    if (!formData.imagePath) {
      errors.imagePath = 'Please select an image';
    }

    // if (!formData.relatedBlogs) {
    //   errors.relatedBlogs = 'Please select an relatedBlogs';
    // }

    return errors;
  };

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
                    {validationErrors.title && (
                      <p style={{ color: 'red' }}>{validationErrors.title}</p>
                    )}
                  </div>
                </Col>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Blog Profile</p>
                    <input
                      type='text'
                      name='profile'
                      value={formData.profile}
                      onChange={handleChange}
                    />
                    {validationErrors.profile && (
                      <p style={{ color: 'red' }}>{validationErrors.profile}</p>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Category</p>
                    <select
                      name='category'
                      value={formData.category}
                      onChange={handleChange}
                      style={{ border: 'none', width: '100%' }}
                    >
                      <option value=''>Select Category</option>
                      {categories.map((category, index) => (
                        <option value={category.id} key={category.id}>
                          {category?.title}
                        </option>
                      ))}
                    </select>

                    {validationErrors.category && (
                      <p style={{ color: 'red' }}>
                        {validationErrors.category}
                      </p>
                    )}
                  </div>
                </Col>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Region</p>
                    <select
                      name='region'
                      value={formData.region}
                      onChange={handleChange}
                      style={{ border: 'none', width: '100%' }}
                    >
                      <option value=''>Select Region</option>
                      {regionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {validationErrors.region && (
                      <p style={{ color: 'red' }}>{validationErrors.region}</p>
                    )}
                  </div>
                </Col>
              </Row>

              {/* fellow and associated fellow */}
              <Row>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Fellow</p>
                    <select
                      name='fellow'
                      value={formData.fellow}
                      onChange={handleChange}
                      style={{ border: 'none', width: '100%' }}
                    >
                      <option value=''>Select Fellow</option>
                      {fellows.map((fellow) => (
                        <option key={fellow} value={fellow.id}>
                          {fellow.name}
                        </option>
                      ))}
                    </select>

                    {validationErrors.fellow && (
                      <p style={{ color: 'red' }}>{validationErrors.fellow}</p>
                    )}
                  </div>
                </Col>
                <Col>
                  <div className='add-product-input-div'>
                    <p>Associated Fellow</p>

                    <select
                      name='associatedFellow'
                      value={formData.associatedFellow}
                      onChange={handleChange}
                      style={{ border: 'none', width: '100%' }}
                    >
                      <option value=''>Select Associated Fellow</option>
                      {fellows.map((fellow) => (
                        <option key={fellow} value={fellow.id}>
                          {fellow.name}
                        </option>
                      ))}
                    </select>

                    {validationErrors.associatedFellow && (
                      <p style={{ color: 'red' }}>
                        {validationErrors.associatedFellow}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>

              {/* related blogs */}
              <Row>
                <Col>
                  {relatedBlogs.length > 0 && (
                    <div className='add-product-input-div'>
                      <p>Related Blogs</p>
                      <Multiselect
                        options={relatedBlogs}
                        // name='particulars'
                        name='relatedBlogs'
                        onSelect={onSelectOptions}
                        onRemove={onRemoveOptions}
                        onChange={handleChange}
                        displayValue='title'
                        closeIcon='cancel'
                        placeholder='Select Options'
                        selectedValues={selectedOptions}
                        className='multiSelectContainer'
                      />
                    </div>
                  )}
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
                    {validationErrors.content && (
                      <p style={{ color: 'red' }}>{validationErrors.content}</p>
                    )}
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
                      {validationErrors.imagePath && (
                        <p style={{ color: 'red' }}>
                          {validationErrors.imagePath}
                        </p>
                      )}
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
