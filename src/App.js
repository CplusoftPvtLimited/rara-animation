import Fellows from "./components/fellows";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import FellowSingle from "./components/fellow-single";
import Header from "./components/header/index";
import Footer from "./components/footer";
import News from "./components/News/index";
import Updates from "./components/Updates/index";
import UpdateSingle from "./components/update-single/index";
import Student from "./components/student/index";
function App() {
  return (
    <BrowserRouter>
      <div className="bg">
        <HeaderRoute />
        <Routes>
          <Route path="/" element={<Fellows />} />
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
