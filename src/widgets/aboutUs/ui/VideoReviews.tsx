import { Button, Title } from '@/shared/components';
import { Video } from '@/widgets/video';

import ReviewImage2 from '../../../../public/videoReviews/img1.png';
import ReviewImage3 from '../../../../public/videoReviews/img2.png';
import ReviewImage4 from '../../../../public/videoReviews/img3.png';
import ReviewImage from '../../../../public/videoReviews/img4.png';

import styles from './styles/videoReviews.module.scss';

const VideoReviews = () => {
  return (
    <div className={styles.videoReviews}>
      <Title size="40px" className={styles.title}>
        Видео отзывы
      </Title>
      <div className={styles.blocks}>
        <Video
          url=""
          placeholderImg={ReviewImage}
          className={styles.videoReviews_block}
        />
        <Video
          url=""
          placeholderImg={ReviewImage2}
          className={styles.videoReviews_block}
        />
        <Video
          url=""
          placeholderImg={ReviewImage3}
          className={styles.videoReviews_block}
        />
        <Video
          url=""
          placeholderImg={ReviewImage4}
          className={styles.videoReviews_block}
        />
      </div>
      <Button className={styles.videoReviews_btn}>Оставить заявку</Button>
    </div>
  );
};

export default VideoReviews;
