import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './buttonVariant';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  variant,
  size,
  rounded,
  className,
  fontSize,
  children,
  ...props
}: ButtonProps) => {
  const variantClasses = buttonVariants({ variant, size, rounded, fontSize, className });

  return (
    <button {...props} className={variantClasses}>
      {children}
    </button>
  );
};

export { Button };
