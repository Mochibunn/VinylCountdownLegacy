import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Divider,
  DropdownSection,
} from "@nextui-org/react";
import { SearchIcon } from "../assets/SearchIcon.jsx";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom/dist/index.js";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext, UserContext } from "../Contexts.jsx";
import NavSwitch from "./NavSwitch.jsx";
import SignInModal from "./SignInModal.jsx";
import SiteLogo from "../assets/SiteLogo.jsx";

const Nav = ({ setSearchValue }) => {
  const [localValue, setLocalValue] = useState("");

  const { user, setUser } = useContext(UserContext);
  const { isDarkMode } = useContext(ThemeContext);
  // console.log(user["first_name"]);

  //Moved to ThemeWrap
  // const isSignedIn = JSON.parse(localStorage.getItem("signedIn"));
  // const [signedIn, setSignedIn] = useState(isSignedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //moved to ThemeWrap
  // const [signedIn, setSignedIn] = useState(isSignedIn);

  // const [isSelected, setIsSelected] = useState(isDark);

  const navigate = useNavigate(); //todo add navigation to login and register pages

  //to grab reference to current URL, and a state to reference if it should be shown
  const [showNavSearch, setShowNavSearch] = useState(true);
  setShowNavSearch; //to make VS Code shutup ;)
  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(location.pathname);

  //custom styling to transition navsearch in/out
  // const [isMounted, setIsMounted] = useState(false);
  const mountedStyle = {
    animation: "inAnimation 250ms ease-in",
  };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards",
  };

  const handleClick = () => {
    navigate("/");
    setUser(!user);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchValue(localValue);
    setLocalValue("");
    navigate("search");
  };
  useEffect(() => {
    localStorage.setItem("signedIn", JSON.stringify(user)); //Updated to something more real :)
  }, [user]);

  // const menuItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Deployments",
  //   "My Settings",
  //   "Team Settings",
  //   "Help & Feedback",
  //   "Log Out",
  // ];

  // if (user) console.log(user[0].fields.profilePic);
  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />

        <NavbarBrand className="m-0 md:mr-4 flex justify-center md:justify-start">
          <NavLink
            to="/"
            aria-current="page"
            color="foreground"
            className="flex items-center"
          >
            <SiteLogo
              className="place-items-center h-[50px]"
              aria-label="vinyl countdown"
              key="website logo"
            />
            {/* <p className="hidden sm:block font-bold text-inherit">
                            VINYL COUNTDOWN
                        </p> */}
          </NavLink>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex md:gap-3 font-bold place-items-center">
          <NavbarItem>
            <NavLink
              to="/"
              aria-current="page"
              color="foreground"
              className="text-lg"
            >
              {" "}
              {/*// {({isActive}) => isActive ? "secondary" : "foreground" } //? Not sure how to control color if link is the active one */}
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="/"
              aria-current="page"
              color="foreground"
              className="text-lg"
            >
              New
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="/search"
              aria-current="page"
              color="foreground"
              className="text-lg"
            >
              Browse
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent
        as="div"
        className="items-center max-w-full hidden md:flex"
        justify="center"
      >
        {showNavSearch && (
          <form
            onSubmit={(e) => {
              handleSearchSubmit(e);
            }}
            // className="sm:max-w-[22rem] md:max-w-[12rem] lg:max-w-[20rem] h-10"
            style={currentPath === "/search" ? unmountedStyle : mountedStyle}
            // onAnimationEnd={() => {
            //     currentPath !== "/search"
            //         ? setShowNavSearch(false)
            //         : setShowNavSearch(true);
            // }}
          >
            <Input
              classNames={{
                base: "hidden md:flex md:max-w-[12rem] lg:max-w-[20rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Search.."
              size="sm"
              startContent={<SearchIcon size={18} />}
              type="search"
              value={localValue}
              onValueChange={setLocalValue}
            />
          </form>
        )}
        <div className="hidden md:block">
          <NavSwitch />
        </div>

        {/* Avatar menu items */}
        <Dropdown
          placement="bottom-end"
          className={`${
            isDarkMode ? "dark" : ""
          } text-foreground bg-background`}
        >
          <DropdownTrigger className="hidden md:block">
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              // name="John Madden"
              size="sm"
              src={user && user[0].profile_pic}
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            disabledKeys={["forums", "help_and_feedback", "orders", "cart"]}
          >
            {/* {" "} */}
            <DropdownSection showDivider>
              <DropdownItem key="profile" className="h-14 gap-2">
                {user ? (
                  <>
                    <p className="font-semibold">Signed in as:</p>
                    <p className="font-normal">
                      {user && user[0].first_name} {user && user[0].last_name}
                    </p>
                  </>
                ) : (
                  "Not signed in"
                )}
              </DropdownItem>
            </DropdownSection>
            <DropdownSection showDivider>
              {user && <DropdownItem key="orders">Orders</DropdownItem>}
              {user && <DropdownItem key="cart">Cart</DropdownItem>}
              {user && (
                <DropdownItem
                  onClick={() => navigate("wishlist")}
                  key="wishlist"
                >
                  Wishlist
                </DropdownItem>
              )}

              <DropdownItem key="forums">Forums</DropdownItem>
              {user && (
                <DropdownItem
                  onClick={() => navigate("settings")}
                  key="settings"
                >
                  Settings
                </DropdownItem>
              )}
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
            </DropdownSection>
            {!user && (
              <DropdownItem
                onClick={() => navigate("register")}
                key="register"
                color="warning"
              >
                Register
              </DropdownItem>
            )}
            {user ? (
              <DropdownItem key="logout" color="danger" onClick={handleClick}>
                Sign Out
              </DropdownItem>
            ) : (
              <DropdownItem
                key="login"
                color="warning"
                // onClick={() => navigate("signin")}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <SignInModal />
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      {/* Mobile hamburger menu stuff below */}
      <NavbarMenu className={isDarkMode && "dark text-foreground"}>
        <NavbarMenuItem className="my-3">
          <NavSwitch />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            to="/"
            aria-current="page"
            color="foreground"
            className="w-full"
            size="lg"
          >
            Home
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink color="foreground" href="#" className="w-full" size="lg">
            New
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            to="/search"
            aria-current="page"
            color="foreground"
            className="w-full"
            size="lg"
          >
            Browse
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            color="foreground"
            className="w-full text-neutral-500"
            size="lg"
            href="#"
          >
            Orders
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            color="foreground"
            className="w-full"
            size="lg"
            to="/wishlist"
          >
            Wishlist
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            color="foreground"
            className="w-full text-neutral-500"
            size="lg"
            href="#"
          >
            Forums
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            color="foreground"
            className="w-full text-neutral-500"
            size="lg"
            href="#"
          >
            Settings
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            color="foreground"
            className="w-full text-neutral-500"
            size="lg"
            href="#"
            target="blank"
          >
            {" "}
            {/* //todo NavLink doesn't change the color but Link does, perhaps that's the active link fix */}
            Help & Feedback
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            color="foreground"
            className="w-full"
            size="lg"
            to="/register"
          >
            Register
          </NavLink>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem>
          {user ? (
            <Link key="logout" color="danger" onClick={handleClick}>
              Sign Out
            </Link>
          ) : (
            <Link
              key="login"
              color="warning"
              className="text-xl font-semibold"
              onClick={() => navigate("signin")}
            >
              Sign In
            </Link>
          )}
        </NavbarMenuItem>

        {/* {menuItems.map((item, index) => ( //Hamburger menu items
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))} */}
      </NavbarMenu>
      <div className="hidden">
        <SignInModal effect={blur} />
      </div>{" "}
      {/* I have no idea why but having this duplicated component keeps the modal from disappearing on dropdown menu close which is what we want */}
    </Navbar>
  );
};

export default Nav;
