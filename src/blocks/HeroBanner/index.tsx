import "./style.scss";

import myImage from '../../assets/my.jpg';
import myBook from '../../assets/my-book.jpg';
import myLaptop from '../../assets/my-laptop.jpg';
import myWrite from '../../assets/my-write.jpg';

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
      <img className={position === 'history' ? "--active" : ""} src={myWrite} alt='Hoàng Minh Ngọc' />
    </div>
  )
}

export default HeroBanner;
