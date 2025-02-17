import { logoVariants } from './logoVariant.tsx';

import logo from '../../assets/icons/logo/logo.png';
import { VariantProps } from 'class-variance-authority';

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

export const Logo = ({ size, className }: LogoProps) => {
  return (
    <div className={logoVariants({ size, className })}>
      <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
