import { forwardRef } from 'react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import './style.scss';

gsap.registerPlugin(useGSAP);

interface HeroWelcomeProps {
  ready: Boolean;
}

const HeroWelcome = forwardRef<HTMLDivElement, HeroWelcomeProps>((props, ref) => {
  // REFS
  const _welcomeRef = useRef<HTMLDivElement>(null);
  const _titleRef = useRef<HTMLDivElement>(null);
  const _descRef = useRef<HTMLDivElement>(null);
  const _metaDataRef = useRef<HTMLDivElement>(null);

  // PROPS
  const { ready } = props;

  // METHODS
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const duration = 2;

    if (
      _welcomeRef.current &&
      _welcomeRef.current?.getBoundingClientRect().top > 0 &&
      _welcomeRef.current?.getBoundingClientRect().top < windowHeight) 
    {
      gsap.to(
        _welcomeRef.current,
        { y: 0, opacity: 1, duration, ease: 'power3.out' }
      );
    }

    if (
      _titleRef.current &&
      _titleRef.current?.getBoundingClientRect().top > 0 &&
      _titleRef.current?.getBoundingClientRect().top < windowHeight) 
    {
      gsap.to(
        _titleRef.current,
        { y: 0, opacity: 1, duration, ease: 'power3.out' }
      );
    }

    if (
      _descRef.current &&
      _descRef.current?.getBoundingClientRect().top > 0 &&
      _descRef.current?.getBoundingClientRect().top < windowHeight) 
    {
      gsap.to(
        _descRef.current,
        { y: 0, opacity: 1, duration, ease: 'power3.out' }
      );
    }

    if (
      _metaDataRef.current &&
      _metaDataRef.current?.getBoundingClientRect().top > 0 &&
      _metaDataRef.current?.getBoundingClientRect().top < windowHeight) 
    {
      gsap.to(
        _metaDataRef.current,
        { y: 0, opacity: 1, duration, ease: 'power3.out' }
      );
    }
  };

  // SIDE EFFECTS
  useEffect(() => {
    gsap.set(_welcomeRef.current, { y: 100, opacity: 0 });
    gsap.set(_titleRef.current, { y: 100, opacity: 0 });
    gsap.set(_descRef.current, { y: 100, opacity: 0 });
    gsap.set(_metaDataRef.current, { y: 100, opacity: 0 });
  }, []);

  useEffect(() => {
    if (!ready) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, [ready]);

  // RENDER
  return (
    <div className="hero-welcome" ref={ref}>
      <h3 className="hero-welcome__wel-text" ref={_welcomeRef}>Welcome!</h3>
      <h2 className="hero-welcome__title" ref={_titleRef}>I am Frontend Developer</h2>
      <div className="hero-welcome__desc" ref={_descRef}>
        <p>
          Frontend developers bridge design and functionality, creating intuitive user experiences 
          that directly impact business success. They transform ideas into interactive interfaces, 
          ensuring accessibility, performance, and seamless user interactions across all devices. 
          Their work is crucial in today's digital-first world.
        </p>
      </div>
      <div className="hero-welcome__metadata" ref={_metaDataRef}>
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
});

HeroWelcome.displayName = 'HeroWelcome';

export default HeroWelcome;
