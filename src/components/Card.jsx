import "./card.css"

const Card = ({src}) => {
  return (
    <div className="card" >
      <div className="">
        <img className="front" src={src} alt="card front" />
        <img className="back" src="/img/cover.png" alt="card back" />
      </div>
    </div>
  );
};

export default Card;
