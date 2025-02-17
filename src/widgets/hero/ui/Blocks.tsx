import styles from './styles/blocks.module.scss';
import { Title } from '@/shared/components';

const Blocks = () => {
  return (
    <div className={styles.blocks}>
      <div className={styles.blocks__item}>
        <Title size={'20px'} className={styles.blocks__item_title}>
          Вносим
          <br /> в реестр <br className={styles.shift} /> ФСА
        </Title>
        <p className={styles.blocks__item_text}>Даем 100% гарантию легитимности</p>
      </div>
      <div className={styles.blocks__item}>
        <Title size={'20px'} className={styles.blocks__item_title}>
          Оплата после
          <br /> получения <br className={styles.shift} /> макета
        </Title>
        <p className={styles.blocks__item_text}>Строим доверие вместе</p>
      </div>
      <div className={styles.blocks__item}>
        <Title size={'20px'} className={styles.blocks__item_title}>
          Только
          <br /> аккредитованные органы
        </Title>
        <p className={styles.blocks__item_text}>Вы платите за качественные документы</p>
      </div>
    </div>
  );
};

export default Blocks;
