import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm.js";
import SubscriptionFrom from "./SubscriptionFrom.js";
import axios from "axios";
import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { setAmount } from "../../../store/donationSlice.js";

// const stripePromiseKey =
// 'pk_test_51KYPqJLdgPiiadryliSCj8R0YZ9rYVnOIECcgxmOy11EYLoIresrd5sygDAnGfN5F2rxA7t1qnT6SwPkISmDAecJ00FtNIJOiq';

export default function Checkout({ donate }) {
  const dispatch = useDispatch();
  const selectedAmount = useSelector((state) => state.donation.selectedAmount);

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [keyData, setKeyData] = useState();

  useEffect(() => {
    getStripeKey();
  }, []);

  useEffect(() => {
    const loadStripe = require("@stripe/stripe-js").loadStripe;
    if (keyData && keyData.clientKey) {
      const stripePromise = loadStripe(keyData.clientKey);
      setStripePromise(stripePromise);
    }
  }, [keyData]);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/checkout/stripe`, {
        // totalCost: donate,
        totalCost: selectedAmount,
      })
      .then((response) => {
        console.log("response", response);
        setClientSecret(response.data.clientSecret);
      })
      .catch((error) => {
        console.error("Error calling API:", error);
      });
  }, []);

  const getStripeKey = () => {
    setKeyData();
    axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER}/secret/1`,
    })
      .then((response) => {
        console.log("keyData: ", response);
        setKeyData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  // const handlePayment = async (paymentMethodId) => {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_SERVER}/process-payment`,
  //       {
  //         paymentMethodId: paymentMethodId,
  //         email: 'khansaffy1@gmail.com',
  //       }
  //     );

  //     console.log('Payment response:', response.data);
  //   } catch (error) {
  //     console.error('Error processing payment:', error);
  //   }
  // };

  return (
    <div className="App" style={{ paddingTop: "50px" }}>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <StripeCheckoutForm donate={selectedAmount} />

          {/* Subscription Payment */}
          {/* <SubscriptionFrom
            donate={donate}
            isSubscription={true}
            handleSubmit={handlePayment}
          /> */}
        </Elements>
      )}
    </div>
  );
}