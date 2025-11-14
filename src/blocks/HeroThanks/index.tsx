import './style.scss';

interface HeroThanksProps {
  ref: React.Ref<HTMLDivElement>;
}

function HeroThanks(props: HeroThanksProps) {
  // PROPS
  const { ref } = props;

  // RENDER
  return (
    <div className="hero-thanks" ref={ref}>
      
    </div>
  )
}

export default HeroThanks;
