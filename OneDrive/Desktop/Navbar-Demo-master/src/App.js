import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import Buy from "./Components/Buy";
import Home from "./Components/Home";
import About from "./Components/About";
import Faq from "./Components/Faq";
import { Route, Switch } from "react-router-dom";
import Sell from "./Components/Sell";
import Buyform from "./Components/Buyform";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/buy">
          <Buy />
        </Route>
        <Route path="/sell">
          <Sell />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/buyform">
        <Buyform/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
