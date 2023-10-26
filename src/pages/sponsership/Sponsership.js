import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import BeforeFooter from "../../pages/Homepage/FooterContainer";

import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setPaymentMethod } from "../../store/donationSlice";
import Sponser from "./Sponser";
import SponserForm from "./SponserForm";
import "./sponsorship.css";

const Sponsership = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showRightColumn, setShowRightColumn] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [error, setError] = useState(null);
  const [coinbaseData, setCoinbaseData] = useState();
  const [hostedUrl, setHostedUrl] = useState();
  const [showBankTransferModal, setShowBankTransferModal] = useState(false);
  const [otherValue, setOtherValue] = useState(null);
  const [bankData, setBankData] = useState();
  const actualSelectedAmount = useSelector(
    (state) => state.donation.selectedAmount
  );
  useEffect(() => {
    getCoinbaseKey();
    getBankDetails();
  }, []);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/checkout/coinbase`, {
        amount: actualSelectedAmount,
      })
      .then((response) => {
        console.log("response response response", response);
        setHostedUrl(response.data.charge.hosted_url);
      })
      .catch((error) => {
        console.error("Error calling API:", error);
      });
  }, [selectedAmount]);

  //
  const [formData, setFormData] = useState({
    organizationName: "",
    contact: "",
    email: "",
    number: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    organizationName: "",
    contact: "",
    email: "",
    number: "",
    message: "",
  });
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleCheckboxChange = (e) => {
    const amount = event.target.checked ? 250000 : null;
    console.log("amount amount: ", amount);
    setCheckboxChecked(e.target.checked);
    dispatch(setAmount(amount));
    setSelectedAmount(amount);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    try {
      const formDataToSend = new FormData();
      console.log("formData: ", formData);
      formDataToSend.append("organizationName", formData.organizationName);
      formDataToSend.append("contact", formData.contact);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("number", formData.number);
      formDataToSend.append("message", formData.message);
      if (actualSelectedAmount) {
        axios
          .post("http://localhost:4500/api/sponsor/createPost", formData)
          .then((response) => {
            console.log("response response: ", response);
            setFormData({
              organizationName: "",
              contact: "",
              email: "",
              number: "",
              message: "",
            });
            setShowRightColumn(true);
          })
          .catch((error) => {
            console.log("Error: " + error.message);
          });
      }
    } catch (err) {
      console.log("Error: " + err.message);
    }
  }

  const validateForm = () => {
    let errors = {};

    if (formData.organizationName.trim() === "") {
      errors.organizationName = "This field is required";
    }
    if (formData.contact.trim() === "") {
      errors.contact = "This field is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "This field is required";
    }
    if (formData.number.trim() === "") {
      errors.number = "This field is required";
    }
    if (!checkboxChecked) {
      errors.sponsorship = "Sponsorship is required";
    }

    return errors;
  };
  //

  const handleButtonClick = (value) => {
    setSelectedButton(value);
    setError(null);
  };

  const handleDonateClick = () => {
    if (actualSelectedAmount) {
      setError(null);
      setShowRightColumn(true);
    } else {
      setError("Please select a donation amount.");
    }
  };

  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;
    console.log("selectedMethod: ", selectedMethod);
    dispatch(setPaymentMethod(event.target.value));

    setSelectedPaymentMethod(selectedMethod);
    if (selectedMethod === "bankTransfer") {
      setShowBankTransferModal(true);
    }
  };

  // const renderTickSign = (amount) => {
  //   return selectedAmount === amount ? (
  //     <FontAwesomeIcon icon={faCheck} style={{ marginLeft: "5px" }} />
  //   ) : null;
  // };

  const getCoinbaseKey = () => {
    setCoinbaseData();
    axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER}/secret/coinbase/1`,
    })
      .then((response) => {
        console.log("coinbase: ", response);
        setCoinbaseData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBankDetails = (req, res) => {
    setBankData();
    axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER}/bank/1`,
    })
      .then((response) => {
        console.log("bank Details: ", response);
        setBankData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (selectedPaymentMethod) {
      switch (selectedPaymentMethod) {
        case "stripe":
          navigate("/stripe");
          break;
        case "coinbase":
          // if (coinbaseData?.active) {
          window.location.href = hostedUrl;
          // } else {
          //   navigate("/coinbase");
          // }
          break;
        default:
          break;
      }
    }
  }, [selectedPaymentMethod]);

  // console.log("selectedAmount: ", selectedAmount);
  return (
    <div>
      <Container className="donateUs">
        <h2 className="sponsorship" style={{ fontSize: "144px" }}>
          SPONSERSHIP
        </h2>
      </Container>

      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Row>
          <Col xs={12} lg={6}>
            <Sponser />
          </Col>
          {showRightColumn ? (
            <Col xs={12} lg={6}>
              <Form>
                <Form.Group controlId="paymentMethod">
                  <Form.Label>Select Payment Method:</Form.Label>
                  <div className="paymentMethod">
                    <label style={{ margin: 0 }}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="stripe"
                        onChange={handlePaymentMethodChange}
                        checked={selectedPaymentMethod === "stripe"}
                        style={{ marginRight: "5px" }}
                      />
                      Stripe
                    </label>
                  </div>
                  <div className="paymentMethod">
                    <label style={{ margin: 0 }}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="coinbase"
                        onChange={handlePaymentMethodChange}
                        checked={selectedPaymentMethod === "coinbase"}
                        style={{ marginRight: "5px" }}
                      />
                      Coinbase
                    </label>
                  </div>
                  <div className="paymentMethod">
                    <label style={{ margin: 0 }}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bankTransfer"
                        onChange={handlePaymentMethodChange}
                        checked={selectedPaymentMethod === "bankAccount"}
                        style={{ marginRight: "5px", backgroundColor: "red" }}
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
                          __html: bankData?.bankTransfer || "",
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
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
                        variant="secondary"
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
              xs={12}
              lg={6}
              style={{
                backgroundColor: "rgba(227, 227, 227, 1)",
              }}
            >
              <h5 className="sponsor">Ready to Sponsor a Research Paper?</h5>
              <p style={{ padding: "0 75px" }}>
                To become a sponsor, please fill out the form below, and our
                team will reach out to you promptly to discuss the details and
                select a research project aligned with your values and
                interests.
              </p>
              {/* <SponserForm /> */}

              <div className="dashboard-parent-div">
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                  }}
                >
                  <Col className="add-category-content" lg={10}>
                    <Card className="add-product-form-card">
                      <Form>
                        <Row>
                          <Col>
                            <div className="add-product-input-div">
                              <p>Organization Name</p>
                              <input
                                type="text"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleChange}
                              />
                              {validationErrors.organizationName && (
                                <p style={{ color: "red" }}>
                                  {validationErrors.organizationName}
                                </p>
                              )}
                            </div>
                          </Col>
                          <Col>
                            <div className="add-product-input-div">
                              <p>Contact Person</p>
                              <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                              />
                              {validationErrors.contact && (
                                <p style={{ color: "red" }}>
                                  {validationErrors.contact}
                                </p>
                              )}
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <div className="add-product-input-div">
                              <p>Email</p>
                              <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {validationErrors.email && (
                                <p style={{ color: "red" }}>
                                  {validationErrors.email}
                                </p>
                              )}
                            </div>
                          </Col>
                          <Col>
                            <div className="add-product-input-div">
                              <p>Number</p>
                              <input
                                type="text"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                              />
                              {validationErrors.number && (
                                <p style={{ color: "red" }}>
                                  {validationErrors.number}
                                </p>
                              )}
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <div className="add-product-input-div">
                              <p>Message</p>
                              <textarea
                                type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                row="114"
                                cols="24"
                                style={{ width: "100%", height: "150px" }}
                              />
                            </div>
                          </Col>
                        </Row>

                        <Form.Check
                          type="checkbox"
                          label="I am interested in sponsoring a research paper for $25,000 USD."
                          checked={checkboxChecked}
                          onChange={handleCheckboxChange}
                        />
                        {validationErrors.sponsorship && (
                          <p style={{ color: "red" }}>
                            {validationErrors.sponsorship}
                          </p>
                        )}
                      </Form>
                    </Card>
                  </Col>
                </Row>
              </div>

              <Container style={{ display: "flex" }}>
                <Button
                  variant="primary"
                  style={{
                    border: "none",
                    backgroundColor: "rgba(138, 0, 0, 1)",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                  size="lg"
                  onClick={handleSubmit}
                  // type="submit"
                >
                  Sponsorship
                </Button>
              </Container>
            </Col>
          )}
        </Row>
      </Container>
      {/************************** Before Footer Logo******************************/}

      <div className="before-footer-1 mt-[2rem]">
        <BeforeFooter />
      </div>
    </div>
  );
};

export default Sponsership;
