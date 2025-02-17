import { contractVariant, ContractVariant } from './contractVariant';

import styles from './contract.module.scss';
import { Button } from '../button/Button';
import { RightIcon } from '@/shared/assets';

interface ContractProps extends ContractVariant {
  image?: string;
  title: string;
  price: number;
  isColapsed?: boolean;
  className?: string;
}

export const Contract = ({
  variant,
  image,
  title,
  price,
  isColapsed = false,
  className,
}: ContractProps) => {
  return (
    <div className={contractVariant({ variant, className })} data-colapsed={isColapsed}>
      <img src={image} alt={title} className={styles.contract__image} />

      <h3 className={`${styles.contract_text} truncate`}>{title}</h3>

      <div className={styles.contract__price}>
        <span style={{ color: '#3D3D3D' }} className={styles.contract_text_sm}>
          Цена:
        </span>
        <span className={styles.contract_text}>от {price} руб.</span>
      </div>

      {/* Позже кнопки надо будет поменять на кнопки с соответствующими вариантами */}
      {isColapsed ? (
        <Button className={styles.contract__button}>
          <RightIcon />
        </Button>
      ) : (
        <Button size={'small'}>Получить</Button>
      )}
    </div>
  );
};
