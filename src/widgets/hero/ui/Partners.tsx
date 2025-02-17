import { PartnersScroll, Title } from '@/shared/components';

import styles from './styles/partners.module.scss';
import { PARTNERS_CONFIG } from '../model/configs/config';

const Partners = () => {
  return (
    <div className={styles.partners}>
      <Title size="24px" className={styles.partners__title}>
        С кем мы сотрудничаем
      </Title>
      <PartnersScroll partners={PARTNERS_CONFIG} />
    </div>
  );
};

export default Partners;
