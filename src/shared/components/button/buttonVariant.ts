import { cva } from "class-variance-authority";
import styles from './button.module.scss'

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.button_primary,
      secondary: styles.button_secondary,
      sliderTransaparent: styles.button_slider,
      sliderLight: styles.button_slider_secondary,
      outlinedLight: styles.button_outlined,
      outlinedDark: styles.button_outlined_secondary,
      transparent: styles.button_transparent,
      arrow: styles.button_arrow,
    },
    size: {
      large: styles.button_large,
      medium: styles.button_medium,
      small: styles.button_small,
      icon: styles.button_icon
    },
    rounded: {
      full: styles.button_rounded_full,
      large: styles.button_rounded_lg,
      medium: styles.button_rounded_md,
      small: styles.button_rounded_sm
    },
    fontSize: {
      large: styles.button_text_lg,
      medium: styles.button_text_md,
      small: styles.button_text_sm
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "large",
    rounded: "medium",
    fontSize: "large"
  }
})