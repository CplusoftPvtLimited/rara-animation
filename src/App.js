import Fellows from "./components/fellows";
import './index.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import FellowSingle from "./components/fellow-single";
import Header from "./components/header/index"
function App() {
  return (
    <BrowserRouter>
    <div className="bg">
      <Header/>
    <Routes>
      <Route path="/" element={ <Fellows/>}/>
      <Route path="/fellow/:fellowId" element={ <FellowSingle/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
