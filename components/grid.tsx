import React, {useState, useEffect} from 'react';
import Pokemon from '@/interfaces/pokemon';

export default function Grid(props: {pokemons: Pokemon[]}): JSX.Element {
    return(<>
        <div className="grid grid-cols-6 gap-4">
            {props.pokemons.map((pokemon: Pokemon) => <div className='basis-1/4'>{pokemon.NAME}</div>)}
        </div>
    </>)
    

}