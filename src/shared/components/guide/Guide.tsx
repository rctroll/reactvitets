import { Button } from '../button/Button';
import styles from './guide.module.scss';

interface GuideProps {
  title: string;
  className?: string;
}

const Guide = ({ title, className, ...props }: GuideProps) => {
  return (
    <div className={`${styles.guide} ${className}`} {...props}>
      <h1 className={styles.guide__title}>{title}</h1>
      <Button className={styles.guide__button}>Скачать</Button>
    </div>
  );
};

export { Guide };
