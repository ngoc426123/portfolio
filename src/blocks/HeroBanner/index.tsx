import "./style.scss";

import myImage from '../../assets/my/my.jpg';
import myBook from '../../assets/my/my-book.jpg';
import myLaptop from '../../assets/my/my-laptop.jpg';
import myWrite from '../../assets/my/my-write.jpg';
import myPlan from '../../assets/my/my-plan.jpg';

interface HeroBannerProps {
  position: String;
}

function HeroBanner(props: HeroBannerProps) {
  // CONTEXTS
  const { position } = props;

  // RENDER
  return (
    <div className="hero-banner">
      <img className={position === 'welcome' ? "--active" : ""} src={myImage} alt='Hoàng Minh Ngọc' />
      <img className={position === 'info' ? "--active" : ""} src={myBook} alt='Hoàng Minh Ngọc' />
      <img className={position === 'skills' ? "--active" : ""} src={myLaptop} alt='Hoàng Minh Ngọc' />
      <img className={position === 'journey' ? "--active" : ""} src={myWrite} alt='Hoàng Minh Ngọc' />
      <img className={position === 'product' ? "--active" : ""} src={myPlan} alt='Hoàng Minh Ngọc' />
    </div>
  )
}

export default HeroBanner;
