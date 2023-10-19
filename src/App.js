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
import Donation from "./pages/donate/index";
import Sponsership from "./pages/sponsership/index";
import Checkout from "./components/Donation/checkout/Checkout";
import PaymentCompletionPage from "./pages/donate/PaymentSuccess";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [keyData, setKeyData] = useState(null);

  useEffect(() => {
    getStripeKey();
  }, []);

  const getStripeKey = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER}/secret/1`,
    })
      .then((response) => {
        console.log("keyData: ", response);
        setKeyData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <BrowserRouter>
      <div className="bg">
        <HeaderRoute />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fellows" element={<Fellows />} />
          <Route path="/fellow/:fellowId" element={<FellowSingle />} />
          <Route path="/news" element={<News />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/blog/:blogId" element={<UpdateSingle />} />
          <Route path="/student" element={<Student />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/sponsership" element={<Sponsership />} />

          {keyData?.active ? (
            <Route path="/stripe" element={<Checkout />} />
          ) : (
            <Route
              path="/stripe"
              element={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    padding: "20px",
                    fontSize: 25,
                    fontWeight: 600,
                  }}
                >
                  Stripe Payment is not available at the moment.
                </div>
              }
            />
          )}
          {keyData?.active && (
            <Route
              path="/payment-success"
              element={<PaymentCompletionPage />}
            />
          )}

          <Route
            path="/coinbase"
            element={
              <div>Coinbase Payment is not available at the moment.</div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function HeaderRoute() {
  const location = useLocation();
  const isInStudentRoute = location.pathname.includes("/student");
  return isInStudentRoute ? null : <Header />;
}

export default App;
