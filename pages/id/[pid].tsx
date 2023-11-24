import React, { useState, useEffect } from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import Pokemon from '@/interfaces/pokemon';
import Spinner from '@/components/spinner';
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
         

            {(pokemon) ? ( <main
            className={`flex flex-col items-center justify-between ${inter.className}`}>
                
                    <div className='grid grid-cols-2 gap-4 mb-2'>
                        <span>N°: {pokemon['NUMBER']}</span>
                        <span>CODE: {pokemon['CODE']}</span>
                        <span>SERIAL: {pokemon['SERIAL']}</span>
                        <span>GENERATION: {pokemon['GENERATION']}</span>
                    </div>
                    
                    <h1 className='text-4xl mb-5'>{pokemon['NAME']}</h1>
                    <span>{(pokemon['LEGENDARY'] !== '0') ? 'Legendary' : null} {(pokemon['MEGA_EVOLUTION'] !== '0') ? 'MEGA' : null}</span>
                    <span>{pokemon['TYPE1']} {(pokemon['TYPE2']) ? " - "+pokemon['TYPE2'] : null}</span>
                    <span>{pokemon['ABILITY1']} {(pokemon['ABILITY2']) ? " - "+pokemon['ABILITY2'] : null}{(pokemon['ABILITY HIDDEN']) ? '['+pokemon['ABILITY HIDDEN']+']' : null }</span>
                    <p>HEIGHT: {pokemon['HEIGHT']} | WEIGHT: {pokemon['WEIGHT']}</p>
                    <br />
                    <p>HP: {pokemon['HP']} SPD: {pokemon['SPD']} </p>
                    <p>ATK: {pokemon['ATK']} SP_ATK: {pokemon['SP_ATK']}</p>
                    <p>DEF: {pokemon['DEF']} SP_DEF: {pokemon['SP_DEF']}</p>
                    <p>TOTAL: {pokemon['TOTAL']}</p>
                    <br />

                    <Link href="/">
                        Return to home
                    </Link>
            </main>) : <Spinner/>}
    </>)
}