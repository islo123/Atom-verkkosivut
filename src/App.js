import './App.css';
import {Switch, Route, } from "react-router-dom";
import Navbar from "./komponentit/Navbar"
import Palvelumme from './komponentit/Palvelumme';
import OtaYhteyttä from "./komponentit/OtaYhteyttä"
const App = function (){
  return (
    <div className="top-div">
             <Navbar/>
              <Switch>
                <Route exact path="/" component={Palvelumme}/>
                <Route path="/OtaYhteyttä" component={OtaYhteyttä}/>
              </Switch>
          
    </div>
  )
}
export default App;
