/** @format */

import Link from "next/link";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { RiMenu4Line } from "react-icons/ri";
import { Button, MenuButton } from "../button";
import { Links } from "../constants/NavBar.Schema";

interface MenuPropsI {
  ctrlMenu: any;
}

const Menu = ({ ctrlMenu }: MenuPropsI) => {
  // Animation from React Spring
  const [flip, set] = useState(false);

  //   Mount Component Animation
  const props = useSpring({
    to: { width: `100%`, opacity: 1, height: `100%` },
    from: { width: `0%`, opacity: 0, height: `0%` },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onClick: () => set(!flip),
  });

  return (
    <animated.div
      className='bg-[#F5FCFF] z-50 top-0 right-0 left-0 absolute w-[100%] h-[100%] flex items-start justify-center'
      style={flip ? props : props}>
      {/* Close Menu Button */}
      <div className='closeMenuBtn  absolute top-[1rem] right-[3rem]'>
        <MenuButton onClick={ctrlMenu}>
          <RiMenu4Line />
        </MenuButton>
      </div>
      {/* Navigation Links */}
      <ul className=' h-[45%] flex items-center justify-around flex-col mt-[50px]'>
        {Links.map((item, index) => {
          return (
            <Link key={index} href={item.route}>
              <Button
                className={`text-[#1C1E53] text-[1rem] font-[600] leading-[150%]`}>
                {item.link}
              </Button>
            </Link>
          );
        })}
      </ul>
    </animated.div>
  );
};

export default Menu;
