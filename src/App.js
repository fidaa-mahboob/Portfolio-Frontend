import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer";

function App() {
    return (
        <NextUIProvider>
            <main className="bg-[#F9F5F6]">
                {/* <Navigation /> */}
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
