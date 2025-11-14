import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import './style.scss';

interface ProgressBarProps {
  progress: number; // progress percentage from 0 to 100
  color?: string;
  ready: Boolean;
}

function ProgressBar(props: ProgressBarProps) {
  // REFS
  const _innerRef = useRef<HTMLDivElement>(null);

  // PROPS
  const { progress, color = '#FFFFFF', ready } = props;

  // METHODS
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const endAnimPoint = windowHeight;
    const duration = 2;

    if (
      _innerRef.current &&
      _innerRef.current?.getBoundingClientRect().top > 0 &&
      _innerRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _innerRef.current,
        { width: `${progress}%`, duration, ease: 'power3.out' }
      );
    }
  };
  
  // SIDE EFFECTS
  useEffect(() => {
    if (!ready) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, [ready]);

  // RENDER
  return (
    <div className="progress-bar">
      <div className="progress-bar__outer">
        <div
          ref={_innerRef}
          className="progress-bar__inner"
          style={{ ...(color && { backgroundColor: color }) }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
