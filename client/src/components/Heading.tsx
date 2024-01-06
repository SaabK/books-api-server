import { cn } from "@/lib/utils";

interface HeadingProps {
    className?: string;
    text: string;
}

export default function Heading({ className, text }: HeadingProps) {
    return (
        <h2 className={cn("font-normal text-4xl my-1", className)}>{text}</h2>
    );
}
