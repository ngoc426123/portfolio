import './style.scss';

// IMAGES
import imgSutrix from '../../assets/logo-sutrix.jpg';
import imgTrust from '../../assets/logo-trustvn.jpg';
import imgChoixanh from '../../assets/logo-choixanh.jpg';

interface HeroJourneyProps {
  ref: React.Ref<HTMLDivElement>
}

function HeroJourney(props: HeroJourneyProps) {
  // RERFS
  const { ref } = props;

  // RENDER
  return (
    <div className="hero-journey" ref={ref}>
      <div className="hero-journey__title">The <span>Professional</span> Journey</div>
      <div className="hero-journey__desc">A timeline of growth, challenges, and achievements throughout my career in software development.</div>
      <div className="hero-journey__timeline">
        <span className="hero-journey__y-axis"></span>
        <div className="hero-journey__item --left">
          <div className="hero-journey__item-img">
            <img src={imgSutrix} alt='Sutrix Solution' />
          </div>
          <div className="hero-journey__item-contain">
            <div className="hero-journey__item-date">2020</div>
            <div className="hero-journey__item-name">Sutrix Solution</div>
            <div className="hero-journey__item-content">
              <ul>
                <li>Select members for the project and make sure work with together is under control and as smooth as possible.</li>
                <li>Lead FE team (3 to 6 person), handle task, ensure deadline and effective of each task.</li>
                <li>Offer a solutions to resolve problems in during development.</li>
                <li>Working direct and continuous support for back-end domestic and foreign employees.</li>
                <li>Regularly attend training classes for front-end developers: Flutter, React JS, Vue JS, Advanced HTML</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-journey__item --right">
          <div className="hero-journey__item-img">
            <img src={imgTrust} alt='TRUST.VN' />
          </div>
          <div className="hero-journey__item-contain">
            <div className="hero-journey__item-date">2016</div>
            <div className="hero-journey__item-name">TRUST.VN</div>
            <div className="hero-journey__item-content">
              <ul>
                <li>Responsible for the entire project.</li>
                <li>Using HTML/CSS/JS to build more than 300 project.</li>
                <li>Working direct with Project Manager to discuss and offer solutions for each by each project.</li>
                <li>Working with Design Team lead to com up a solution about UI/UX.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-journey__item --left">
          <div className="hero-journey__item-img">
            <img src={imgChoixanh} alt='Choi Xanh' />
          </div>
          <div className="hero-journey__item-contain">
            <div className="hero-journey__item-date">2016</div>
            <div className="hero-journey__item-name">Choi Xanh</div>
            <div className="hero-journey__item-content">
              <ul>
                <li>Using CSS to adaptive each request of project.</li>
                <li>Update HTML structure for each project.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroJourney;
