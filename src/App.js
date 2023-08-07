import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header.js';
import Donation from './components/donate/Donate';
import Checkout from './components/checkout/Checkout';
import Coinbase from './components/checkout/Coinbase';

function App() {
  return (
    <>
      <Header />
      <Routes className='App'>
        <Route path='/' element={<Donation />} />
        <Route path='/stripe' element={<Checkout donate={10} />} />
        <Route path='/coinbase' element={<Coinbase donate={10} />} />
      </Routes>
    </>
  );
}

export default App;
