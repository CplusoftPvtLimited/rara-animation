import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Fellows from "./pages/fellows/index";
import FellowSingle from "./pages/fellow-single/index";
import Header from "./components/navbar/index";
import Footer from "./components/footer";
import News from "./pages/News/index";
import Home from "./pages/Homepage/index";
import HomeFellows from "./pages/Homepage/Fellows/index";
import Updates from "./pages/Updates/index";
import UpdateSingle from "./pages/update-single/index";
import Student from "./pages/student/index";

function App() {
  return (
    <BrowserRouter>
      <div className="bg">
        <HeaderRoute />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fellow" element={<Fellows />} />
          <Route path="/fellow/:fellowId" element={<FellowSingle />} />
          <Route path="/news" element={<News />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/blog/:blogId" element={<UpdateSingle />} />
          <Route path="/student" element={<Student />} />
        </Routes>
        <FooterRoute />
      </div>
    </BrowserRouter>
  );
}

function HeaderRoute() {
  const location = useLocation();
  const isInStudentRoute = location.pathname.includes("/student");
  return isInStudentRoute ? null : <Header />;
}

function FooterRoute() {
  const location = useLocation();
  const isInStudentRoute = location.pathname.includes("/student");
  return isInStudentRoute ? null : <Footer />;
}

export default App;
