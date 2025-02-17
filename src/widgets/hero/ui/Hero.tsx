import Banner from './Banner';
import Blocks from './Blocks';
import Partners from './Partners';
import styles from './styles/hero.module.scss';

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <Banner />
        <Blocks />
        <Partners />
      </div>
    </div>
  );
};

export { Hero };
