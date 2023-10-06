import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <NextUIProvider>
                <main className="dark">
                    <App />
                </main>
            </NextUIProvider>
        </React.StrictMode>
    </BrowserRouter>
);
