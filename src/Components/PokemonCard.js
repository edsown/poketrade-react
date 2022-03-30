import React from "react";

const PokemonCard = ({ xp, name, image, index, type, setTeam }) => {
  const style = `cardContainer ${type}`;

  return (
    <div className={style}>
      <div className="cardInfo">
        <p>{index}</p>
        <h4>{name}</h4>
      </div>

      <p>
        Experiência base: <strong>{xp}</strong>
      </p>
      <img className="cardImage" src={image} alt={name}></img>
      <div className="chooseButton">
        <button onClick={setTeam}>A</button>
        <button onClick={setTeam}>B</button>
      </div>
    </div>
  );
};

export default PokemonCard;
