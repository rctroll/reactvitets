import { Button, Title } from '@/shared/components';
import { Block } from '@/widgets/block';

import styles from './styles/references.module.scss';
import { ArrowDown } from '@/shared/assets';

const References = () => {
  return (
    <div className={styles.references}>
      <Title size="24px" className={styles.references_title}>
        Полезные материалы
      </Title>
      <div className={styles.blocks}>
        <Block className={styles.references_block}>
          <Title size="24px" className={styles.references__title}>
            Штрафы
          </Title>
          <Button>
            Скачать
            <ArrowDown color="#040085" />
          </Button>
        </Block>
        <Block className={styles.references_block}>
          <Title size="24px" className={styles.references__title}>
            Как проверить лабораторию в реестре
          </Title>
          <Button className={styles.references_btn}>
            Скачать
            <ArrowDown color="#040085" />
          </Button>
        </Block>
      </div>
    </div>
  );
};

export default References;
