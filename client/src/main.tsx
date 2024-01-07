import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { GetData } from "./components/GetData.tsx";
import Footer from "./components/Footer.tsx";
import About from "./routes/About.tsx";
import Guide from "./routes/Guide.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="min-h-screen flex flex-col justify-between">
                <div>
                    <Navbar />
                    <App />
                </div>
                <Footer />
            </div>
        ),
    },
    {
        path: "about",
        element: (
            <div className="min-h-screen flex flex-col justify-between">
                <div>
                    <Navbar />
                    <About />
                </div>
                <Footer />
            </div>
        ),
    },
    {
        path: "guide",
        element: (
            <div className="min-h-screen flex flex-col justify-between">
                <div>
                    <Navbar />
                    <Guide />
                </div>
                <Footer />
            </div>
        ),
    },
    {
        path: "books",
        element: (
            <>
                <GetData url="books" />
            </>
        ),
    },
    {
        path: "books/categories",
        element: (
            <>
                <GetData url="books/categories" />
            </>
        ),
    },
    {
        path: "books/:id",
        element: (
            <>
                <GetData url="books" />
            </>
        ),
    },
    {
        path: "books/category/:id",
        element: (
            <>
                <GetData url="books/category" />
            </>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Toaster />
    </React.StrictMode>
);
