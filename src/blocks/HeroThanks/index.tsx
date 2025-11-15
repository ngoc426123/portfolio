import { forwardRef, useRef, useEffect } from 'react';
import './style.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface HeroThanksProps {
  ready: Boolean;
}

const HeroThanks = forwardRef<HTMLDivElement, HeroThanksProps>((props, ref) => {
  // REFS
  const _thanksRef = useRef<HTMLDivElement>(null);
  const _descRef = useRef<HTMLDivElement>(null);
  const _metaDataRef = useRef<HTMLDivElement>(null);

  // PROPS
  const { ready } = props;

  // METHODS
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const endAnimPoint = windowHeight;
    const duration = 2;

    if (
      _thanksRef.current &&
      _thanksRef.current?.getBoundingClientRect().top > 0 &&
      _thanksRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _thanksRef.current,
        { y: 0, opacity: 1, duration, ease: 'power3.out' }
      );
    }

    if (
      _descRef.current &&
      _descRef.current?.getBoundingClientRect().top > 0 &&
      _descRef.current?.getBoundingClientRect().top < endAnimPoint) 
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
        _metaDataRef.current?.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>,
        { y: 0, opacity: 1, duration, ease: 'power3.out', stagger: 0.2 }
      );
    }
  };

  // SIDE EFFECTS
  useEffect(() => {
    gsap.set(_thanksRef.current, { y: 50, opacity: 0 });
    gsap.set(_descRef.current, { y: 50, opacity: 0 });
    gsap.set(_metaDataRef.current?.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>, { y: 100, opacity: 0 });
  }, []);

  useEffect(() => {
    if (!ready) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, [ready]);

  // RENDER
  return (
    <div className="hero-thanks" ref={ref}>
      <div className="hero-thanks__box">
        <div className="hero-thanks__text-thanks" ref={_thanksRef}>Thank You</div>
        <div className="hero-thanks__text-desc" ref={_descRef}>
          Thank you for taking the time to review my portfolio. I hope you've found valuable insights into my skills and development journey. I'm excited about potential collaboration opportunities and look forward to contributing to meaningful projects together.
        </div>
        <div className="hero-thanks__metadata" ref={_metaDataRef}>
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
