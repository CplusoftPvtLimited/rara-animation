import Dashboard from './Core/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogs from './Core/Blogs Pages/Blogs';
import AddBlog from './Core/Blogs Pages/AddBlog';
import EditBlog from './Core/Blogs Pages/EditBlog';
import Categories from './Core/Categories Pages/Categories';
import AddCategory from './Core/Categories Pages/AddCategory';
import SnackbarProvider from 'react-simple-snackbar';
import EditCategory from './Core/Categories Pages/EditCategory';
import Fellows from './Core/Fellows Pages/Fellows';
import AddFellow from './Core/Fellows Pages/AddFellow';
import EditFellow from './Core/Fellows Pages/EditFellow';
function App() {
  return (
    <div className='App'>
      <SnackbarProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/blogs' exact component={Blogs} />
            <Route path='/blog/add' exact component={AddBlog} />
            <Route path='/blog/edit/:blogId' exact component={EditBlog} />
            <Route path='/categories' exact component={Categories} />
            <Route path='/category/add' exact component={AddCategory} />
            <Route
              path='/category/:categoryId'
              exact
              component={EditCategory}
            />
            <Route path='/fellows' exact component={Fellows} />
            <Route path='/fellow/add' exact component={AddFellow} />
            <Route path='/fellow/edit/:fellowId' exact component={EditFellow} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
