import pikachu from "../assets/img/pikachu.png"

export default function Home () {
    

    return (
        <div className="containerhome">
            <div className="flex-containerhome">
            <h1>Bienvenido maestro Pokemón</h1>
            <img src= {pikachu} alt="pikachuimg"/>
            </div>

        </div>
    )
}