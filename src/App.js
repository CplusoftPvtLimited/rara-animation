import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Blogs from "./Core/Blogs Pages/Blogs";
import AddBlog from "./Core/Blogs Pages/AddBlog";
import EditBlog from "./Core/Blogs Pages/EditBlog";
import Categories from "./Core/Categories Pages/Categories";
import AddCategory from "./Core/Categories Pages/AddCategory";
import SnackbarProvider from "react-simple-snackbar";
import EditCategory from "./Core/Categories Pages/EditCategory";
import Fellows from "./Core/Fellows Pages/Fellows";
import AddFellow from "./Core/Fellows Pages/AddFellow";
import EditFellow from "./Core/Fellows Pages/EditFellow";
import PaymentMethods from "./Core/Payment Methods Pages/PaymentMethods";
import Home from "./Core/Home/Home.js";
import Donation from "./Core/Donations/Index.js";
import DonationDetails from "./Core/Donations/DonationDetails.js";
import Sponsorships from "./Core/Sponsorships/Index.js";
import SponsorDetails from "./Core/Sponsorships/SponsorDetails.js";
import AddFellowPage from "./Core/FellowPage/AddFellow.js";
import FellowPage from "./Core/FellowPage/Fellow.js";
import EditFellowPage from "./Core/FellowPage/EditFellow.js";

import Student from "./Core/Student/Student";
import Login from "./Core/Login/Login.js";
import Dashboard from "./Core/Dashboard";
import Account from "./Core/Account/Account";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <SnackbarProvider>
        <Router>
          <Switch>
            <Route path="/login" exact>
              {isAuthenticated ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/" exact>
              {isAuthenticated ? <Dashboard /> : <Redirect to="/login" />}
            </Route>

            <PrivateRoute
              path="/blogs"
              exact
              component={Blogs}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/blog/add"
              exact
              component={AddBlog}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/blog/edit/:blogId"
              exact
              component={EditBlog}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/categories"
              exact
              component={Categories}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/category/add"
              exact
              component={AddCategory}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/category/:categoryId"
              exact
              component={EditCategory}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/fellows"
              exact
              component={Fellows}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/fellow/add"
              exact
              component={AddFellow}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/fellow/edit/:fellowId"
              exact
              component={EditFellow}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/paymentMethods"
              exact
              component={PaymentMethods}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/home"
              exact
              component={Home}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/donation"
              exact
              component={Donation}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/addFellowPage"
              exact
              component={AddFellowPage}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/fellowPage"
              exact
              component={FellowPage}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/fellowPage/edit/:fellowId"
              exact
              component={EditFellowPage}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/donation/:categoryId"
              exact
              component={DonationDetails}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/sponsorships"
              exact
              component={Sponsorships}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/sponsor/:categoryId"
              exact
              component={SponsorDetails}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/student"
              exact
              component={Student}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              path="/account"
              exact
              component={Account}
              isAuthenticated={isAuthenticated}
            />
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
