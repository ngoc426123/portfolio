import './style.scss';

interface HeroHistoryProps {
  ref: React.Ref<HTMLDivElement>
}

function HeroHistory(props: HeroHistoryProps) {
  // RERFS
  const { ref } = props;

  // RENDER
  return (
    <div className="hero-history" ref={ref}>
      <div className="hero-history__title">The <span>Professional</span> Journey</div>
      <div className="hero-history__desc">A timeline of growth, challenges, and achievements throughout my career in software development.</div>
    </div>
  );
}

export default HeroHistory;
