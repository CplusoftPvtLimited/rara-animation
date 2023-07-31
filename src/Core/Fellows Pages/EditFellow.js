import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import image from '../../Assets/khan.jpeg';
import { useHistory } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import '../Blogs Pages/AddBlog.css';

function EditFellow(props) {
  const [profileData, setProfileData] = useState();
  const profileId = props.match.params.fellowId;
  console.log('profileId: ' + profileId);
  const history = useHistory();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    console.log('getBlogs');
    setProfileData();
    await axios({
      method: 'get',
      url: `http://localhost:4500/api/profile/${profileId}`,
    })
      .then((response) => {
        setProfileData(response.data?.profile);
        console.log('response', response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const editFellow = (event) => {
    event.preventDefault();

    const updatedData = new FormData();
    updatedData.append('name', profileData.name);
    updatedData.append('nameEnglish', profileData.nameEnglish);
    updatedData.append('tagLine', profileData.tagLine);
    // updatedData.append('imagePath', profileData.imagePath);
    updatedData.append('jobPost', profileData.jobPost);
    updatedData.append('profileDesc', profileData.profileDesc);
    updatedData.append('websiteUrl', profileData.websiteUrl);
    updatedData.append('heading', profileData.heading);
    updatedData.append('paragraph', profileData.paragraph);
    // updatedData.append('featuredImage', profileData.featuredImage);

    try {
      console.log('updatedData: ', updatedData);
      axios
        .put(
          `http://localhost:4500/api/profile/updateProfile/${profileId}`,
          updatedData
        )
        .then((response) => {
          console.log('edit data', response);
          setProfileData({
            name: '',
            nameEnglish: '',
            tagLine: '',
            // imagePath: '',
            jobPost: '',
            profileDesc: '',
            websiteUrl: '',
            heading: '',
            paragraph: '',
            // featuredImage: '',
          });
          history.push('/fellows');
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    } catch (err) {
      console.log('Error: ' + err.message);
    }
  };

  return (
    <div className='dashboard-parent-div'>
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className='add-category-content' lg={10}>
          <h4>Edit Fellow</h4>
          <p>
            Please fill the Fellow details in the form below to update a fellow.
          </p>
          <Card className='add-product-form-card'>
            {profileData && (
              <Form>
                <Row>
                  <Col>
                    <div className='add-product-input-div'>
                      <p>Name</p>
                      <input
                        type='text'
                        name='name'
                        value={profileData.name}
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
                        value={profileData.nameEnglish}
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
                        value={profileData.tagLine}
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
                        value={profileData.jobPost}
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
                        value={profileData.heading}
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
                        value={profileData.paragraph}
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
                        data={profileData.profileDesc}
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
                        <img src={image} alt='preview' />
                      </div>
                    </div>
                  </Col>
                </Row>

                <button
                  onClick={editFellow}
                  type='submit'
                  className='add-category-btn'
                >
                  Update Fellow
                </button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditFellow;
