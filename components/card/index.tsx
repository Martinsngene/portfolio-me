/** @format */

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { CardPropsI } from "../interface";

const Card = ({
  name,
  description,
  imgUrl,
  linkLabel,
  link,
  className,
}: CardPropsI) => {
  return (
    <div
      className={`bg-[#fff] w-[120px] lg:w-[300px] p-2 hover:shadow-2xl mb-[1rem] rounded-md md:mb-0 ${className}`}>
      <div className='cardImgContainer relative w-full h-[60px] lg:h-[220px] lg:w-full flex  items-center justify-center'>
        <Image src={imgUrl} layout='fill' alt='' />
      </div>
      <div className='text-[1rem] font-bold lg:text-[1.5rem] mt-1 lg:mt-0 lg:px-2'>
        {name}
      </div>
      <div className='cardDescriptionContainer text-[0.5rem] lg:text-[1rem] mt-1 lg:mt-0 lg:px-2'>
        <p>{description}</p>
      </div>
      <div className='cardLinkContainer my-1 lg:my-2 lg:mx-3'>
        <a
          href={`${link}`}
          target='_blank'
          className='text-[#123384] text-[0.5rem] lg:text-[1rem] font-[600] flex w-full items-center justify-between'>
          <span>{linkLabel}</span>
          <BsArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Card;
