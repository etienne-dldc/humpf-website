interface Props {
  size?: number;
}

export function AwardIcon({ size = 24 }: Props): JSX.Element {
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
      className="feather feather-award"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="7"></circle>
      <path d="M8.21 13.89L7 23 12 20 17 23 15.79 13.88"></path>
    </svg>
  );
}
