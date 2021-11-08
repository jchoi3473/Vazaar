import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

import './App.css';
import MainPage from './pages/main/MainPage.js';
import SignUp from './pages/authenticate/SignUp';
import SignIn from './pages/authenticate/SignIn';
import ResetPassword from './pages/authenticate/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard'
import SellerPage from './pages/seller_page/SellerPage'
import BuyerPage from './pages/buyer_page/BuyerPage'
import Profile from './pages/profile/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path = "/sign-in" component = {SignIn}/>
            <Route path = "/sign-up" component = {SignUp}/>
            <Route path = "/main" component = {MainPage}/>
            <Route path = "/forgot-password" component = {ResetPassword}/>
            <Route path = "/dashboard" component = {Dashboard}/>
            <Route path = "/sell" component = {SellerPage}/>
            <Route path = "/buy" component = {BuyerPage}/>
            <Route path = "/profile" component = {Profile}/>

            <Route path="/">
              <Redirect to="/main" />
            </Route>

          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;