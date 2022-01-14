export default function Ribbon({ w, h }) {
  return (
    <svg
      width={w ? w : 96}
      height={h ? h : 96}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <circle cx="48" cy="48" r="48" fill="#002eac" />
        <path
          d="M3 71.9068L47.8065 25L71.61 49.5036L47.5 75.5"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="96" height="96" rx="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
