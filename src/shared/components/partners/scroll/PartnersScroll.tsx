import styles from './partnersScroll.module.scss';
import { PartnerCard } from '../card/PartnersCard.tsx';
import { ComponentProps } from 'react';

type PartnersScrollProps = ComponentProps<'div'> & {
  partners: { image: string; text: string }[];
};

export const PartnersScroll = ({ partners, ...props }: PartnersScrollProps) => {
  return (
    <div className={styles.partnersScroll} {...props}>
      {partners.map((partner, index) => (
        <PartnerCard key={index} image={partner.image} text={partner.text} />
      ))}
    </div>
  );
};
