import React from 'react';
import styles from './ReferenceCard.module.css';

type ReferenceCardProps = {
  title: string;
  description: string;
  link: string;
};

const ReferenceCard: React.FC<ReferenceCardProps> = ({ title, description, link }) => {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" className={styles.cardLink}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ReferenceCard;
