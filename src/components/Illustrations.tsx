import React from 'react';

/* ── Digital / Data flow illustration ─────────────────── */
export const DigitalIllu: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 320 240" aria-hidden="true" className={className} fill="none">
    {/* Background circles */}
    <circle cx="160" cy="120" r="100" stroke="rgba(11,79,160,0.12)" strokeWidth="1" strokeDasharray="6 4" />
    <circle cx="160" cy="120" r="70"  stroke="rgba(11,79,160,0.08)" strokeWidth="1" />

    {/* Laptop base */}
    <rect x="70" y="140" width="180" height="10" rx="4" fill="#0B4FA0" />
    <rect x="80" y="60"  width="160" height="88" rx="8" fill="#1E3A6E" />
    <rect x="86" y="66"  width="148" height="76" rx="4" fill="#0D2647" />

    {/* Code lines on screen */}
    <rect x="94"  y="76"  width="50"  height="5" rx="2" fill="#FF9A2E" />
    <rect x="94"  y="86"  width="100" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
    <rect x="104" y="95"  width="80"  height="4" rx="2" fill="rgba(255,255,255,0.25)" />
    <rect x="104" y="104" width="90"  height="4" rx="2" fill="rgba(255,255,255,0.25)" />
    <rect x="94"  y="113" width="60"  height="4" rx="2" fill="#FF9A2E" opacity="0.7" />
    <rect x="104" y="122" width="110" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
    <rect x="104" y="131" width="70"  height="4" rx="2" fill="rgba(255,255,255,0.2)" />

    {/* Floating data nodes */}
    <circle cx="58"  cy="78"  r="14" fill="#3B82F6" opacity="0.9" />
    <text x="58" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">WEB</text>

    <circle cx="268" cy="88"  r="14" fill="#8B5CF6" opacity="0.9" />
    <text x="268" y="92" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">IA</text>

    <circle cx="58"  cy="158" r="14" fill="#10B981" opacity="0.9" />
    <text x="58" y="162" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">APP</text>

    <circle cx="268" cy="158" r="14" fill="#F59E0B" opacity="0.9" />
    <text x="268" y="162" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">NET</text>

    {/* Connection lines */}
    <line x1="72"  y1="84"  x2="80"  y2="92"  stroke="rgba(59,130,246,0.4)"  strokeWidth="1.5" strokeDasharray="3 2" />
    <line x1="254" y1="94"  x2="234" y2="100" stroke="rgba(139,92,246,0.4)"  strokeWidth="1.5" strokeDasharray="3 2" />
    <line x1="72"  y1="152" x2="80"  y2="142" stroke="rgba(16,185,129,0.4)"  strokeWidth="1.5" strokeDasharray="3 2" />
    <line x1="254" y1="152" x2="234" y2="140" stroke="rgba(245,158,11,0.4)"  strokeWidth="1.5" strokeDasharray="3 2" />

    {/* Decorative dots */}
    <circle cx="160" cy="22"  r="3" fill="#FF9A2E" opacity="0.6" />
    <circle cx="130" cy="218" r="2" fill="rgba(11,79,160,0.5)" />
    <circle cx="185" cy="215" r="2.5" fill="#FF9A2E" opacity="0.5" />
  </svg>
);

/* ── Resources / Documentation illustration ────────────── */
export const ResourcesIllu: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 300 220" aria-hidden="true" className={className} fill="none">
    {/* Background glow */}
    <ellipse cx="150" cy="140" rx="110" ry="60" fill="rgba(11,79,160,0.06)" />

    {/* Back document */}
    <rect x="90" y="40" width="130" height="160" rx="8" fill="#E8EFFC" stroke="#CBD5E1" strokeWidth="1" transform="rotate(-6 150 120)" />

    {/* Mid document */}
    <rect x="90" y="40" width="130" height="160" rx="8" fill="#F0F4FF" stroke="#CBD5E1" strokeWidth="1" transform="rotate(-2 150 120)" />

    {/* Front document */}
    <rect x="90" y="40" width="130" height="160" rx="8" fill="white" stroke="#0B4FA0" strokeWidth="1.5" />

    {/* Document header */}
    <rect x="90" y="40" width="130" height="36" rx="8" fill="#0B4FA0" />
    <rect x="90" y="62" width="130" height="14" fill="#0B4FA0" />

    {/* Header icon */}
    <circle cx="108" cy="58" r="10" fill="rgba(255,154,46,0.3)" />
    <rect x="103" y="53" width="10" height="2" rx="1" fill="#FF9A2E" />
    <rect x="103" y="57" width="10" height="2" rx="1" fill="#FF9A2E" />
    <rect x="103" y="61" width="7"  height="2" rx="1" fill="#FF9A2E" />

    {/* Header text placeholder */}
    <rect x="122" y="53" width="80" height="5" rx="2" fill="rgba(255,255,255,0.6)" />
    <rect x="122" y="62" width="60" height="4" rx="2" fill="rgba(255,255,255,0.4)" />

    {/* Content lines */}
    <rect x="100" y="88"  width="110" height="5" rx="2" fill="#CBD5E1" />
    <rect x="100" y="100" width="90"  height="4" rx="2" fill="#E2E8F0" />
    <rect x="100" y="112" width="100" height="4" rx="2" fill="#E2E8F0" />
    <rect x="100" y="128" width="50"  height="5" rx="2" fill="#0B4FA0" opacity="0.6" />
    <rect x="100" y="140" width="110" height="4" rx="2" fill="#E2E8F0" />
    <rect x="100" y="152" width="80"  height="4" rx="2" fill="#E2E8F0" />
    <rect x="100" y="164" width="95"  height="4" rx="2" fill="#E2E8F0" />

    {/* Download button */}
    <rect x="100" y="178" width="80" height="14" rx="7" fill="#FF9A2E" />
    <text x="140" y="188" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">Télécharger</text>

    {/* Floating badge */}
    <rect x="188" y="32" width="64" height="22" rx="11" fill="#10B981" />
    <text x="220" y="46" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">GRATUIT</text>

    {/* Small decoration */}
    <circle cx="45"  cy="70"  r="5" fill="#FF9A2E" opacity="0.4" />
    <circle cx="260" cy="160" r="4" fill="#3B82F6" opacity="0.4" />
    <circle cx="55"  cy="160" r="3" fill="#10B981" opacity="0.4" />
  </svg>
);

/* ── Consultation / Meeting illustration ───────────────── */
export const MeetingIllu: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 320 220" aria-hidden="true" className={className} fill="none">
    {/* Table */}
    <ellipse cx="160" cy="155" rx="130" ry="25" fill="#E8EFFC" stroke="#CBD5E1" strokeWidth="1" />
    <rect x="50" y="145" width="220" height="12" rx="6" fill="#DBEAFE" stroke="#CBD5E1" strokeWidth="1" />

    {/* Person left */}
    <circle cx="80" cy="108" r="20" fill="#0B4FA0" />
    <circle cx="80" cy="102" r="9"  fill="#FDE68A" />
    <rect   x="63" y="117" width="34" height="20" rx="10" fill="#0B4FA0" />

    {/* Person center */}
    <circle cx="160" cy="100" r="22" fill="#1D4ED8" />
    <circle cx="160" cy="93"  r="10" fill="#FCD34D" />
    <rect   x="142" y="110"  width="36" height="22" rx="11" fill="#1D4ED8" />

    {/* Person right */}
    <circle cx="240" cy="108" r="20" fill="#FF9A2E" />
    <circle cx="240" cy="102" r="9"  fill="#FDE68A" />
    <rect   x="223" y="117"  width="34" height="20" rx="10" fill="#FF9A2E" />

    {/* Laptop on table */}
    <rect x="135" y="128" width="50" height="30" rx="4" fill="#1E3A6E" />
    <rect x="138" y="131" width="44" height="24" rx="2" fill="#0D2647" />
    <rect x="141" y="134" width="38" height="3"  rx="1" fill="#FF9A2E" opacity="0.8" />
    <rect x="141" y="140" width="30" height="2"  rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="141" y="145" width="35" height="2"  rx="1" fill="rgba(255,255,255,0.3)" />

    {/* Speech bubbles */}
    <rect x="28"  y="60" width="70" height="30" rx="8" fill="white" stroke="#CBD5E1" strokeWidth="1" />
    <polygon points="42,90 50,90 46,98" fill="white" stroke="#CBD5E1" strokeWidth="1" />
    <rect x="34"  y="68" width="55" height="4" rx="2" fill="#E2E8F0" />
    <rect x="34"  y="76" width="40" height="4" rx="2" fill="#E2E8F0" />

    <rect x="222" y="50" width="75" height="35" rx="8" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1" />
    <polygon points="262,85 270,85 265,93" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1" />
    <rect x="228" y="58" width="60" height="4" rx="2" fill="#93C5FD" />
    <rect x="228" y="66" width="45" height="4" rx="2" fill="#BFDBFE" />
    <rect x="228" y="74" width="50" height="4" rx="2" fill="#BFDBFE" />

    {/* Checkmark icon above center person */}
    <circle cx="160" cy="46" r="14" fill="#10B981" />
    <polyline points="154,46 158,51 168,41" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Decorative */}
    <circle cx="18"  cy="38"  r="4" fill="#FF9A2E" opacity="0.5" />
    <circle cx="302" cy="50"  r="3" fill="#3B82F6" opacity="0.5" />
    <circle cx="20"  cy="180" r="3" fill="#10B981" opacity="0.4" />
  </svg>
);
