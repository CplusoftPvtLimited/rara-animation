import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Donation from './components/donate/Donate';
import Checkout from './components/checkout/Checkout';

function App() {
  const [keyData, setKeyData] = useState(null);

  useEffect(() => {
    getStripeKey();
  }, []);

  const getStripeKey = () => {
    axios({
      method: 'get',
      url: 'http://localhost:4500/api/secret/1',
    })
      .then((response) => {
        console.log('keyData: ', response);
        setKeyData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <Routes className='App'>
        <Route path='/' element={<Donation />} />

        {keyData?.active ? (
          <Route path='/stripe' element={<Checkout />} />
        ) : (
          <Route
            path='/stripe'
            element={<div>Stripe Payment is not available at the moment.</div>}
          />
        )}

        <Route
          path='/coinbase'
          element={<div>Coinbase Payment is not available at the moment.</div>}
        />
      </Routes>
    </>
  );
}

export default App;
