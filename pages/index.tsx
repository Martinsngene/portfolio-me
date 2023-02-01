/** @format */

import Head from "next/head";
import Image from "next/image";
import React from "react";
import Section from "../components/section";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Martins Ngene</title>
      </Head>
      <Section>
        <div id='home' className={styles.container}>
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
      <Image src='/photo.jpg' alt='' width={445} height={610} />
    </div>
  );
};

const Info = () => {
  return (
    <div className={styles.info}>
      <div>
        <h1 className={styles.name}>Martins Ngene</h1>
        <p className={styles.title}>Software Engineer & Blockchain Developer</p>
      </div>
      <div className='mt-[3rem]'>
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
