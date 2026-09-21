export function FootstepTrail({ className }: { className?: string }) {
  const steps = [
    { x: 4, y: 46, r: 27 },
    { x: 20, y: 30, r: 37 },
    { x: 34, y: 42, r: 45 },
    { x: 50, y: 22, r: 53 },
    { x: 64, y: 34, r: 63 },
  ];

  return (
    <svg
      viewBox="0 0 80 60"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {steps.map((s, i) => (
        <g key={i} transform={`translate(${s.x} ${s.y}) rotate(${s.r})`}>
          <g className="footstep" style={{ animationDelay: `${i * 0.6}s` }}>
            <ellipse cx="0" cy="0" rx="3.2" ry="4.6" fill="currentColor" />
            <ellipse cx="-2.6" cy="-5.4" rx="0.9" ry="1.1" fill="currentColor" />
            <ellipse cx="-0.8" cy="-6.2" rx="0.9" ry="1.2" fill="currentColor" />
            <ellipse cx="1" cy="-6.2" rx="0.85" ry="1.1" fill="currentColor" />
            <ellipse cx="2.6" cy="-5.6" rx="0.8" ry="1" fill="currentColor" />
          </g>
        </g>
      ))}
    </svg>
  );
}
