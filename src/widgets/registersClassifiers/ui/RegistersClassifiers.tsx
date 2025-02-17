import { Block } from "@/widgets/block"
import { Title } from "@/shared/components"
import { RightIcon } from "@/shared/assets"

import styles from "./styles/registersClassifiers.module.scss"
import { accreditation, preparing, guarantee, reminder, accompaniment, warning } from "@/shared/assets"

const RegistersClassifiers = () => {
  return (
    <div className={styles.registers}>
      <div className="container">
        <div className={styles.registers__section}>
          <Title size="40px" className={styles.title}>
            Единые государственные реестры выданных документов и аккредитованных лиц
          </Title>
          <div className={styles.registers__blocks}>
            <Block className={`${styles.block} ${styles.block_blue}`}>
              <img src={accreditation || "/placeholder.svg"} alt="icon" className={styles.block__icon} />
              <p className={styles.block__text}>
                Проверка сертификатов
                <br /> по Таможенному союзу
              </p>
              <RightIcon />
            </Block>
            <Block className={`${styles.block} ${styles.block_purple}`}>
              <img src={preparing || "/placeholder.svg"} alt="icon" className={styles.block__icon} />
              <p className={styles.block__text}>
                Проверка деклараций
                <br /> по Таможенному союзу
              </p>
              <RightIcon />
            </Block>
            <Block className={`${styles.block} ${styles.block_orange}`}>
              <img src={guarantee || "/placeholder.svg"} alt="icon" className={styles.block__icon} />
              <p className={styles.block__text}>
                Проверка свидетельств
                <br /> гос. регистрации по
                <br /> Таможенному союзу
              </p>
              <RightIcon />
            </Block>
          </div>
        </div>

        <div className={styles.registers__section}>
          <Title size="40px" className={styles.title}>
            Органы и лаборатории РФ
          </Title>
          <div className={styles.registers__blocks}>
            <Block className={`${styles.block} ${styles.block_yellow}`}>
              <img src={reminder || "/placeholder.svg"} alt="icon" className={styles.block__icon} />
              <p className={styles.block__text}>
                Проверка Аккредитованных
                <br /> органов России
              </p>
              <RightIcon />
            </Block>
            <Block className={`${styles.block} ${styles.block_green}`}>
              <img src={accompaniment || "/placeholder.svg"} alt="icon" className={styles.block__icon} />
              <p className={styles.block__text}>
                Проверка Аккредитованных
                <br /> лабораторий России
              </p>
              <RightIcon />
            </Block>
          </div>
        </div>

        <div className={styles.registers__section}>
          <Title size="40px" className={styles.title}>
            Классификаторы продукции и услуг, государственные стадарты (ГОСТ)
          </Title>
          <div className={styles.registers__blocks}>
            <Block className={`${styles.block} ${styles.block_pink}`}>
              <img src={warning || "/placeholder.svg"} alt="icon" className={styles.block__icon} />
              <p className={styles.block__text}>
                Проверка
                <br /> ТНВЭД
              </p>
              <RightIcon />
            </Block>
            <Block className={`${styles.block} ${styles.block_blue}`}>
              <img src={accreditation || "/placeholder.svg"} alt="icon" className={styles.block__icon} />
              <p className={styles.block__text}>
                Проверка
                <br /> ОКПД2
              </p>
              <RightIcon />
            </Block>
            <Block className={`${styles.block} ${styles.block_beige}`}>
              <img src={preparing || "/placeholder.svg"} alt="icon" className={styles.block__icon} />
              <p className={styles.block__text}>
                Проверка
                <br /> ГОСТ
              </p>
              <RightIcon />
            </Block>
          </div>
        </div>
        <div className={styles.consultant__info}>
          <Title size="40px">Консультант Серт</Title>
          <p className={styles.consultant__subtitle}>
            Ваш сервис по подбору
            <br />
            схемы (формы) подтверждения
          </p>
        </div>
        <div className={styles.consultant}>
          <div className={styles.consultant__content}>
            <div className={styles.consultant__visual}>
              <img
                src="./public/icons/smartphones.png"
                alt="Phones"
                className={styles.consultant__phones}
              />
              <div className={styles.consultant__qr}>
                <img
                  src="./public/icons/qrcode.png"
                  alt="QR Code"
                  className={styles.qr}
                />
                <a
                  href="https://t.me/consultant_sert_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.consultant__bot}
                >
                  @consultant_sert_bot
                </a>
                <a
                  href="https://t.me/consultant_sert_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.consultant__button}
                >
                  Перейти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { RegistersClassifiers }
