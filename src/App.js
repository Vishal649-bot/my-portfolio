import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SociaLink from "./components/SociaLink";
import Project from "./components/Project";
import Experince from "./components/Experince";
import Contact from "./components/Contact";



function App() {
  return (
    <div >
     <Navbar/>
     <Home/>
     <SociaLink/>
     <About/>
     <Project/>
     <Experince/>
     <Contact/>
     
    </div>
  );
}

export default App;
