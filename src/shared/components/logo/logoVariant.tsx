import { cva, type VariantProps } from 'class-variance-authority';

import styles from './logo.module.scss';

export type LogoVariants = VariantProps<typeof logoVariants>;

export const logoVariants = cva('logo', {
  variants: {
    size: {
      xl: styles.xl,
      l: styles.l,
      m: styles.m,
      s: styles.s,
    },
  },
});
