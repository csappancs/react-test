import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Hero from "./components/Hero";

import "./styles/main.css"

function App() {
  return (
    <div className="App">
      <div>
        <Menubar/>
        <Hero/>
        <Content/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
