import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
  cardNumberElement,
} from "@stripe/react-stripe-js";

import { useDispatch, useSelector } from "react-redux";

export default function StripeCheckoutForm({ donate }) {
  const selectedAmount = useSelector((state) => state.donation.selectedAmount);
  console.log(
    "🚀 ~ file: StripeCheckoutForm.js:14 ~ StripeCheckoutForm ~ selectedAmount:",
    selectedAmount
  );
  console.log("donate: ", donate);
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log("total cost: ", donate);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handle submit is called");
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payment-success",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  console.log("message: ", message);

  return (
    <form className="paymentForm" id="payment-form" onSubmit={handleSubmit}>
      <div>
        <h5>Total Donation: {donate}$ </h5>
      </div>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e?.target?.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />

      <button
        className="paymentButton"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
