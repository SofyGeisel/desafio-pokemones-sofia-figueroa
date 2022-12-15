import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';



export default function Navbarpokemon () {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "noactive");
    return (
        <>
        <Nav className="pokeheader justify-content-end p-4" >
            <NavLink className={ setActiveClass } to="/">
                Home
            </NavLink>
            <NavLink className={ setActiveClass } to="/pokemones">
                Pokemones
            </NavLink>
            </Nav>
        </>
    );
}