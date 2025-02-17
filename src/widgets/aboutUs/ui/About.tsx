import { Title } from '@/shared/components';
import { Block } from '@/widgets/block';
import styles from './styles/about.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <Title size="40px" className={styles.title}>
        О нас
      </Title>
      <Block className={styles.aboutBlock}>
        <p className={styles.aboutBlock__info}>
          <span style={{ color: '#040085', fontWeight: 600 }}>​​Компания Нордтест</span> –
          это международный центр сертификации продукции и услуг на территории таможенного
          союза. Мы являемся надежным партнером в области сертификации и оценки
          соответствия для бизнеса, стремящегося к успешному выходу на рынок Таможенного
          союза. Наша миссия — обеспечить высокие стандарты качества и безопасности
          продукции, помогая нашим клиентам успешно адаптироваться к требованиям
          законодательства. Мы ценим доверие наших клиентов и стремимся к долгосрочному
          сотрудничеству. Выбирая наш Центр сертификации, вы получаете гарантию качества и
          уверенность в том, что ваша продукция соответствует самым высоким стандартам. 
        </p>
      </Block>
      <div className={styles.blocks}>
        <Block className={`${styles.block} ${styles.market}`}>
          <Title size={'40px'} className={styles.market_title}>
            5 лет
          </Title>
          <p className={styles.block_subtitle}>Более 5 лет на рынке</p>
        </Block>

        <Block className={`${styles.block} ${styles.declaration}`}>
          <Title size={'40px'} className={styles.declaration_title}>
            49000
          </Title>
          <p className={styles.block_subtitle}>Оформлено 49000 деклараций</p>
        </Block>

        <Block className={`${styles.block} ${styles.certificate}`}>
          <Title size={'40px'} className={styles.certificate_title}>
            8500
          </Title>
          <p className={styles.block_subtitle}>Оформлено 8500 сертификатов</p>
        </Block>

        <Block className={`${styles.block} ${styles.client}`}>
          <Title size={'40px'} className={styles.client_title}>
            7000
          </Title>
          <p className={styles.block_subtitle}>Более 7000 довольных клиентов</p>
        </Block>
      </div>
    </div>
  );
};

export default About;
