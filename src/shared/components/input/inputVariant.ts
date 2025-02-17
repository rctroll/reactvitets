import { cva, type VariantProps } from 'class-variance-authority';

import styles from './input.module.scss';

export type InputVariants = VariantProps<typeof inputVariants>;

export const inputVariants = cva(styles.default, {
  variants: {
    variant: {
      default: styles.input,
    },
  },
});