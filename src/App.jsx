import "./App.css";
import Home from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact";
import Edex from "./components/edex";

function App() {
  return (
    <div className="h-full">
      <Navbar />
      <Home />
      <About />
      <Edex />
      <Contact />
    </div>
  );
}

export default App;
