/** @format */

import React from "react";
import styles from "./styles.module.css";
import NavBar from "../navigation/NavBar";
import { GlobalPropsI } from "../interface";
import Footer from "../navigation/Footer";

const Layout = ({ children }: GlobalPropsI) => {
  return (
    <div className={styles.container}>
      <>
        <NavBar />
      </>
      {children}
      <>
        <Footer />
      </>
    </div>
  );
};

export default Layout;
