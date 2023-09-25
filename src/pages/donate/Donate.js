import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setPaymentMethod } from "../../store/donationSlice";
import DonatePage from "../../components/Donation/donate/DonatePage";
import "./donate.css";

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
        setHostedUrl(response.data.charge.hosted_url);
      })
      .catch((error) => {
        console.error("Error calling API:", error);
      });
  }, [selectedAmount]);

  const handleButtonClick = (value) => {
    setSelectedButton(value);
    setError(null);
  };

  const handleAmountClick = (amount) => {
    setOtherValue(null);
    setSelectedAmount(amount);
    dispatch(setAmount(amount));
  };

  const handleDonateClick = () => {
    if (selectedAmount !== null || otherValue !== null) {
      setError(null);
      setShowRightColumn(true);
    } else {
      setError("Please select a donation amount.");
    }
  };

  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;
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
          if (coinbaseData?.active) {
            window.location.href = hostedUrl;
          } else {
            navigate("/coinbase");
          }
          break;
        default:
          break;
      }
    }
  }, [selectedPaymentMethod]);

  return (
    <div>
      <Container className="donateUs">
        <h2 style={{ fontSize: "144px" }}>DONATE US</h2>
      </Container>

      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Row>
          <Col xs={6}>
            <DonatePage />
          </Col>

          {showRightColumn ? (
            <Col xs={6}>
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
              xs={6}
              style={{
                backgroundColor: "rgba(227, 227, 227, 1)",
              }}
            >
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

              <hr
                style={{
                  width: "460px",
                  margin: "auto",
                  paddingBottom: "35px",
                }}
              />
              <h5 className="donate">How much would you like to donate?</h5>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "60px",
                  }}
                >
                  <Button
                    variant="light"
                    className="rupee"
                    onClick={() => handleAmountClick(100)}
                  >
                    $100{renderTickSign(100)}
                  </Button>
                  <Button
                    variant="light"
                    className="rupee"
                    onClick={() => handleAmountClick(1000)}
                  >
                    $1,000{renderTickSign(1000)}
                  </Button>
                  <Button
                    variant="light"
                    className="rupee"
                    onClick={() => handleAmountClick(10000)}
                  >
                    $10,000{renderTickSign(10000)}
                  </Button>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="light"
                    className="rupee"
                    onClick={() => handleAmountClick(100000)}
                  >
                    $100,000{renderTickSign(100000)}
                  </Button>
                  <Button
                    variant="light"
                    className="rupee"
                    onClick={() => handleAmountClick(1000000)}
                  >
                    $100,0000{renderTickSign(1000000)}
                  </Button>
                  <div>
                    <input
                      className="rupee"
                      type="number"
                      placeholder="other"
                      style={{ textAlign: "center" }}
                      onChange={(e) => {
                        setSelectedAmount(null);
                        setOtherValue(Number(e.target.value));
                        dispatch(setAmount(Number(e.target.value)));
                      }}
                    />
                  </div>
                </div>
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
