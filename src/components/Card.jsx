import "./card.css";

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = (card) => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
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
