import React from 'react'

export default function Hacker({ size = 140 }) {
  return (
    <svg viewBox="0 0 120 175" width={size} height={size * (175 / 120)} xmlns="http://www.w3.org/2000/svg">
      {/* Body — dark hoodie */}
      <rect x="15" y="128" width="90" height="47" rx="14" fill="#1a1a2e" />
      {/* Hood drape */}
      <ellipse cx="60" cy="130" rx="48" ry="22" fill="#16213e" />

      {/* Neck */}
      <rect x="48" y="116" width="24" height="16" rx="5" fill="#2a2a3e" />

      {/* Head */}
      <ellipse cx="60" cy="78" rx="34" ry="38" fill="#2a2a3e" />

      {/* Hood over head */}
      <path d="M20 68 Q22 30 60 26 Q98 30 100 68 Q95 55 60 52 Q25 55 20 68 Z" fill="#16213e" />
      {/* Hood shadow on face */}
      <ellipse cx="60" cy="58" rx="28" ry="14" fill="#0d0d1a" opacity="0.55" />

      {/* Eyes — glowing red/orange */}
      <ellipse cx="46" cy="78" rx="10" ry="9" fill="#0d0d1a" />
      <ellipse cx="74" cy="78" rx="10" ry="9" fill="#0d0d1a" />
      {/* Glow */}
      <ellipse cx="46" cy="78" rx="7" ry="6" fill="#E24B4A" opacity="0.7" />
      <ellipse cx="74" cy="78" rx="7" ry="6" fill="#E24B4A" opacity="0.7" />
      <circle cx="46" cy="78" r="4" fill="#ff6b6b" />
      <circle cx="74" cy="78" r="4" fill="#ff6b6b" />
      {/* Eye shine */}
      <circle cx="48" cy="76" r="1.5" fill="white" opacity="0.6" />
      <circle cx="76" cy="76" r="1.5" fill="white" opacity="0.6" />

      {/* Mask / balaclava covering lower face */}
      <rect x="32" y="90" width="56" height="32" rx="8" fill="#0d0d1a" />
      {/* Mask stitching */}
      <path d="M42 106 Q60 100 78 106" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeDasharray="3,2" />
      {/* Breathing holes in mask */}
      <circle cx="50" cy="112" r="2" fill="#1a1a2e" />
      <circle cx="60" cy="112" r="2" fill="#1a1a2e" />
      <circle cx="70" cy="112" r="2" fill="#1a1a2e" />

      {/* Arms */}
      <rect x="3" y="128" width="16" height="38" rx="8" fill="#16213e" />
      <rect x="101" y="128" width="16" height="38" rx="8" fill="#16213e" />
      {/* Gloved hands */}
      <ellipse cx="11" cy="168" rx="9" ry="8" fill="#0d0d1a" />
      <ellipse cx="109" cy="168" rx="9" ry="8" fill="#0d0d1a" />
      {/* Laptop in hands */}
      <rect x="25" y="155" width="70" height="16" rx="4" fill="#0d0d1a" />
      <rect x="27" y="157" width="66" height="12" rx="3" fill="#16213e" />
      {/* Screen glow */}
      <rect x="29" y="159" width="62" height="8" rx="2" fill="#0a3d2e" />
      <text x="60" y="165.5" textAnchor="middle" fontSize="5.5" fill="#1D9E75" fontFamily="monospace">ACCESS DENIED...</text>

      {/* Question mark on hoodie chest */}
      <text x="60" y="148" textAnchor="middle" fontSize="18" fill="#E24B4A" fontFamily="monospace" fontWeight="bold" opacity="0.8">?</text>
    </svg>
  )
}
