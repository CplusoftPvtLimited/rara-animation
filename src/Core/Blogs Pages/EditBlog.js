import React, { useEffect, useState, useRef } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import image from '../../Assets/khan.jpeg';
import { useHistory } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import './AddBlog.css';

function EditBlog(props) {
  const [blogData, setBlogData] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(undefined);
  const [newImageFile, setNewImageFile] = useState(null);

  const blogId = props.match.params.blogId;
  console.log('blogId: ' + blogId);
  const history = useHistory();
  const fileInputRef = useRef(null);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    console.log('getBlogs');
    setBlogData();
    axios({
      method: 'get',
      url: `http://localhost:4500/api/blog/${blogId}`,
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
  const editBlog = (event) => {
    event.preventDefault();
    console.log('image: ', blogData.imagePath);
    const updatedData = new FormData();
    updatedData.append('title', blogData.title);
    updatedData.append('content', blogData.content);
    updatedData.append('fellow', blogData.fellow);
    updatedData.append('category', blogData.category);
    updatedData.append('region', blogData.region);
    updatedData.append('imagePath', blogData.imagePath);

    try {
      console.log('updatedData: ', updatedData);
      axios
        .patch(`http://localhost:4500/api/blog/${blogId}`, updatedData)
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
  const fellowOptions = [
    'fellow 1',
    'fellow 2',
    'fellow 3',
    'fellow 4',
    'fellow 5',
    'fellow 6',
    'fellow 7',
    'fellow 8',
    'fellow 9',
    'fellow 10',
  ];

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
                    </div>
                  </Col>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Region</p>
                      <select
                        name='region'
                        value={blogData.region}
                        onChange={handleChange}
                        style={{ border: 'none' }}
                      >
                        <option value=''>Select Region</option>
                        {regionOptions.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Fellow</p>
                      <select
                        name='fellow'
                        value={blogData.fellow}
                        onChange={handleChange}
                        style={{ border: 'none' }}
                      >
                        <option value=''>Select Fellow</option>
                        {fellowOptions.map((fellow) => (
                          <option key={fellow} value={fellow}>
                            {fellow}
                          </option>
                        ))}
                      </select>
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
                        {/* <input
                          type='file'
                          name='imagePath'
                          // value={formData.imagePath?.name}
                          src={blogData.imagePath}
                          // value={blogData.imagePath}
                          onChange={handleChange}
                        /> */}

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
                          style={{ display: 'none' }}
                        />
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
