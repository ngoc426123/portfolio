import './style.scss';

interface ProgressBarProps {
  progress: number; // progress percentage from 0 to 100
  color?: string;
}

function ProgressBar(props: ProgressBarProps) {
  // PROPS
  const { progress, color = '#FFFFFF' } = props;

  // RENDER
  return (
    <div className="progress-bar">
      <div className="progress-bar__outer">
        <div className="progress-bar__inner" style={{ width: `${progress}%`, ...(color && { backgroundColor: color }) }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
