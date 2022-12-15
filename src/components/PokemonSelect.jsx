import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PokemonSelect = () => {
  const endpoint = "https://pokeapi.co/api/v2/pokemon";
  const navigate = useNavigate()
  const [results, setResults] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('')

  
  const irAPokemon = () => {
    if (selectedPokemon === '') {return}
    navigate(`/pokemones/${selectedPokemon}`)
  }
  useEffect(() => {
    fetch(endpoint)
      .then((resp) => resp.json())
      .then((data) => {
        setResults(data.results.map((results) => results.name));
      });
  }, []);

  return (
    <div className="form-container">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <h1>Selecciona un Pokemón</h1>
      <Form.Select onChange={(e) => setSelectedPokemon(e.target.value)}>
        <option value='' >Selecciona tu Pokemón</option>
        {results.map((name) => {
          return <option key={name} value={name}>{name}</option>;
        })}
      </Form.Select>
      
      </Form.Group>
      <Button variant="dark" onClick={irAPokemon}>Ver Detalle</Button>
      
    </Form>
     
    </div>
  );
};

export default PokemonSelect;
