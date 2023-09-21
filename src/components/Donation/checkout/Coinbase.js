import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Coinbase = ({ donate }) => {
  const [hostedUrl, setHostedUrl] = useState();
  console.log('donate: ', donate);
  // useEffect(() => {
  //   axios
  //     .post('http://localhost:4500/api/checkout/coinbase', {
  //       amount: donate,
  //     })
  //     .then((response) => {
  //       console.log('response', response.data.charge.hosted_url);
  //       setHostedUrl(response.data.charge.hosted_url);
  //     })
  //     .catch((error) => {
  //       console.error('Error calling API:', error);
  //     });
  // }, []);
  return (
    <div>
      <h2>Coinbase</h2>
    </div>
  );
};

export default Coinbase;
