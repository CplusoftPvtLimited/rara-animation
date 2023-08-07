import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm.js';
import axios from 'axios';
import './Checkout.css';

const stripePromiseKey =
  'pk_test_51KYPqJLdgPiiadryliSCj8R0YZ9rYVnOIECcgxmOy11EYLoIresrd5sygDAnGfN5F2rxA7t1qnT6SwPkISmDAecJ00FtNIJOiq';

export default function Checkout({ donate }) {
  console.log('donate: ', donate);

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const loadStripe = require('@stripe/stripe-js').loadStripe;
    const stripePromise = loadStripe(stripePromiseKey);
    setStripePromise(stripePromise);
  }, []);

  useEffect(() => {
    axios
      .post('http://localhost:4500/api/checkout/stripe', {
        totalCost: donate,
      })
      .then((response) => {
        console.log('response', response);
        setClientSecret(response.data.clientSecret);
      })
      .catch((error) => {
        console.error('Error calling API:', error);
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='App' style={{ paddingTop: '50px' }}>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <StripeCheckoutForm donate={donate} />
        </Elements>
      )}
    </div>
  );
}
