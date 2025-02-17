import { cva } from 'class-variance-authority';
import styles from './block.module.scss';

export const blockVariants = cva(styles.block, {
  variants: {
    background: {
      white: styles.white,
      gradient: styles.gradient,
      blue: styles.blue,
    },
    orientation: {
      horizontal: styles.horizontal,
      vertical: styles.vertical,
    },
  },
  defaultVariants: {
    background: 'white',
    orientation: 'horizontal',
  },
});
