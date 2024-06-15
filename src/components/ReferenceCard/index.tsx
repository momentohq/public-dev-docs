import React from 'react';
import * as stylex from '@stylexjs/stylex';

type ReferenceCardProps = {
  title: string;
  description: string;
  link: string;
  icon: string;
  variant: 'normal' | 'dense';
};

const style = stylex.create({
  card: {
    border: '1px solid #eaeaea',
    borderRadius: 4,
    padding: 16,
    transition: 'box-shadow 0.3s ease',
    width: '25em',
    boxShadow: {
      ':hover': '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
  },
  denseCard: {
    width: '15em',
  },
  description: {
    color: '#929C95'
  },
  denseDescription: {
    marginBottom: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    gap: '.5em',
  },
  content: {
    textAlign: 'left',
  },
  title: {
    marginTop: 0,
  },
});

const ReferenceCard: React.FC<ReferenceCardProps> = ({ title, description, link, icon, variant = 'normal' }) => {
  let cardMarginBottom = '';
  let cardWidth = '';
  switch (variant) {
    case 'dense':
      cardMarginBottom = '0';
      cardWidth = '15em';
      break;
  };

  return (
    <div {...stylex.props(style.card, variant === 'dense' && style.denseCard)}>
      <a href={link} target="_blank" {...stylex.props(style.link)}>
        <div {...stylex.props(style.body)}>
          {icon && (
            <img src={icon} height="32px" width="32px" />
          )}
          <div {...stylex.props(style.content)}>
            <h3 {...stylex.props(style.title)}>{title}</h3>
            <p {...stylex.props(style.description, variant === 'dense' && style.denseDescription)}>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ReferenceCard;
