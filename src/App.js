import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Professional from "./components/Professional";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Professional />
      <Portfolio />
    </div>
  );
}

export default App;
