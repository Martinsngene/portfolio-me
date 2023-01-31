import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { Button, MenuButton } from "../Button";
import { Links } from "../constants/NavBar.Schema";
import Menu from "../Menu";
const NavBar = () => {
  const [navBarPosition, setNavBarPosition] = useState(false);
  const [menuState, setMenuState] = useState(false);
  // This function listens for the offset of the vetical scrollbar and changes its position accordingly
  const toggleNavPosition = () => {
    if (window.pageYOffset > 100) {
      setNavBarPosition(true);
    } else {
      setNavBarPosition(false);
    }
  };
  // useEffect Hook used to remove event listener after component mounts
  useEffect(() => {
    window.addEventListener("scroll", toggleNavPosition);

    return () => {
      window.removeEventListener("scroll", toggleNavPosition);
    };
  }, []);

  const test = (test: string) => {
    console.log(test);
  };
  return (
    <nav
      className={`w-[100%] h-[10vh] bg-[#fff] flex items-center justify-between px-[1rem]  top-0 left-0 right-0 ${
        navBarPosition ? "fixed shadow-md" : "static"
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <Image src="/logo.png" width={100} height={25} />
      </div>
      <ul className="links w-[50%] xl:w-[40%] items-center justify-between hidden md:flex">
        {/* Links from NavBar Schema mapped into buttons */}
        {Links.map((item, index) => {
          return (
            <Link key={index} href={item.route}>
              <Button
                className={`text-[#1C1E53] text-[0.75rem] xl:text-[1rem] font-[400] leading-[150%]`}
              >
                {item.link}
              </Button>
            </Link>
          );
        })}
      </ul>
      {/* Contact button  */}
      <div className="contact hidden md:block">
        <Button className="w-[108px] h-[32px] bg-[#fff] rounded-[4px] text-[#5E3BEE] text-[0.75rem] xl:text-[1rem] font-[400] leading-[150%] border-[1px] border-solid border-[#5E3BEE]">
          Contact
        </Button>
      </div>
      {/* Open Menu Button */}
      <div className="menuIcon block md:hidden">
        <MenuButton onClick={() => setMenuState(true)}>
          <RiMenu5Fill />
        </MenuButton>
      </div>
      {/* Menu */}
      {menuState && <Menu ctrlMenu={() => setMenuState(!menuState)} />}
    </nav>
  );
};

export default NavBar;
