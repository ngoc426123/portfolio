import { forwardRef, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'swiper/swiper.css';
import './style.scss';
import gsapConfig from '../../config/gsap.json';

// COMPONENTS
import Card from '../../components/Card';

// IMAGES
import pageBarnetProduct from '../../assets/pages/barnet-product.jpg';
import pageDashboardHATC from '../../assets/pages/dashboard-hop-am-thanh-ca.jpg';
import pageDTP from '../../assets/pages/dtp.jpg';
import pageGiveCardSaving from '../../assets/pages/give-card-saving.jpg';
import pageHonda from '../../assets/pages/honda-landing-page.jpg';
import pageHATC from '../../assets/pages/hop-am-thanh-ca.jpg';
import pageIGoUSA from '../../assets/pages/i-go-usa.jpg';
import pageIPro from '../../assets/pages/i-pro.jpg';
import pageMPFA from '../../assets/pages/mpfa.jpg';
import pageTimeInAir from '../../assets/pages/time-in-air.jpg';
import pageVisaNow from '../../assets/pages/visa-now.jpg';

gsap.registerPlugin(useGSAP);

interface HeroProductProps {
  ready: Boolean;
}

const HeroProduct = forwardRef<HTMLDivElement, HeroProductProps>((props, ref) => {
  // PROPS
  const { ready } = props;

  // REFS
  const _titleRef = useRef<HTMLDivElement>(null);
  const _descRef = useRef<HTMLDivElement>(null);
  const _subTitleRef = useRef<HTMLDivElement>(null);
  const _listingRef = useRef<HTMLDivElement>(null);

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
      _subTitleRef.current &&
      _subTitleRef.current?.getBoundingClientRect().top > 0 &&
      _subTitleRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      gsap.to(
        _subTitleRef.current,
        { y: 0, opacity: 1, duration: gsapConfig.duration, ease: gsapConfig.ease }
      );
    }

    if (
      _listingRef.current &&
      _listingRef.current?.getBoundingClientRect().top > 0 &&
      _listingRef.current?.getBoundingClientRect().top < endAnimPoint) 
    {
      const cards = _listingRef.current.querySelectorAll('.card');
      cards.forEach((card) => {
        gsap.to(
          card,
          { y: 0, opacity: 1, duration: gsapConfig.duration, ease: gsapConfig.ease, stagger: 1 }
        );
      });
    }
  };

  // SIDE EFFECTS
  useEffect(() => {
    gsap.set(_titleRef.current, { y: 50, opacity: 0 });
    gsap.set(_descRef.current, { y: 50, opacity: 0 });
    gsap.set(_subTitleRef.current, { y: 50, opacity: 0 });
    gsap.set(_listingRef.current?.querySelectorAll('.card') as NodeListOf<HTMLDivElement>, { y: 50, opacity: 0 });
  }, []);

  useEffect(() => {
    if (!ready) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, [ready]);

  // RENDER
  return (
    <div className="hero-product" ref={ref}>
      <div className="hero-product__title" ref={_titleRef}><span>Products</span> I've Built</div>
      <div className="hero-product__desc" ref={_descRef}>A showcase of web applications I've developed, from enterprise solutions to e-commerce platforms, demonstrating my expertise in modern web technologies.</div>
      <div className="hero-product__sub-title" ref={_subTitleRef}>Some products I've worked on...</div>
      <div className="hero-product__listing" ref={_listingRef}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3.4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Card
              img={pageBarnetProduct}
              status="live"
              title="Barnet Product"
              desc="An e-commerce platform for Barnet Product, featuring a user-friendly interface and seamless shopping experience."
              link="https://barnetproduct.com"
              tag={['HTML', 'CSS', 'JS', 'Vue.js']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageDTP}
              status="live"
              title="DTP"
              desc="A Booking platform for DTP, allowing users to easily schedule and manage their appointments online."
              link="https://dtpbooks.com/"
              tag={['HTML', 'CSS', 'JS']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageGiveCardSaving}
              status="demo"
              title="Give Card Saving"
              desc="A platform for Give Card Saving, providing users with easy access to discount cards and special offers."
              link="https://ryucms.com/"
              tag={['HTML', 'CSS', 'JS']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageHonda}
              status="live"
              title="Honda Landing Page"
              desc="A promotional landing page for Honda, showcasing their latest models and special offers."
              link="https://www.honda.com.vn/xe-may/xe-dien"
              tag={['HTML', 'CSS', 'JS', 'AEM']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageHATC}
              status="live"
              title="Hop Am Thanh Ca"
              desc="The music website have music sheet file and chords, help user easy to find and view."
              link="https://hopamthanhca.com/"
              tag={['HTML', 'JS', 'CSS']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageDashboardHATC}
              status="live"
              title="Dashboard Hop Am Thanh Ca"
              desc="A platform for Dashboard HATC to manage audio content and user interactions effectively."
              link="https://admin.hopamthanhca.com/"
              tag={['ReactJS', 'Codeigniter', 'Material UI']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageIGoUSA}
              status="live"
              title="I Go USA"
              desc="A comprehensive visa service platform that guides applicants through the U.S. visa process, offering expert consultation and application support."
              link="https://igousa.us/"
              tag={['HTML', 'CSS', 'JS']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageIPro}
              status="live"
              title="I Pro Corporation"
              desc="A corporate website for I Pro Corporation, highlighting their services and solutions in the tech industry."
              link="https://corp.i-pro.com/"
              tag={['React.JS', 'TypeScript', 'Sitecore']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageMPFA}
              status="live"
              title="MPFA"
              desc="An informative platform for the Mandatory Provident Fund Schemes Authority (MPFA), providing resources and tools for financial planning."
              link="https://www.mpfa.org.hk"
              tag={['HTML', 'CSS', 'JS']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageTimeInAir}
              status="live"
              title="Time In Air"
              desc="A travel blog sharing experiences, tips, and guides for exploring destinations around the world."
              link="https://timeinair.com/"
              tag={['HTML', 'CSS', 'JS']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={pageVisaNow}
              status="demo"
              title="Visa Now"
              desc="A platform providing comprehensive visa application services and support for travelers."
              link="https://visanow.ryucms.com/"
              tag={['HTML', 'CSS', 'JS']}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
});

HeroProduct.displayName = 'HeroProduct';

export default HeroProduct;
