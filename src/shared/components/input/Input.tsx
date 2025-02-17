import { ComponentProps, ComponentPropsWithRef } from 'react';

import { InputVariants, inputVariants } from './inputVariant';

import styles from './input.module.scss';

type InputProps = ComponentProps<'input'> &
  InputVariants &
  ComponentPropsWithRef<'input'> & {
    variant?: 'default';
    errorMessage?: string | null;
  };

export const Input = ({ variant, className, errorMessage, ...props }: InputProps) => {
  return (
    // <div className={styles.container}>
    <>
      <input
        style={{ borderColor: errorMessage ? 'var(--error_input)' : '' }}
        className={`${inputVariants({ variant, className })} ${
          errorMessage ? 'error' : ''
        }`}
        {...props}
      />
      {errorMessage && <span className={styles.error_message}>{errorMessage}</span>}
    </>
    // </div>
  );
};
