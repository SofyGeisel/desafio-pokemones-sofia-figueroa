import "./assets/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./views/Home";
import PokemonSelect from "./components/PokemonSelect";
import PokemonInfo from "./components/PokemonInfo";
import Navbarpokemon from "./components/Navbarpokemon";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarpokemon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/" element={<PokemonSelect />} />
          <Route path="/pokemones/:id" element={<PokemonInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
