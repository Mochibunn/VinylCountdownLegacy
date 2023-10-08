import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {AcmeLogo} from "../assets/AcmeLogo.jsx";
import {SearchIcon} from "../assets/SearchIcon.jsx";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/dist/index.js";
import NavSwitch from "./NavSwitch.jsx";

  const Nav = () => {
    const isSignedIn = JSON.parse(localStorage.getItem("signedIn"))

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [signedIn, setSignedIn] = useState(isSignedIn);
    // const [isSelected, setIsSelected] = useState(isDark);
    
    const userIcon = "https://i.pravatar.cc/150?u=a042581f4e29026704d"; //placeholder info
    const userEmail = "john.madden@nfl.gov"; //placeholder info

    const handleClick = () => {
      setSignedIn(!signedIn);
    }
    useEffect(() => {
      localStorage.setItem("signedIn", signedIn); //!Mock sign in function, please replace with something more real!
    }, [signedIn]);

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

    return (
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        
        <NavbarContent justify="start">

        <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />

          <NavbarBrand className="mr-4">
            <NavLink to="/" aria-current="page" color="foreground" className="flex items-center">
              <AcmeLogo className="place-items-center" />
              <p className="hidden sm:block font-bold text-inherit">VINYL COUNTDOWN</p>
            </NavLink>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
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
              base: "sm:max-w-[8rem] md:max-w-[12rem] lg:max-w-[20rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search.."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <NavSwitch/>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                // name="John Madden"
                size="sm"
                src={signedIn ? userIcon : "https://media.discordapp.net/attachments/199274450011553792/1156984505408700417/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.png"}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={["forums", "settings", "help_and_feedback"]}> {/* Avatar menu items */}
              <DropdownItem key="profile" className="h-14 gap-2">
                {signedIn ? <>
                    <p className="font-semibold">Signed in as:</p>
                    <p className="font-normal">{userEmail}</p>
                  </>
                  : "Not signed in"}
              </DropdownItem>
              <DropdownItem key="orders">Orders</DropdownItem>
              <DropdownItem key="lists">Lists</DropdownItem>
              <DropdownItem key="forums">Forums</DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key={signedIn ? "logout" : "login"} color={signedIn ? "danger" : "warning"} onClick={handleClick}>
                {signedIn ? "Sign Out" : "Sign In"}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
{/* Mobile hamburger menu stuff below */}
        <NavbarMenu>
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
            <NavLink color="foreground" className="w-full" size="lg" href="#">
              Orders
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink color="foreground" className="w-full" size="lg" href="#">
              Lists
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink color="foreground" className="w-full" size="lg" href="#">
              Forums
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink color="foreground" className="w-full" size="lg" href="#">
              Settings
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink color="foreground" className="w-full" size="lg" href="#"> {/* //todo NavLink doesn't change the color but Link does, perhaps that's the active link fix */}
              Help & Feedback
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color={signedIn ? "danger" : "warning"} className="w-full" size="lg" onClick={handleClick}>
              {signedIn ? "Sign Out" : "Sign In"}
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
  }

export default Nav;