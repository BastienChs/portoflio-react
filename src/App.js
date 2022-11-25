import './App.css';
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Navbar from "./components/Shared/Navbar";
import Works from "./components/Sections/Works";
import Experiences from "./components/Sections/Experiences";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Works/>
        <Experiences/>
    </div>
  );
}

export default App;
