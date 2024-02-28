import React from 'react';
import styles from './ReferenceCard.module.css';

type ReferenceCardProps = {
  title: string;
  description: string;
  link: string;
  icon: string;
  variation: string;
};

const ReferenceCard: React.FC<ReferenceCardProps> = ({ title, description, link, icon, variation = 'normal' }) => {
  let cardMarginBottom = '';
  let cardWidth = '';
  switch (variation.toLowerCase()) {
    case 'dense':
      cardMarginBottom = '0';
      cardWidth = '15em';
      break;
  };

  return (
    <div className={styles.card} style={{width: cardWidth}}>
      <a href={link} target="_blank" className={styles.cardLink}>
        <div className={styles.cardBody}>
          {icon && (
            <img src={icon} height="32px" width="32px" />
          )}
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription} style={{ marginBottom: cardMarginBottom }}>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ReferenceCard;
