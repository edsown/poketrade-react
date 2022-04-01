import PokemonList from "./Components/PokemonList";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1> Poke trader</h1>
        <h2>Add up to 6 pokemon to each team to start trading</h2>
      </div>
      <PokemonList />
    </div>
  );
}

export default App;
