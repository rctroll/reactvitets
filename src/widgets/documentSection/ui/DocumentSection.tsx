import { FC } from 'react';

import { Button } from '@/shared/components';
import { RightIcon } from '@/shared/assets';

import styles from './document.module.scss';

import mark from '../assets/img/mark.png';
import { DOCUMENTS_LIST } from '../model/config/config';

type DocumetSectionPrpps = {
  className?: string;
};

function formatNumberWithSpaces(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export const DocumentSection: FC<DocumetSectionPrpps> = ({ className }) => {
  return (
    <div className={`${styles.documents} ${className} `}>
      <div className="container">
        <h3 className={styles.title}>Оформляем все виды документов</h3>

        <div className={styles.documents__container}>
          {DOCUMENTS_LIST.map((item) => (
            <div className={styles.document}>
              <div className={styles.document__box}>
                <div className={styles.document__img}>
                  <img src={item.img} alt="document" className={styles.document__img} />
                  <img src={mark} alt="mark" className={styles.mark} />
                </div>

                <div className={styles.descr}>
                  <p className={styles.descr__title}> {item.title}</p>

                  <div className={styles.price}>
                    <div className={styles.price__text}>Цена:</div>
                    <div className={styles.price__value}>
                      от {formatNumberWithSpaces(item.price)} руб.
                    </div>
                  </div>
                  <Button className={styles.button}>Получить</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.documentation}>
          <h3 className={styles.title_h3}>Разработка технической документации</h3>
          <div className={styles.documentation__container}>
            <div className={styles.block}>
              <p className={styles.block__text}>
                Технические <br /> условия (ТУ)
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
            <div className={styles.block}>
              <p className={styles.block__text}>
                Паспорт <br /> на изделие
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
            <div className={styles.block}>
              <p className={styles.block__text}>
                Экспертное <br /> заключение
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
            <div className={styles.block}>
              <p className={styles.block__text}>
                Свидетельство <br /> на товарный знак
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.other}>
          <h3 className={styles.title_h3}>Другие виды документов</h3>

          <div className={`${styles.other__container}`}>
            <div className={`${styles.block} `}>
              <p className={styles.block__text}>
                Сертификат <br /> ЭКО
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
            <div className={`${styles.block} `}>
              <p className={styles.block__text}>
                Сертификат <br /> происхождения СТ-1
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
            <div className={`${styles.block} `}>
              <p className={styles.block__text}>
                ISO-22000- <br /> ХАССП
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
            <div className={`${styles.block} `}>
              <p className={styles.block__text}>
                Сертификат <br /> Халяль
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
            <div className={`${styles.block} `}>
              <p className={styles.block__text}>
                Регистационное <br /> удостоверение
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
          </div>

          <div className={styles.other__grid}>
            <div className={`${styles.block}  `}>
              <p className={styles.block__text}>
                Сертификат <br /> Халяль
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
            <div className={`${styles.block}  `}>
              <p className={styles.block__text}>
                Регистационное <br /> удостоверение
              </p>
              <button className={styles.block__button}>
                <RightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
