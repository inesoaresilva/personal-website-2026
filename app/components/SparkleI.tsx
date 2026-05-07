export default function SparkleI() {
  return (
    <span style={{ position: 'relative', display: 'inline-block', lineHeight: 1 }}>
      i
      {/* cover the native font dot */}
      <span style={{
        position: 'absolute',
        width: '5px',
        height: '5px',
        background: '#0D1B2A',
        borderRadius: '50%',
        top: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
      }} />
      {/* sparkle */}
      <svg
        style={{ position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', overflow: 'visible', pointerEvents: 'none' }}
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M5 0 L6 3.2 L9.5 4 L6 4.8 L5 8 L4 4.8 L0.5 4 L4 3.2 Z" fill="#FBE290"/>
      </svg>
    </span>
  )
}
