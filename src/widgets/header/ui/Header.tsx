import { useScrollTrigger } from '@shared/hooks/header/useScrollTrigger';
import { useElementSize } from '@shared/hooks/header/useElementSize';
import { Contact, LogoLink } from '@shared/components';
import { MENU_CONFIG } from '@shared/configs/config.ts';

import styles from './header.module.scss';
import { BurgerMenu } from '@shared/assets';
import { useState } from 'react';
import { DESKTOP_CONTACTS } from '../model/configs';
import { ContactType } from '@/shared/types/types';

export const HeaderPhones = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className={styles.mainSectionScrolled}>
      <LogoLink />
      <button className={styles.callbackBtnScrolled375}>Обратный звонок</button>
      <BurgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
    </div>
  );
};

export const HeaderTablet = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className={styles.mainSectionScrolled768}>
      <LogoLink />
      <div className={styles.contactsScrolled}>
        {['phone', 'email', 'telegram', 'whatsapp'].map((type) => (
          <Contact
            type={type as ContactType}
            size="small"
            className={styles.contactIcon}
            url=""
          />
        ))}
      </div>
      <button className={styles.callbackBtnScrolled}>Обратный звонок</button>
      <BurgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
    </div>
  );
};

interface HeaderDesktopProps {
  isScrolled: boolean;
}

export const HeaderDesktop = ({ isScrolled }: HeaderDesktopProps) => (
  <div
    className={`${styles.header} ${
      isScrolled ? styles.headerScrolled : styles.headerInitial
    }`}
  >
    {!isScrolled ? (
      <>
        <div className={styles.topSection}>
          <LogoLink />
          <div className={styles.contacts}>
            {DESKTOP_CONTACTS.map((contact) => (
              <div className={styles.contactItem} key={contact.type}>
                <Contact
                  type={contact.type}
                  className={`${styles.contactIcon} ${styles.contactText}`}
                  value={contact.value}
                  hidden={contact.hidden}
                  url={contact.value}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottomSection}>
          <nav className={styles.navCentered}>
            {MENU_CONFIG.map(({ item, url }) => (
              <a key={item} href={url} className={styles.link}>
                {item}
              </a>
            ))}
          </nav>
          <button className={styles.callbackBtn}>Обратный звонок</button>
        </div>
      </>
    ) : (
      <div className={styles.mainSectionScrolled}>
        <LogoLink />
        <nav className={styles.navScrolled}>
          {MENU_CONFIG.map(({ item, url }) => (
            <a key={item} href={url} className={styles.link}>
              {item}
            </a>
          ))}
        </nav>
        <div className={styles.contactsScrolled}>
          {DESKTOP_CONTACTS.map((contact) => (
            <Contact
              key={contact.type}
              type={contact.type}
              size="small"
              value={contact.value}
              hidden
              url={contact.value}
            />
          ))}
        </div>
        <button className={styles.callbackBtnScrolled}>Обратный звонок</button>
      </div>
    )}
  </div>
);

export const Header = () => {
  const isScrolled = useScrollTrigger(50);
  const { ref, breakpoints } = useElementSize();

  return (
    <header className={styles.header}>
      <div className={styles.container} ref={ref}>
        {breakpoints.is375 && <HeaderPhones />}
        {breakpoints.is768 && <HeaderTablet />}
        {!breakpoints.is375 && !breakpoints.is768 && (
          <HeaderDesktop isScrolled={isScrolled} />
        )}
      </div>
    </header>
  );
};
