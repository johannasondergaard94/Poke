import React, { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard'
import styled from 'styled-components'

const Box = styled.div`
justify-content: center;
margin-top: 50px;
margin-left: 100px;
margin-right: 100px;
`

export function Pokemon() {

    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true);

    const currentPokemon = window.location.pathname.replace('/', '')

    const fetchPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);
        const data = await res.json();
        setPokemon(data);
        setLoading(false);

    }

    useEffect(() => {
        fetchPokemon();
      }, [])

    if (loading) {
        return <div>Loading...</div>
    }
 return (
    <Box>
    <PokemonCard
    name={pokemon.name}
    img={pokemon.sprites?.other?.dream_world?.front_default}
    bg={pokemon.types[0]?.type?.name}
    isClickable={false}
    showStats
    large
    />
    </Box>
 )
}