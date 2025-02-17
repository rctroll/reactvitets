interface Props {
  className?: string;
}

export const VideoActiveBig = ({ className }: Props) => {
  return (
    <svg
      width="127"
      height="127"
      viewBox="0 0 127 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="63.5" cy="63.5" r="63.5" fill="black" fillOpacity="0.4" />
      <path
        d="M86 56.0718C91.3333 59.151 91.3333 66.849 86 69.9282L57.5 86.3827C52.1667 89.4619 45.5 85.6129 45.5 79.4545L45.5 46.5455C45.5 40.3871 52.1667 36.5381 57.5 39.6173L86 56.0718Z"
        fill="white"
      />
    </svg>
  );
};
