import { useId } from "react";

import './style.scss';

interface CardProps {
  img: string;
  status: string;
  title: string;
  desc: string;
  link: string;
  tag: string[];
}

function Card(props: CardProps) {
  // PROPS
  const {
    img,
    status,
    title,
    desc,
    link,
    tag,
  } = props;

  // STATE
  const id = useId();
  
  // RENDER
  return (
    <div className="card">
      <div className="card__img">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt={title} />
        </a>
      </div>
      <div className="card__content">
        <div className={`card__status --${status.toLowerCase()}`}>{status}</div>
        <div className="card__title">
          <a href={link} target="_blank" rel="noreferrer">{title}</a>
        </div>
        <div className="card__desc">{desc}</div>
        <div className="card__tag">
          {tag.map((item, index) => (
            <span key={`${id}-${index}`} className="card__tag-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
