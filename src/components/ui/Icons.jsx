/**
 * Inline SVG icon set (lucide-style, stroke-based).
 * Replaces emoji/text glyphs so the site reads as a real product, not a template.
 */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const make = (paths) => {
  const Icon = ({ size = 18, className = '', ...rest }) => (
    <svg {...base} width={size} height={size} className={className} {...rest}>
      {paths}
    </svg>
  )
  return Icon
}

export const Check = make(<path d="M20 6 9 17l-5-5" />)

export const XMark = make(<path d="M18 6 6 18M6 6l12 12" />)

export const ArrowRight = make(
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>,
)

export const Database = make(
  <>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    <path d="M3 12a9 3 0 0 0 18 0" />
  </>,
)

export const Users = make(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
)

export const Wallet = make(
  <>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </>,
)

export const Shield = make(
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />,
)

export const Key = make(
  <>
    <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </>,
)

export const Cloud = make(<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />)

export const Grid = make(
  <>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </>,
)

export const GitBranch = make(
  <>
    <path d="M6 3v12" />
    <path d="M18 3v12" />
    <path d="M6 9h12" />
    <circle cx="18" cy="9" r="3" />
    <circle cx="6" cy="9" r="3" />
    <circle cx="12" cy="9" r="3" />
  </>,
)

export const ChartBar = make(
  <>
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M7 16v-3" />
    <path d="M12 16V8" />
    <path d="M17 16v-5" />
  </>,
)

export const TrendingUp = make(
  <>
    <path d="M22 7l-8.5 8.5-5-5L2 17" />
    <path d="M16 7h6v6" />
  </>,
)

export const Target = make(
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </>,
)

export const FileText = make(
  <>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </>,
)

export const Clock = make(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </>,
)

export const Copy = make(
  <>
    <rect x="8" y="8" width="14" height="14" rx="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </>,
)

export const AlertTriangle = make(
  <>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </>,
)

export const AlertCircle = make(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </>,
)

export const Layers = make(
  <>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 12.18-9.17 4.16a2 2 0 0 1-1.66 0L2 12.18" />
    <path d="m22 17.18-9.17 4.16a2 2 0 0 1-1.66 0L2 17.18" />
  </>,
)

export const Sparkles = make(
  <>
    <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3Z" />
  </>,
)

export const Briefcase = make(
  <>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 13h20" />
  </>,
)

export const LifeBuoy = make(
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <path d="m4.93 4.93 4.24 4.24" />
    <path d="m14.83 14.83 4.24 4.24" />
    <path d="m14.83 9.17 4.24-4.24" />
    <path d="m4.93 19.07 4.24-4.24" />
  </>,
)

export const Megaphone = make(
  <>
    <path d="m3 11 18-5v12L3 13" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </>,
)

export const Sliders = make(
  <>
    <path d="M21 4h-7M10 4H3" />
    <path d="M21 12h-9M8 12H3" />
    <path d="M21 20h-5M12 20H3" />
    <circle cx="12" cy="4" r="2" />
    <circle cx="10" cy="12" r="2" />
    <circle cx="14" cy="20" r="2" />
  </>,
)

export const Building = make(
  <>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 6h.01M12 10h.01M12 14h.01" />
  </>,
)

export const Zap = make(<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />)

export const HeartPulse = make(
  <>
    <path d="M21 12.79A9 9 0 1 1 9.5 4.5" />
    <path d="M15 12a3 3 0 1 1 0 6H9" />
    <path d="M9 19h6" />
    <path d="M12 17v4" />
  </>,
)

export const RefreshCw = make(
  <>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1 6.74-2.74L21 16" />
    <path d="M21 16v5h-5" />
  </>,
)

export const Ticket = make(
  <>
    <path d="M15 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
  </>,
)

export const BrainCircuit = make(
  <>
    <path d="M12 5v5" />
    <path d="M9 8h6" />
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 16h4" />
    <path d="M13 16h4" />
    <path d="M9 11v5" />
    <path d="M15 11v5" />
  </>,
)

export const Gauge = make(
  <>
    <path d="M12 22c7.5 0 12-4.5 12-10S19.5 2 12 2 0 6.5 0 14s4.5 10 12 10z" />
    <path d="M12 18v-6l4 4" />
  </>,
)

export const BarChart2 = make(
  <>
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M7 16v-9" />
    <path d="M12 16v-4" />
    <path d="M17 16v-6" />
  </>,
)

export const Network = make(
  <>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <path d="M6.5 10.5 10.5 6.5" />
    <path d="M17.5 10.5 13.5 6.5" />
    <path d="M6.5 17.5 10.5 13.5" />
    <path d="M17.5 17.5 13.5 13.5" />
  </>,
)

export const Server = make(
  <>
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <path d="M6 6h.01M10 6h.01M14 6h.01M18 6h.01" />
    <path d="M6 18h.01M10 18h.01M14 18h.01M18 18h.01" />
  </>,
)

export const Unlink = make(
  <>
    <path d="m18.84 12.25 1.72-1.71a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="m5.17 11.75-1.72 1.71a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    <path d="M5 2v3M2 5h3M19 22v-3M22 19h-3" />
  </>,
)

export const Bell = make(
  <>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </>,
)

export const Search = make(
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </>,
)

export const ChevronUp = make(<path d="m18 15-6-6-6 6" />)

export const ChevronDown = make(<path d="m6 9 6 6 6-6" />)

export const ChevronLeft = make(<path d="m15 18-6-6 6-6" />)

export const ChevronRight = make(<path d="m9 18 6-6-6-6" />)

export const Home = make(
  <>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </>,
)

export const Lock = make(
  <>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </>,
)

export const BadgeCheck = make(
  <>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1 0-6.76Z" />
    <path d="M9 12l2 2 4-4" />
  </>,
)

export const MessageSquare = make(
  <>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 9h8M8 13h6" />
  </>,
)

export const Calendar = make(
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </>,
)

export const Sun = make(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </>,
)

export const Moon = make(
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />,
)

export const FileCheck = make(
  <>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M9 12l2 2 4-4" />
  </>,
)
