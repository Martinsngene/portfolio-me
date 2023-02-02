/** @format */

import Image from "next/image";
import React from "react";
import { skills } from "../../components/constants/Skills.Schema";
import Section from "../../components/section";
import Seo from "../../components/seo";
import styles from "./styles.module.css";

const index = () => {
  return (
    <>
      <Seo title='Skills' />
      <Section className='bg-[#5b8e7d]'>
        {skills.map((skill) => {
          return (
            <div
              key={skill.sectionName}
              className='mb-[1rem] flex flex-col items-center '>
              <h1 className={styles.sectionName}>{skill.sectionName}</h1>
              <div className='grid grid-cols-3 lg:grid-cols-8'>
                {skill.sectionDetails.map((item) => {
                  return (
                    <Skill
                      key={item.icon}
                      icon={item.icon}
                      name={item.name}
                      alt={item.name}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </Section>
    </>
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
