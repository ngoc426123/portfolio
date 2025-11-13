import { useState, useEffect, useRef } from 'react'
import './App.scss'

// BLOCKS
import HeroBanner from './blocks/HeroBanner'
import HeroWelcome from './blocks/HeroWelcome'
import HeroInfo from './blocks/HeroInfo'
import HeroSkills from './blocks/HeroSkills'

// CONTEXTS
import { AppContext } from './contexts/AppContent'

// BACKGROUND
import bg from "./assets/bg.png";

function App() {
  // REFS
  const _contentRef = useRef<HTMLDivElement>(null);
  const _welcomeRef = useRef<HTMLDivElement>(null);
  const _infoRef = useRef<HTMLDivElement>(null);

  // STATE
  const [position, setPosition] = useState<String>('');

  // SIDE EFFECTS
  useEffect(() => {
    const handleScroll = () => {
      const windowScrollTop = _contentRef.current?.scrollTop || 0;
      const welcomeOffset = _welcomeRef.current?.offsetTop || 0;
      const infoOffset = _infoRef.current?.offsetTop || 0;

      if (welcomeOffset <= windowScrollTop + 100 && windowScrollTop + 100 < infoOffset) {
        setPosition('welcome');
        return;
      }

      if (infoOffset <= windowScrollTop + 100) {
        setPosition('info');
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
    <AppContext.Provider value={{ position }}>
      <div className='app' style={{ backgroundImage: `url(${bg})` }}>
        <div className="app__banner">
          <HeroBanner />
        </div>
        <div className="app__content" ref={_contentRef}>
          <HeroWelcome ref={_welcomeRef}/>
          <HeroInfo ref={_infoRef}/>
          <HeroSkills />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
