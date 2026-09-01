export default function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#0d9488" />
      <path d="M24 14L14 22V34H20V26H28V34H34V22L24 14Z" fill="white" />
      <circle cx="24" cy="19" r="2" fill="#0d9488" />
    </svg>
  )
}
