import React, { useState, useEffect } from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import Pokemon from '@/interfaces/pokemon';

const inter = Inter({ subsets: ['latin'] })

export default function PokemonInfo() {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const router = useRouter()
    const pid = router.query.pid

    useEffect(() => {
        axios
          .get(`/api/id/${pid}`)
          .then((response) => setPokemon(response.data))
          .catch((error) => console.log(error));
    },[]);

    return(<>
         

            {(pokemon) ? ( <main
            className={`flex flex-col items-center justify-between ${inter.className}`}>
                <h1 className='text-4xl mb-5' style={{"color": pokemon['COLOR'].toLowerCase()}}>{pokemon['NAME']}</h1>
                <div className="grid mb-8 md:grid-cols-2 bg-white dark:bg-gray-800">
                <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center justify-center ">
                        <p>NUMBER: {pokemon['NUMBER']}</p>
                        <p>CODE: {pokemon['CODE']}</p>
                        <p>SERIAL: {pokemon['SERIAL']}</p>
                        <p>GENERATION: {pokemon['GENERATION']}</p>
                        <p>TYPE1: {pokemon['TYPE1']}</p>
                        <p>TYPE2: {pokemon['TYPE2']}</p>
                        
                    </div>
                </figure>
                <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center justify-center ">
                    <p>ABILITY1: {pokemon['ABILITY1']}</p>
                    <p>ABILITY2: {pokemon['ABILITY2']}</p>
                    <p>ABILITY HIDDEN: {pokemon['ABILITY HIDDEN']}</p>
                    </div>
                </figure>
                <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center justify-center ">
                    <p>LEGENDARY: {pokemon['LEGENDARY']}</p>
                    <p>MEGA_EVOLUTION: {pokemon['MEGA_EVOLUTION']}</p>

                    <p>HEIGHT: {pokemon['HEIGHT']}</p>
                    <p>WEIGHT: {pokemon['WEIGHT']}</p>
                    </div>
                </figure>
                <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center justify-center ">
                    <p>HP: {pokemon['HP']}</p>
                    <p>ATK: {pokemon['ATK']}</p>
                    <p>DEF: {pokemon['DEF']}</p>
                    <p>SP_ATK: {pokemon['SP_ATK']}</p>
                    <p>SP_DEF: {pokemon['SP_DEF']}</p>
                    <p>SPD: {pokemon['SPD']}</p>
                    <p>TOTAL: {pokemon['TOTAL']}</p>
                    </div>
                </figure>
            </div>
            <Link href="/">
                Return to home
            </Link>
        </main>
            ) : 'Loading'}
    </>)
}