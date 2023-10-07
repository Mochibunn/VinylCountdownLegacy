import App from "../App";
import "../styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeWrap(){
  const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches; //boolean value, dark is true, light is false
  const isDark = JSON.parse(localStorage.getItem("isDark"));
  const [isDarkMode, setIsDarkMode] = useState(isDark);

  useEffect(() => {
    JSON.parse(localStorage.getItem("isDark")) === null && setIsDarkMode(prefers);
  }, []); 

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem(`isDark`, isDarkMode)
  }, [isDarkMode]);

  return (
  <main id="main" className={`${isDarkMode ? 'dark' : ''} text-foreground bg-background`}>
    <ThemeContext.Provider value={ {isDarkMode, toggleDarkMode} }>
      <App/>
    </ThemeContext.Provider>
  </main>
        )
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