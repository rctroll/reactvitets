import { useContext, createContext, useState } from 'react';
import * as Interface from './ReviewInterfaces';
import Star from '@shared/assets/icons/review/Star.svg';
import styles from './reviewCard.module.scss';

const ReviewContext = createContext<boolean>(true);

const useReview = () => {
  const context = useContext(ReviewContext);

  if (!context) {
    throw new Error(
      'Child components of Review Card cannot be used outside the Review Card component!'
    );
  }

  return context;
};

const ReviewCard = ({ className = '', ...props }: Interface.ReviewCardProps) => {
  return (
    <ReviewContext.Provider value={true}>
      <div className={`${styles.reviewCard} ${className}`} {...props} />
    </ReviewContext.Provider>
  );
};

const ReviewHeader = ({ className = '', ...props }: Interface.ReviewHeaderProps) => {
  useReview();
  return <div className={`${styles.reviewCard__header} ${className}`} {...props} />;
};

const ReviewTitle = ({ className = '', ...props }: Interface.ReviewTitleProps) => {
  useReview();
  return <div className={`${styles.reviewCard__title} ${className}`} {...props} />;
};

const ReviewDate = ({ className = '', ...props }: Interface.ReviewDateProps) => {
  useReview();
  return (
    <div
      className={`${styles.reviewCard__date} ${styles.reviewCard__text_secondary} ${className}`}
      {...props}
    />
  );
};

const ReviewGroup = ({
  className,
  orientation = 'vertical',
  ...props
}: Interface.ReviewGroupProps) => {
  useReview();
  const isVertical = orientation === 'vertical';
  return (
    <div
      className={`${styles.reviewCard__group} ${
        isVertical
          ? styles.reviewCard__group_vertical
          : styles.reviewCard__group_horizontal
      }`}
      {...props}
    />
  );
};

const ReviewUserImage = ({
  src,
  fallback, // Necessary to specify, in case the user does not have a photo
  className,
  ...props
}: Interface.ReviewUserImageProps) => {
  useReview();
  const [isError, setIsError] = useState<boolean>(false);

  if (isError) {
    return <div className={`${styles.reviewCard__image} ${className}`}>{fallback}</div>;
  }

  return (
    <img
      src={src}
      className={`${styles.reviewCard__image} ${className}`}
      onError={() => setIsError(true)}
      {...props}
    />
  );
};

const ReviewDescription = ({ className, ...props }: Interface.ReviewDescriptionProps) => {
  useReview();
  return <div className={`${styles.reviewCard__description} ${className}`} {...props} />;
};

const ReviewRating = ({ rating, className, ...props }: Interface.ReviewRatingProps) => {
  useReview();
  const length = rating > 0 ? (rating <= 5 ? rating : 5) : 0;

  return (
    <ReviewGroup orientation="horizontal" {...props}>
      {[...Array(length)].map((_, idx) => (
        <img
          src={Star}
          className={`${styles.reviewCard__star} ${className}`}
          key={idx}
          alt="star"
        />
      ))}
    </ReviewGroup>
  );
};

const ReviewInfo = ({ className, text, ...props }: Interface.ReviewInfoProps) => {
  useReview();
  return (
    <div
      className={`truncate ${styles.reviewCard__info_text} ${styles.reviewCard__text_secondary} ${className}`}
      {...props}
    >
      {text}
    </div>
  );
};

const ReviewContent = ({
  children,
  className,
  reviewText,
  ...props
}: Interface.ReviewContentProps) => {
  useReview();
  return (
    <p className={`${styles.reviewCard__reviewText} ${className}`} {...props}>
      {children || reviewText}
    </p>
  );
};

export {
  ReviewCard,
  ReviewHeader,
  ReviewTitle,
  ReviewDate,
  ReviewGroup,
  ReviewUserImage,
  ReviewDescription,
  ReviewRating,
  ReviewInfo,
  ReviewContent,
};
