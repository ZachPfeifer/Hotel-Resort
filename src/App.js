import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import NavBar from './components/NavBar'
import Credits from "./assets/Credits";
import Resturant from './pages/Resturant';
import Cart from './pages/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:payload" component={SingleRoom} />
        <Route exact path="/resturant" component={Resturant} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
      <Credits />
    </div>
  );
}

export default App;
