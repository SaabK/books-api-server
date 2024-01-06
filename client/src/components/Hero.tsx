import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="container py-32 grid grid-cols-2 place-items-center">
            <div>
                <h1 className="font-bold text-5xl font-serif">
                    Parho - Books API
                </h1>
                <p className="leading-6 text-lg mt-3">
                    Your literary companion for seamless exploration of diverse
                    worlds, offering a curated Books API for discovering,
                    retrieving, and enjoying a vast array of literary treasures.
                </p>

                <Button variant="default" className="mt-8">
                    Start Now
                </Button>
            </div>

            <img
                src="/library.jpg"
                alt="Parho Library"
                className="w-96 h-96 justify-self-end rounded-3xl"
            />
        </section>
    );
}
