import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="app">

        <Header />
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
