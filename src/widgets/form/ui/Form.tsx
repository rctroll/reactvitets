import {
  Button,
  Checkbox,
  Contact,
  ContactList,
  Input,
  Title,
} from '@/shared/components';
import styles from './form.module.scss';
import { useState } from 'react';

interface FormProps {}

const Form = ({ ...props }: FormProps) => {
  const [policyChecked, setPolicyChecked] = useState<boolean>(false);
  const [notificationChecked, setNotificationChecked] = useState<boolean>(false);

  return (
    <div className={styles.formBlock} {...props}>
      <div className={`container ${styles.block}`}>
        <div className={styles.formBlock__info}>
          <div className={styles.formBlock__block}>
            <p className={styles.formBlock__text}>Получите расчет стоимости и сроков</p>
            <p className={styles.formBlock__text}>
              Рассчитаем несколько вариантов стоимости!
            </p>
          </div>
          <div className={`${styles.divider} ${styles.divider_50px}`} />
          <div className={styles.formBlock__contacts}>
            <Title size={'24px'} className={styles.formBlock__contacts_title}>
              Контакты
            </Title>
            <ContactList
              orientation="horizontal"
              className={styles.formBlock__contacts_list}
            >
              <Contact
                className={styles.formBlock__contacts_item}
                type={'phone'}
                value="+7 (923) 176-76-00"
                url="tel:+7 (923) 176-76-00"
              />
              <Contact
                className={styles.formBlock__contacts_item}
                type={'email'}
                value="sales@nordtest.ru"
                url="mailto:sales@nordtest.ru"
              />
              <Contact
                className={styles.formBlock__contacts_item}
                type={'telegram'}
                value="@nordtest"
                url="https://t.me/@nordtest"
              />
              <Contact
                className={styles.formBlock__contacts_item}
                type={'whatsapp'}
                value="+7 (923) 176-76-00"
                url="tel:+7 (923) 176-76-00"
              />
            </ContactList>
          </div>
        </div>
        <form className={styles.formBlock__form}>
          <div className={styles.formBlock__form_header}>
            <Title size={'24px'} className={styles.formBlock__form_title}>
              Заполните форму
            </Title>
          </div>

          <div className={styles.formBlock__form_inputs}>
            <Input placeholder="Имя" className={styles.formBlock__form_input} />
            <Input
              placeholder="Номер телефона"
              type="number"
              className={styles.formBlock__form_input}
            />
            <Input placeholder="Продукция" className={styles.formBlock__form_input} />
          </div>

          <div className={styles.formBlock__form_checkboxes}>
            <div className={styles.formBlock__form_checkbox}>
              <Checkbox
                onChange={() => setPolicyChecked((prev) => !prev)}
                className={styles.formBlock__form_custom}
              />
              <p className={styles.formBlock__form_text}>
                Я ознакомлен (-на) и согласна (-на) с{' '}
                <span style={{ color: 'blue' }}>Политикой конфиденциальности</span> даю
                свое <span style={{ color: 'blue' }}>согласие</span> на обработку моих
                персональных данных
              </p>
            </div>
            <div className={styles.formBlock__form_checkbox}>
              <Checkbox onChange={() => setNotificationChecked((prev) => !prev)} />
              <p className={styles.formBlock__form_text}>
                Я согласен на получение уведомлений рекламно-информационного характера
              </p>
            </div>
          </div>

          <Button
            className={styles.formBlock__form_button}
            disabled={!policyChecked || !notificationChecked}
          >
            Получить прямо сейчас
          </Button>
        </form>
      </div>
    </div>
  );
};

export { Form };
