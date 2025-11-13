import './style.scss';

interface HeroInfoProps {
  ref: React.Ref<HTMLDivElement>;
}

function HeroInfo(props: HeroInfoProps) {
  // PROPS
  const { ref } = props;

  // RENDER
  return (
    <div className="hero-info" ref={ref}>
      <h1 className="hero-info__name">Hello, I'm <span>Hoàng Minh Ngọc</span></h1>
      <div className="hero-info__desc">
        <p>
          I'm a Frontend Developer with a strong foundation in building responsive and user-friendly web applications. 
          With expertise in modern JavaScript frameworks and a solid understanding of backend technologies, 
          I bring a full-stack perspective to my work. My experience includes working with PHP on the backend 
          and managing data with MySQL and MongoDB databases. This diverse skill set allows me to create 
          seamless integrations between frontend interfaces and backend systems, ensuring efficient and scalable solutions. 
          I'm passionate about crafting clean code and delivering exceptional user experiences.
        </p>
      </div>
      <div className="hero-info__metadata">
        <dl>
          <dt>Name</dt>
          <dd>Hoàng Minh Ngọc</dd>
          <dt>Age</dt>
          <dd>30</dd>
          <dt>Address</dt>
          <dd>19/6/28D Hoang Xuan Nhi Street, Tan Phu district, Ho Chi Minh City</dd>
          <dt>Phone Number</dt>
          <dd>+8437.399.6947</dd>
        </dl>
      </div>
    </div>
  )
}

export default HeroInfo;
