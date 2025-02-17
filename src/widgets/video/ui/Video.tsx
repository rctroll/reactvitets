import { FC, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import { VideoStopedBig } from './videonControllers/VideoStopedBig';
import { VideoActiveBig } from './videonControllers/VideoActiveBig';

import styles from './video.module.scss';

type VideoProps = {
  url: string;
  className?: string;
  placeholderImg: string;
};

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
export const Video: FC<VideoProps> = ({ url, placeholderImg, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isValid = isValidUrl(url);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {isValid ? (
        <ReactPlayer
          light
          url={url}
          width="100%"
          height="100%"
          playIcon={<VideoActiveBig />}
          playing={isPlaying}
          onClick={handlePlayPause}
          controls={false}
        />
      ) : (
        <img
          src={placeholderImg}
          alt="placeholderImg"
          className={styles.placeholderImg}
        />
      )}
      <div className={styles.active_sign}>
        {isPlaying ? (
          <div className={styles.play}>
            <VideoStopedBig className={styles.stop} />
          </div>
        ) : (
          <div className={styles.stop}>
            <VideoActiveBig className={styles.play} />
          </div>
        )}
      </div>
    </div>
  );
};
