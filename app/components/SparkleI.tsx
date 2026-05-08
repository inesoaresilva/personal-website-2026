export default function SparkleI() {
  return (
    <span className="sparkleI">
      i
      {/* cover the native font dot so the sparkle replaces it */}
      <span className="dotCover" aria-hidden="true" />
      <svg
        className="sparkle"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 0 L6 3.2 L9.5 4 L6 4.8 L5 8 L4 4.8 L0.5 4 L4 3.2 Z"
          fill="#FBE290"
        />
      </svg>

      <style jsx>{`
        .sparkleI {
          position: relative;
          display: inline-block;
          line-height: 1;
        }

        .dotCover {
          position: absolute;
          top: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: #0d1b2a;
          z-index: 2;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          top: -6px;
          left: 50%;
          width: 12px;
          height: 12px;
          overflow: visible;
          pointer-events: none;
          transform: translateX(-50%);
          transform-origin: 50% 60%;
          z-index: 3;
          animation: sparklePulse 2.2s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(251, 226, 144, 0.5));
        }

        @keyframes sparklePulse {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.85;
            filter: drop-shadow(0 0 2px rgba(251, 226, 144, 0.2));
          }
          50% {
            transform: translateX(-50%) scale(1.14);
            opacity: 1;
            filter: drop-shadow(0 0 9px rgba(251, 226, 144, 0.6));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sparkle {
            animation: none;
          }
        }
      `}</style>
    </span>
  )
}
