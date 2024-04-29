import "./PokemonCard.scss";

interface PokemonCardProps {
    id: string;
}

function PokemonCard ({id} : PokemonCardProps) {
    return(
        <div className="pokemon-card">
            <div className="pokeboule">
            </div>
            <div className="pokemon-card__head">
                <div className="pokemon-card__gif">
                    <img src={`./src/assets/sprites/pokemon/other/showdown/${id}.gif`} />
                </div>
                <img className="pokemon-card__illustration" src={`./src/assets/sprites/pokemon/other/official-artwork/${id}.png`} />
                <h3 className="pokemon-card__name"> Pokemon name </h3>
            </div>
        </div>
    )
}

export default PokemonCard