/** @format */

import React from "react";
import { GlobalPropsI } from "../interface";
import styles from "./styles.module.css";

const Section = ({ children, className }: GlobalPropsI) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Section;
