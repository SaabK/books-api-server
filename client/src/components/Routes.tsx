import { routes } from "@/data";
import Heading from "./Heading";

export default function Routes() {
    return (
        <section className="container py-20">
            <Heading text="Resources" />
            <div className="my-4">
                {routes.map((item) => (
                    <p className="mb-2 pb-0.5 border-b-[1px] border-gray-200 w-1/3">
                        <span className="font-medium font-mono text-xl">
                            {item.method}
                        </span>
                        <span className="ml-7">{item.route}</span>
                    </p>
                ))}
            </div>
            <p className="font-mono mt-5">
                <b className="mr-1">NOTE: </b> See <a href="link">guide</a> for
                usage
            </p>
        </section>
    );
}
