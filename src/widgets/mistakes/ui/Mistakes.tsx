import { Title } from '@/shared/components';
import { Board, Man, Rubles, Schedule, Time, Ticket } from '@/shared/assets';

import {
  MistakeBlock,
  MistakeBlockArrow,
  MistakeBlockFooter,
  MistakeBlockHeader,
} from './MistakeBlock';
import References from './References';

import styles from './styles/mistakes.module.scss';

const Mistakes = () => {
  return (
    <div className={styles.mistakes}>
      <div className={`${styles.container} container`}>
        <Title size="40px" className={styles.title}>
          Узнай, как избежать <br /> ошибок в сертификации
        </Title>
        <div className={styles.blocks}>
          <MistakeBlock>
            <MistakeBlockHeader icon={<Man color="#8E0000" />}>
              Кругом посредники и однодневки
            </MistakeBlockHeader>
            <MistakeBlockArrow color="blue" />
            <MistakeBlockFooter icon={<Schedule color="#040085" />} color="blue">
              Мы на рынке с 2011 года, твердые эксперты в своем деле
            </MistakeBlockFooter>
          </MistakeBlock>

          <MistakeBlock>
            <MistakeBlockHeader icon={<Board color="#8E0000" />}>
              Оформляют разрешительный документ и забывают про Вас
            </MistakeBlockHeader>
            <MistakeBlockArrow color="purple" />
            <MistakeBlockFooter icon={<Time color="#040085" />} color="purple">
              Мы всегда на связи и напоминаем вам про обновление документов даже через 5
              лет
            </MistakeBlockFooter>
          </MistakeBlock>

          <MistakeBlock>
            <MistakeBlockHeader icon={<Rubles color="#8E0000" />}>
              Называют низкую цену без учета специфики продукции
            </MistakeBlockHeader>
            <MistakeBlockArrow color="yellow" />
            <MistakeBlockFooter icon={<Ticket color="#040085" />} color="yellow">
              Рассказываем вам про разные варианта выпуска, ориентируясь под ваш бюджет
            </MistakeBlockFooter>
          </MistakeBlock>

          <References />
        </div>
      </div>
    </div>
  );
};

export { Mistakes };
