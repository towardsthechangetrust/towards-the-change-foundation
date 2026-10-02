const footstepPath =
  "M16.707 3.79c-0.419 1.062-1.464 1.645-2.334 1.301s-1.236-1.483-0.816-2.545 1.464-1.645 2.334-1.302 1.236 1.483 0.816 2.545zM21.193 5.46c-0.764 1.032-2.069 1.361-2.914 0.734s-0.911-1.97-0.146-3.002 2.069-1.361 2.914-0.734c0.845 0.626 0.911 1.97 0.146 3.002zM25.192 8.225c-0.99 0.959-2.43 1.079-3.215 0.268s-0.62-2.246 0.371-3.205 2.43-1.079 3.215-0.268 0.619 2.246-0.371 3.205zM28.906 14.051c-1.737 0.966-3.787 0.596-4.578-0.827s-0.025-3.359 1.712-4.325 3.787-0.596 4.578 0.827 0.025 3.359-1.712 4.325zM10.525 7.981c-3.809 3.407-7.519 8.305-8.761 16.165-1.451 9.181 9.858 7.521 8.738 2.618-1.43-6.264 2.129-8.805 6.739-7.747 2.049 0.47 4.152-0.306 5.366-2.523 1.46-2.666-0.463-6.665-3.922-8.712-2.697-1.596-5.773-1.935-8.16 0.2l-0 0z";

export function FootstepIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 35 35"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="rotate(35 16 16)">
        <path
          d={footstepPath}
          fill="currentColor"
          transform="translate(32 0) scale(-1 1)"
        />
      </g>
    </svg>
  );
}

export function FootstepTrail({ className }: { className?: string }) {
  const steps = [
    { x: 8, y: 50, rotation: 90 },
    { x: 20, y: 26, rotation: 5 },
    { x:40, y: 38, rotation: 90 },
    { x: 44, y: 10, rotation: 5 },
    { x: 58, y: 25, rotation: 90 },
  ];

  return (
    <svg
      viewBox="0 0 80 60"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {steps.map((s, i) => (
        <g key={i} transform={`translate(${s.x} ${s.y}) rotate(${s.rotation})`}>
          <g className="footstep" style={{ animationDelay: `${i * 0.6}s` }}>
            <path
              d={footstepPath}
              fill="currentColor"
              transform={`scale(${i % 2 === 0 ? -0.22 : 0.22} 0.22) translate(-16 -16)`}
            />
          </g>
        </g>
      ))}
    </svg>
  );
}
