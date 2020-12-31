import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth
      .onAuthStateChanged(authUser => {
        if(authUser) {
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        } else {
          dispatch({
            type: "SET_USER",
            user: null
          })
        }
      })
  }, [])

  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/home">
            <Header />
            <Home />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
