import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/PokeProvider";

const SearchPokemon = () => {
  const { poke } = useContext(MyContext);
  const [name, setName] = useState([]);

  const navigate = useNavigate();
  const handle = (event) => {
    const creature = event.target.value;
    if (creature && creature !== "") {
      setName(creature);
    }
  };

  const goPokemon = (name) => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div className="container-search">
      <div className="selector">
        <h1>Selecciona un Pokemón</h1>
        <div>
          <img
            className="arrow"
            src="https://pa1.narvii.com/6236/2bdd64b26257227ae306fd2194c58a3fb1143e2c_hq.gif"
          />
        </div>
        <select
          className="bar"
          onChange={(event) => goPokemon(event.target.value)}
        >
          <option value="">Elije un Pokemón</option>
          {poke.results.map((animal) => (
            <option key={animal.name} value={animal.name}>
              {animal.name}
            </option>
          ))}
        </select>
      </div>
      <img src="https://media.tenor.com/NuuCP-y__SoAAAAC/pikachu-pokemon.gif" />
    </div>
  );
};

export default SearchPokemon;
