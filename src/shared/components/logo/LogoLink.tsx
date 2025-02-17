import { Logo } from '@shared/components';
import { VariantProps } from 'class-variance-authority';
import { logoVariants } from './logoVariant';

interface LogoLinkProps extends VariantProps<typeof logoVariants> {
  href?: string;
  className?: string;
}

export const LogoLink: React.FC<LogoLinkProps> = ({
  href = '/',
  size = 'xl',
  className = '',
}) => {
  return (
    <a href={href} className={className}>
      <Logo size={size} />
    </a>
  );
};
