interface Props {
  className?: string;
}

export const VideoStopedBig = ({ className }: Props) => {
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
      <path d="M52 44V82" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <path d="M76 44V82" stroke="white" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
};
