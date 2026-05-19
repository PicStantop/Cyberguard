import React from 'react'

export default function MrObi({ size = 140, expression = 'neutral' }) {
  const mouth = {
    happy:   <path d="M50 97 Q60 107 70 97" stroke="#5C2D0A" strokeWidth="2.5" fill="none" strokeLinecap="round" />,
    neutral: <path d="M51 99 Q60 104 69 99" stroke="#5C2D0A" strokeWidth="2.5" fill="none" strokeLinecap="round" />,
    serious: <line x1="51" y1="100" x2="69" y2="100" stroke="#5C2D0A" strokeWidth="2.5" strokeLinecap="round" />,
    surprised: <ellipse cx="60" cy="100" rx="6" ry="7" fill="#5C2D0A" />,
  }

  return (
    <svg viewBox="0 0 120 175" width={size} height={size * (175 / 120)} xmlns="http://www.w3.org/2000/svg">
      {/* Neck */}
      <rect x="48" y="118" width="24" height="18" rx="5" fill="#8B4513" />

      {/* Body / professor shirt */}
      <rect x="18" y="132" width="84" height="43" rx="14" fill="#3C3489" />
      {/* Collar */}
      <rect x="45" y="132" width="30" height="20" rx="4" fill="white" opacity="0.95" />
      <polygon points="60,136 50,148 60,152 70,148" fill="#e5e7eb" />
      {/* Tie */}
      <polygon points="60,140 56,148 60,168 64,148" fill="#E24B4A" />
      <polygon points="56,140 64,140 60,144" fill="#c0392b" />
      {/* Pocket */}
      <rect x="77" y="145" width="16" height="12" rx="3" fill="#534AB7" />
      <rect x="82" y="142" width="2" height="8" rx="1" fill="white" opacity="0.8" />
      <rect x="86" y="142" width="2" height="6" rx="1" fill="#FAC775" opacity="0.9" />
      {/* Arms */}
      <rect x="5" y="132" width="17" height="36" rx="8" fill="#3C3489" />
      <rect x="98" y="132" width="17" height="36" rx="8" fill="#3C3489" />
      {/* Hands */}
      <ellipse cx="13" cy="170" rx="9" ry="8" fill="#8B4513" />
      <ellipse cx="107" cy="170" rx="9" ry="8" fill="#8B4513" />

      {/* Head — rounder, slightly wider */}
      <ellipse cx="60" cy="79" rx="36" ry="38" fill="#8B4513" />

      {/* Short natural hair */}
      <ellipse cx="60" cy="44" rx="36" ry="16" fill="#1a0a00" />
      <ellipse cx="24" cy="60" rx="10" ry="22" fill="#1a0a00" />
      <ellipse cx="96" cy="60" rx="10" ry="22" fill="#1a0a00" />
      {/* Hair fade edges */}
      <ellipse cx="36" cy="53" rx="14" ry="10" fill="#1a0a00" opacity="0.6" />
      <ellipse cx="84" cy="53" rx="14" ry="10" fill="#1a0a00" opacity="0.6" />

      {/* Ears */}
      <ellipse cx="24" cy="82" rx="7" ry="9" fill="#7A3C10" />
      <ellipse cx="96" cy="82" rx="7" ry="9" fill="#7A3C10" />

      {/* Eyes whites */}
      <ellipse cx="47" cy="78" rx="10" ry="10" fill="white" />
      <ellipse cx="73" cy="78" rx="10" ry="10" fill="white" />
      {/* Iris */}
      <circle cx="48" cy="79" r="6.5" fill="#2d1400" />
      <circle cx="74" cy="79" r="6.5" fill="#2d1400" />
      {/* Pupils */}
      <circle cx="49" cy="80" r="4" fill="#0a0400" />
      <circle cx="75" cy="80" r="4" fill="#0a0400" />
      {/* Eye shine */}
      <circle cx="51" cy="77" r="1.8" fill="white" />
      <circle cx="77" cy="77" r="1.8" fill="white" />

      {/* Glasses frame */}
      <rect x="36" y="68" width="22" height="17" rx="4" fill="none" stroke="#1a0a00" strokeWidth="2.2" />
      <rect x="62" y="68" width="22" height="17" rx="4" fill="none" stroke="#1a0a00" strokeWidth="2.2" />
      {/* Glasses bridge */}
      <line x1="58" y1="76" x2="62" y2="76" stroke="#1a0a00" strokeWidth="2.2" strokeLinecap="round" />
      {/* Glasses temples */}
      <line x1="36" y1="76" x2="27" y2="80" stroke="#1a0a00" strokeWidth="2" strokeLinecap="round" />
      <line x1="84" y1="76" x2="93" y2="80" stroke="#1a0a00" strokeWidth="2" strokeLinecap="round" />
      {/* Glasses tint */}
      <rect x="36" y="68" width="22" height="17" rx="4" fill="#EEEDFE" opacity="0.25" />
      <rect x="62" y="68" width="22" height="17" rx="4" fill="#EEEDFE" opacity="0.25" />

      {/* Eyebrows — slightly furrowed, professional */}
      <path d="M37 65 Q47 61 57 63" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M63 63 Q73 61 83 65" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Nose — broader */}
      <path d="M56 88 Q60 94 64 88" stroke="#6B3010" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="55" cy="90" rx="3.5" ry="2.5" fill="#7A3C10" opacity="0.45" />
      <ellipse cx="65" cy="90" rx="3.5" ry="2.5" fill="#7A3C10" opacity="0.45" />

      {/* Mustache */}
      <path d="M48 104 Q54 100 60 103 Q66 100 72 104" stroke="#1a0a00" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Mouth */}
      {mouth[expression] || mouth.neutral}

      {/* Cheek blush / dimension */}
      <ellipse cx="36" cy="91" rx="8" ry="5" fill="#C45E20" opacity="0.25" />
      <ellipse cx="84" cy="91" rx="8" ry="5" fill="#C45E20" opacity="0.25" />
    </svg>
  )
}
