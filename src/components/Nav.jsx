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
    Avatar, Divider,
} from "@nextui-org/react";
import { AcmeLogo } from "../assets/AcmeLogo.jsx";
import { SearchIcon } from "../assets/SearchIcon.jsx";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom/dist/index.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts.jsx";
import NavSwitch from "./NavSwitch.jsx";

const Nav = () => {
    const { user, setUser } = useContext(UserContext);

    //Moved to ThemeWrap
    // const isSignedIn = JSON.parse(localStorage.getItem("signedIn"));
    // const [signedIn, setSignedIn] = useState(isSignedIn);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //moved to ThemeWrap
    // const [signedIn, setSignedIn] = useState(isSignedIn);

    // const [isSelected, setIsSelected] = useState(isDark);

    const navigate = useNavigate(); //to add navigation to login and register pages

    const handleClick = () => {
        setUser(!user);
    };
    useEffect(() => {
        localStorage.setItem("signedIn", JSON.stringify(user)); //!Mock sign in function, please replace with something more real!
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

    if (user) console.log(user[0].fields.profilePic);
    return (
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        
        <NavbarContent justify="start">

        <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />

          <NavbarBrand className="mr-4">
            <NavLink to="/" aria-current="page" color="foreground" className="flex items-center">
              <AcmeLogo className="place-items-center" />
              <p className="hidden sm:block font-bold text-inherit">VINYL COUNTDOWN</p>
            </NavLink>
          </NavbarBrand>
          <NavbarContent className="hidden md:flex gap-3">
            <NavbarItem>
              <NavLink to="/" aria-current="page" color="foreground" >   {/*// {({isActive}) => isActive ? "secondary" : "foreground" } //? Not sure how to control color if link is the active one */}
                Home
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                New
              </Link>
            </NavbarItem>
            <NavbarItem>
            <NavLink to="/search" aria-current="page" color="foreground">
                Browse
              </NavLink>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center max-w-full" justify="end">
          <Input
            classNames={{
              base: "sm:max-w-[22rem] md:max-w-[12rem] lg:max-w-[20rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search.."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <div className="hidden md:block">
          <NavSwitch/>
          </div>
          <Dropdown placement="bottom-end">
        <DropdownTrigger className="hidden md:block">
            <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                // name="John Madden"
                size="sm"
                src={user && user[0].fields.profilePic}
            />
        </DropdownTrigger>
        <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            disabledKeys={[
                "forums",
                "settings",
                "help_and_feedback",
            ]}
        >
            {" "}
            {/* Avatar menu items */}
            <DropdownItem key="profile" className="h-14 gap-2">
                {user ? (
                    <>
                        <p className="font-semibold">
                            Signed in as:
                        </p>
                        <p className="font-normal">
                            {user && user[0].fields.firstName}{" "}
                            {user && user[0].fields.lastName}
                        </p>
                    </>
                ) : (
                    "Not signed in"
                )}
            </DropdownItem>
            <DropdownItem key="orders">Orders</DropdownItem>
            <DropdownItem key="lists">Lists</DropdownItem>
            <DropdownItem key="forums">Forums</DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="help_and_feedback">
                Help & Feedback
            </DropdownItem>
            {!user && (
                <DropdownItem
                    onClick={() => navigate("register")}
                    key="register"
                >
                    Register
                </DropdownItem>
            )}
            {user ? (
                <DropdownItem
                    key="logout"
                    color="danger"
                    onClick={handleClick}
                >
                    Sign Out
                </DropdownItem>
            ) : (
                <DropdownItem
                    key="login"
                    color="warning"
                    onClick={() => navigate("signin")}
                >
                    Sign In
                </DropdownItem>
            )}
        </DropdownMenu>
    </Dropdown>
</NavbarContent>
{/* Mobile hamburger menu stuff below */}
        <NavbarMenu>
        <NavbarMenuItem className="my-3">
            <NavSwitch />
          </NavbarMenuItem>
        <NavbarMenuItem>
            <NavLink to="/" aria-current="page" color="foreground" className="w-full" size="lg">
              Home
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink color="foreground" href="#" className="w-full" size="lg">
              New
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
          <NavLink to="/search" aria-current="page" color="foreground" className="w-full" size="lg">
              Browse
            </NavLink>
          </NavbarMenuItem>


                <NavbarMenuItem>
                    <NavLink
                        color="foreground"
                        className="w-full"
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
                        href="#"
                    >
                        Lists
                    </NavLink>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <NavLink
                        color="foreground"
                        className="w-full"
                        size="lg"
                        href="#"
                    >
                        Forums
                    </NavLink>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <NavLink
                        color="foreground"
                        className="w-full"
                        size="lg"
                        href="#"
                    >
                        Settings
                    </NavLink>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <NavLink
                        color="foreground"
                        className="w-full"
                        size="lg"
                        href="#"
                    >
                        {" "}
                        {/* //todo NavLink doesn't change the color but Link does, perhaps that's the active link fix */}
                        Help & Feedback
                    </NavLink>
                </NavbarMenuItem>
                <Divider />
                <NavbarMenuItem>
                    <Link
                        color={user ? "danger" : "warning"}
                        className="w-full"
                        size="lg"
                        onClick={handleClick}
                    >
                        {user ? "Sign Out" : "Sign In"}
                    </Link>
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
        </Navbar>
    );
};

export default Nav;
