import { forwardRef, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './style.scss';
import gsapConfig from '../../config/gsap.json';

// IMAGES
import imgSutrix from '../../assets/company/logo-sutrix.jpg';
import imgTrust from '../../assets/company/logo-trustvn.jpg';
import imgChoixanh from '../../assets/company/logo-choixanh.jpg';

gsap.registerPlugin(useGSAP);

interface HeroJourneyProps {
  ready: Boolean;
}

const HeroJourney = forwardRef<HTMLDivElement, HeroJourneyProps>((props, ref) => {
  // REFS
  const _titleRef = useRef<HTMLDivElement>(null);
  const _descRef = useRef<HTMLDivElement>(null);
  const _timelineRef = useRef<HTMLDivElement>(null);

  // PROPS
  const { ready } = props;

  // METHODS
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const endAnimPoint = windowHeight;

    if (
      _titleRef.current &&
      _titleRef.current?.getBoundingClientRect().top > 0 &&
      _titleRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _titleRef.current,
        { y: 0, opacity: 1, duration: gsapConfig.duration, ease: gsapConfig.ease }
      );
    }

    if (
      _descRef.current &&
      _descRef.current?.getBoundingClientRect().top > 0 &&
      _descRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _descRef.current,
        { y: 0, opacity: 1, duration: gsapConfig.duration, ease: gsapConfig.ease }
      );
    }

    if (
      _timelineRef.current &&
      _timelineRef.current?.getBoundingClientRect().top > 0 &&
      _timelineRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      const yAxis = _timelineRef.current.querySelector('.hero-journey__y-axis') as HTMLDivElement;
      const items = _timelineRef.current.querySelectorAll('.hero-journey__item');

      gsap.to(
        yAxis,
        { height: '100%', duration: gsapConfig.duration, ease: gsapConfig.ease }
      );

      items.forEach((item) => {
        const $year = item.querySelector('.hero-journey__item-date') as HTMLDivElement;
        const $name = item.querySelector('.hero-journey__item-name') as HTMLDivElement;
        const $content = item.querySelector('.hero-journey__item-content') as HTMLDivElement;
        const $img = item.querySelector('.hero-journey__item-img img') as HTMLImageElement;
        const $imgLine = item.querySelector('.hero-journey__item-img span') as HTMLSpanElement;
        
        gsap.to(
          $imgLine,
          { width: '4.8rem', duration: gsapConfig.duration, ease: gsapConfig.ease, delay: 0.5 }
        );
        gsap.to(
          $img,
          { y: 0, opacity: 1, duration: gsapConfig.duration, ease: gsapConfig.ease, delay: gsapConfig.duration }
        );
        gsap.to(
          $year,
          { x: 0, opacity: 1, duration: gsapConfig.duration, ease: gsapConfig.ease, delay: gsapConfig.duration + 0.7 }
        );
        gsap.to(
          $name,
          { x: 0, opacity: 1, duration: gsapConfig.duration, ease: gsapConfig.ease, delay: gsapConfig.duration + 0.9 }
        );
        gsap.to(
          $content,
          { x: 0, opacity: 1, duration: gsapConfig.duration, ease: gsapConfig.ease, delay: gsapConfig.duration + 1.1 }
        );
      });
    }
  };

  // SIDE EFFECTS
  useEffect(() => {
    const yAxis = _timelineRef.current?.querySelector('.hero-journey__y-axis') as HTMLDivElement;
    const items = _timelineRef.current?.querySelectorAll('.hero-journey__item');

    gsap.set(_titleRef.current, { y: 50, opacity: 0 });
    gsap.set(_descRef.current, { y: 50, opacity: 0 });
    gsap.set(yAxis, { height: 0 });

    items?.forEach((item) => {
      const isLeft = item.classList.contains('--left');
      const $img = item.querySelector('.hero-journey__item-img img') as HTMLImageElement;
      const $imgLine = item.querySelector('.hero-journey__item-img span') as HTMLSpanElement;
      const $year = item.querySelector('.hero-journey__item-date') as HTMLDivElement;
      const $name = item.querySelector('.hero-journey__item-name') as HTMLDivElement;
      const $content = item.querySelector('.hero-journey__item-content') as HTMLDivElement;

      gsap.set($imgLine, { width: 0 });
      gsap.set($img, { y: 50, opacity: 0 });
      gsap.set($year, { x: isLeft ? -50 : 50, opacity: 0 });
      gsap.set($name, { x: isLeft ? -50 : 50, opacity: 0 });
      gsap.set($content, { x: isLeft ? -50 : 50, opacity: 0 }); 
    });
  }, []);

  useEffect(() => {
    if (!ready) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, [ready]);

  // RENDER
  return (
    <div className="hero-journey" ref={ref}>
      <div className="hero-journey__title" ref={_titleRef}>The <span>Professional</span> Journey</div>
      <div className="hero-journey__desc" ref={_descRef}>A timeline of growth, challenges, and achievements throughout my career in software development.</div>
      <div className="hero-journey__timeline" ref={_timelineRef}>
        <span className="hero-journey__y-axis"></span>
        <div className="hero-journey__item --left">
          <div className="hero-journey__item-img">
            <img src={imgSutrix} alt='Sutrix Solution' />
            <span></span>
          </div>
          <div className="hero-journey__item-contain">
            <div className="hero-journey__item-date">2020</div>
            <div className="hero-journey__item-name">Sutrix Solution</div>
            <div className="hero-journey__item-content">
              <ul>
                <li>Select members for the project and make sure work with together is under control and as smooth as possible.</li>
                <li>Lead FE team (3 to 6 person), handle task, ensure deadline and effective of each task.</li>
                <li>Offer a solutions to resolve problems in during development.</li>
                <li>Working direct and continuous support for back-end domestic and foreign employees.</li>
                <li>Regularly attend training classes for front-end developers: Flutter, React JS, Vue JS, Advanced HTML</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-journey__item --right">
          <div className="hero-journey__item-img">
            <img src={imgTrust} alt='TRUST.VN' />
            <span></span>
          </div>
          <div className="hero-journey__item-contain">
            <div className="hero-journey__item-date">2016</div>
            <div className="hero-journey__item-name">TRUST.VN</div>
            <div className="hero-journey__item-content">
              <ul>
                <li>Responsible for the entire project.</li>
                <li>Using HTML/CSS/JS to build more than 300 project.</li>
                <li>Working direct with Project Manager to discuss and offer solutions for each by each project.</li>
                <li>Working with Design Team lead to com up a solution about UI/UX.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-journey__item --left">
          <div className="hero-journey__item-img">
            <img src={imgChoixanh} alt='Choi Xanh' />
            <span></span>
          </div>
          <div className="hero-journey__item-contain">
            <div className="hero-journey__item-date">2016</div>
            <div className="hero-journey__item-name">Choi Xanh</div>
            <div className="hero-journey__item-content">
              <ul>
                <li>Using CSS to adaptive each request of project.</li>
                <li>Update HTML structure for each project.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

HeroJourney.displayName = 'HeroJourney';

export default HeroJourney;
