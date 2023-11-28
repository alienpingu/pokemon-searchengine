import React from 'react';
import Link from 'next/link';
import Pokemon from '@/interfaces/pokemon';
import {useSelector,useDispatch} from 'react-redux'
import {loadPokemon} from '@/slices/actualSlice';
import LazyImage from './lazyImage';
export default function Grid(): JSX.Element {
    const dispatch = useDispatch()
    const actual = useSelector((state: any) => state.actual)
    
    return(<>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full">
            {actual.grid.map((pokemon: Pokemon, index:number) => <div key={index} className='basis-1/4 flex justify-center' >
            <Link 
                onClick={() => dispatch(loadPokemon(pokemon))}
                href={"/id/"+pokemon["SERIAL"]} 
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex md:flex-col items-center justify-center" 
                style={{
                    "backgroundColor": pokemon['COLOR'].toLowerCase(), 
                    "color": (pokemon['COLOR'].toLowerCase() === 'yellow' || pokemon['COLOR'].toLowerCase() === 'white') ? 
                        'black' 
                        : 
                        'white'}}>
               {/* <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon['NUMBER']}.png`} 
                    alt={`${pokemon['NAME']} front view`} 
                    width={100}
                    height={100}
                /> */}
                <LazyImage 
                    imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon['NUMBER']}.png`}
                    width={100}
                    height={100}
                    />
                <span>{pokemon["NAME"]}</span>
            </Link>
            </div>)}
        </div>
    </>)
}