import About from './About';
import History from './History';
import VideoReviews from './VideoReviews';
import AvitoReviews from './AvitoReviews';

import styles from './styles/aboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={`${styles.container} container`}>
        <About />
        <History />
        <VideoReviews />
        <AvitoReviews />
      </div>
    </div>
  );
};

export { AboutUs };
