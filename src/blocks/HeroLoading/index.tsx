import "./style.scss";

import loadingImg from '../../assets/loading.svg';

interface HeroLoadingProps {
  ready: Boolean;
}

function HeroLoading(props: HeroLoadingProps) {
  // PROPS
  const { ready } = props;

  // RENDER
  return (
    <div className={`hero-loading ${ready ? '--hidden' : ''}`}>
      <div className="hero-loading__image-placeholder">
        <img src={loadingImg} alt=""></img>
      </div>
      <div className="hero-loading__text-placeholder" />
    </div>
  );
}

export default HeroLoading;
