import React from 'react';
import * as stylex from '@stylexjs/stylex';
import Link from '@docusaurus/Link';

export type LinkCardProps = {
  title: string,
  description: string,
  link: string,
  icon: string,
  alignText?: 'start' | 'center',
  alignItems?: 'start' | 'center',
};

export const LinkCard: React.FC<LinkCardProps> = ({ title, description, link, icon, alignText = 'start', alignItems = 'start' }) => (
    <Link to={link} target="_blank" {...stylex.props(styles.card, styles.link, alignItems === 'center' && styles.alignItemsCenter)}>
      {icon && (
        <img src={icon} height="32px" width="32px" />
      )}
      <div {...stylex.props(styles.content, alignText === 'center' && styles.alignCenter)}>
        <h3 {...stylex.props(styles.title)}>{title}</h3>
        <p {...stylex.props(styles.description)}>{description}</p>
      </div>
    </Link>
  );
export type LinkCard = typeof LinkCard;

const styles = stylex.create({
  card: {
    // box layout
    display: 'flex',
    width: '100%',
    minHeight: '2rem',
    padding: 16,

    // content layout
    flexDirection: 'row',
    alignItems: 'start',
    gap: 16,

    // border
    border: '1px solid #c9cdca',
    borderRadius: 4,

    // hover
    transition: 'box-shadow 0.3s ease',
    boxShadow: {
      ':hover': '0 4px 8px rgba(0, 0, 0, 0.2)'
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
    textAlign: 'start',
  },
  alignCenter: {
    textAlign: 'center',
  },
  title: {
    marginTop: 0,
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 0,
  },
});
