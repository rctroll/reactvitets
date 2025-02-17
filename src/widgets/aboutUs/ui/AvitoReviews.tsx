import {
  Button,
  ReviewCard,
  ReviewContent,
  ReviewDate,
  ReviewDescription,
  ReviewGroup,
  ReviewHeader,
  ReviewInfo,
  ReviewRating,
  ReviewTitle,
  ReviewUserImage,
  Title,
} from "@/shared/components"
import { useRef } from "react"
import styles from "./styles/avitoReviews.module.scss"

const reviews = [
  {
    name: "Изабелла",
    date: "31 октября",
    rating: 5,
    service: "Сертификат Со...",
    content:
      "Договорились быстро и эффективно. Отвечали вовремя, про все рассказали подробно. Хочу попробовать выйти в маркетплейс, ребята помогли с некоторыми нюансами. Спасибо Вам большое! Общались не только по сообщению, но и созванивались. Клиентоориентированность на высоте. Осталась довольна)) круто !!",
  },
  {
    name: "Александра",
    date: "8 октября",
    rating: 5,
    service: "Сертификация товаров в Москве",
    content:
      "Девушка все хорошо объясняет.Подсказала что именно мне нужно сделать для своей продукции. Услугу оказали быстро и качественно. Вообщем обращайтесь к ним все очень хорошо делают.",
  },
  {
    name: "Ilya",
    date: "19 июля",
    rating: 5,
    service: "Сертификация товаров маркетплейсов",
    content: "Ребята молодцы !!! Всё четко и оперативно!!!!спасибо, буду обращаться ещё !!!!",
  },
  {
    name: "Анна",
    date: "15 июля",
    rating: 5,
    service: "Сертификация продукции",
    content: "Отличный сервис! Быстро и профессионально помогли с оформлением всех необходимых документов.",
  },
  {
    name: "Михаил",
    date: "10 июля",
    rating: 5,
    service: "Декларация соответствия",
    content: "Очень доволен работой компании. Все документы оформили быстро и без лишних вопросов.",
  },
  {
    name: "Екатерина",
    date: "5 июля",
    rating: 5,
    service: "Сертификат качества",
    content: "Спасибо за оперативность и профессионализм! Обязательно обращусь еще раз.",
  },
]

const AvitoReviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 // Adjust this value to control scroll distance
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className={styles.avitoReviews}>
      <Title size="40px" className={styles.title}>
        Отзывы с Авито
      </Title>
      <div className={styles.reviewsContainer}>


        <div className={styles.reviewsScroll} ref={scrollContainerRef}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} className={styles.reviewCard}>
              <ReviewHeader>
                <ReviewUserImage src="" fallback={review.name[0]} />
                <ReviewGroup>
                  <ReviewTitle>{review.name}</ReviewTitle>
                  <ReviewDate>{review.date}</ReviewDate>
                </ReviewGroup>
              </ReviewHeader>
              <ReviewDescription>
                <ReviewRating rating={review.rating} />
                <ReviewInfo text={`Сделка состоялась · ${review.service}`} />
              </ReviewDescription>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewCard>
          ))}
        </div>


      </div>
      <div className={styles.divavitorev}>
      <Button className={styles.avitoReviews_btn}>Перейти к отзывам</Button>
      
      </div>
    </div>
  )
}

export default AvitoReviews
