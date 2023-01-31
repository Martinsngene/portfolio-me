/** @format */

import Image from "next/image";
import React from "react";
import Section from "../section";
import styles from "./styles.module.css";

const HomeSection = () => {
  return (
    <Section>
      <div id='home' className={styles.container}>
        <Photo />
        <Info />
      </div>
    </Section>
  );
};

const Photo = () => {
  return (
    <div className={styles.photo}>
      <Image src='/photo.jpg' alt='' width={445} height={610} />
    </div>
  );
};

const Info = () => {
  return (
    <div className={styles.info}>
      <div>
        <h1 className={styles.name}>Martins Ngene</h1>
        <h2 className={styles.title}>
          Software Engineer & Blockchain Developer
        </h2>
      </div>
      <div className='mt-[3rem]'>
        <p className={styles.expertise}>
          <h3>Expertise:</h3>
          <p>
            Client-side development, Responsive Web Design, Dapps, Smart
            Contracts.
          </p>
        </p>
        <p className={styles.hobby}>
          <h3>Hobby:</h3> <p>Reading, Swimming, Gaming</p>
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
