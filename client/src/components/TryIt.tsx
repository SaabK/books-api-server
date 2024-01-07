import isDev from "@/lib/isDev";
import CodeComponent from "./CodeComponent";
import Heading from "./Heading";

export default function TryIt() {
    return (
        <section className="container py-10">
            <Heading text="Try It" />
            <p className="my-2">
                Run this code here, in a console or from any site:
            </p>
            <div className="my-4">
                <CodeComponent
                    url={`${isDev()}books/65968e4b9a74611e7eea1549`}
                />
            </div>
        </section>
    );
}
