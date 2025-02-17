import { FC } from 'react';

import styles from './badge.module.scss';

type BadgeProps = {
  className?: string;
  text: string;
};

export const Badge: FC<BadgeProps> = ({ className, text }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
