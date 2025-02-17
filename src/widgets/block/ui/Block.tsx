import { HTMLAttributes } from 'react';
import { blockVariants } from './blockVariants';
import { VariantProps } from 'class-variance-authority';

import styles from './block.module.scss';

interface BlockProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof blockVariants> {}

const Block = ({
  className,
  children,
  background,
  orientation,
  ...props
}: BlockProps) => {
  return (
    <div className={blockVariants({ background, orientation, className })} {...props}>
      {children}
    </div>
  );
};

interface BlockStepProps extends HTMLAttributes<HTMLDivElement> {
  children?: string;
}

const BlockStep = ({ children, className, ...props }: BlockStepProps) => {
  return (
    <div className={`${styles.step} ${className}`} {...props}>
      {children}
    </div>
  );
};

interface BlockIconProps extends HTMLAttributes<HTMLDivElement> {}

const BlockIcon = ({ children, className, ...props }: BlockIconProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export { Block, BlockStep, BlockIcon };
