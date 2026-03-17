interface SparkLogoProps {
  onClick?: () => void;
}

export default function SparkLogo({ onClick }: SparkLogoProps) {
  return (
    <div className="spark-logo" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}>

      {/* Icon mark */}
      <svg
        className="spark-icon"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#42d4ff" />
            <stop offset="55%" stopColor="#5f6fff" />
            <stop offset="100%" stopColor="#8f59ff" />
          </linearGradient>
          <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#c8e8ff" stopOpacity="0.85" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Hexagon background */}
        <path
          d="M17 2L30 9.5V24.5L17 32L4 24.5V9.5L17 2Z"
          fill="url(#iconGrad)"
          opacity="0.15"
        />
        <path
          d="M17 2L30 9.5V24.5L17 32L4 24.5V9.5L17 2Z"
          stroke="url(#iconGrad)"
          strokeWidth="1.4"
          fill="none"
        />

        {/* Spark / lightning bolt */}
        <path
          d="M19.5 8L13 18.5H17.5L14.5 26L22 15H17.5L19.5 8Z"
          fill="url(#boltGrad)"
          filter="url(#glow)"
        />

        {/* Corner accent dots */}
        <circle cx="17" cy="2" r="1.2" fill="#42d4ff" opacity="0.8" />
        <circle cx="4" cy="9.5" r="1" fill="#5f6fff" opacity="0.6" />
        <circle cx="30" cy="9.5" r="1" fill="#5f6fff" opacity="0.6" />
      </svg>

      {/* Wordmark */}
      <div className="spark-wordmark">
        <span className="spark-wordmark-main">
          <span className="spark-word-spark">Spark</span>
          <span className="spark-word-labs"> Labs</span>
        </span>
        <span className="spark-wordmark-sub">&amp; Technologies</span>
      </div>
    </div>
  );
}
