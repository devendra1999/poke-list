import React from 'react'

export default function PokeList(props) {

const { pokemon } = props;
 
  return (
    <div>
        {pokemon.map(p => (
            <div key={p.name}>  
                {p.name}
            </div>
        ))}
    </div>
  )
}  
