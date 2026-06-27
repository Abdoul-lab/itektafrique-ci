import React, { useState, useEffect } from 'react';

interface CursorHintProps {
  cards?: number;
}

export default function CursorHint({ cards = 3 }: CursorHintProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = Array.from({ length: cards }, (_, i) =>
      setTimeout(() => setPhase(i + 1), i * 1600 + 1600)
    );
    return () => timers.forEach(clearTimeout);
  }, [cards]);

  if (phase >= cards) return null;

  const pct = (100 / cards) * phase + 100 / cards / 2;

  return (
    <div className="hidden lg:block">
      <style>{`
        @keyframes cursor-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
        @keyframes ripple-out { 0% { transform: scale(0.3); opacity: 0.7; } 100% { transform: scale(1.8); opacity: 0; } }
        .c-bob { animation: cursor-bob 0.7s ease-in-out infinite; }
        .c-ripple { animation: ripple-out 0.6s ease-out forwards; }
      `}</style>
      <div
        className="absolute top-1/2 pointer-events-none z-20 transition-all duration-700 ease-in-out"
        style={{ left: `${pct}%`, transform: `translateX(-50%) translateY(-2rem)` }}
      >
        <div key={phase} className="c-ripple absolute -top-3 -left-3 w-10 h-10 rounded-full border-2 border-[var(--brand-orange)]" />
        <div className="c-bob">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M6 2L6 20L10.5 15.5L13.5 22L16 21L13 14.5L19 14.5L6 2Z"
              fill="white"
              stroke="var(--brand-blue)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-[var(--brand-blue)] bg-white/90 px-2 py-0.5 rounded-full shadow">
          Cliquez !
        </span>
      </div>
    </div>
  );
}
