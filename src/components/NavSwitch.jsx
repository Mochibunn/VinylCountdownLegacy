import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../assets/MoonIcon";
import { SunIcon } from "../assets/SunIcon";
import { useContext } from "react";
import { ThemeContext } from "./ThemeWrap";

export const NavSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Switch //Dark mode toggle
    isSelected={isDarkMode}
    onValueChange={toggleDarkMode}
    size="lg"
    color="warning"
    startContent={<SunIcon />}
    endContent={<MoonIcon />}
    ></Switch>
  )
};
export default NavSwitch;