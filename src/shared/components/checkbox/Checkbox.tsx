import { HTMLAttributes, useId } from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  children?: React.ReactNode;
}

const Checkbox = ({ children, className = '', ...props }: CheckboxProps) => {
  const id = useId();

  return (
    <>
      <input
        type="checkbox"
        id={id}
        className={`${styles.checkbox} ${className}`}
        {...props}
      />
      <label htmlFor={id}>{children ?? ''}</label>
    </>
  );
};

export { Checkbox };
