interface Props {
  size?: number;
}

export function MenuIcon({ size = 24 }: Props): JSX.Element {
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
      <path d="M3 12L21 12" />
      <path d="M3 6L21 6" />
      <path d="M3 18L21 18" />
    </svg>
  );
}
