import { ContactType } from '@/shared/types/types';
import Phone from '@shared/assets/icons/contacts/phone.svg';
import Email from '@shared/assets/icons/contacts/email.svg';
import Whatsapp from '@shared/assets/icons/contacts/whatsapp.svg';
import Telegram from '@shared/assets/icons/contacts/telegram.svg';
import Avito from '@shared/assets/icons/contacts/avito.svg';

interface IconProps {
  type: ContactType;
  className?: string;
}

const ICONS = {
  avito: Avito,
  email: Email,
  phone: Phone,
  telegram: Telegram,
  whatsapp: Whatsapp,
};

const Icon = ({ type, className }: IconProps) => {
  const icon = ICONS[type];

  if (!icon) {
    return;
  }

  return <img src={icon} alt={type} className={className} />;
};

export default Icon;
