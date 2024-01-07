import { CodeBlock, CopyBlock, codepen, dracula } from "react-code-blocks";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Book, Category } from "@/types";

interface CodeComponentProps {
    showLineNumbers?: boolean;
    url: string;
    code: (data: Book | Category | null) => string;
}

export default function CodeComponent({
    showLineNumbers = true,
    url,
    code,
}: CodeComponentProps) {
    const [showOutput, setShowOutput] = useState(false);
    const [data, setData] = useState<Book | null>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log("In useEffect ( for category ): ", data);
                return;
            });
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
                }}
            >
                Show Output
            </Button>
            {showOutput ? (
                <>
                    <CodeBlock
                        text={Array.isArray(data) ? code(data[0]) : code(data!)}
                        language="javascript"
                        theme={codepen}
                    />
                </>
            ) : (
                <CodeBlock language="javascript" text="{ }" theme={codepen} />
            )}
            <pre></pre>
        </>
    );
}
