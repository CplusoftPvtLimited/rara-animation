import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const PaymentCompletionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="completion-page">
      <div className="tick-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="green"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12L9 19 22 6"></path>
        </svg>
      </div>
      <div className="completion-message">
        <h1>Payment Completed Successfully</h1>
        <p>
          Thank you for your payment. <br />
          Your transaction has been successfully processed.
        </p>
      </div>

      <div className="back-button">
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
};

export default PaymentCompletionPage;
