/** @format */

import Link from "next/link";
import React from "react";
import { footerIcons } from "../constants/Footer.Schema";

const Footer = () => {
  return (
    <div className='w-full px-4 lg:px-[3rem] h-[7.5vh] flex items-center justify-between bg-white'>
      <div className='text-[0.75rem] lg:text-[1rem]  text-[#000] font-[700] flex items-center justify-center'>
        <span>&copy;</span>
        <span className='ml-2'>2023. Martins Ngene</span>
      </div>
      <div className='flex items-center justify-between text-[1rem] md:text-[2rem] md:w-[500px]'>
        {footerIcons.map((icon, index) => {
          return (
            <div className='cursor-pointer' key={index}>
              <Link href={icon.link} passHref={true}>
                <span title={icon.name}>{icon.icon}</span>
              </Link>
            </div>
          );
        })}
      </div>
      <div className='text-[0.75rem] lg:text-[1rem] text-[#000] font-[700]'>
        Made with 🔥🔥🔥 by Martins Ngene
      </div>
    </div>
  );
};

export default Footer;
