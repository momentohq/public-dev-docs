import React from 'react';
import styles from './LinkButton.module.css';
import { IoOpenOutline, IoArrowForwardOutline } from "react-icons/io5";

type LinkButtonProps = {
  text: string;
  link: string;
  openInNewTab: Boolean;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ text, link, openInNewTab = false }) => {
  return (
    <div className={styles.card}>
      <a href={link} target={openInNewTab ? "_blank": "_self"} className={styles.cardLink}>
        <div className={styles.cardContent}>
          <div className={styles.cardDescription}>{text}</div>
          {openInNewTab ? <IoOpenOutline className={styles.navigationIcon} /> : <IoArrowForwardOutline className={styles.navigationIcon} />}
        </div>
      </a>
    </div>
  );
};
