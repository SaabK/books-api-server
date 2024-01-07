import isDev from "./lib/isDev";
import { Book, Category } from "./types";

export const routes = [
    {
        method: "GET",
        route: "/books",
    },
    {
        method: "GET",
        route: "/books/65968e4b9a74611e7eea1549",
    },
    {
        method: "GET",
        route: "/books/categories",
    },
    {
        method: "GET",
        route: "/books/category/history",
    },
];

export const guide = [
    {
        title: "Getting a book",
        url: `${isDev()}books/65968e4b9a74611e7eea1549`,
        text: (data: Book | null) => `{
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
                        `,
    },
    {
        title: "Listing all books",
        url: `${isDev()}books`,
        text: (data: Book | null) => `[
            {
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
        },
        { ... },
        { ... }
    ]
                                `,
    },
    {
        title: "Getting a category",
        url: `${isDev()}books/category/history`,
        text: (data: Category | null) => {
            console.log(data);
            return `{
    name: "history",
    books: [
        {
            author: {
                name: "Ravza Altuntas Cakir",
                about: "Ravza Altuntas Cakir is the author of A Political Theory of Muslim Democracy. Ravza Altuntas Cakir has written a lot of books in the field of religion history. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas.",
            },
            _id: "65968e4b9a74611e7eea154b",
            image: "/images/A Political Theory of Muslim Democracy - Ravza Altuntas Cakir - religion history.jpg",
            name: "A Political Theory of Muslim Democracy",
            ratings: 4.5,
            price: 1804,
            stock: 28,
            description:
                "A Political Theory of Muslim Democracy is written by Ravza Altuntas Cakir. Ravza Altuntas Cakir has several other books in the field of religion history. In his book A Political Theory of Muslim Democracy, Ravza Altuntas Cakir talks about religion history. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil.",
            category: "religion history",
        },
        { ... },
        { ... }
    ],
}`;
        },
    },
    {
        title: "Listing all categories",
        url: `${isDev()}books/categories`,
        text: (data: Category | null) => {
            console.log(data);
            return `[
    {
        name: "history",
        books: [
            {
                author: {
                    name: "Ravza Altuntas Cakir",
                    about: "Ravza Altuntas Cakir is the author of A Political Theory of Muslim Democracy. Ravza Altuntas Cakir has written a lot of books in the field of religion history. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas.",
                },
                _id: "65968e4b9a74611e7eea154b",
                image: "/images/A Political Theory of Muslim Democracy - Ravza Altuntas Cakir - religion history.jpg",
                name: "A Political Theory of Muslim Democracy",
                ratings: 4.5,
                price: 1804,
                stock: 28,
                description:
                    "A Political Theory of Muslim Democracy is written by Ravza Altuntas Cakir. Ravza Altuntas Cakir has several other books in the field of religion history. In his book A Political Theory of Muslim Democracy, Ravza Altuntas Cakir talks about religion history. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil.",
                category: "religion history",
            },
            { ... },
            { ... }
        ],
    },
    { ... }, 
    { ... }
]`;
        },
    },
];
