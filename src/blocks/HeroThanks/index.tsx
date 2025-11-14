import { forwardRef } from 'react';
import './style.scss';

const HeroThanks = forwardRef<HTMLDivElement>((__, ref) => {
  // RENDER
  return (
    <div className="hero-thanks" ref={ref}>
      <div className="hero-thanks__box">
        <div className="hero-thanks__text-thanks">Thank You</div>
        <div className="hero-thanks__text-desc">
          Thank you for taking the time to review my portfolio. I hope you've found valuable insights into my skills and development journey. I'm excited about potential collaboration opportunities and look forward to contributing to meaningful projects together.
        </div>
        <div className="hero-thanks__metadata">
          <a href='tel:+373996947'>
            <span className="material-symbols-outlined">phone_enabled</span>
          </a>
          <a href={`mailto:minhngoc.ith@gmail.com`}>
            <span className="material-symbols-outlined">mail</span>
          </a>
          <a href="https://github.com/minhngoc" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined">storage</span>
          </a>
        </div>
      </div>
    </div>
  )
});

HeroThanks.displayName = 'HeroThanks';

export default HeroThanks;
