import { useState, useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import 'lenis/dist/lenis.css'
import './App.scss'

// BLOCKS
import HeroLoading from './blocks/HeroLoading'
import HeroBanner from './blocks/HeroBanner'
import HeroWelcome from './blocks/HeroWelcome'
import HeroInfo from './blocks/HeroInfo'
import HeroSkills from './blocks/HeroSkills'
import HeroJourney from './blocks/HeroJourney'
import HeroProduct from './blocks/HeroProduct'
import HeroThanks from './blocks/HeroThanks'
import LenisControls from './LenisControls'

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
      const windowScrollTop = window.scrollY || 0;
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

    window.addEventListener('scroll', () => handleScroll(_contentRef));

    setTimeout(() => {setReady(true);}, 3000);
    return () => {
      window.removeEventListener('scroll', () => handleScroll(_contentRef));
    };
  }, [_lenisRef]);

  // RENDER
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.2,
        duration: 1.6,
        autoRaf: true,
      }}
      ref={_lenisRef}
    >
      <div className='app'>
        <div className='app__banner'>
          <HeroBanner position={position} ready={ready}/>
        </div>
        <div className='app__content'>
          <LenisControls ready={ready}/>
          <HeroWelcome ref={_welcomeRef} ready={ready}/>
          <HeroInfo ref={_infoRef} ready={ready}/>
          <HeroSkills ref={_skillsRef} ready={ready}/>
          <HeroJourney ref={_journeyRef} ready={ready}/>
          <HeroProduct ref={_productRef} ready={ready}/>
          <HeroThanks ref={_thanksRef} ready={ready}/>
        </div>
        <HeroLoading ready={ready}/>
      </div>
    </ReactLenis>
  )
}

export default App
