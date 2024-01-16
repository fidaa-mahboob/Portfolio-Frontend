import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    return (
        <NextUIProvider>
            <main className="bg-[#F9F5F6]">
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
