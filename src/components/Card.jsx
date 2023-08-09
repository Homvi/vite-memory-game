import "./card.css";

const Card = ({ card, handleChoice }) => {
    
  const handleClick = (card) => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className="">
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          onClick={() => handleClick(card)}
          src="/img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default Card;
