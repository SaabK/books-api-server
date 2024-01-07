import Heading from "@/components/Heading";

export default function About() {
    return (
        <section className="container py-20 w-3/4">
            <Heading text="About me" />
            <p className="text-lg mt-4">
                My name's <b>Ali Bin Naseer</b>. I am the creator of this
                project Parho. Parho is a book store aiming to provide best
                quality books to its customers. This is an API created mainly
                for that purpose but its completely free to use. You can learn
                more about this project{" "}
                <a href="https://github.com/SaabK/parho" target="_blank">
                    <u>here</u>
                </a>
            </p>
            <p className="text-lg mt-2">
                You can also contribute to this project if you want to on
                github.
            </p>
        </section>
    );
}
