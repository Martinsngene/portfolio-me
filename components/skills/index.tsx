/** @format */

import Image from "next/image";
import React from "react";
import { skills } from "../constants/Skills.Schema";
import Section from "../section";
import styles from "./styles.module.css";

const SkillsModule = () => {
  return (
    <Section>
      <div
        id='skills'
        className='bg-[#fff] h-full lg:px-[3.75rem] w-full lg:w-[95%] mx-auto'>
        {skills.map((skill) => {
          return (
            <div className='mb-[3rem] flex flex-col items-center justify-center'>
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
    </div>
  );
};

export default SkillsModule;
