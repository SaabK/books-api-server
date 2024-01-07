import isDev from "@/lib/isDev";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface GetDataProps {
    url: string;
}

export function GetData({ url }: GetDataProps) {
    const [data, setData] = useState<object | object[] | null>(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${isDev()}${url}/${id ? id : ""}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch(console.error);
    }, []);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
