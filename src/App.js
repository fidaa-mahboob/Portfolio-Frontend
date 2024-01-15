import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer";
import ContactSimple from "./components/ContactSimple";

function App() {
    return (
        <NextUIProvider>
            <main className="bg-[#F9F5F6]">
                {/* <Navigation /> */}
                <About />
                <Skills />
                <Projects />
                <ContactSimple />
                <Footer />
            </main>
        </NextUIProvider>
    );
}

export default App;
