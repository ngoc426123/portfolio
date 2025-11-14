import { useState, useEffect, useRef } from 'react'
import './App.scss'

// BLOCKS
import HeroBanner from './blocks/HeroBanner'
import HeroWelcome from './blocks/HeroWelcome'
import HeroInfo from './blocks/HeroInfo'
import HeroSkills from './blocks/HeroSkills'
import HeroJourney from './blocks/HeroJourney'
import HeroProduct from './blocks/HeroProduct'
import HeroThanks from './blocks/HeroThanks'

// BACKGROUND
import bg from "./assets/bg.png";

function App() {
  // REFS
  const _contentRef = useRef<HTMLDivElement>(null);
  const _welcomeRef = useRef<HTMLDivElement>(null);
  const _infoRef = useRef<HTMLDivElement>(null);
  const _skillsRef = useRef<HTMLDivElement>(null);
  const _journeyRef = useRef<HTMLDivElement>(null);
  const _productRef = useRef<HTMLDivElement>(null);
  const _thanksRef = useRef<HTMLDivElement>(null);

  // STATE
  const [position, setPosition] = useState<String>('welcome');

  // SIDE EFFECTS
  useEffect(() => {
    const handleScroll = () => {
      const windownHeight = window.innerHeight;
      const ratioMinus = windownHeight / 3;
      const windowScrollTop = _contentRef.current?.scrollTop || 0;
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

    _contentRef.current?.addEventListener('scroll', handleScroll);
    return () => {
      _contentRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // RENDER
  return (
    <div className='app' style={{ backgroundImage: `url(${bg})` }}>
      <div className="app__banner">
        <HeroBanner position={position}/>
      </div>
      <div className="app__content" ref={_contentRef}>
        <HeroWelcome ref={_welcomeRef}/>
        <HeroInfo ref={_infoRef}/>
        <HeroSkills ref={_skillsRef}/>
        <HeroJourney ref={_journeyRef}/>
        <HeroProduct ref={_productRef}/>
        <HeroThanks ref={_thanksRef}/>
      </div>
    </div>
  )
}

export default App
