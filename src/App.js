import './App.css';
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Navbar from "./components/Shared/Navbar";
import Works from "./components/Sections/Works";
import Experiences from "./components/Sections/Experiences";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Works/>
        <Experiences/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
