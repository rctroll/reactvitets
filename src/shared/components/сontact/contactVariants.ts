import { cva } from 'class-variance-authority';
import styles from './contact.module.scss';

export const contactVariants = cva('', {
  variants: {
    size: {
      default: styles.contact__icon,
      small: styles.contact__icon_small,
    },
    textSize: {
      '24px': styles.contact__text,
      '16px': styles.contact__text_16px,
    },
  },
});