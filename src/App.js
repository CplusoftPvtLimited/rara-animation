import Dashboard from './Core/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogs from './Core/Blogs Pages/Blogs';
import AddBlog from './Core/Blogs Pages/AddBlog';
import EditBlog from './Core/Blogs Pages/EditBlog';
import SnackbarProvider from 'react-simple-snackbar';

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
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
