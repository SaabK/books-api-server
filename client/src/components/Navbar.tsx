import Logo from "./Logo";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <header className="container my-2.5 flex justify-between items-center">
            <Logo />

            <nav>
                <Button variant="link">Guide</Button>
                <Button variant="link">About</Button>
            </nav>
        </header>
    );
}
