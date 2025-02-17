import styles from './partners.module.scss';

type PartnerCardProps = {
  image: string;
  text: string;
};

export const PartnerCard = ({ image, text }: PartnerCardProps) => {
  return (
    <div className={styles.partnerCard}>
      <img src={image} alt={text} className={styles.image} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};
