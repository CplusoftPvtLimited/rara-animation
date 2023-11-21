import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Dropdown,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { setAmount, setPaymentMethod } from "../../store/donationSlice";
import DonatePage from "../../components/Donation/donate/DonatePage";
import SponserForm from "../sponsership/SponserForm";
import BeforeFooter from "../../pages/Homepage/FooterContainer";

import "./donate.css";
import { ScrollContext } from "../../components/ScrollContext";

const Donate = () => {
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
  const [selectedOption, setSelectedOption] = useState(null);
  const actualSelectedAmount = useSelector(
    (state) => state.donation.selectedAmount
  );

  const ScrollContextValue = useContext(ScrollContext);

  const handleDropdownSelect = (eventKey) => {
    handleChange({ name: "areaOfSupport", value: eventKey });
    setSelectedOption(eventKey);
  };

  const handleButtonClick = (value) => {
    handleChange({ name: "donationType", value: value });
    setSelectedButton(value);
    setError(null);
  };

  const handleAmountClick = (amount) => {
    setOtherValue(null);
    console.log("amount", amount);
    handleChange({ name: "donation", value: amount });
    setSelectedAmount(amount);
    dispatch(setAmount(amount));
  };

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

  // form function
  const [formData, setFormData] = useState({
    areaOfSupport: "",
    donationType: "",
    donation: "",
    organizationName: "",
    contact: "",
    email: "",
    number: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    areaOfSupport: "",
    donationType: "",
    donation: "",
    organizationName: "",
    contact: "",
    email: "",
    number: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target || event;
    console.log("event: ", event);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      areaOfSupport:
        name === "areaOfSupport" ? value : prevFormData.areaOfSupport,
      donationType: name === "donationType" ? value : prevFormData.donationType,
      donation: name === "donation" ? value : prevFormData.donation,
    }));
  }

  const scrollContainerScrollPosition = () => {
    const scrollContainer = document.querySelector(".custom-container");
    const onScroll = () => {
      // Clear any existing timeout to reset the timer
      clearTimeout(scrollTimeout);

      // Set a new timeout
      scrollTimeout = setTimeout(() => {
        // console.log("🚀 ~ scrollTop:", scrollContainer.scrollTop);
        ScrollContextValue.setScrollY(scrollContainer.scrollTop);
        ScrollContextValue.setScrollPos(scrollContainer.scrollTop);

        // Remove the event listener once we're sure scrolling has stopped
        scrollContainer.removeEventListener("scroll", onScroll);
      }, 100); // 100ms delay to wait after the last scroll event
    };

    // Add the event listener to the scroll container
    scrollContainer.addEventListener("scroll", onScroll);
  };

  let scrollTimeout;
  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("areaOfSupport", selectedOption);
      formDataToSend.append("donationType", selectedButton);
      formDataToSend.append("donation", actualSelectedAmount);
      formDataToSend.append("organizationName", formData.organizationName);
      formDataToSend.append("contact", formData.contact);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("number", formData.number);
      formDataToSend.append("message", formData.message);
      console.log("formData: ", formData);
      if (actualSelectedAmount) {
        axios
          .post(`${process.env.REACT_APP_SERVER}/donation/createPost`, formData)
          .then((response) => {
            console.log("response response: ", response);

            setFormData({
              areaOfSupport: "",
              donationType: "",
              donation: "",
              organizationName: "",
              contact: "",
              email: "",
              number: "",
              message: "",
            });

            const donateSection = document.querySelector(".donateUs");
            donateSection.scrollIntoView({ behavior: "smooth" });
            scrollContainerScrollPosition();

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

    if (formData.areaOfSupport.trim() === "") {
      errors.areaOfSupport = "This field is required";
    }
    if (
      formData.donation &&
      typeof formData.donation === "string" &&
      formData.donation.trim() === ""
    ) {
      errors.donation = "This field is required";
    }
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
    return errors;
  };

  const handlePaymentMethodChange = (event) => {
    // setSelectedPaymentMethod(event.target.value);
    const selectedMethod = event.target.value;
    console.log("selectedMethod: ", selectedMethod);
    dispatch(setPaymentMethod(event.target.value));

    setSelectedPaymentMethod(selectedMethod);
    if (selectedMethod === "bankTransfer") {
      setShowBankTransferModal(true);
    }
  };

  const renderTickSign = (amount) => {
    return selectedAmount === amount ? (
      <FontAwesomeIcon icon={faCheck} style={{ marginLeft: "5px" }} />
    ) : null;
  };

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

  return (
    <div>
      <Container className="donateUs">
        <h2 className="sponsorship" style={{ fontSize: "144px" }}>
          DONATE
        </h2>
      </Container>

      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Row>
          <Col xs={12} lg={6}>
            <DonatePage />
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
              <h5 style={{ textAlign: "center", paddingTop: "20px" }}>
                Ready to Make a Donation?
              </h5>
              <p style={{ padding: "0 40px" }}>
                To make a donation, please fill out the form below, indicating
                your chosen area of support. Your generosity will help us
                advance our mission of creating a financial system that works
                for people and the planet.
              </p>

              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <Dropdown onSelect={handleDropdownSelect}>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "rgb(138, 0, 0)",
                      border: "none",
                    }}
                  >
                    {selectedOption || "Area of Support"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Programs">Programs</Dropdown.Item>
                    <Dropdown.Item eventKey="Research">Research</Dropdown.Item>
                    <Dropdown.Item eventKey="Products">Products</Dropdown.Item>
                    <Dropdown.Item eventKey="Operations">
                      Operations
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="General">General</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                {validationErrors.areaOfSupport && (
                  <p style={{ color: "red" }}>
                    {validationErrors.areaOfSupport}
                  </p>
                )}
              </div>

              <h5 className="donate">How often would you like to donate?</h5>

              <ButtonGroup
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "45px",
                }}
              >
                <Button
                  variant={
                    selectedButton === "once" ? "primary" : "outline-primary"
                  }
                  onClick={() => handleButtonClick("once")}
                  style={{
                    backgroundColor:
                      selectedButton === "once"
                        ? "rgba(138, 0, 0, 1)"
                        : "white",
                    color:
                      selectedButton === "once"
                        ? "white"
                        : "rgba(138, 0, 0, 1)",
                    border: "none",
                    width: "130px",
                    flexGrow: "inherit",
                  }}
                >
                  Once Only
                </Button>
                <Button
                  variant={
                    selectedButton === "monthly" ? "primary" : "outline-primary"
                  }
                  onClick={() => handleButtonClick("monthly")}
                  style={{
                    backgroundColor:
                      selectedButton === "monthly"
                        ? "rgba(138, 0, 0, 1)"
                        : "white",
                    color:
                      selectedButton === "monthly"
                        ? "white"
                        : "rgba(138, 0, 0, 1)",
                    border: "none",
                    width: "130px",
                    flexGrow: "inherit",
                  }}
                >
                  Monthly
                </Button>
              </ButtonGroup>

              <h5 className="donate">How much would you like to donate?</h5>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "20px",
                  }}
                >
                  <Button
                    variant="light"
                    className="rupee"
                    onClick={() => handleAmountClick(10000)}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    $10,000{renderTickSign(10000)}
                  </Button>
                  <Button
                    variant="light"
                    className="rupee"
                    onClick={() => handleAmountClick(25000)}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    $25,000{renderTickSign(25000)}
                  </Button>

                  <Button
                    variant="light"
                    className="rupee"
                    onClick={() => handleAmountClick(50000)}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    $50,000{renderTickSign(50000)}
                  </Button>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>
                    <input
                      style={{
                        backgroundColor: "white !important",
                      }}
                      className="rupee"
                      type="number"
                      placeholder="other"
                      onChange={(e) => {
                        const amount = Number(e.target.value);
                        handleAmountClick(amount);
                        setOtherValue(amount);
                        dispatch(setAmount(amount));
                      }}
                    />
                    {validationErrors.donation && (
                      <p style={{ color: "red" }}>
                        {validationErrors.donation}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* <SponserForm /> */}
              {/* form */}
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
                      <Form
                      // onSubmit={handleSubmit}
                      >
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

                        <Row>
                          <p style={{ color: "#000" }}>
                            Thank you for considering donation to Pecunia. Your
                            support is instrumental in sculpting a brighter,
                            inclusive, and sustainable financial future.
                          </p>
                        </Row>

                        {/* <button type="submit" className="add-category-btn">
                Post
              </button> */}
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
                  // onClick={handleDonateClick}
                  onClick={handleSubmit}
                >
                  Donate
                </Button>
              </Container>
            </Col>
          )}
        </Row>
      </Container>
      {/************************** Before Footer Logo******************************/}

      <div className="before-footer-1 mt-[2rem] border-t-0">
        <BeforeFooter />
      </div>
    </div>
  );
};

export default Donate;
