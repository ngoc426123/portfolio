import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProgressBar from '../../components/ProgressBar';
import './style.scss';

import imgHTML from '../../assets/skills/html.png';
import imgCSS from '../../assets/skills/css.png';
import imgJS from '../../assets/skills/js.png';
import imgReact from '../../assets/skills/react.png';
import imgVue from '../../assets/skills/vue.png';
import imgPHP from '../../assets/skills/php.png';
import imgMySql from '../../assets/skills/mysql.png';
import imgMongoDB from '../../assets/skills/mongodb.png';
import imgPhotoshop from '../../assets/skills/photoshop.png';
import imgIllustrator from '../../assets/skills/illustrator.png';
import imgFigma from '../../assets/skills/figma.png';

gsap.registerPlugin(useGSAP);

interface HeroSkillsProps {
  ready: Boolean;
}

const HeroSkills = React.forwardRef<HTMLDivElement, HeroSkillsProps>((props, ref) => {
  // REFS
  const _titleRef = useRef<HTMLDivElement>(null);
  const _descRef = useRef<HTMLDivElement>(null);
  const _developTitleRef = useRef<HTMLDivElement>(null);
  const _applicationTitleRef = useRef<HTMLDivElement>(null);
  const _skillRefs = useRef<Array<HTMLDivElement | null>>([]);

  // PROPS
  const { ready } = props;

  // METHODS
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const endAnimPoint = windowHeight;
    const duration = 2;

    if (
      _titleRef.current &&
      _titleRef.current?.getBoundingClientRect().top > 0 &&
      _titleRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _titleRef.current,
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
      _developTitleRef.current &&
      _developTitleRef.current?.getBoundingClientRect().top > 0 &&
      _developTitleRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _developTitleRef.current,
        { y: 0, opacity: 1, duration, ease: 'power3.out' }
      );
    }

    if (
      _applicationTitleRef.current &&
      _applicationTitleRef.current?.getBoundingClientRect().top > 0 &&
      _applicationTitleRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _applicationTitleRef.current,
        { y: 0, opacity: 1, duration, ease: 'power3.out' }
      );
    }

    _skillRefs.current.forEach(skillRef => {
      if (
        skillRef &&
        skillRef.getBoundingClientRect().top > 0 &&
        skillRef.getBoundingClientRect().top < endAnimPoint
      ) {
        gsap.to(
          skillRef,
          { y: 0, opacity: 1, duration, ease: 'power3.out' }
        );
      }
    });
  };

  // SIDE EFFECTS
  useEffect(() => {
    gsap.set(_titleRef.current, { y: 50, opacity: 0 });
    gsap.set(_descRef.current, { y: 50, opacity: 0 });
    gsap.set(_developTitleRef.current, { y: 50, opacity: 0 });
    gsap.set(_applicationTitleRef.current, { y: 50, opacity: 0 });
    _skillRefs.current.forEach(skillRef => {
      gsap.set(skillRef, { y: 50, opacity: 0 });
    });
  }, []);

  useEffect(() => {
    if (!ready) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, [ready]);

  // RENDER
  return (
    <div className="hero-skills" ref={ref}>
      <div className="hero-skills__title" ref={_titleRef}>My <span>Awesome </span>Skills</div>
      <div className="hero-skills__desc" ref={_descRef}>Passionate about creating exceptional web experiences with modern technologies and clean, efficient code.</div>
      <div className="hero-skills__content">
        <div className="hero-skills__title-skill" ref={_developTitleRef}>Develop skills</div>
        <div className="hero-skills__grid">
          <div className="hero-skills__item --span-2-col" ref={el => { _skillRefs.current[0] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgHTML} alt="HTML" />
              <span className='hero-skills__percent'>90%</span>
            </div>
            <ProgressBar ready={ready} progress={90} color='#f2662a'/>
          </div>
          <div className="hero-skills__item --span-2-col" ref={el => { _skillRefs.current[1] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgCSS} alt="CSS" />
              <span className='hero-skills__percent'>75%</span>
            </div>
            <ProgressBar ready={ready} progress={75} color='#2965f1'/>
          </div>
          <div className="hero-skills__item --span-2-col" ref={el => { _skillRefs.current[2] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgJS} alt="JavaScript" />
              <span className='hero-skills__percent'>80%</span>
            </div>
            <ProgressBar ready={ready} progress={80} color='#f0db4f'/>
          </div> 
          <div className="hero-skills__item --span-3-col" ref={el => { _skillRefs.current[3] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgReact} alt="React" />
              <span className='hero-skills__percent'>70%</span>
            </div>
            <ProgressBar ready={ready} progress={70} color='#61dafb'/>
          </div>
          <div className="hero-skills__item --span-3-col" ref={el => { _skillRefs.current[4] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgVue} alt="Vue" />
              <span className='hero-skills__percent'>70%</span>
            </div>
            <ProgressBar ready={ready} progress={70} color='#42b883'/>
          </div>
          <div className="hero-skills__item --span-6-col" ref={el => { _skillRefs.current[5] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgPHP} alt="PHP" />
              <span className='hero-skills__percent'>70%</span>
            </div>
            <ProgressBar ready={ready} progress={70} color='#777bb3'/>
          </div>
          <div className="hero-skills__item --span-3-col" ref={el => { _skillRefs.current[6] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgMySql} alt="MySQL" />
              <span className='hero-skills__percent'>70%</span>
            </div>
            <ProgressBar ready={ready} progress={70} color='#2f88c7'/>
          </div>
          <div className="hero-skills__item --span-3-col" ref={el => { _skillRefs.current[7] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgMongoDB} alt="MongoDB" />
              <span className='hero-skills__percent'>70%</span>
            </div>
            <ProgressBar ready={ready} progress={70} color='#28a13d'/>
          </div>
        </div>
        <div className="hero-skills__title-skill" ref={_applicationTitleRef}>Application skills</div>
        <div className="hero-skills__grid">
            <div className="hero-skills__item --span-2-col" ref={el => { _skillRefs.current[8] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgPhotoshop} alt="Photoshop" />
              <span className='hero-skills__percent'>40%</span>
            </div>
            <ProgressBar ready={ready} progress={40} color='#31a8ff'/>
            </div>
          <div className="hero-skills__item --span-2-col" ref={el => { _skillRefs.current[9] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgIllustrator} alt="Illustrator" />
              <span className='hero-skills__percent'>25%</span>
            </div>
            <ProgressBar ready={ready} progress={25} color='#ff7f50'/>
          </div>
          <div className="hero-skills__item --span-2-col" ref={el => { _skillRefs.current[10] = el; }}>
            <div className="hero-skills__meta">
              <img className="hero-skills__img" src={imgFigma} alt="Figma" />
              <span className='hero-skills__percent'>55%</span>
            </div>
            <ProgressBar ready={ready} progress={55} color='#a259ff'/>
          </div> 
        </div>
      </div>
    </div>
  );
});

HeroSkills.displayName = 'HeroSkills';

export default HeroSkills;
