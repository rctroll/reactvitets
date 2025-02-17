import styles from "./burgerMenu.module.scss";

interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClick }) => (
  <div
    className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
    role="button"
    aria-label="Toggle menu"
    onClick={onClick}
  >
    <span className={styles.one}></span>
    <span className={styles.two}></span>
    <span className={styles.three}></span>
  </div>
);
