import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Card = styled.div `
margin-left: 30px;
margin-right: 30px;
padding-top: 5px;
font-family: 'Myfont';
text-align: center;
text-transform: capitalize;
border-radius: 30px;
max-width: ${props => props.small ? '70%' : props.large ? '100%': '0%'};
background-color: ${props => props.theme.colors[props.type]};
&:hover {
    transform: ${props => props.isClickable ? 'scale(0.9)' : 'none'};
  }
`

const Img = styled.img `
max-height: 80px;
max-width: auto;
`

const Linked = styled(Link)`
text-decoration: none;
color: black;
`

const Stats = styled.div`

`

export function PokemonCard(props) {
    return (
<Card type={props.bg} isClickable={props.isClickable} small={props.small} large={props.large}>
<Linked to={props.to}>
<Img src={props.img}/>
<p>{props.name}</p>
</Linked>
{props.showStats && (
<p>Stats here</p>
)}
</Card>
    )
}