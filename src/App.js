import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";


function App() {
    return (
        <NextUIProvider>
            <main className="container mx-auto px-15">
                <Navigation />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </NextUIProvider>
    );
}

export default App;
