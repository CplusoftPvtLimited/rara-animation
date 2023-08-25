import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
  Modal,
} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { setPaymentMethod, setAmount } from '../../store/donationSlice';
import { setFrequency } from '../../store/paymentFrequencySlice';
import './donate.css';

import DonatePage from './DonatePage';

const Donate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState('once');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showRightColumn, setShowRightColumn] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [error, setError] = useState(null);
  const [coinbaseData, setCoinbaseData] = useState();
  const [hostedUrl, setHostedUrl] = useState();
  const [showBankTransferModal, setShowBankTransferModal] = useState(false);
  const [bankData, setBankData] = useState();
  const actualSelectedAmount = useSelector(
    (state) => state.donation.selectedAmount
  );

  console.log('actualSelectedAmount: ', actualSelectedAmount);
  useEffect(() => {
    getCoinbaseKey();
    getBankDetails();
  }, []);

  useEffect(() => {
    axios
      .post('http://localhost:4500/api/checkout/coinbase', {
        amount: actualSelectedAmount,
      })
      .then((response) => {
        console.log('response', response.data.charge.hosted_url);
        setHostedUrl(response.data.charge.hosted_url);
      })
      .catch((error) => {
        console.error('Error calling API:', error);
      });
  }, []);

  const handleButtonClick = (value) => {
    setSelectedButton(value);
    setError(null);
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    dispatch(setAmount(amount));
  };

  const handleDonateClick = () => {
    if (selectedAmount !== null) {
      console.log('Selected Donation Amount: $' + selectedAmount);
      setError(null);
      setShowRightColumn(true);
    } else {
      setError('Please select a donation amount.');
    }
  };

  const handlePaymentMethodChange = (event) => {
    // setSelectedPaymentMethod(event.target.value);
    const selectedMethod = event.target.value;
    console.log('selectedMethod: ', selectedMethod);
    dispatch(setPaymentMethod(event.target.value));

    setSelectedPaymentMethod(selectedMethod);
    if (selectedMethod === 'bankTransfer') {
      setShowBankTransferModal(true);
    }
  };

  const renderTickSign = (amount) => {
    return selectedAmount === amount ? (
      <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '5px' }} />
    ) : null;
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

  useEffect(() => {
    if (selectedPaymentMethod) {
      switch (selectedPaymentMethod) {
        case 'stripe':
          navigate('/stripe');
          break;
        case 'coinbase':
          if (coinbaseData?.active) {
            window.location.href = hostedUrl;
          } else {
            navigate('/coinbase');
          }
          break;
        default:
          break;
      }
    }
  }, [selectedPaymentMethod]);

  console.log('selectedAmount: ', selectedAmount);
  return (
    <div>
      <Container className='donateUs'>
        <h2 style={{ fontSize: '144px' }}>DONATE US</h2>
      </Container>

      <Container style={{ marginTop: '40px' }}>
        <Row>
          <Col xs={6}>
            <DonatePage />
          </Col>
          {showRightColumn ? (
            <Col xs={6}>
              <Form>
                <Form.Group controlId='paymentMethod'>
                  <Form.Label>Select Payment Method:</Form.Label>
                  <div className='paymentMethod'>
                    <label style={{ margin: 0 }}>
                      <input
                        type='radio'
                        name='paymentMethod'
                        value='stripe'
                        onChange={handlePaymentMethodChange}
                        checked={selectedPaymentMethod === 'stripe'}
                        style={{ marginRight: '5px' }}
                      />
                      Stripe
                    </label>
                  </div>
                  <div className='paymentMethod'>
                    <label style={{ margin: 0 }}>
                      <input
                        type='radio'
                        name='paymentMethod'
                        value='coinbase'
                        onChange={handlePaymentMethodChange}
                        checked={selectedPaymentMethod === 'coinbase'}
                        style={{ marginRight: '5px' }}
                      />
                      Coinbase
                    </label>
                  </div>
                  <div className='paymentMethod'>
                    <label style={{ margin: 0 }}>
                      <input
                        type='radio'
                        name='paymentMethod'
                        value='bankTransfer'
                        onChange={handlePaymentMethodChange}
                        checked={selectedPaymentMethod === 'bankAccount'}
                        style={{ marginRight: '5px', backgroundColor: 'red' }}
                      />
                      Bank Transfer
                    </label>
                  </div>
                </Form.Group>
                {bankData?.active ? (
                  <Modal
                    show={showBankTransferModal}
                    onHide={() => setShowBankTransferModal(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Bank Transfer Payment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Bank Transfer</p>
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: bankData?.bankTransfer || '',
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant='secondary'
                        onClick={() => setShowBankTransferModal(false)}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                ) : (
                  <Modal
                    show={showBankTransferModal}
                    onHide={() => setShowBankTransferModal(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Bank Transfer Payment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Bank Transfer is not present at the moment.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant='secondary'
                        onClick={() => setShowBankTransferModal(false)}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}
              </Form>
            </Col>
          ) : (
            <Col
              xs={6}
              style={{
                backgroundColor: 'rgba(227, 227, 227, 1)',
              }}
            >
              <h5 className='donate'>How often would you like to donate?</h5>
              <ButtonGroup
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '45px',
                }}
              >
                <Button
                  variant={
                    selectedButton === 'once' ? 'primary' : 'outline-primary'
                  }
                  onClick={() => handleButtonClick('once')}
                  style={{
                    backgroundColor:
                      selectedButton === 'once'
                        ? 'rgba(138, 0, 0, 1)'
                        : 'white',
                    color:
                      selectedButton === 'once'
                        ? 'white'
                        : 'rgba(138, 0, 0, 1)',
                    border: 'none',
                    width: '130px',
                    flexGrow: 'inherit',
                  }}
                >
                  Once Only
                </Button>
                <Button
                  variant={
                    selectedButton === 'monthly' ? 'primary' : 'outline-primary'
                  }
                  onClick={() => handleButtonClick('monthly')}
                  style={{
                    backgroundColor:
                      selectedButton === 'monthly'
                        ? 'rgba(138, 0, 0, 1)'
                        : 'white',
                    color:
                      selectedButton === 'monthly'
                        ? 'white'
                        : 'rgba(138, 0, 0, 1)',
                    border: 'none',
                    width: '130px',
                    flexGrow: 'inherit',
                  }}
                >
                  Monthly
                </Button>
              </ButtonGroup>

              <hr
                style={{
                  width: '460px',
                  margin: 'auto',
                  paddingBottom: '35px',
                }}
              />
              <h5 className='donate'>How much would you like to donate?</h5>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '60px',
                  }}
                >
                  <Button
                    variant='light'
                    className='rupee'
                    onClick={() => handleAmountClick(10)}
                  >
                    $10{renderTickSign(10)}
                  </Button>
                  <Button
                    variant='light'
                    // variant={selectedAmount === 20 ? 'primary' : 'light'}
                    className='rupee'
                    onClick={() => handleAmountClick(20)}
                  >
                    $20{renderTickSign(20)}
                  </Button>
                  <Button
                    variant='light'
                    className='rupee'
                    onClick={() => handleAmountClick(30)}
                  >
                    $30{renderTickSign(30)}
                  </Button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant='light'
                    className='rupee'
                    onClick={() => handleAmountClick(40)}
                  >
                    $40{renderTickSign(40)}
                  </Button>
                  <Button
                    variant='light'
                    className='rupee'
                    onClick={() => handleAmountClick(50)}
                  >
                    $50{renderTickSign(50)}
                  </Button>
                  <Button
                    variant='light'
                    className='rupee'
                    onClick={() => handleAmountClick(60)}
                  >
                    $60{renderTickSign(60)}
                  </Button>
                </div>
              </div>
              <Container style={{ display: 'flex' }}>
                <Button
                  variant='primary'
                  style={{
                    border: 'none',
                    backgroundColor: 'rgba(138, 0, 0, 1)',
                    margin: 'auto',
                    marginBottom: '20px',
                  }}
                  size='lg'
                  onClick={handleDonateClick}
                >
                  Donate
                </Button>
              </Container>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Donate;
