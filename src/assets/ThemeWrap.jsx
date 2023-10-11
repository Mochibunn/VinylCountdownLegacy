import App from "../App";
import "../styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { ThemeContext, UserContext, SignInModalContext } from "../Contexts"; //now imported instead of created here
import { useDisclosure } from "@nextui-org/modal";

// export const ThemeContext = createContext(); //moved this into separate file and updated import on Nav.jsx

export default function ThemeWrap() {
    const isDark = JSON.parse(localStorage.getItem("isDark"));
    const [isDarkMode, setIsDarkMode] = useState(isDark);

    const isSignedIn = JSON.parse(localStorage.getItem("signedIn"));
    const [user, setUser] = useState(isSignedIn);
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    useEffect(() => {
        const prefers = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches; //boolean value, dark is true, light is false
        JSON.parse(localStorage.getItem("isDark")) === null &&
            setIsDarkMode(prefers);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        localStorage.setItem(`isDark`, isDarkMode);
    }, [isDarkMode]);

    return (
        <main
            id="main"
            className={`${
                isDarkMode ? "dark bg-[#282a36]" : "bg-background"
            } text-foreground`}
        >
            <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
                <UserContext.Provider value={{ user, setUser }}>
                    <SignInModalContext.Provider
                        value={{ isOpen, onOpen, onClose, onOpenChange }}
                    >
                        <App />
                    </SignInModalContext.Provider>
                </UserContext.Provider>
            </ThemeContext.Provider>
        </main>
    );
}

//ThemeWrap - The very silly dark mode wrapper for React + Tailwind.
//2023, github.com/Mochibunn

// const DarkModeContext = createContext();

// export default function ThemeWrap() {
//   const darkMode = JSON.parse(localStorage.getItem(`isDark`));
//   const [mode, setMode] = useState(darkMode)

//   function DarkModeProvider({ children }) {
//     const [isDarkMode, setIsDarkMode] = useState(
//       localStorage.getItem('isDarkMode') === 'true'
//     );

//     const toggleDarkMode = () => {
//       setIsDarkMode((prev) => !prev);
//     };
//   useEffect(() => {
//     if (mode) {
//       document.getElementById(`main`).classList.add(`dark`)
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [mode])
//! Previous failed attempt
