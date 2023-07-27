import Fellows from "./components/fellows";
import './index.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import FellowSingle from "./components/fellow-single";
function App() {
  return (
    <BrowserRouter>
    <div className="bg">
    <Routes>
      <Route path="/" element={ <Fellows/>}/>
      <Route path="/fellow" element={ <FellowSingle/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
