import { FC } from 'react';
import styles from './qrCode.module.scss';
import { Button } from '..';

type QrCodeType = {
  className?: string;
  qrCodeImg: string;
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const QrCode: FC<QrCodeType> = ({ className, qrCodeImg, text, onClick }) => {
  return (
    <div className={`${styles.code} ${className}`}>
      <div className={styles.code__qr}>
        <img src={qrCodeImg} alt="qr-code" />
      </div>

      <div className={styles.tag}>{text}</div>

      <Button className={styles.code__button} onClick={onClick}>
        Перейти
      </Button>
    </div>
  );
};
