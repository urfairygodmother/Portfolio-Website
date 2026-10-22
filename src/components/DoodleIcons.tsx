import React from 'react';

interface DoodleProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
}

/** Cute hand-drawn seedling sprout */
export const SproutDoodle: React.FC<DoodleProps> = ({
  className = '',
  color = '#2f4a2a',
  width = 28,
  height = 28,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M16 28V15C16 9.5 11 6.5 5 7.5C5 14 8.5 19 16 19.5"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#bfdcb5"
    />
    <path
      d="M16 15C16.5 9 22 5.5 28 6.5C27.5 13 23.5 17.5 16 17.5"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#9bc08f"
    />
    <path
      d="M16 19.5V29"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

/** Single botanical leaf doodle */
export const LeafDoodle: React.FC<DoodleProps> = ({
  className = '',
  color = '#2f4a2a',
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M5 23C7 16 12 7 24 5C22 17 15 22 5 23Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#bfdcb5"
    />
    <path
      d="M7 21C11 16 15 12 21 8"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

/** Squiggly wobbly underline for titles */
export const SquigglyUnderline: React.FC<{
  className?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
}> = ({
  className = '',
  color = '#9bc08f',
  width = '100%',
  height = 12,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 160 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 8.5C18 3.5 31 11.5 45 7.5C59 3.5 72 11.5 86 7.5C100 3.5 114 11.5 128 7.5C140 4 150 9.5 157 7.5"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
    />
  </svg>
);

/** Sketched rough circle highlight */
export const HandDrawnCircle: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = '#f6c9a6' }) => (
  <svg
    viewBox="0 0 120 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 24C10 11 35 5 62 6C92 7 114 14 112 28C110 39 80 44 48 43C22 42 6 36 8 22"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

/** Hand-drawn playful arrow */
export const HandDrawnArrow: React.FC<DoodleProps> = ({
  className = '',
  color = '#2f4a2a',
  width = 44,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 54 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4 14C16 10 34 8 46 13"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M36 6C39 9 44 12 47 13C44 16 38 21 35 23"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Little sketched twinkling stars */
export const TwinkleStar: React.FC<DoodleProps> = ({
  className = '',
  color = '#f4e3a1',
  width = 20,
  height = 20,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2C12.5 7 15 9.5 20 10C15 10.5 12.5 13 12 18C11.5 13 9 10.5 4 10C9 9.5 11.5 7 12 2Z"
      fill={color}
      stroke="#2f4a2a"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

/** Wobbly organic section divider */
export const WobblyDivider: React.FC<{
  className?: string;
  fill?: string;
  strokeColor?: string;
  inverted?: boolean;
}> = ({
  className = '',
  fill = '#e9f3e6',
  strokeColor = '#9bc08f',
  inverted = false,
}) => (
  <div
    className={`w-full overflow-hidden leading-none ${className}`}
    style={{ transform: inverted ? 'rotate(180deg)' : 'none' }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: '36px' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,22 Q150,4 320,24 T640,18 T960,26 T1200,12 L1200,48 L0,48 Z"
        fill={fill}
      />
      <path
        d="M0,22 Q150,4 320,24 T640,18 T960,26 T1200,12"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

/** Hand-drawn Washi / Masking Tape sticker */
export const WashiTape: React.FC<{
  className?: string;
  color?: string;
  rotation?: number;
}> = ({
  className = '',
  color = 'rgba(246, 201, 166, 0.75)',
  rotation = -2,
}) => (
  <div
    className={`inline-block ${className}`}
    style={{
      transform: `rotate(${rotation}deg)`,
      backgroundColor: color,
      width: '74px',
      height: '18px',
      clipPath: 'polygon(0% 15%, 4% 0%, 96% 0%, 100% 20%, 98% 85%, 94% 100%, 5% 100%, 0% 75%)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
      pointerEvents: 'none',
    }}
    aria-hidden="true"
  />
);

/** GitHub Icon */
export const GithubIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 20,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

/** LinkedIn Icon */
export const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 20,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);
