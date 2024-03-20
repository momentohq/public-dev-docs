import React from 'react';
import styles from './LinkButton.module.css';
import { IoOpenOutline, IoArrowForwardOutline } from "react-icons/io5";

type LinkButtonProps = {
  text: string;
  link: string;
  openInNewTab: Boolean;
  imgSrc: string|undefined; 
};

export const LinkButton: React.FC<LinkButtonProps> = ({ text, link, imgSrc, openInNewTab = false }) => {
  return (
    <div className={styles.card}>
      <a href={link} target={openInNewTab ? "_blank": "_self"} className={styles.cardLink}>
        <div className={styles.cardContent}>
          <div className={styles.cardDescription}>{text}</div>
          <img src={imageSrc}/>
          {openInNewTab ? <IoOpenOutline className={styles.navigationIcon} /> : <IoArrowForwardOutline className={styles.navigationIcon} />}
        </div>
      </a>
    </div>
  );
};
