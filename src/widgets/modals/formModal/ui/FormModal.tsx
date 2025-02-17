import { CloseIcon } from '@/shared/assets';
import { Button, Checkbox, Input, Title } from '@/shared/components';

import styles from './formModal.module.scss';
import { useState } from 'react';

interface FormModalProps {
  closeModal: () => void;
}

const FormModal = ({ closeModal }: FormModalProps) => {
  const [isPolicyChecked, setIsPolicyChecked] = useState<boolean>(false);
  const [isNotificationChecked, setIsNotificationChecked] = useState<boolean>(false);

  return (
    <div className={styles.formModal}>
      <div className={styles.formModal__header}>
        <Title size="24px" className={styles.formModal__header_title}>
          Заполните форму
        </Title>
        <Button size="icon" onClick={closeModal} className={styles.formModal__header_btn}>
          <CloseIcon />
        </Button>
      </div>

      <form className={styles.formModal__inputs}>
        <Input placeholder="Имя" />
        <Input type="number" placeholder="Номер телефона" />
      </form>

      <div className={styles.formModal__agreements}>
        <div className={styles.formModal__agreements_policy}>
          <Checkbox onChange={() => setIsPolicyChecked((prev) => !prev)} />
          <p className={styles.formModal__agreements_text}>
            Я ознакомлен (-на) и согласна (-на) с{' '}
            <span
              style={{ color: 'var(--dark_blue-color)', textDecoration: 'underline' }}
            >
              Политикой конфиденциальности
            </span>{' '}
            даю свое <span style={{ color: 'var(--dark_blue-color)' }}>согласие</span> на
            обработку моих персональных данных
          </p>
        </div>
        <div className={styles.formModal__agreements_notifications}>
          <Checkbox onChange={() => setIsNotificationChecked((prev) => !prev)} />
          <p className={styles.formModal__agreements_text}>
            Я согласен на получение уведомлений рекламно-информационного характера
          </p>
        </div>
      </div>

      <Button
        className={styles.formModal__btn}
        disabled={!isPolicyChecked || !isNotificationChecked}
      >
        Оставить заявку
      </Button>
    </div>
  );
};

export { FormModal };
