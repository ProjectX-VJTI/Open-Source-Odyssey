const CircularProgress = ({ value,sym }) => {
    console.log(value);
    return (
      <div className="circular-container">
        <svg className="circular-progress" viewBox="0 0 36 36">
        <path
          className="circle-bg"
          d="M18 2.0845
            a 5 5 0 1 1 0 31.831 
            a 5 5 0 1 1 0 -31.831" 
        />
        <path
          className="circle"
          d="M18 2.0845
            a 5 5 0 1 1 0 31.831 
            a 5 5 0 1 1 0 -31.831"
          strokeDasharray={`${((60 - Math.min(value, 60)) / 60) * 100}, 100`}
          strokeDashoffset="0" 
          transform={`rotate(${90} 18 18)`} 
        />
          <text
            x="18" 
            y="18"
            className="circle-text"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="6"
            fill="#fff"
            transform={`rotate(${90} 18 18)`}
          >
            {value}{sym}
          </text>
        </svg>
      </div>
    );
  };
  
  export default CircularProgress;
  
  

const styles = `
.circular-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  width: 150px;
  height: 150px;
  background: transparent;
}

.circular-progress {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.circle-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 2;
}

.circle {
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
}
`;

// Injecting styles into the document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
