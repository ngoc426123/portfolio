import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import "./style.scss";

import myImage from '../../assets/my/my.jpg';
import myBook from '../../assets/my/my-book.jpg';
import myLaptop from '../../assets/my/my-laptop.jpg';
import myWrite from '../../assets/my/my-write.jpg';
import myPlan from '../../assets/my/my-plan.jpg';
import mythanks from '../../assets/my/my-thanks.jpg';
import gsapConfig from '../../config/gsap.json';

gsap.registerPlugin(useGSAP);

interface HeroBannerProps {
  position: String;
  ready: Boolean;
}

function HeroBanner(props: HeroBannerProps) {
  // REFS
  const _bannerRef = useRef<HTMLDivElement>(null);

  // CONTEXTS
  const { position, ready } = props;

  // SIDE EFFECTS
  useEffect(() => {
    if (!ready) {
      gsap.set(_bannerRef.current, { x: -300, opacity: 0 });
      return;
    }

    gsap.to(_bannerRef.current, { x: 0, opacity: 1, duration: gsapConfig.duration, ease: gsapConfig.ease });
  }, [ready]);

  // RENDER
  return (
    <div className='hero-banner' ref={_bannerRef}>
      <img className={position === 'welcome' ? "--active" : ""} src={myImage} alt='Hoàng Minh Ngọc' />
      <img className={position === 'info' ? "--active" : ""} src={myBook} alt='Hoàng Minh Ngọc' />
      <img className={position === 'skills' ? "--active" : ""} src={myLaptop} alt='Hoàng Minh Ngọc' />
      <img className={position === 'journey' ? "--active" : ""} src={myWrite} alt='Hoàng Minh Ngọc' />
      <img className={position === 'product' ? "--active" : ""} src={myPlan} alt='Hoàng Minh Ngọc' />
      <img className={position === 'thanks' ? "--active" : ""} src={mythanks} alt='Hoàng Minh Ngọc' />
    </div>
  )
}

export default HeroBanner;
