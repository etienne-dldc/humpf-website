interface Props {
  size?: number;
}

export function PauseIcon({ size = 24 }: Props): JSX.Element {
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
      className="feather feather-github"
      viewBox="0 0 24 24"
    >
      <path d="M6 4H10V20H6z"></path>
      <path d="M14 4H18V20H14z"></path>
    </svg>
  );
}
