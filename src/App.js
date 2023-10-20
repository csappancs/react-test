import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Products from "../src/pages/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/";
import "../src/styles/main.css"
import Jatszos from "./pages/Jatszos";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Menubar/>
            <Switch>
              <Route exact path="/"> 
                <Home/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/products"> 
                <Products/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/about"> 
                <About/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/contact"> 
                <Contact/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/jatszos"> 
                <Jatszos/>
              </Route>
            </Switch>
        </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
