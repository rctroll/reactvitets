import { HTMLAttributes, ImgHTMLAttributes } from 'react';

export interface ReviewCardProps extends HTMLAttributes<HTMLDivElement> {}
export interface ReviewHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface ReviewTitleProps extends HTMLAttributes<HTMLDivElement> {}
export interface ReviewDateProps extends HTMLAttributes<HTMLDivElement> {}
export interface ReviewGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal';
}
export interface ReviewUserImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback: string;
}
export interface ReviewDescriptionProps extends HTMLAttributes<HTMLDivElement> {}
export interface ReviewRatingProps extends HTMLAttributes<HTMLDivElement> {
  rating: number;
}
export interface ReviewInfoProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}
export interface ReviewContentProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
  reviewText?: string;
}
