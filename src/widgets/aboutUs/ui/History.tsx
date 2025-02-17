import { Button, Title } from '@/shared/components';
import { Block } from '@/widgets/block';
import styles from './styles/history.module.scss';

const History = () => {
  return (
    <div className={styles.history}>
      <Title size="40px" className={styles.title}>
        Реальные истории наших клиентов
      </Title>
      <div className={styles.blocks}>
        <Block className={`${styles.history_block}`}>
          <Title size="18px" className={styles.history_title}>
            Сертификация для нового бренда косметики и регистрация торговой марки
          </Title>
          <Button variant="outlinedLight" className={styles.history_btn}>
            Читать кейс
          </Button>
        </Block>
        <Block className={`${styles.history_block}`}>
          <Title size="18px" className={styles.history_title}>
            Как мы помогали клиенту избежать штрафа в 100 тысяч рублей на маркетплейсе
          </Title>
          <Button variant="outlinedLight" className={styles.history_btn}>
            Читать кейс
          </Button>
        </Block>
        <Block className={`${styles.history_block}`}>
          <Title size="18px" className={styles.history_title}>
            Помогли сохранить клиента для логистической компании
          </Title>
          <Button variant="outlinedLight" className={styles.history_btn}>
            Читать кейс
          </Button>
        </Block>
        <Block className={`${styles.history_block}`}>
          <Title size="18px" className={styles.history_title}>
            Помогли клиентупосле непрохождения инспекционного контроля
          </Title>
          <Button variant="outlinedLight" className={styles.history_btn}>
            Читать кейс
          </Button>
        </Block>
      </div>
    </div>
  );
};

export default History;
