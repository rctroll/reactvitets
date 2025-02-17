import { Block, BlockStep } from '@/widgets';
import styles from './certificationSteps.module.scss';
import { Title } from '@/shared/components';

const CertificationSteps = () => {
  return (
    <div className={`${styles.cerfitication_steps}`}>
      <div className="container">
        <Title size={'40px'} className={styles.title}>
          4 ступени к сертификации продукции
        </Title>
        <div className={styles.steps}>
          <Block orientation="vertical" className={`${styles.block} ${styles.block1}`}>
            <BlockStep className={`${styles.block__step} ${styles.block1_step1}`}>
              01
            </BlockStep>
            <Title size="24px" className={styles.block__title}>
              Заявка
            </Title>
            <p className={styles.block__subtitle}>
              Вы оставляете заявку - и наш менеджер подберет и предложит оптимальную схему
              оформления{' '}
            </p>
          </Block>
          <Block orientation="vertical" className={`${styles.block} ${styles.block2}`}>
            <BlockStep className={`${styles.block__step}  ${styles.block2_step2}`}>
              02
            </BlockStep>
            <Title size="24px" className={styles.block__title}>
              Образцы и документы
            </Title>
            <p className={styles.block__subtitle}>
              Мы организуем доставку образцов и документов любым удобным для вас способом
            </p>
          </Block>
          <Block orientation="vertical" className={`${styles.block} ${styles.block3}`}>
            <BlockStep className={`${styles.block__step}  ${styles.block3_step3}`}>
              03
            </BlockStep>
            <Title size="24px" className={styles.block__title}>
              Испытания и сертификация
            </Title>
            <p className={styles.block__subtitle}>
              Мы проводим испытания в собственной аккредитованной лаборатории и
              направляемв орган сертификации
            </p>
          </Block>
          <Block orientation="vertical" className={`${styles.block} ${styles.block4}`}>
            <BlockStep className={`${styles.block__step}  ${styles.block4_step4}`}>
              04
            </BlockStep>
            <Title size="24px" className={styles.block__title}>
              Готово. Документы у Вас
            </Title>
            <p className={styles.block__subtitle}>
              Вы получаете скан-копию готовых документов на электронную почту, а позже наш
              курьер доставляет вам оригиналы
            </p>
          </Block>
        </div>
      </div>
    </div>
  );
};

export { CertificationSteps };
