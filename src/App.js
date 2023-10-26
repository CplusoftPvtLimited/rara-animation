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
import Student from "./Core/Student/Student";
import Login from "./Core/Login/Login.js";
import Dashboard from "./Core/Dashboard";
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
              path="/student"
              exact
              component={Student}
              isAuthenticated={isAuthenticated}
            />
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
