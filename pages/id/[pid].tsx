import React, { useState, useEffect } from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import Pokemon from '@/interfaces/pokemon';
import Spinner from '@/components/spinner';
import stringToColour from '@/utils/stringToColor';
const inter = Inter({ subsets: ['latin'] })

export default function PokemonInfo() {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const router = useRouter();
    const id = router.query.pid;
    useEffect(() => {
          if(!id) {
            return;
          }
          axios
            .get(`/api/id/${router.query.pid}`)
            .then((response) => setPokemon(response.data))
            .catch((error) => console.log(error));
        }, [id]);

    return(<>
            {(pokemon) ? ( <main className='flex flex-col justify-center items-center bg-slate-800 text-neutral-50 min-h-screen  p-4 md:p-24 '>
                <div className='md:w-max p-5 md:border-2  border-slate-50 rounded-md'>
                    <div className='grid grid-cols-2 gap-4 mb-2'>
                            <span>N°: {pokemon['NUMBER']}</span>
                            <span>CODE: {pokemon['CODE']}</span>
                            <span>SERIAL: {pokemon['SERIAL']}</span>
                            <span>GENERATION: {pokemon['GENERATION']}</span>
                        </div>
                        
                        <h1 className={`text-4xl mb-5 text-center`}>{pokemon['NAME']}</h1>
                        <p className='text-center text-red-600'>{(pokemon['LEGENDARY'] !== '0') ? 'Legendary' : null} {(pokemon['MEGA_EVOLUTION'] !== '0') ? 'MEGA' : null}</p>
                        <p className='text-center'>{pokemon['TYPE1']} {(pokemon['TYPE2']) ? " - "+pokemon['TYPE2'] : null}</p>
                        <p className='text-center'>{pokemon['ABILITY1']} {(pokemon['ABILITY2']) ? " - "+pokemon['ABILITY2'] : null}{(pokemon['ABILITY HIDDEN']) ? '['+pokemon['ABILITY HIDDEN']+']' : null }</p>
                       
                        <div className='grid grid-cols-2 gap-4 mb-2'>
                            <p>HEIGHT: {pokemon['HEIGHT']}</p>
                            <p>WEIGHT: {pokemon['WEIGHT']}</p>
                            <p>HP: {pokemon['HP']}</p>
                            <p>SPD: {pokemon['SPD']}</p>
                            <p>ATK: {pokemon['ATK']}</p>
                            <p>SP_ATK: {pokemon['SP_ATK']}</p>
                            <p>DEF: {pokemon['DEF']}</p>
                            <p>SP_DEF: {pokemon['SP_DEF']}</p>
                            <p className='col-span-2 text-center text-2xl'>TOT: {pokemon['TOTAL']}</p>
                        </div>
                </div>

                    <Link href="/" className='bg-[#1c4587] p-2 rounded-md'>
                        Return to home
                    </Link>
            </main>) : <Spinner/>}
    </>)
}