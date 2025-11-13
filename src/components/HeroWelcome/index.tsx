import './style.scss';

function HeroWelcome() {
  // RENDER
  return (
    <div className="hero-welcome">
      <h3 className="hero-welcome__wel-text">Welcome!</h3>
      <h2 className="hero-welcome__title">I am Frontend Developer</h2>
      <div className="hero-welcome__desc">
        <p>
          Frontend developers bridge design and functionality, creating intuitive user experiences 
          that directly impact business success. They transform ideas into interactive interfaces, 
          ensuring accessibility, performance, and seamless user interactions across all devices. 
          Their work is crucial in today's digital-first world.
        </p>
      </div>
      <div className="hero-welcome__metadata">
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
  )
}

export default HeroWelcome;
