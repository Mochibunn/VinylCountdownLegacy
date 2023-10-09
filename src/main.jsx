import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "./styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThemeWrap from "./assets/ThemeWrap";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <NextUIProvider>
                <ThemeWrap />{" "}
                {/* //*--moved it so it is actually in assets now This is in "./assets/ThemeWrap.jsx. It is used to wrap App with the <main> semantic element" */}
            </NextUIProvider>
        </React.StrictMode>
    </BrowserRouter>
);
