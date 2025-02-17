import { Button, Contact, ContactList, Input, Logo, Title } from '@/shared/components';
import { CONTACTS_CONFIG } from '@/shared/configs/configs';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/shared/components/collapsible/Collapsible';
import { ArrowRightIcon } from '@/shared/assets';
import { useState } from 'react';

import styles from './footer.module.scss';

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <footer className={`${styles.footer}`}>
      <div className={`container ${styles.spacing}`}>
        <div className={`${styles.footer__heading ?? ''}`}>
          <Title className={`${styles.footer__heading_title}`}>Свяжитесь с нами</Title>
          <p className={`${styles.footer__heading_subtitle}`}>
            Мы работаем по всему таможенному союзу
          </p>

          <ContactList
            orientation="horizontal"
            className={`${styles.footer__heading_contacts}`}
          >
            {CONTACTS_CONFIG.map((contact, idx) => (
              <Contact
                type={contact.type}
                url={contact.url}
                value={contact.value}
                key={idx}
              />
            ))}
          </ContactList>
        </div>
        <div className={`${styles.footer__services ?? ''}`}>
          <Title size={'24px'} className={styles.footer__services_title}>
            Виды услуг
          </Title>
          <div className={styles.footer__services_content}>
            <Collapsible open={open} onOpenChange={setOpen}>
              <CollapsibleTrigger className={styles.trigger}>
                Подтверждение соответствия <ArrowRightIcon open={open} />
              </CollapsibleTrigger>

              <CollapsibleContent>
                <p>Сертификат соответствия</p>
                <p>Декларация соответствия</p>
                <p>Отказные письма и отрицательные решения</p>
                <p>Декларация ГОСТ Р</p>
                <p>Добровольный сертификат</p>
                <p>Свидетельство гос. регистрации</p>
                <p>Сертификат менеджмента качества ISO 9001-2015</p>
                <p>Промышленная и пожарная безопасность</p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible open={open2} onOpenChange={setOpen2}>
              <CollapsibleTrigger className={styles.trigger}>
                Разработка технической документации <ArrowRightIcon open={open2} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p>Технические условия (ТУ)</p>
                <p>Паспорт на изделие</p>
                <p>Экспертное заключение</p>
                <p>Свидетельство на товарный знак</p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible open={open3} onOpenChange={setOpen3}>
              <CollapsibleTrigger className={styles.trigger}>
                Другие виды документов <ArrowRightIcon open={open3} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p>Сертификат ЭКО</p>
                <p>Сертификат происхождения СТ-1</p>
                <p>ISO-22000-ХАССП</p>
                <p>Сертификат Халяль</p>
                <p>Регистационное удостоверение</p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
        <div className={`${styles.footer__notification ?? ''}`}>
          <Title size="24px" className={styles.footer__notification_title}>
            Подписаться на уведомления
          </Title>
          <p className={`${styles.footer__notification_subtitle}`}>
            Оставайтесь на связи получайте актуальную информацию первыми!
          </p>

          <form className={`${styles.footer__notification_form}`}>
            <Input
              placeholder="Ваш email"
              className={`${styles.footer__notification_input}`}
            />
            <Button className={`${styles.footer__notification_btn}`}>Отправить</Button>
          </form>
          <p className={`${styles.footer__notification_terms}`}>
            Нажимая кнопку Подписаться, вы соглашаетесь на получение уведомлений
            рекламно-информационного характера
          </p>
        </div>
        <div className={`${styles.separator}`} />
        <div className={`${styles.footer__privacy}`}>
          <Logo size={'l'} className={`${styles.footer__privacy_logo}`} />
          <span className={`${styles.footer__privacy_rights}`}>© Все права защищены</span>
          <a href="/">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
