/** @format */

import React from "react";
import { GlobalPropsI } from "../interface";
import styles from "./styles.module.css";

const Section = ({ children }: GlobalPropsI) => {
  return <div className={styles.container}>{children}</div>;
};

export default Section;
