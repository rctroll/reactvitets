import { Block } from '@/widgets/block';
import { Title } from '@/shared/components';
import { HTMLAttributes } from 'react';

import styles from './styles/mistakeBlock.module.scss';

interface MistakeBlockProps {
  children: React.ReactNode;
  className?: string;
}

const MistakeBlock = ({ children, className }: MistakeBlockProps) => {
  return <div className={`${styles.block} ${className}`}>{children}</div>;
};

interface MistakeBlockHeaderProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  className?: string;
}

const MistakeBlockHeader = ({ icon, children, className }: MistakeBlockHeaderProps) => {
  return (
    <Block className={`${styles.block__top} ${className}`}>
      {icon}
      <Title size="20px" className={styles.title}>
        {children}
      </Title>
    </Block>
  );
};

interface MistakeBlockFooterProps extends HTMLAttributes<HTMLDivElement> {
  color: 'blue' | 'purple' | 'yellow';
  icon: React.ReactNode;
  className?: string;
}

const MistakeBlockFooter = ({
  color,
  icon,
  children,
  className,
}: MistakeBlockFooterProps) => {
  return (
    <Block
      background={'gradient'}
      className={`${styles.block__bottom} ${
        styles[`block__bottom_${color}`]
      } ${className}`}
    >
      {icon}
      <Title size="20px" className={styles.title}>
        {children}
      </Title>
    </Block>
  );
};

interface MistakeBlockArrowProps {
  color: 'blue' | 'purple' | 'yellow';
  className?: string;
}

const MistakeBlockArrow = ({ color, className }: MistakeBlockArrowProps) => {
  return (
    <div
      className={`${styles.arrow} ${styles.block__arrow} ${
        styles[`arrow__${color}`]
      } ${className}`}
    ></div>
  );
};

export { MistakeBlock, MistakeBlockHeader, MistakeBlockArrow, MistakeBlockFooter };
