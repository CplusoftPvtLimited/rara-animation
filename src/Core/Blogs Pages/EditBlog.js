import React, { useEffect, useState, useRef } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import { useHistory } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';
import './AddBlog.css';

function EditBlog(props) {
  const [blogData, setBlogData] = useState();
  const [fellows, setFellows] = useState([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(undefined);
  const [categories, setCategories] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [validationErrors, setValidationErrors] = useState({
    title: '',
    content: '',
    fellow: '',
    category: '',
    region: '',
    profile: '',
    imagePath: '',
  });
  const blogId = props.match.params.blogId;
  const history = useHistory();
  const fileInputRef = useRef(null);

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    getBlogs();
    getBlogById();
    getCategories();
    getFellows();
  }, []);

  const getBlogById = () => {
    console.log('getBlogs');
    setBlogData();
    axios({
      method: 'get',
      url: `http://localhost:4500/api/blog/${blogId}`,
    })
      .then((response) => {
        setBlogData(response.data?.blogPost);
        setSelectedOptions(response.data?.blogPost?.relatedBlogs);
        console.log('blogData: ', response.data.blogPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    console.log('file: ', files);
    if (name === 'imagePath') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      if (files && files.length > 0) {
        reader.readAsDataURL(files[0]);
        setBlogData((prev) => ({
          ...prev,
          imagePath: files[0],
        }));
      }
    } else {
      setBlogData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const onSelectOptions = (selectedList, selectedItem) => {
    setSelectedOptions([...selectedOptions, selectedItem]);
  };

  const onRemoveOptions = (selectedList, removedItem) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== removedItem));
  };
  console.log('blog data: ', blogData);

  const editBlog = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const relatedBlogIds = selectedOptions.map((option) => option.id); // Extracting IDs from selected options
    console.log('relatedBlogIds: ', relatedBlogIds);
    const updatedData = new FormData();
    updatedData.append('title', blogData.title);
    updatedData.append('content', blogData.content);
    updatedData.append('fellow', blogData.fellow);
    updatedData.append('associatedFellow', blogData.associatedFellow);
    updatedData.append('category', blogData.category);
    updatedData.append('profile', blogData.profile);
    updatedData.append('region', blogData.region);
    updatedData.append('imagePath', blogData.imagePath);

    if (typeof JSON !== 'undefined' && typeof JSON.stringify === 'function') {
      updatedData.append('relatedBlogs', JSON.stringify(relatedBlogIds));
    } else {
      updatedData.append('relatedBlogs', relatedBlogIds.join(','));
    }

    console.log('blog updated data:', updatedData);
    try {
      axios
        .put(`http://localhost:4500/api/blog/${blogId}`, updatedData)
        .then((response) => {
          console.log('edit data', response);
          setBlogData({
            title: '',
            fellow: '',
            category: '',
            region: '',
            content: '',
            imagePath: '',
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

    if (blogData.title.trim() === '') {
      errors.title = 'This field is required';
    }
    if (blogData.content.trim() === '') {
      errors.content = 'This field is required';
    }
    if (blogData.fellow.trim() === '') {
      errors.fellow = 'This field is required';
    }

    if (blogData.category.trim() === '') {
      errors.category = 'This field is required';
    }

    if (blogData.region.trim() === '') {
      errors.region = 'This field is required';
    }

    if (blogData.profile.trim() === '') {
      errors.profile = 'This field is required';
    }

    if (!blogData.imagePath) {
      errors.imagePath = 'Please select an image';
    }
    return errors;
  };

  console.log('..........blogData: ', blogData);

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
                    <div className='add-product-input-div'>
                      <p>Blog title</p>
                      <input
                        type='text'
                        name='title'
                        value={blogData.title}
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
                        value={blogData.profile}
                        onChange={handleChange}
                      />
                      {validationErrors.profile && (
                        <p style={{ color: 'red' }}>
                          {validationErrors.profile}
                        </p>
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
                        // value={blogData.category}
                        defaultValue={blogData?.category?.id}
                        onChange={handleChange}
                        style={{ border: 'none', width: '100%' }}
                      >
                        <option value=''>Select Category</option>
                        {categories.map((category, index) => (
                          <option value={category?.id} key={category?.id}>
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
                        value={blogData.region}
                        onChange={handleChange}
                        style={{ border: 'none', width: '100%' }}
                      >
                        <option value=''>Select Region</option>
                        {regionOptions.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                      {validationErrors.region && (
                        <p style={{ color: 'red' }}>
                          {validationErrors.region}
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Fellow</p>
                      <select
                        name='fellow'
                        // value={blogData.fellow}
                        defaultValue={blogData?.fellow?.id}
                        onChange={handleChange}
                        style={{ border: 'none', width: '100%' }}
                      >
                        <option value=''>Select Fellow</option>
                        {fellows.map((fellow) => (
                          <option key={fellow.id} value={fellow?.id}>
                            {fellow?.name}
                          </option>
                        ))}
                      </select>
                      {validationErrors.fellow && (
                        <p style={{ color: 'red' }}>
                          {validationErrors.fellow}
                        </p>
                      )}
                    </div>
                  </Col>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Associated Fellow</p>
                      <select
                        name='fellow'
                        // value={blogData.associatedFellow}
                        defaultValue={blogData?.fellow?.id}
                        onChange={handleChange}
                        style={{ border: 'none', width: '100%' }}
                      >
                        <option value=''>Select Fellow</option>
                        {fellows.map((fellow) => (
                          <option key={fellow.id} value={fellow?.id}>
                            {fellow?.name}
                          </option>
                        ))}
                      </select>
                      {validationErrors.fellow && (
                        <p style={{ color: 'red' }}>
                          {validationErrors.fellow}
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Related Blogs</p>
                      <Multiselect
                        name='relatedBlogs'
                        options={relatedBlogs}
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
                      {validationErrors.content && (
                        <p style={{ color: 'red' }}>
                          {validationErrors.content}
                        </p>
                      )}
                    </div>
                  </Col>

                  <Col>
                    <div className='add-product-image-div'>
                      <div className='product-image-div'>
                        <img
                          src={imagePreviewUrl ?? blogData?.imagePath}
                          alt='preview'
                          style={{
                            width: '100px',
                            height: '100px',
                            cursor: 'pointer',
                          }}
                          onClick={handleImageClick}
                        />
                        <input
                          type='file'
                          name='imagePath'
                          ref={fileInputRef}
                          onChange={handleChange}
                          accept='image/jpeg, image/png, image/gif'
                          style={{ display: 'none' }}
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

                <button
                  onClick={editBlog}
                  type='submit'
                  className='add-category-btn'
                >
                  Update Blog
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
