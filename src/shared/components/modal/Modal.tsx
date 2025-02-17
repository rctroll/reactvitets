import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import { HTMLAttributes, useEffect } from 'react';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
  closeModal: () => void;
}

const Modal = ({ children, isOpen, className, closeModal, ...props }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal} data-open={isOpen} onClick={closeModal}>
      <div
        className={`${styles.modal__content} ${className}`}
        {...props}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
