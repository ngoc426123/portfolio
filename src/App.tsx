import { useState, useEffect, useRef } from 'react'
import './App.scss'

// COMPONENTS
import HeroBanner from './components/HeroBanner'
import HeroWelcome from './components/HeroWelcome'
import HeroInfo from './components/HeroInfo'
import HeroSkills from './components/HeroSkills'

// CONTEXTS
import { AppContext } from './contexts/AppContent'

function App() {
  // REFS
  const _contentRef = useRef<HTMLDivElement>(null);

  // STATE
  const [position, setPosition] = useState(0);

  // SIDE EFFECTS
  useEffect(() => {
    const handleScroll = () => {
      setPosition(_contentRef.current?.scrollTop || 0);
    };

    _contentRef.current?.addEventListener('scroll', handleScroll);
    return () => {
      _contentRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // RENDER
  return (
    <AppContext.Provider value={{ position }}>
      <div className={`app ${position === 0 ? '--at-top' : ''}`}>
        <div className="app__banner">
          <HeroBanner />
        </div>
        <div className="app__content" ref={_contentRef}>
          <HeroWelcome />
          <HeroInfo />
          <HeroSkills />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
