/** @format */

import Image from "next/image";
import React from "react";
import Section from "../components/section";
import Seo from "../components/seo";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Seo title='Martins Ngene' />
      <Section
        showHeader
        header='Hi there, welcome! 👋'
        className='bg-[#8cb369]'>
        <div className={styles.container}>
          <Photo />
          <Info />
        </div>
      </Section>
    </>
  );
};

const Photo = () => {
  return (
    <div className={styles.photo}>
      <Image src='/me-home.jpg' alt='' width={450} height={299} />
    </div>
  );
};

const Info = () => {
  return (
    <div className={styles.info}>
      <div>
        <h1 className={styles.name}>Martins Ngene</h1>
        <p className={styles.title}>
          Software Engineer <br className={styles.br} /> &{" "}
          <br className={styles.br} />
          Blockchain Developer
        </p>
      </div>
      <div className='mt-1 xl:mt-[3rem]'>
        <div className={styles.expertise}>
          <h3>Expertise:</h3>
          <p>Client-side development, RWD, Dapps, Smart Contracts.</p>
        </div>
        <div className={styles.hobby}>
          <h3>Hobby:</h3> <p>Reading, Swimming, Gaming</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
