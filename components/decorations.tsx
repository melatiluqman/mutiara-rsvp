/*
 * Elemen dekoratif SVG bergaya watercolor lembut, digambar ulang
 * dari elemen GSM: pita ungu, paper plane, sparkle emas, amplop,
 * prangko, washi tape biru, dan hati.
 */

type DecoProps = { className?: string };

export function Sparkle({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1c.9 5.8 4.3 9.2 10.5 11-6.2 1.8-9.6 5.2-10.5 11-.9-5.8-4.3-9.2-10.5-11C7.7 10.2 11.1 6.8 12 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Heart({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 21c-5.5-3.9-9-7.3-9-11.1A5 5 0 0 1 12 6.6 5 5 0 0 1 21 9.9c0 3.8-3.5 7.2-9 11.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Bow({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 120 92" className={className} aria-hidden="true">
      <path d="M58 46C44 20 22 10 12 22 2 34 12 58 54 52Z" fill="#b29bdd" />
      <path
        d="M56 46C44 27 29 20 21 28c-8 8-1 21 31 20Z"
        fill="#c9b6e4"
        opacity=".55"
      />
      <path d="M62 46c14-26 36-36 46-24 10 12 0 36-42 30Z" fill="#a78bd4" />
      <path
        d="M64 46c12-19 27-26 35-18 8 8 1 21-31 20Z"
        fill="#c9b6e4"
        opacity=".45"
      />
      <path d="M54 52c-8 14-14 24-22 34l12 2c8-12 13-24 15-34Z" fill="#9f82ce" />
      <path d="M66 52c8 14 14 24 22 34l-12 2c-8-12-13-24-15-34Z" fill="#b29bdd" />
      <ellipse cx="60" cy="48" rx="10" ry="9" fill="#8e6fbf" />
      <ellipse cx="57" cy="45" rx="4" ry="3" fill="#c9b6e4" opacity=".6" />
    </svg>
  );
}

export function PaperPlane({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M60 6 4 30l22 8Z" fill="#c3aee6" />
      <path d="M60 6 26 38l8 20 10-16Z" fill="#a78bd4" />
      <path d="M60 6 26 38l3 9Z" fill="#8e6fbf" />
    </svg>
  );
}

export function PlaneTrail({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      <path
        d="M4 52C34 56 40 34 28 28S6 34 22 44s52 6 66-14"
        fill="none"
        stroke="#b29bdd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
    </svg>
  );
}

export function Envelope({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 56 42" className={className} aria-hidden="true">
      <rect
        x="2"
        y="4"
        width="52"
        height="36"
        rx="4"
        fill="#fffdfb"
        stroke="#cfa1a1"
        strokeWidth="2.4"
      />
      <path
        d="M4 8l24 18L52 8"
        fill="none"
        stroke="#cfa1a1"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 20.5c-2.7-2.1-4.8-1-4.8 1 0 1.9 2.1 3.5 4.8 5.4 2.7-1.9 4.8-3.5 4.8-5.4 0-2-2.1-3.1-4.8-1Z"
        fill="#ee94b5"
      />
    </svg>
  );
}

export function WashiTape({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 120 34" className={className} aria-hidden="true">
      <path d="M7 3 2 17l5 14 106-2 5-13-4-13Z" fill="#a9c6e8" opacity=".85" />
      <path d="M7 3 2 17l5 14 8-.2V3.2Z" fill="#bfd5ee" opacity=".7" />
      <path d="M113 3l4 13-5 13-8 .2V3.2Z" fill="#bfd5ee" opacity=".7" />
    </svg>
  );
}

export function Stamp({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 46 56" className={className} aria-hidden="true">
      <rect x="1" y="1" width="44" height="54" rx="3" fill="#f6bdd1" />
      <rect
        x="1"
        y="1"
        width="44"
        height="54"
        rx="3"
        fill="none"
        stroke="#fcf8f3"
        strokeWidth="2.5"
        strokeDasharray="0.1 6"
        strokeLinecap="round"
      />
      <rect x="8" y="9" width="30" height="38" rx="2" fill="#fbe4ed" />
      <g transform="translate(23 24)">
        <path
          d="M0 18C-1 12-1 8 0 4"
          stroke="#9caf88"
          strokeWidth="1.6"
          fill="none"
        />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse
            key={a}
            transform={`rotate(${a})`}
            cx="0"
            cy="-6"
            rx="2.6"
            ry="5.4"
            fill="#a78bd4"
          />
        ))}
        <circle r="2.2" fill="#f2c063" />
      </g>
    </svg>
  );
}

export function HeartDivider({ className }: DecoProps) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="h-px w-14 bg-lilac" />
      <Heart className="h-4 w-4 text-lilac" />
      <span className="h-px w-14 bg-lilac" />
    </div>
  );
}
