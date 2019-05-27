import React from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nabar from "./components/Nabar";
import {Switch,Route} from "react-router-dom";
import { Home } from "./views/home.js";
import Details from "./components/Details";



function App() {
  return (
    <React.Fragment>
        <Nabar/>

            <Switch>
                <Route exact path="/" component={Home} />
                 <Route exact path="/details" component={Details}/>
            </Switch>

        </React.Fragment>
  );
}

export default App;
