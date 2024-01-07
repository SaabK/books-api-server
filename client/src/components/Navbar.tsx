import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <header className="container my-2.5 flex justify-between items-center">
            <Link to="/">
                <Logo />
            </Link>

            <nav>
                <Link to="/guide">
                    <Button variant="link">Guide</Button>
                </Link>
                <Link to="/about">
                    <Button variant="link">About</Button>
                </Link>
            </nav>
        </header>
    );
}
