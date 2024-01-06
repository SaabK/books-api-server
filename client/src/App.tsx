import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TryIt from "./components/TryIt";
import { Toaster } from "@/components/ui/toaster";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <TryIt />
            </main>
            <Toaster />
        </>
    );
}

export default App;
