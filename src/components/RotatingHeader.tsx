import React, { useState, useEffect } from 'react';
import Translate from '@docusaurus/Translate';
import * as stylex from '@stylexjs/stylex';

export type RotatingHeaderProps = {
  rotatingText: string[];
  headerText: string,
  description: string
};

export const RotatingHeader: React.FC<RotatingHeaderProps> = ({ rotatingText, headerText, description }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [rotatingText.length]);

  return (
    <div {...stylex.props(styles.headerSection)}>
      <p>
      <span {...stylex.props(styles.header)}>{headerText} </span>
      <span {...stylex.props([styles.rotatingHeader, fade ? styles.fadeIn : styles.fadeOut, styles.header])}>
        {rotatingText[index]}
      </span>
      </p>
      <div {...stylex.props(styles.headerDescription)}>
        {description}
      </div>
    </div>
  );
};

const styles = stylex.create({
  headerSection: {
    padding: '0rem 1rem'
  },
  headerDescription: {
    padding: '1rem 0rem',
    fontSize: '1.2rem'
  },
  header: {
    fontSize: '60px',
    fontWeight: 'bold'
  },
  rotatingHeader: {
    transition: 'opacity 0.5s ease-in-out',
    opacity: 1
  },
  fadeOut: {
    opacity: 0
  },
  fadeIn: {
    opacity: 1
  }
});
