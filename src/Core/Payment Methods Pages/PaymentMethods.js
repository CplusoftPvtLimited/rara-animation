import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Tab, Nav } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Sidebar from '../../Components/Sidebar';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Switch from 'react-switch';
import '../Blogs Pages/Blogs.css';
import './stripe.css';

const PaymentMethods = () => {
  const [activeTab, setActiveTab] = useState('stripe');
  const [checked, setChecked] = useState(false);
  const [keyData, setKeyData] = useState();
  const [coinbaseData, setCoinbaseData] = useState();
  const [bankData, setBankData] = useState();

  useEffect(() => {
    getStripeKey();
    getCoinbaseKey();
    getBankDetails();
  }, []);

  const getStripeKey = () => {
    setKeyData();
    axios({
      method: 'get',
      url: 'http://localhost:4500/api/secret/1',
    })
      .then((response) => {
        console.log('keyData: ', response);
        setKeyData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCoinbaseKey = () => {
    setCoinbaseData();
    axios({
      method: 'get',
      url: 'http://localhost:4500/api/secret/coinbase/1',
    })
      .then((response) => {
        console.log('coinbase: ', response);
        setCoinbaseData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBankDetails = (req, res) => {
    setBankData();
    axios({
      method: 'get',
      url: 'http://localhost:4500/api/bank/1',
    })
      .then((response) => {
        console.log('bank Details: ', response);
        setBankData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKeyData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log('setKeyData: ', setKeyData);
  };

  const handleChange2 = (newChecked) => {
    setChecked(newChecked);
  };

  const handleChange3 = (event) => {
    const { name, value } = event.target;
    setCoinbaseData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChange4 = (event) => {
    const { name, value } = event.target;
    setBankData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const editStripeKey = (event) => {
    event.preventDefault();

    const updatedData = new FormData();
    updatedData.append('clientKey', keyData.clientKey);
    updatedData.append('secretKey', keyData.secretKey);

    try {
      axios
        .put('http://localhost:4500/api/secret/keys/1', keyData)
        .then((response) => {
          console.log('updated Data: ', response);
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    } catch (err) {
      console.log('Error: ' + err.message);
    }
  };

  const editCoinbaseKey = (event) => {
    event.preventDefault();
    console.log('editCoinbaseKey');
    const updatedData = new FormData();
    updatedData.append('checkoutId', coinbaseData.checkoutId);

    try {
      axios
        .put('http://localhost:4500/api/secret/coinbase/1', coinbaseData)
        .then((response) => {
          console.log('coinbaseData: ', response);
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    } catch (err) {
      console.log('Error: ' + err.message);
    }
  };

  const editBankData = (event) => {
    event.preventDefault();
    console.log('editCoinbaseKey');
    const updatedData = new FormData();
    updatedData.append('bankTransfer', bankData.bankTransfer);

    try {
      axios
        .put('http://localhost:4500/api/bank/1', bankData)
        .then((response) => {
          console.log('updatged bankData: ', response);
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
        <Col className='categories-content' lg={10}>
          <Row>
            <Col lg={10}>
              <h4>Payment Methods</h4>
              <p>Below are the payment methods.</p>
            </Col>
          </Row>
          <hr />

          <Tab.Container
            id='left-tabs-example'
            defaultActiveKey='first'
            style={{ marginTop: '70px' }}
          >
            <Row>
              <Col sm={2}>
                <Nav variant='pills' className='flex-column'>
                  <Nav.Item>
                    <Nav.Link eventKey='first' className='sidebar-item'>
                      Stripe
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second' className='sidebar-item'>
                      Coinbase
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='third' className='sidebar-item'>
                      Bank Transfer
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={1}></Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    <label style={{ display: 'flex' }}>
                      <Switch
                        onChange={handleChange2}
                        checked={checked}
                        // style={{ marginRight: '5px !important' }}
                      />
                      <span>Display Stripe</span>
                    </label>

                    <Row>
                      <Col lg='6'>
                        <div className='add-product-input-div'>
                          <p>Add Client Key</p>
                          <input
                            type='text'
                            name='clientKey'
                            value={keyData?.clientKey}
                            onChange={handleChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='6'>
                        <div className='add-product-input-div'>
                          <p>Add Secret Key</p>
                          <input
                            type='text'
                            name='secretKey'
                            value={keyData?.secretKey}
                            onChange={handleChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <button
                      type='submit'
                      className='add-category-btn'
                      onClick={editStripeKey}
                    >
                      Submit
                    </button>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <label style={{ display: 'flex' }}>
                      <Switch onChange={handleChange2} checked={checked} />
                      <span>Display Coinbase</span>
                    </label>

                    <Row>
                      <Col lg='6'>
                        <div className='add-product-input-div'>
                          <p>Coinbase Checkout Id</p>
                          <input
                            type='text'
                            name='checkoutId'
                            value={coinbaseData?.checkoutId}
                            onChange={handleChange3}
                          />
                        </div>
                      </Col>
                    </Row>

                    <button
                      type='submit'
                      className='add-category-btn'
                      onClick={editCoinbaseKey}
                    >
                      Submit
                    </button>
                  </Tab.Pane>

                  <Tab.Pane eventKey='third'>
                    <label style={{ display: 'flex' }}>
                      <Switch onChange={handleChange2} checked={checked} />
                      <span>Display Bank Transfer</span>
                    </label>
                    <Row>
                      <Col>
                        <div className='add-product-input-div'>
                          <p>Bank Transfer</p>
                          <CKEditor
                            editor={ClassicEditor}
                            data={bankData?.bankTransfer}
                            onReady={(editor) => {}}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              console.log('Editor Data:', data);
                              handleChange4({
                                target: { name: 'bankTransfer', value: data },
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
                    </Row>
                    <button
                      type='submit'
                      className='add-category-btn'
                      onClick={editBankData}
                    >
                      Submit
                    </button>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentMethods;
