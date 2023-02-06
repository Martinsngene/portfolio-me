/** @format */

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { CardPropsI } from "../interface";
import styles from "./styles.module.css";

const Card = ({
  name,
  description,
  imgUrl,
  linkLabel,
  link,
  className,
}: CardPropsI) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.cardImgContainer}>
        <Image src={imgUrl} layout='fill' alt='' />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.cardDescriptionContainer}>
        <p>{description}</p>
      </div>
      <div className={styles.cardLinkContainer}>
        <a href={`${link}`} target='_blank' className={styles.cardLink}>
          <span>{linkLabel}</span>
          <BsArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Card;
