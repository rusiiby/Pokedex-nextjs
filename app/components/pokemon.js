// pages/pokemon/[id].js
'use client';
import React, { useEffect, useState } from 'react';
import stylecard from "../css/card.css";
import Card from './Cards/Card';



const fetchPokemon = async (limit=2,offset) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    const pokemonData = await Promise.all(
        data.results.map(async (poke) => {
            const pokeRes = await fetch(poke.url);
            const pokeData = await pokeRes.json();
            return {
                name: pokeData.name,
                id: pokeData.id,
                types: pokeData.types.map((typeInfo) => typeInfo.type.name),
                image: pokeData.sprites.front_default,
            };
        })
  
    );
    return pokemonData;
}
    


const PokemonSeccion = () => {
    const [pokemon, setPokemon] = useState([]);//cambie a un array vacio
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);//cambie a un array vacio
    

    const limit =12;


    const loadPokemons = async () => {
        const pokemonList = await fetchPokemon(limit, offset); // Obtiene 5 Pokémon desde el inicio
        setPokemon((prevpokemons) => [...prevpokemons, ...pokemonList]);
    }


    useEffect(() => {
        loadPokemons();
        console.log(offset)
    }, [offset]);


    const loadMorePokemons= ()=> {
        setOffset((prevoffset) => prevoffset +limit)

        
    }

    

    return (
        <div className='container'>
            <div className='row'>
                {pokemon.map((pokemon) => (
                    <Card
                    key={pokemon.id}
                    pokeID={pokemon.id}
                    name={pokemon.name}
                    types={pokemon.types}
                    image={pokemon.image}
                />
                ))}
            </div>
            <div className='load-more'>
                <button className=' btn btn-primary'
                 onClick={loadMorePokemons}
                
                >Ver mas!</button>

            </div>
        </div>
    );

   
    
};


export default PokemonSeccion;
