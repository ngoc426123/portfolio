import ProgressBar from '../../components/ProgressBar';
import './style.scss';

import imgHTML from '../../assets/html.png';
import imgCSS from '../../assets/css.png';
import imgJS from '../../assets/js.png';
import imgReact from '../../assets/react.png';
import imgVue from '../../assets/vue.png';
import imgPHP from '../../assets/php.png';
import imgMySql from '../../assets/mysql.png';
import imgMongoDB from '../../assets/mongodb.png';

interface HeroSkillsProps {
  ref: React.Ref<HTMLDivElement>
}

function HeroHistory(props: HeroSkillsProps) {
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
