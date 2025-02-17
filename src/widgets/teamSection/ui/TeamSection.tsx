import styles from './team.module.scss';

import img from '../assets/Rectangle 22.png';

import { FC, useEffect, useState } from 'react';
import { TeamMemberCard } from '@/widgets';
import { ArrowRightIcon } from '@/shared/assets';

type TeamSectionType = {
  className?: string;
};

const teamMembers = [
  {
    img,
    firstName: 'Виктория',
    lastName: 'Суворкина',
    post: 'Эксперт по 017 ТР ТС (одежда)',
    phoneNumber: +375333835957,
    whatsApp: 'test',
    email: 'text',
  },
  {
    img,
    firstName: 'Виктория 1',
    lastName: 'Суворкина',
    post: 'Эксперт по 017 ТР ТС (одежда)',
    phoneNumber: +375333835957,
    whatsApp: 'test',
    email: 'text',
  },
  {
    img,
    firstName: 'Виктория2',
    lastName: 'Суворкина',
    post: 'Эксперт по 017 ТР ТС (одежда)',
    phoneNumber: +375333835957,
    whatsApp: 'test',
    email: 'text',
  },
  {
    img,
    firstName: 'Виктория',
    lastName: 'Суворкина',
    post: 'Эксперт по 017 ТР ТС (одежда)',
    phoneNumber: +375333835957,
    whatsApp: 'test',
    email: 'text',
  },
];

export const TeamSection: FC<TeamSectionType> = ({ className }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1220) {
        setVisibleCount(3);
      }
      if (window.innerWidth < 920) {
        setVisibleCount(2);
      }
      if (window.innerWidth >= 1220) {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, teamMembers.length - visibleCount)
    );
  };

  return (
    <div className={`${styles.team} ${className}`}>
      <div className="container">
        <h2 className={styles.title}>Наша команда</h2>

        <div className={styles.descr}>
          <span>Наша команда состоит из высококвалифицированных специалистов</span> с
          многолетним опытом работы в сфере сертификации. Мы понимаем, что каждый клиент
          уникален, поэтому индивидуально подходим к каждому партнеру, обеспечивая
          максимально эффективные решения.
        </div>

        <div className={styles.team__container_wrapper}>
          <div
            className={styles.team__container}
            style={{
              transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                img={member.img}
                firstName={member.firstName}
                lastName={member.lastName}
                post={member.post}
                phoneNumber={member.phoneNumber}
                whatsApp={member.whatsApp}
                email={member.email}
              />
            ))}
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.buttons__item}
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <div className={styles.icon}>
              <ArrowRightIcon open={false} />
            </div>
          </button>
          <button
            className={styles.buttons__item}
            onClick={handleNext}
            disabled={startIndex >= teamMembers.length - visibleCount}
          >
            <ArrowRightIcon open={false} />
          </button>
        </div>
      </div>
    </div>
  );
};
