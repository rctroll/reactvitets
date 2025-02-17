import { Button, Title } from '@/shared/components';

import { ArrowRightIcon } from '@/shared/assets';
import Arrow from '../../../../public/icons/Arrow 15.svg';

import styles from './styles/banner.module.scss';
import useModal from '@/shared/hooks/useModal';
import { FormModal } from '@/widgets/modals/formModal';
import Modal from '@/shared/components/modal/Modal';
import { DocumentModal } from '@/widgets/modals';
import { DOCUMENTS_CONFIG } from '@/shared/configs/configs';

const Banner = () => {
  const { isOpen: isFormOpen, closeModal: closeForm, openModal: openForm } = useModal();

  const { isOpen: isSgrOpen, closeModal: closeSgr, openModal: openSgr } = useModal();
  const {
    isOpen: isLetterOpen,
    closeModal: closeLetter,
    openModal: openLetter,
  } = useModal();
  const {
    isOpen: isCertificateOpen,
    closeModal: closeCertificate,
    openModal: openCertificate,
  } = useModal();
  const {
    isOpen: isDeclarationOpen,
    closeModal: closeDeclaration,
    openModal: openDeclaration,
  } = useModal();

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.banner__info}>
          <Title
            size={'56px'}
            style={{ marginBottom: '24px' }}
            className={styles.banner__info_title}
          >
            Сертифицируй продукцию за 1 день!
          </Title>
          <p className={styles.banner__info_subtitle}>
            <span style={{ marginBottom: '10px' }}>Сохрани деньги!</span> Мы предложим
            разные варианты, срочно оформим документы и отправим скан в течение дня!
          </p>
          <Button
            variant={'secondary'}
            className={styles.banner__info_btn}
            onClick={openForm}
          >
            Оставить заявку
          </Button>
        </div>
        <img src={Arrow} alt="arrow" className={styles.banner__arrow} />
        <div className={styles.banner__links}>
          <div
            className={`${styles.banner__links_item} ${styles.banner__links_certificate}`}
            onClick={openCertificate}
          >
            Сертификаты <ArrowRightIcon style={{ width: '7px', height: '14px' }} />
          </div>
          <div
            className={`${styles.banner__links_item} ${styles.banner__links_declarations}`}
            onClick={openDeclaration}
          >
            Декларации <ArrowRightIcon style={{ width: '7px', height: '14px' }} />
          </div>
          <div
            className={`${styles.banner__links_item} ${styles.banner__links_sgr}`}
            onClick={openSgr}
          >
            СГР <ArrowRightIcon style={{ width: '7px', height: '14px' }} />
          </div>
          <div
            className={`${styles.banner__links_item} ${styles.banner__links_letters}`}
            onClick={openLetter}
          >
            Отказные письма <ArrowRightIcon style={{ width: '7px', height: '14px' }} />
          </div>
        </div>
      </div>

      <Modal isOpen={isFormOpen} closeModal={closeForm} className={styles.formModal}>
        <FormModal closeModal={closeForm} />
      </Modal>

      <Modal isOpen={isSgrOpen} closeModal={closeSgr}>
        <DocumentModal closeModal={closeSgr} item={DOCUMENTS_CONFIG[0]} />
      </Modal>

      <Modal isOpen={isCertificateOpen} closeModal={closeCertificate}>
        <DocumentModal closeModal={closeCertificate} item={DOCUMENTS_CONFIG[1]} />
      </Modal>

      <Modal isOpen={isLetterOpen} closeModal={closeLetter}>
        <DocumentModal closeModal={closeLetter} item={DOCUMENTS_CONFIG[2]} />
      </Modal>

      <Modal isOpen={isDeclarationOpen} closeModal={closeDeclaration}>
        <DocumentModal closeModal={closeDeclaration} item={DOCUMENTS_CONFIG[3]} />
      </Modal>
    </>
  );
};

export default Banner;
