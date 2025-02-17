import { VariantProps } from 'class-variance-authority';
import { titleVariants } from './titleVariants';

interface TitleProps
  extends React.ComponentProps<'h1'>,
    VariantProps<typeof titleVariants> {}

/**
 * Title
 * @param variant — Вариант тайтла, по дефолту "primary"
 * @param size — Размер тайтла, по дефолту "40px"
 */
const Title = ({ children, variant, size, className, ...props }: TitleProps) => {
  return (
    <h1 className={titleVariants({ variant, size, className })} {...props}>
      {children}
    </h1>
  );
};

export { Title };
