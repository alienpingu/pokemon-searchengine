import React from 'react';
import Link from 'next/link';
import Pokemon from '@/interfaces/pokemon';

export default function Grid(props: {pokemons: Pokemon[]}): JSX.Element {
    return(<>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full">
            {props.pokemons.map((pokemon: Pokemon, index) => <div key={index} className='basis-1/4 flex justify-center'>
            <Link href={"/id/"+pokemon["SERIAL"]} className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {pokemon["NAME"]}
            </Link>
            </div>)}
        </div>
    </>)
}