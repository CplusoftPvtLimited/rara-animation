import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function SubscriptionFrom({
  donate,
  isSubscription,
  handleSubmit,
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: email,
      },
    });

    if (error) {
      setMessage(error.message);
      setIsLoading(false);
      return;
    }

    // Handle payment for both one-time and subscription
    handleSubmit(paymentMethod.id);

    setIsLoading(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {isSubscription && (
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      <CardElement />

      <button
        className='paymentButton'
        disabled={isLoading || !stripe || !elements}
        onClick={handlePayment}
      >
        <span id='button-text'>
          {isLoading ? <div className='spinner' id='spinner'></div> : 'Pay now'}
        </span>
      </button>
      {message && <div id='payment-message'>{message}</div>}
    </form>
  );
}
