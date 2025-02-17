import { DocumentType } from "@/shared/types/types";

import doc_1 from '@widgets/documentSection/assets/img/documents/doc_1.png'
import doc_2 from '@widgets/documentSection/assets/img/documents/doc_2.png'
import doc_3 from '@widgets/documentSection/assets/img/documents/doc_3.png'
import doc_4 from '@widgets/documentSection/assets/img/documents/doc_4.png'
import doc_5 from '@widgets/documentSection/assets/img/documents/doc_5.png'
import doc_6 from '@widgets/documentSection/assets/img/documents/doc_6.png'
import doc_7 from '@widgets/documentSection/assets/img/documents/doc_7.png'
import doc_8 from '@widgets/documentSection/assets/img/documents/doc_8.png'

export const DOCUMENTS_LIST: (Pick<DocumentType, 'img'> & { price: number, title: string })[] = [
  {
    img: doc_1,
    title: 'Сертификат соответствия',
    price: 15000,
  },
  { img: doc_2, title: 'Декларация соответствия', price: 3000 },
  { img: doc_3, title: 'Отказные письма и отрицательные решения', price: 1500 },
  { img: doc_4, title: 'Декларация ГОСТ Р', price: 8500 },
  { img: doc_8, title: 'Добровольный сертификат', price: 7000 },
  { img: doc_6, title: 'Свидетельство гос. регистрации', price: 30000 },
  { img: doc_5, title: 'Сертификат менеджмента качества ISO 9001-2015', price: 8000 },
  { img: doc_7, title: 'Промышленная и пожарная безопасность', price: 5000 },
];