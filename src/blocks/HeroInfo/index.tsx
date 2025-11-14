import { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './style.scss';

gsap.registerPlugin(useGSAP);

interface HeroInfoProps {
  ready: Boolean;
}

const HeroInfo = forwardRef<HTMLDivElement, HeroInfoProps>((props, ref) => {
  // REFS
  const _nameRef = useRef<HTMLDivElement>(null);
  const _descRef = useRef<HTMLDivElement>(null);
  const _metaDataRef = useRef<HTMLDivElement>(null);

  // PROPS
  const { ready } = props;

  // METHODS
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const endAnimPoint = windowHeight - windowHeight / 4;
    const duration = 2;

    if (
      _nameRef.current &&
      _nameRef.current?.getBoundingClientRect().top > 0 &&
      _nameRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _nameRef.current,
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
      _metaDataRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _metaDataRef.current,
        { y: 0, opacity: 1, duration, ease: 'power3.out' }
      );
    }
  };

  // SIDE EFFECTS
  useEffect(() => {
    gsap.set(_nameRef.current, { y: 50, opacity: 0 });
    gsap.set(_descRef.current, { y: 50, opacity: 0 });
    gsap.set(_metaDataRef.current, { y: 50, opacity: 0 });
  }, []);

  useEffect(() => {
    if (!ready) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, [ready]);


  // RENDER
  return (
    <div className="hero-info" ref={ref}>
      <h1 className="hero-info__name" ref={_nameRef}>Hello, I'm <span>Hoàng Minh Ngọc</span></h1>
      <div className="hero-info__desc" ref={_descRef}>
        <p>
          I'm a Frontend Developer with a strong foundation in building responsive and user-friendly web applications. 
          With expertise in modern JavaScript frameworks and a solid understanding of backend technologies, 
          I bring a full-stack perspective to my work. My experience includes working with PHP on the backend 
          and managing data with MySQL and MongoDB databases. This diverse skill set allows me to create 
          seamless integrations between frontend interfaces and backend systems, ensuring efficient and scalable solutions. 
          I'm passionate about crafting clean code and delivering exceptional user experiences.
        </p>
      </div>
      <div className="hero-info__metadata" ref={_metaDataRef}>
        <dl>
          <dt>Name</dt>
          <dd>Hoàng Minh Ngọc</dd>
          <dt>Age</dt>
          <dd>30</dd>
          <dt>Address</dt>
          <dd>19/6/28D Hoang Xuan Nhi Street, Tan Phu district, Ho Chi Minh City</dd>
          <dt>Phone Number</dt>
          <dd>+8437.399.6947</dd>
        </dl>
      </div>
    </div>
  )
});

HeroInfo.displayName = 'HeroInfo';

export default HeroInfo;
