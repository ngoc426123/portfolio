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

function HeroSkills(props: HeroSkillsProps) {
  // RERFS
  const { ref } = props;

  // RENDER
  return (
    <div className="hero-skills" ref={ref}>
      <div className="hero-skills__title">My <span>Awesome </span>Skills</div>
      <div className="hero-skills__desc">Passionate about creating exceptional web experiences with modern technologies and clean, efficient code.</div>
      <div className="hero-skills__grid">
        <div className="hero-skills__item">
          <div className="hero-skills__meta">
            <img className="hero-skills__img" src={imgHTML} alt="HTML" />
            <span className='hero-skills__percent'>90%</span>
          </div>
          <ProgressBar progress={90} color='#f2662a'/>
        </div>
        <div className="hero-skills__item">
          <div className="hero-skills__meta">
            <img className="hero-skills__img" src={imgCSS} alt="CSS" />
            <span className='hero-skills__percent'>75%</span>
          </div>
          <ProgressBar progress={75} color='#2965f1'/>
        </div>
        <div className="hero-skills__item">
          <div className="hero-skills__meta">
            <img className="hero-skills__img" src={imgJS} alt="JavaScript" />
            <span className='hero-skills__percent'>80%</span>
          </div>
          <ProgressBar progress={80} color='#f0db4f'/>
        </div> 
        <div className="hero-skills__item">
          <div className="hero-skills__meta">
            <img className="hero-skills__img" src={imgReact} alt="React" />
            <span className='hero-skills__percent'>70%</span>
          </div>
          <ProgressBar progress={70} color='#61dafb'/>
        </div>
        <div className="hero-skills__item">
          <div className="hero-skills__meta">
            <img className="hero-skills__img" src={imgVue} alt="Vue" />
            <span className='hero-skills__percent'>70%</span>
          </div>
          <ProgressBar progress={70} color='#42b883'/>
        </div>
        <div className="hero-skills__item">
          <div className="hero-skills__meta">
            <img className="hero-skills__img" src={imgPHP} alt="PHP" />
            <span className='hero-skills__percent'>70%</span>
          </div>
          <ProgressBar progress={70} color='#777bb3'/>
        </div>
        <div className="hero-skills__item">
          <div className="hero-skills__meta">
            <img className="hero-skills__img" src={imgMySql} alt="MySQL" />
            <span className='hero-skills__percent'>70%</span>
          </div>
          <ProgressBar progress={70} color='#2f88c7'/>
        </div>
        <div className="hero-skills__item">
          <div className="hero-skills__meta">
            <img className="hero-skills__img" src={imgMongoDB} alt="MongoDB" />
            <span className='hero-skills__percent'>70%</span>
          </div>
          <ProgressBar progress={70} color='#777bb3'/>
        </div>
      </div>
    </div>
  );
}

export default HeroSkills;
