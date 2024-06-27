import React, { useState, useEffect } from 'react'
import { PokemonCard } from './PokemonCard';
import styled, { ThemeProvider } from 'styled-components'



export function Home() {


    const Box = styled.div `
    max-width: 60%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-gap: 1rem;
    justify-content: center;
    `

    const [pokemons, setPokemons] = useState([]);
    const [loadPokemon, setLoadPokemon] = useState(
            "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    const fetchGen1Pokemons = async () => {
        const res = await fetch(loadPokemon);
        const data = await res.json();
        setLoadPokemon(data.next);
 
        function getIndividualPokemon(result) {
            result.forEach(async (pokemon) => {
                const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                );
                const data = await res.json();
                setPokemons(
                    (list) =>
                        [...list, data]);
            });
        }
        getIndividualPokemon(data.results);
    };
    useEffect(() => {
        fetchGen1Pokemons();
    }, []);

    function sortyById(property) {
        return function(a, b) {
            return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        }
     }

     pokemons.sort(sortyById('name')).sort(sortyById('id'));

  return (
    <>
    <h1>Pokedex</h1>
    </>
  )
};