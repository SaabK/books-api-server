import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Book } from "@/types";

interface CodeComponentProps {
    showLineNumbers?: boolean;
    url: string;
}

export default function CodeComponent({
    showLineNumbers = true,
    url,
}: CodeComponentProps) {
    const [showOutput, setShowOutput] = useState(false);
    const [data, setData] = useState<Book | null>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log("In Fetch Request: ", data);
                return;
            });

        console.log("In useEffect: ", data);
    }, []);

    return (
        <>
            <CopyBlock
                text={`fetch('${url}')\n\t\t.then(res => res.json())\n\t\t.then(console.log)`}
                language="javascript"
                showLineNumbers={showLineNumbers}
                theme={dracula}
                codeBlock={true}
            />
            <Button
                variant="default"
                className="my-4"
                onClick={() => {
                    setShowOutput(true);
                    console.log(data?.name);
                }}
            >
                Show Output
            </Button>
            {showOutput && (
                <CodeBlock
                    text={`{
    "author": {
        "name": "${data?.author.name}",
        "about": "${data?.author.about.slice(0, 50) + "..."}"
    },
    "_id": "${data?._id}",
    "image": "${data?.image}",
    "name": "${data?.name}",
    "ratings": ${data?.ratings},
    "price": ${data?.price},
    "stock": ${data?.stock},
    "description": "${data?.description.slice(0, 50) + "..."}",
    "category": "${data?.category}"
}
                `}
                    language="javascript"
                    theme={dracula}
                />
            )}
            <pre></pre>
        </>
    );
}
