import CodeComponent from "@/components/CodeComponent";
import Heading from "@/components/Heading";
import { guide } from "@/data";

export default function Guide() {
    return (
        <section className="container py-10">
            <Heading text="Guide" />
            <p className="mt-4">
                Below you will find examples with the Fetch API but you can use
                any other tool you want
            </p>
            <div>
                {guide.map((item, index) => (
                    <div key={index}>
                        <Heading
                            text={item.title}
                            className="text-2xl font-bold font-mono mt-6 mb-2.5"
                        />
                        <CodeComponent url={item.url} code={item.text} />
                    </div>
                ))}
            </div>
        </section>
    );
}
