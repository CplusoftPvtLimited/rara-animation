import Fellows from "./pages/fellows/index";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FellowSingle from "./pages/fellow-single/index";
import Header from "./components/navbar/index";
import Footer from "./components/footer";
import News from "./pages/News/index";
import Home from "./pages/Homepage/index";
import HomeFellows from "./pages/Homepage/Fellows/index";

function App() {
  return (
    <BrowserRouter>
      <div className="bg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fellow" element={<Fellows />} />
          <Route path="/fellow/:fellowId" element={<FellowSingle />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
