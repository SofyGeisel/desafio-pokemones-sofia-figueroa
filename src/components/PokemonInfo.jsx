import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';


const PokemonInfo = () => {

const endpoint = "https://pokeapi.co/api/v2/pokemon";
const {id}= useParams() 
const [pokemon, setPokemon] = useState({})
const [imgUrl, setImgUrl] = useState ("")
const [attack, setAttack] = useState ("")
const [defense, setDefense] = useState ("")


useEffect(() => {
    fetch( `${endpoint}/${id}`).then(resp => resp.json()) 
    .then(data => {
        setPokemon(data)
        setImgUrl(data.sprites.other.dream_world.front_default)
        setAttack(data.stats[1].base_stat)
        setDefense(data.stats[2].base_stat)
    })
}, [id])



return (

<div className="card-container" >
    <Card style={{ width: "18rem" }}>
       <Card.Img variant="top" src= {imgUrl} />
        <Card.Body>
          <Card.Title>Nombre: {pokemon.name}</Card.Title>
          <Card.Text>Peso: {pokemon.weight}</Card.Text>
          <Card.Text>Ataque: {attack} </Card.Text>
          <Card.Text>Defensa: {defense}</Card.Text>
        </Card.Body>
      </Card>
      </div>   
)
}

export default PokemonInfo;