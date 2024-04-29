import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./Pokedex.scss";

interface pokemonType {
    url: string,
    name: string,
}

interface pokemonStateType {
    url: string,
    id: string,
    name: string,
}

function Pokedex () {
    const [pokemon, setPokemon] = useState<pokemonStateType[]>([]);

    useEffect(() => {
        const cachedData = localStorage.getItem("pokemonData");
        if (cachedData) {
            setPokemon(JSON.parse(cachedData)); // Convertir en objet
        } else {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
                .then((response) => {
                    const pokemonData = response.data.results;
                    const formatedData = pokemonData.map((data: pokemonType) => {
                        const urlParts = data.url.split('/');
                        return {
                            ...data,
                            id: parseInt(urlParts[urlParts.length - 2])
                        };
                    })

                    setPokemon(formatedData);
                    localStorage.setItem("pokemonData", JSON.stringify(formatedData)); // Stocker les données
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    useEffect(() => {
        console.log(pokemon);
    }, [pokemon]);

    return(
        <section className="pokedex block-section">
            {pokemon.length > 0 &&
                <ul className="pokemon-list container">
                    {
                        pokemon.map((pokemon, index) => (
                            <li key={index}>
                                <PokemonCard id={pokemon.id} />
                            </li>
                        ))
                    }
                </ul>
            }
        </section>
    )
}

export default Pokedex