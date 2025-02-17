import { VariantProps } from 'class-variance-authority';
import { ContactType } from '@/shared/types/types';
import { contactVariants } from './contactVariants';
import Icon from '../Icon/Icon';
import styles from './contact.module.scss';

interface ContactProps extends VariantProps<typeof contactVariants> {
  value?: string;
  hidden?: boolean;
  type: ContactType;
  className?: string;
  url: string;
}

/**
 * Contact component
 * @param {string} value — Значение которое будет отображаться после иконки
 * @param {string} type — Тип контакта, отвечает за выбор правильной иконки
 * @param {string} hidden - Флаг который скрывает значение (value)
 * @param {string} size - Размер иконки
 * @param {string} textSize - Размер текста
 * @param {string} url - Ссылка которая используется при нажатии юзером на иконку
 */
const Contact = ({
                   value,
                   type,
                   hidden,
                   className = '',
                   size = 'default',
                   textSize = '24px',
                   url,
                   ...props
                 }: ContactProps) => {
  return (
    <a className={`${styles.contact} ${className}`} {...props} href={url}>
      <Icon type={type} className={contactVariants({ size })} />
      {!hidden && <span className={contactVariants({ textSize })}>{value}</span>}
    </a>
  );
};

interface ContactListProps {
  orientation: 'horizontal' | 'vertical';
  children: React.ReactNode;
  className?: string;
}

/**
 * Contact list component
 * @param {string} orientation - Направление в котором будут отображаться иконки
 */
const ContactList = ({ orientation, children, className }: ContactListProps) => {
  const isHorizontal = orientation == 'horizontal';

  return (
    <div
      className={`${
        isHorizontal ? styles.orientation_horizontal : styles.orientation_vertical
      } ${styles.orientation} ${className}`}
    >
      {children}
    </div>
  );
};

export { Contact, ContactList };