import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Navigation from "./components/Navigation";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer";


function App() {
    return (
        <NextUIProvider>
            <main className="">
                <Navigation />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </NextUIProvider>
    );
}

export default App;
