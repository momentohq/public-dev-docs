import React from 'react';
import * as stylex from '@stylexjs/stylex';

type CardGridProps = React.PropsWithChildren<{
    variant?: 'default' | 'dense',
}>;

const styles = stylex.create({
  grid: {
    display: 'grid',
    gap: '2.25rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  denseGrid: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  }
});

export const CardGrid: React.FC<CardGridProps> = ({ variant, children }) => (
    <div {...stylex.props(styles.grid, variant === 'dense' && styles.denseGrid)}>{children}</div>
);
export type CardGrid = typeof CardGrid;
