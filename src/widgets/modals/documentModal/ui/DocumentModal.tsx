import { CloseIcon } from '@/shared/assets';
import { Button, Checkbox, Input, Title } from '@/shared/components';
import { useState } from 'react';

import styles from '@widgets/modals/formModal/ui/formModal.module.scss';
import documentStyles from './documentModal.module.scss';
import { DocumentType } from '@/shared/types/types';

interface DocumentModalProps {
  closeModal: () => void;
  item: DocumentType;
}

const DocumentModal = ({ closeModal, item }: DocumentModalProps) => {
  const [isPolicyChecked, setIsPolicyChecked] = useState<boolean>(false);
  const [isNotificationChecked, setIsNotificationChecked] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const handleCollapse = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className={documentStyles.docModal}>
      <div>
        <div className={documentStyles.docModal__header}>
          <Title size="24px" className={documentStyles.docModal__header_title}>
            Описание документа
          </Title>
          <Button
            size="icon"
            onClick={closeModal}
            className={styles.formModal__header_btn}
          >
            <CloseIcon />
          </Button>
        </div>

        <div className={documentStyles.docModal__info}>
          <img src={item.img} className={documentStyles.docModal__image} />
          <div className={documentStyles.docModal__texts}>
            <p
              className={`${documentStyles.docModal__text}`}
              style={{ WebkitLineClamp: isHidden ? 'none' : '12' }}
            >
              <span style={{ fontWeight: 600 }}>{item.title}</span>
               – {item.description}
            </p>
            {!isHidden && (
              <button className={documentStyles.docModal__btn} onClick={handleCollapse}>
                Читать еще
              </button>
            )}
          </div>
        </div>
      </div>

      <div className={documentStyles.divider} />

      <div className={documentStyles.formModal} style={{ maxWidth: 'none' }}>
        <div className={documentStyles.formModal__header}>
          <Title size="24px" className={documentStyles.formModal__header_title}>
            Заполните форму
          </Title>
        </div>

        <form className={documentStyles.formModal__inputs}>
          <Input placeholder="Имя" />
          <Input type="number" placeholder="Номер телефона" />
        </form>

        <div className={documentStyles.formModal__agreements}>
          <div className={documentStyles.formModal__agreements_policy}>
            <Checkbox onChange={() => setIsPolicyChecked((prev) => !prev)} />
            <p className={documentStyles.formModal__agreements_text}>
              Я ознакомлен (-на) и согласна (-на) с{' '}
              <span
                style={{ color: 'var(--dark_blue-color)', textDecoration: 'underline' }}
              >
                Политикой конфиденциальности
              </span>
              <br /> даю свое{' '}
              <span style={{ color: 'var(--dark_blue-color)' }}>согласие</span> на
              обработку моих персональных данных
            </p>
          </div>
          <div className={documentStyles.formModal__agreements_notifications}>
            <Checkbox onChange={() => setIsNotificationChecked((prev) => !prev)} />
            <p className={documentStyles.formModal__agreements_text}>
              Я согласен на получение уведомлений
              <br /> рекламно-информационного характера
            </p>
          </div>
        </div>

        <Button
          className={documentStyles.formModal__btn}
          disabled={!isPolicyChecked || !isNotificationChecked}
        >
          Оставить заявку
        </Button>
      </div>
    </div>
  );
};

export { DocumentModal };
