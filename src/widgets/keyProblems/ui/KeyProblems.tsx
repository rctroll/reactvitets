import { AdvantagesIcon } from '@/shared/assets';
import { Button, Title } from '@/shared/components';
import { Block, BlockIcon } from '@/widgets/block';
import styles from './keyProblems.module.scss';

const KeyProblems = () => {
  return (
    <div className={styles.keyProblems}>
      <div className="container">
        <Title size="40px" className={styles.title}>
          Ваша ключевая задача реализовать продукцию -{' '}
          <span style={{ color: '#040085' }}>сертификацию мы берем на себя</span>
        </Title>
        <div className={styles.blocks}>
          <Block background="blue" className={`${styles.block} ${styles.blocks__block1}`}>
            <BlockIcon>
              <AdvantagesIcon />
            </BlockIcon>
            <Title size={'18px'} className={styles.block__title}>
              Спокойно займитесь продажами
            </Title>
          </Block>
          <Block background="blue" className={`${styles.block} ${styles.blocks__block2}`}>
            <BlockIcon>
              <AdvantagesIcon />
            </BlockIcon>
            <Title size={'18px'} className={styles.block__title}>
              Создайте новый модельный ряд - мы подберем штрих коды.
            </Title>
          </Block>
          <Block background="blue" className={`${styles.block} ${styles.blocks__block3}`}>
            <BlockIcon>
              <AdvantagesIcon />
            </BlockIcon>
            <Title size={'18px'} className={styles.block__title}>
              Не тратьте свое время на изучение разрешительной документации. Доверьте
              сертификацию продукции тем, кто уже более 11 лет занимается этим
              профессионально
            </Title>
          </Block>
        </div>
        <Button className={styles.btn}>Оставить заявку</Button>
      </div>
    </div>
  );
};

export { KeyProblems };
