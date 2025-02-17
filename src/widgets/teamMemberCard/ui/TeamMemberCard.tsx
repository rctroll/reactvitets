import { FC } from 'react';

import phone from '@shared/assets/icons/contacts/phone.svg';
import emailIcon from '@shared/assets/icons/contacts/email.svg';
import whatsappIcon from '@shared/assets/icons/contacts/whatsapp.svg';

import styles from './team.module.scss';

type TeamMemberCardProps = {
  img: string;
  firstName: string;
  lastName: string;
  post: string;
  phoneNumber?: number;
  email?: string;
  whatsApp?: string;
};

export const TeamMemberCard: FC<TeamMemberCardProps> = ({
  img,
  firstName,
  lastName,
  post,
  phoneNumber,
  email,
  whatsApp,
}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={`${firstName} ${lastName}`} className={styles.card__img} />

      <div className={styles.card__inf}>
        <div className={styles.card__inf_top}>
          <div className={styles.card__box}>
            <h4 className={styles.card__box_title}>Имя</h4>
            <p className={styles.card__box_value}>
              {firstName} {lastName}
            </p>
          </div>
          <div className={styles.card__box}>
            <h4 className={styles.card__box_title}>Должность</h4>
            <p className={styles.card__box_value}>{post}</p>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.card__inf_bottom}>
          <h4 className={styles.card__box_title}>Контакты</h4>
          <div className={styles.media_container}>
            {phoneNumber ? (
              <a href={`tel:${phoneNumber}`}>
                <img src={phone} alt="phone" />
              </a>
            ) : null}
            {email ? (
              <a href={`mailto:${email}`}>
                <img src={emailIcon} alt="email" />
              </a>
            ) : null}
            {whatsApp ? (
              <a href={`whatsApp`}>
                <img src={whatsappIcon} alt="whatsapp" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
