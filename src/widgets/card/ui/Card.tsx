import { FC } from 'react';

import styles from './card.module.scss';
import { Contact } from '@/shared/components';
import { CONTACTS_CONFIG } from '@/shared/configs/configs';

type CardTypeProps = {
  imgUrl?: string;
  className?: string;
  firstName: string;
  lastName: string;
  post: string;
  telegramUrl?: string;
  emailUrl: string;
  phoneNumber: string;
  whatsappUrl: string;
  avitoUrl?: string;
};

export const Card: FC<CardTypeProps> = ({
  imgUrl,
  className = '',
  firstName,
  lastName,
  post,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {imgUrl && <img src={imgUrl} alt="person" className={styles.person} />}

      <div className={styles.information}>
        <div className={styles.box}>
          <p className={styles.title}>Имя</p>
          <h3 className={`${styles.value} truncate`}>
            {firstName} {lastName}
          </h3>
        </div>

        <div className={styles.box}>
          <p className={styles.title}>Должность</p>
          <h3 className={`${styles.value} truncate`}>{post}</h3>
        </div>

        <div className={styles.footer}>
          <div className={styles.line}></div>
          <p className={styles.title}>Контакты</p>

          <div className={styles.contacts}>
            {CONTACTS_CONFIG.map(
              (contact, idx) =>
                contact.value && (
                  <Contact
                    value={contact.value}
                    className={styles.contacts__item}
                    type={contact.type}
                    url={contact.url}
                    hidden={contact.hidden}
                    size={'small'}
                    key={idx}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
