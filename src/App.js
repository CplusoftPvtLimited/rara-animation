import Fellows from "./components/fellows";
import './index.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import FellowSingle from "./components/fellow-single";
import Header from "./components/header/index"
import Footer from "./components/footer";
import News from './components/News/index'
import Updates from './components/Updates/index'
function App() {
  return (
    <BrowserRouter>
    <div className="bg">
      <Header/>
    <Routes>
      <Route path="/" element={ <Fellows/>}/>
      <Route path="/fellow/:fellowId" element={ <FellowSingle/>}/>
      <Route path='/news' element={<News />}/>
      <Route path='/updates' element={<Updates />}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
