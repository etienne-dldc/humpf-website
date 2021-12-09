interface Props {
  size?: number;
  className?: string;
}

export function PlayIcon({ size = 24, className = "" }: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={"feather feather-github " + className}
      viewBox="0 0 24 24"
    >
      <path d="M5 3L19 12 5 21 5 3z"></path>
    </svg>
  );
}
