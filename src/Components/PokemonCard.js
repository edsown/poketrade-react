import React, { useState, useEffect } from "react";
import axios from "axios";
const PokemonCard = ({
  xp,
  name,
  image,
  index,
  type,
  url,
  onClickA,
  onClickB,
}) => {
  const style = `cardContainer ${type}`;

  const [currentPokemon, setCurrentPokemon] = useState();

  useEffect(() => {
    axios.get(`${url}`).then((res) => setCurrentPokemon(res.data));
  }, [url]); // Poderia puxar só o nome e a base_exp, mas vou puxar tudo pra quando houver mais funcionalidade

  return (
    <div className={style}>
      <div className="cardInfo">
        <p>{index}</p>
        <h4>{name}</h4>
      </div>

      <p>
        Base experience: <strong>{xp}</strong>
      </p>
      <img className="cardImage" src={image} alt={name}></img>
      <div className="chooseButton">
        <button className="teamBtnA" onClick={() => onClickA(currentPokemon)}>
          A
        </button>
        <button className="teamBtnB" onClick={() => onClickB(currentPokemon)}>
          B
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
