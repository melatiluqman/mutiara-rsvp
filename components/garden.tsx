/*
 * Komposisi "taman bunga" watercolor untuk sudut bawah halaman,
 * meniru cluster floral pada GSM: hidrangea ungu, cosmos pink,
 * daisy putih, lavender, bunga peach, dedaunan sage, dan sparkle.
 */

const LILAC_SHADES = ["#c7b3e8", "#b49cde", "#d6c8f0", "#bba6e2"];

function Floret({ x, y, s = 1, i = 0 }: { x: number; y: number; s?: number; i?: number }) {
  const color = LILAC_SHADES[i % LILAC_SHADES.length];
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 90, 180, 270].map((a) => (
        <ellipse
          key={a}
          transform={`rotate(${a + i * 15})`}
          cx="0"
          cy="-5.5"
          rx="4.6"
          ry="6"
          fill={color}
        />
      ))}
      <circle r="2" fill="#efe9f8" />
    </g>
  );
}

function Hydrangea({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  const florets: [number, number, number][] = [
    [0, 0, 1.05],
    [14, -6, 0.95],
    [7, 13, 1],
    [-10, 10, 0.9],
    [-14, -6, 0.95],
    [2, -16, 0.9],
    [18, 6, 0.85],
    [-4, 21, 0.8],
    [-20, 3, 0.8],
    [12, -17, 0.75],
    [-14, -17, 0.7],
    [21, -12, 0.7],
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle r="30" fill="#c9b6e4" opacity=".35" />
      {florets.map(([fx, fy, fs], i) => (
        <Floret key={i} x={fx} y={fy} s={fs} i={i} />
      ))}
    </g>
  );
}

function Cosmos({
  x,
  y,
  s = 1,
  rot = 0,
  color = "#f3a7c0",
}: {
  x: number;
  y: number;
  s?: number;
  rot?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <ellipse
          key={a}
          transform={`rotate(${a})`}
          cx="0"
          cy="-11"
          rx="5.2"
          ry="10.5"
          fill={color}
          opacity=".95"
        />
      ))}
      <circle r="4.8" fill="#f2c063" />
      <circle r="2.2" fill="#e39a2d" opacity=".55" />
    </g>
  );
}

function Daisy({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {Array.from({ length: 12 }, (_, k) => k * 30).map((a) => (
        <ellipse
          key={a}
          transform={`rotate(${a})`}
          cx="0"
          cy="-9.5"
          rx="2.8"
          ry="8.5"
          fill="#fdfbf4"
          stroke="#ece5d8"
          strokeWidth=".5"
        />
      ))}
      <circle r="3.8" fill="#f2c063" />
    </g>
  );
}

function SmallBloom({
  x,
  y,
  s = 1,
  color = "#a98fd6",
}: {
  x: number;
  y: number;
  s?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          transform={`rotate(${a})`}
          cx="0"
          cy="-7"
          rx="3.6"
          ry="6.8"
          fill={color}
        />
      ))}
      <circle r="2.6" fill="#f2c063" />
    </g>
  );
}

function Lavender({
  x,
  y,
  s = 1,
  rot = 0,
}: {
  x: number;
  y: number;
  s?: number;
  rot?: number;
}) {
  const buds: [number, number, number][] = [
    [0, -4, 0],
    [-5, 2, -30],
    [5, 4, 30],
    [-5, 10, -30],
    [5, 12, 30],
    [-4, 18, -28],
    [4, 20, 28],
    [0, 25, 0],
  ];
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 52C2 36 2 18 0 -6" stroke="#9caf88" strokeWidth="2" fill="none" />
      {buds.map(([bx, by, br], i) => (
        <ellipse
          key={i}
          cx={bx}
          cy={by}
          rx="3.4"
          ry="5.2"
          transform={`rotate(${br} ${bx} ${by})`}
          fill={i % 2 ? "#a88fd6" : "#b9a3e0"}
        />
      ))}
    </g>
  );
}

function Leaf({
  x,
  y,
  rot = 0,
  s = 1,
  color = "#a9bc96",
}: {
  x: number;
  y: number;
  rot?: number;
  s?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0C8-9 9-21 0-30-9-21-8-9 0 0Z" fill={color} />
      <path
        d="M0-5C0-12 0-19 0-25"
        stroke="#f1f5ea"
        strokeWidth="1.4"
        opacity=".85"
        fill="none"
      />
    </g>
  );
}

function LeafBranch({
  x,
  y,
  rot = 0,
  s = 1,
}: {
  x: number;
  y: number;
  rot?: number;
  s?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0C5-20 7-42 5-64" stroke="#9caf88" strokeWidth="2.2" fill="none" />
      <Leaf x={3} y={-16} rot={60} s={0.6} />
      <Leaf x={5} y={-30} rot={-55} s={0.65} color="#9caf88" />
      <Leaf x={6} y={-44} rot={55} s={0.6} />
      <Leaf x={6} y={-56} rot={-48} s={0.55} color="#9caf88" />
      <Leaf x={5} y={-66} rot={2} s={0.55} />
    </g>
  );
}

function SparkleG({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0-9C.7-3.6 3.6-.7 9 0 3.6.7.7 3.6 0 9-.7 3.6-3.6.7-9 0-3.6-.7-.7-3.6 0-9Z"
      fill="#e9bc5f"
    />
  );
}

export function CornerGarden({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg viewBox="0 0 420 300" className={className} aria-hidden="true">
      <g transform={flip ? "translate(420 0) scale(-1 1)" : undefined}>
        <LeafBranch x={40} y={300} rot={-32} s={1.5} />
        <LeafBranch x={130} y={306} rot={-6} s={1.7} />
        <LeafBranch x={215} y={304} rot={24} s={1.35} />
        <Lavender x={188} y={150} rot={-6} s={1.25} />
        <Lavender x={222} y={178} rot={16} s={1.05} />
        <Lavender x={52} y={168} rot={-24} s={1.05} />
        <SmallBloom x={250} y={210} s={0.85} />
        <SmallBloom x={86} y={162} s={0.65} color="#ee94b5" />
        <Daisy x={24} y={196} s={0.8} />
        <Hydrangea x={112} y={228} s={1.6} />
        <Hydrangea x={26} y={266} s={1.1} />
        <Cosmos x={206} y={244} s={1.2} />
        <Daisy x={258} y={250} s={0.9} />
        <Cosmos x={268} y={288} s={0.8} color="#f6c177" />
        <Daisy x={162} y={290} s={0.95} />
        <SparkleG x={300} y={196} s={0.9} />
        <SparkleG x={278} y={150} s={0.6} />
        <SparkleG x={126} y={128} s={0.7} />
      </g>
    </svg>
  );
}
