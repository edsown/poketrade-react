import React, { useState } from "react";

function TradeArea({ teamA, teamB, handleClearPokemon }) {
  const [toggleModal, setToggleModal] = useState(false);
  const [fairTrade, setFairTrade] = useState(undefined); // undefined para começar em estado neutro
  const [history, setHistory] = useState([]);

  function handleModal() {
    setToggleModal(!toggleModal);
  }

  function handleClear() {
    setHistory([]);
    handleClearPokemon(); // Passada como prop
    setFairTrade(undefined);
  }

  function handleTrade() {
    let scoreA = 0;
    let scoreB = 0;
    teamA.map(
      (currentValue) => (scoreA = scoreA + currentValue.base_experience)
    );
    teamB.map(
      (currentValue) => (scoreB = scoreB + currentValue.base_experience)
    );
    console.log(scoreA, scoreB);
    if (Math.abs(scoreA - scoreB) < 50) {
      setFairTrade(true);

      const tradeTime = new Date().toLocaleTimeString("pt-BR");
      setHistory([
        ...history, // histórico que já existe, com spread operator, adicionado de um objeto com novos valores. Simples e fácil
        {
          fair: true,
          diff: Math.abs(scoreA - scoreB),
          tradeTime,
        },
      ]);
    } else if (Math.abs(scoreA - scoreB) >= 50) {
      const tradeTime = new Date().toLocaleTimeString("pt-BR");
      setHistory([
        ...history,
        {
          fair: false,
          diff: Math.abs(scoreA - scoreB),
          tradeTime,
        },
      ]);

      setFairTrade(false);
    }

    console.log(fairTrade);
  }

  return toggleModal ? (
    <div className="modalContainer">
      <div className="tradeModal">
        <div className="teamContainer">
          <h2 className="teamTitle"> Team A:</h2>
          {teamA.length !== 0 ? (
            <div className="teamA">
              {teamA.map((pokemon) => {
                return (
                  <div>
                    <div className="selectedPokemon">
                      <img
                        className="selectedPokemonImage"
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                      ></img>
                      <div className="selectedPokemonDesc">
                        <strong>{pokemon.name}</strong>
                        <p>Base experience: {pokemon.base_experience}</p>
                      </div>
                    </div>
                    <hr className="dashed" />
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Add up to 6 pokemon to start</p>
          )}
          <h2 className="teamTitle"> Team B:</h2>
          {teamA.length !== 0 ? (
            <div className="teamB">
              {teamB.map((pokemon) => {
                return (
                  <div>
                    <div className="selectedPokemon">
                      <img
                        className="selectedPokemonImage"
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                      ></img>
                      <div className="selectedPokemonDesc">
                        <strong>{pokemon.name}</strong>
                        <p>Base experience: {pokemon.base_experience}</p>
                      </div>
                    </div>
                    <hr className="dotted" />
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Add up to 6 pokemon to start</p>
          )}
          <div className="tradeArea">
            {fairTrade === undefined ? (
              ""
            ) : fairTrade ? (
              <p className="fairTrade">Fair trade</p>
            ) : (
              <p className="unfairTrade">Unfair trade</p>
            )}
            <div className="btnContainer">
              <button className="tradeBtn" onClick={() => handleTrade()}>
                Trade
              </button>
              <button className="resetBtn" onClick={() => handleClear()}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="historyContainer">
          <h4>History</h4>
          {history.map((item) => {
            return (
              <div>
                <p>{item.tradeTime}</p>
                <p>{item.fair === true ? "Fair trade" : "Unfair trade"}</p>
                <p>{item.diff} point difference</p>

                <hr className="dotted" />
              </div>
            );
          })}
        </div>

        <button className="closeBtn" onClick={() => handleModal()}>
          Close
        </button>
      </div>
    </div>
  ) : (
    <button className="deckBtn" onClick={handleModal}>
      Open Trade
    </button>
  );
}

export default TradeArea;
