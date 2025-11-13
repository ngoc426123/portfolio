import "./style.scss";

import myImage from '../../assets/my.jpg';
import myLaptop from '../../assets/my-laptop.jpg';
import myWrite from '../../assets/my-write.jpg';

// CONTEXTS
import { useContext, useMemo } from "react";
import { AppContext } from "../../contexts/AppContent";

function HeroBanner() {
  // CONTEXTS
  const { position } = useContext(AppContext);

  // RENDER
  return (
    <div className="hero-banner">
      <img className={position === 'welcome' ? "--active" : ""} src={myImage} alt='Hoàng Minh Ngọc' />
      <img className={position === 'info' ? "--active" : ""} src={myWrite} alt='Hoàng Minh Ngọc' />
      <img className={''} src={myLaptop} alt='Hoàng Minh Ngọc' />
    </div>
  )
}

export default HeroBanner;
