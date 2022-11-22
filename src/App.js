import './App.css';
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
    </div>
  );
}

export default App;
