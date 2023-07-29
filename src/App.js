import Dashboard from './Core/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogs from './Core/Blogs Pages/Blogs';
import AddBlog from './Core/Blogs Pages/AddBlog';
import EditBlog from './Core/Blogs Pages/EditBlog';
import Fellows from './Core/Fellows Pages/Fellows';
import Categories from './Core/Categories Pages/Categories';
import AddCategory from './Core/Categories Pages/AddCategory';
import SnackbarProvider from 'react-simple-snackbar';
import EditCategory from './Core/Categories Pages/EditCategory';

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
            <Route path='/fellows' exact component={Fellows} />
            <Route path='/categories' exact component={Categories} />
            <Route path='/category/add' exact component={AddCategory} />
            <Route
              path='/category/:categoryId'
              exact
              component={EditCategory}
            />
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
