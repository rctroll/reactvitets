import { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<SVGElement> {
  open?: boolean;
}

const ArrowRightIcon = ({ open, ...props }: IconProps) => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`${open ? 'rotate(90)' : ''}`}
      {...props}
    >
      <path
        d="M1 1L4.29289 4.29289C4.68342 4.68342 4.68342 5.31658 4.29289 5.70711L1 9"
        stroke="#040085"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { ArrowRightIcon };
