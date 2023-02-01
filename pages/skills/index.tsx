/** @format */

import Image from "next/image";
import React from "react";
import { skills } from "../../components/constants/Skills.Schema";
import Section from "../../components/section";
import styles from "./styles.module.css";

const index = () => {
  return (
    <Section>
      <div id='skills' className='bg-[#a8dadc] h-full w-full'>
        {skills.map((skill) => {
          return (
            <div className='mb-[1rem] flex flex-col items-center justify-center'>
              <h1>{skill.sectionName}</h1>
              <div className='flex items-center justify-center flex-wrap'>
                {skill.sectionDetails.map((item) => {
                  return (
                    <Skill icon={item.icon} name={item.name} alt={item.name} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Skill = ({
  icon,
  alt,
  name,
}: {
  icon: string;
  alt: string;
  name: string;
}) => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.name}>{name}</div>
      <div className={styles.icon}>
        <Image layout='fill' src={icon} alt={alt} />
      </div>
      {/* <a
        target='_blank'
        href='https://icons8.com/icon/Sx0c8V3R9jEJ/auth0-the-solution-you-need-for-web%2C-mobile%2C-iot%2C-and-internal-applications.'>
        Auth0 the solution you need for web, mobile, IoT, and internal
        applications.
      </a>{" "}
      icon by{" "}
      <a target='_blank' href='https://icons8.com'>
        Icons8
      </a> */}
    </div>
  );
};

export default index;
