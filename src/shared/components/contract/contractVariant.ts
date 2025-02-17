import { cva, type VariantProps } from 'class-variance-authority';

import styles from './contract.module.scss';

export type ContractVariant = VariantProps<typeof contractVariant>;

export const contractVariant = cva('', {
  variants: {
    variant: {
      default: styles.contract,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
