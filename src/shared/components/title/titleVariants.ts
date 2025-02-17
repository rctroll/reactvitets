import { cva } from 'class-variance-authority';
import styles from './title.module.scss';

export const titleVariants = cva('', {
  variants: {
    variant: {
      primary: styles.title_primary,
    },
    size: {
      '56px': styles.title_56px,
      '40px': styles.title_40px,
      '24px': styles.title_24px,
      '20px': styles.title_20px,
      '18px': styles.title_18px,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: '40px',
  },
});
