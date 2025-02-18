interface ArrowDownProps {
  color: string;
}

const ArrowDown = ({ color }: ArrowDownProps) => {
  return (
    <svg
      width="6"
      height="13"
      viewBox="0 0 6 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 1C3.5 0.723858 3.27614 0.5 3 0.5C2.72386 0.5 2.5 0.723858 2.5 1H3.5ZM3 13L5.88675 8H0.113249L3 13ZM2.5 1V8.5H3.5V1H2.5Z"
        fill={color}
      />
    </svg>
  );
};

export { ArrowDown };
