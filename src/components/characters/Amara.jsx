import React from 'react'

export default function Amara({ size = 140, expression = 'neutral' }) {
  const mouth = {
    happy:   <path d="M52 96 Q60 104 68 96" stroke="#7B3F1E" strokeWidth="2.5" fill="none" strokeLinecap="round" />,
    worried: <path d="M52 100 Q60 95 68 100" stroke="#7B3F1E" strokeWidth="2.5" fill="none" strokeLinecap="round" />,
    neutral: <path d="M53 97 Q60 101 67 97" stroke="#7B3F1E" strokeWidth="2.5" fill="none" strokeLinecap="round" />,
    surprised: <ellipse cx="60" cy="98" rx="6" ry="7" fill="#7B3F1E" />,
  }

  return (
    <svg viewBox="0 0 120 175" width={size} height={size * (175 / 120)} xmlns="http://www.w3.org/2000/svg">
      {/* Neck */}
      <rect x="50" y="118" width="20" height="18" rx="4" fill="#C68642" />

      {/* Body / uniform */}
      <rect x="22" y="132" width="76" height="43" rx="14" fill="#1D3461" />
      {/* Shirt collar detail */}
      <polygon points="60,132 48,145 60,150 72,145" fill="white" opacity="0.9" />
      <polygon points="60,150 48,145 60,165" fill="#e5e7eb" opacity="0.7" />
      <polygon points="60,150 72,145 60,165" fill="#e5e7eb" opacity="0.7" />
      {/* Badge on shirt */}
      <rect x="74" y="145" width="16" height="11" rx="3" fill="#1D9E75" opacity="0.9" />
      <text x="82" y="153.5" textAnchor="middle" fontSize="6" fill="white" fontFamily="sans-serif" fontWeight="bold">CS</text>
      {/* Arms */}
      <rect x="8" y="132" width="18" height="34" rx="9" fill="#1D3461" />
      <rect x="94" y="132" width="18" height="34" rx="9" fill="#1D3461" />
      {/* Hands */}
      <ellipse cx="17" cy="168" rx="9" ry="8" fill="#C68642" />
      <ellipse cx="103" cy="168" rx="9" ry="8" fill="#C68642" />

      {/* Head */}
      <ellipse cx="60" cy="78" rx="34" ry="38" fill="#C68642" />

      {/* Hair base / top afro */}
      <ellipse cx="60" cy="47" rx="36" ry="24" fill="#1a0a00" />
      {/* Left puff */}
      <ellipse cx="34" cy="60" rx="16" ry="18" fill="#1a0a00" />
      {/* Right puff */}
      <ellipse cx="86" cy="60" rx="16" ry="18" fill="#1a0a00" />
      {/* Hair highlights */}
      <ellipse cx="48" cy="43" rx="8" ry="5" fill="#3d1a00" opacity="0.6" />
      {/* Hair tie left */}
      <circle cx="34" cy="72" r="4" fill="#E24B4A" />
      {/* Hair tie right */}
      <circle cx="86" cy="72" r="4" fill="#E24B4A" />

      {/* Ears */}
      <ellipse cx="26" cy="82" rx="6" ry="8" fill="#B5732F" />
      <ellipse cx="94" cy="82" rx="6" ry="8" fill="#B5732F" />
      {/* Earrings */}
      <circle cx="26" cy="89" r="3" fill="#FAC775" />
      <circle cx="94" cy="89" r="3" fill="#FAC775" />

      {/* Eyes whites */}
      <ellipse cx="48" cy="77" rx="9" ry="10" fill="white" />
      <ellipse cx="72" cy="77" rx="9" ry="10" fill="white" />
      {/* Iris */}
      <circle cx="49" cy="78" r="6" fill="#3d1a00" />
      <circle cx="73" cy="78" r="6" fill="#3d1a00" />
      {/* Pupils */}
      <circle cx="50" cy="79" r="3.5" fill="#0d0500" />
      <circle cx="74" cy="79" r="3.5" fill="#0d0500" />
      {/* Eye shine */}
      <circle cx="52" cy="76" r="1.5" fill="white" />
      <circle cx="76" cy="76" r="1.5" fill="white" />

      {/* Eyebrows */}
      <path d="M40 65 Q48 61 56 64" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M64 64 Q72 61 80 65" stroke="#1a0a00" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M57 85 Q60 90 63 85" stroke="#A0632A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <ellipse cx="56" cy="87" rx="3" ry="2" fill="#B5732F" opacity="0.4" />
      <ellipse cx="64" cy="87" rx="3" ry="2" fill="#B5732F" opacity="0.4" />

      {/* Mouth */}
      {mouth[expression] || mouth.neutral}

      {/* Cheek blush */}
      <ellipse cx="38" cy="91" rx="7" ry="4" fill="#E8956D" opacity="0.35" />
      <ellipse cx="82" cy="91" rx="7" ry="4" fill="#E8956D" opacity="0.35" />
    </svg>
  )
}
