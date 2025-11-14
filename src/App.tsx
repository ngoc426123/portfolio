import { useState, useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import 'lenis/dist/lenis.css'
import './App.scss'

// BLOCKS
import HeroBanner from './blocks/HeroBanner'
import HeroWelcome from './blocks/HeroWelcome'
import HeroInfo from './blocks/HeroInfo'
import HeroSkills from './blocks/HeroSkills'
import HeroJourney from './blocks/HeroJourney'
import HeroProduct from './blocks/HeroProduct'
import HeroThanks from './blocks/HeroThanks'
import LenisControls from './LenisControls'

// BACKGROUND
import bg from "./assets/bg.png";

function App() {
  // REFS
  const _lenisRef = useRef<LenisRef>(null);
  const _welcomeRef = useRef<HTMLDivElement>(null);
  const _infoRef = useRef<HTMLDivElement>(null);
  const _skillsRef = useRef<HTMLDivElement>(null);
  const _journeyRef = useRef<HTMLDivElement>(null);
  const _productRef = useRef<HTMLDivElement>(null);
  const _thanksRef = useRef<HTMLDivElement>(null);

  // STATE
  const [position, setPosition] = useState<String>('welcome');
  const [ready, setReady] = useState<Boolean>(false);

  // METHODS
  const handleScroll = (_contentRef: HTMLDivElement) => {
    const windownHeight = window.innerHeight;
      const ratioMinus = windownHeight / 3;
      const windowScrollTop = _contentRef.scrollTop || 0;
      const welcomeOffset = _welcomeRef.current?.offsetTop || 0;
      const infoOffset = _infoRef.current?.offsetTop || 0;
      const skillsOffset = _skillsRef.current?.offsetTop || 0;
      const journeyOffset = _journeyRef.current?.offsetTop || 0;
      const productOffset = _productRef.current?.offsetTop || 0;
      const thanksOffset = _thanksRef.current?.offsetTop || 0;

      if (welcomeOffset <= windowScrollTop + 100 && windowScrollTop + 100 < infoOffset - ratioMinus) {
        setPosition('welcome');
        return;
      }

      if (infoOffset - ratioMinus <= windowScrollTop + 100 && windowScrollTop + 100 < skillsOffset - ratioMinus) {
        setPosition('info');
        return;
      }

      if (skillsOffset - ratioMinus <= windowScrollTop + 100 && windowScrollTop + 100 < journeyOffset - ratioMinus) {
        setPosition('skills');
        return;
      }

      if (journeyOffset - ratioMinus <= windowScrollTop + 100 && windowScrollTop + 100 < productOffset - ratioMinus) {
        setPosition('journey');
        return;
      }

      if (productOffset - ratioMinus <= windowScrollTop + 100 && windowScrollTop + 100 < thanksOffset - ratioMinus) {
        setPosition('product');
        return;
      }

      if (thanksOffset - ratioMinus <= windowScrollTop + 100) {
        setPosition('thanks');
        return;
      }
  };

  // SIDE EFFECTS
  useEffect(() => {
    const _contentRef = _lenisRef?.current?.wrapper || document.createElement('div') as HTMLDivElement;

    _contentRef?.addEventListener('scroll', () => handleScroll(_contentRef));

    setTimeout(() => {
      document.querySelector('.loading')?.classList.add('--hide');
      setReady(true);
    }, 3000);
    return () => {
      _contentRef?.removeEventListener('scroll', () => handleScroll(_contentRef));
    };
  }, [_lenisRef]);

  // RENDER
  return (
    <div className='app' style={{ backgroundImage: `url(${bg})` }}>
      <div className='app__banner'>
        <HeroBanner position={position} ready={ready}/>
      </div>
      <ReactLenis
        className={`app__content ${!ready ? '--freeze': ''}`}
        options={{
          lerp: 0.2,
          duration: 1.6,
          autoRaf: true,
        }}
        ref={_lenisRef}
      >
        <LenisControls ready={ready}/>
        <HeroWelcome ready={ready} ref={_welcomeRef}/>
        <HeroInfo ref={_infoRef}/>
        <HeroSkills ref={_skillsRef}/>
        <HeroJourney ref={_journeyRef}/>
        <HeroProduct ref={_productRef}/>
        <HeroThanks ref={_thanksRef}/>
      </ReactLenis>
    </div>
  )
}

export default App
