import "./App.css";
import  About  from "./components/About";
import  Projects  from "./components/Projects.jsx";
import  Skills  from "./components/Skills.jsx";
import  Contact  from "./components/Contact.jsx";
import Navbar from "./components/Navbar";

function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar/>
            <About />
            <Skills />
            <Projects /> 
            <Contact />
        </main>
    )
}

export default App;
