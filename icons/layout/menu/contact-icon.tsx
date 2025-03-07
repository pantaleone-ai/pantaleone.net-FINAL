interface Props {
  className?: string;
}

export default function ContactIcon({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none">
        <path
          opacity=".3"
          d="M20 6H4l8 4.99L20 6zM4 8v10h16V8l-8 5-8-5z"
          fill="currentColor"
        ></path>
        <path
          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
}
