import React from 'react';
import styles from './LinkButton.module.css';

type LinkButtonProps = {
  text: string;
  link: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ text, link }) => {
  return (
    <a href={link}><button className={styles.link_button}>{text} -&gt;</button></a>
  );
};
