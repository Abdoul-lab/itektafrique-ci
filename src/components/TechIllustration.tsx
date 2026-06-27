import React from 'react';

const CX = 130;
const CY = 130;
const ORBIT = 88;

const nodes = [
  { angle: -90, label: 'Web',       abbr: 'WEB', color: '#3B82F6' },
  { angle: -30, label: 'IA',        abbr: 'IA',  color: '#8B5CF6' },
  { angle:  30, label: 'Mobile',    abbr: 'MOB', color: '#10B981' },
  { angle:  90, label: 'Cloud',     abbr: 'CLD', color: '#06B6D4' },
  { angle: 150, label: 'Réseau',    abbr: 'NET', color: '#F59E0B' },
  { angle: 210, label: 'Logiciels', abbr: 'LOG', color: '#EC4899' },
];

const toRad = (d: number) => (d * Math.PI) / 180;

const TechIllustration: React.FC = () => (
  <svg
    viewBox="0 0 260 260"
    aria-hidden="true"
    className="w-full max-w-[300px] mx-auto drop-shadow-2xl"
  >
    {/* Rotating outer dashed orbit ring */}
    <circle
      cx={CX} cy={CY} r={ORBIT + 26}
      fill="none"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1"
      strokeDasharray="7 5"
      className="svg-origin-center animate-spin-slow"
    />

    {/* Static inner ring */}
    <circle
      cx={CX} cy={CY} r={ORBIT - 14}
      fill="none"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />

    {/* Lines center → nodes */}
    {nodes.map((n, i) => {
      const x = CX + ORBIT * Math.cos(toRad(n.angle));
      const y = CY + ORBIT * Math.sin(toRad(n.angle));
      return (
        <line
          key={i}
          x1={CX} y1={CY} x2={x} y2={y}
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      );
    })}

    {/* Center pulse ring */}
    <circle
      cx={CX} cy={CY} r="42"
      fill="rgba(255,154,46,0.12)"
      stroke="rgba(255,154,46,0.5)"
      strokeWidth="1.5"
      className="svg-origin-center animate-pulse-soft"
    />

    {/* Center hub */}
    <circle cx={CX} cy={CY} r="29" fill="rgba(11,79,160,0.9)" />
    <text x={CX} y={CY - 4} textAnchor="middle" fill="white" fontSize="8.5" fontWeight="bold">ITEKT</text>
    <text x={CX} y={CY + 8} textAnchor="middle" fill="#FF9A2E" fontSize="7">AFRIQUE</text>

    {/* Floating service nodes */}
    {nodes.map((n, i) => {
      const x = CX + ORBIT * Math.cos(toRad(n.angle));
      const y = CY + ORBIT * Math.sin(toRad(n.angle));
      return (
        <g
          key={i}
          style={{
            animation: `floatY ${2.4 + i * 0.35}s ease-in-out ${i * 0.45}s infinite`,
          }}
        >
          <circle cx={x} cy={y} r="19" fill={`${n.color}28`} stroke={n.color} strokeWidth="1.5" />
          <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">
            {n.abbr}
          </text>
          <text x={x} y={y + 31} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="7">
            {n.label}
          </text>
        </g>
      );
    })}

    {/* Decorative particles */}
    <circle cx="22"  cy="28"  r="2.5" fill="rgba(255,255,255,0.25)" />
    <circle cx="216" cy="40"  r="1.8" fill="rgba(255,154,46,0.4)" />
    <circle cx="14"  cy="185" r="2"   fill="rgba(255,255,255,0.2)" />
    <circle cx="235" cy="198" r="1.8" fill="rgba(255,154,46,0.3)" />
    <circle cx="118" cy="12"  r="1.8" fill="rgba(255,255,255,0.3)" />
    <circle cx="198" cy="238" r="2"   fill="rgba(255,255,255,0.2)" />
  </svg>
);

export default TechIllustration;
