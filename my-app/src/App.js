import React from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nabar from "./components/Nabar";
import {Switch,Route} from "react-router-dom";
import { Home } from "./views/home.js";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Modal from "./components/Modal"
import Footer from "./components/Footer"



function App() {
  return (
    <React.Fragment>
        <Nabar/>
            <Modal/>
            <Switch>
                <Route exact path="/" component={Home} />
                 <Route exact path="/details" component={Details}/>
                 <Route exact path="/cart" component={Cart}/>

            </Switch>

            <Footer/>

        </React.Fragment>
  );
}

export default App;
