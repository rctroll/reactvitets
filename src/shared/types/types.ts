export type ContactType = 'phone' | 'email' | 'telegram' | 'whatsapp' | 'avito';
export type ContactConfigType = {
  type: ContactType,
  value: string,
  url: string,
  hidden: boolean;
}

export type DocumentType = {
  title: string;
  description: string;
  img: string;
}