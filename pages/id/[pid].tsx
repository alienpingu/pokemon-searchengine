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
          <main
            className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
            <h1>Pokemon Info</h1>

            {(pokemon) ? (
                <div>
                    <p>NUMBER: {pokemon['NUMBER']}</p>
                    <p>CODE: {pokemon['CODE']}</p>
                    <p>SERIAL: {pokemon['SERIAL']}</p>
                    <p>NAME: {pokemon['NAME']}</p>
                    <p>TYPE1: {pokemon['TYPE1']}</p>
                    <p>TYPE2: {pokemon['TYPE2']}</p>
                    <p>COLOR: {pokemon['COLOR']}</p>
                    <p>ABILITY1: {pokemon['ABILITY1']}</p>
                    <p>ABILITY2: {pokemon['ABILITY2']}</p>
                    <p>ABILITY HIDDEN: {pokemon['ABILITY HIDDEN']}</p>
                    <p>GENERATION: {pokemon['GENERATION']}</p>
                    <p>LEGENDARY: {pokemon['LEGENDARY']}</p>
                    <p>MEGA_EVOLUTION: {pokemon['MEGA_EVOLUTION']}</p>
                    <p>HEIGHT: {pokemon['HEIGHT']}</p>
                    <p>WEIGHT: {pokemon['WEIGHT']}</p>
                    <p>HP: {pokemon['HP']}</p>
                    <p>ATK: {pokemon['ATK']}</p>
                    <p>DEF: {pokemon['DEF']}</p>
                    <p>SP_ATK: {pokemon['SP_ATK']}</p>
                    <p>SP_DEF: {pokemon['SP_DEF']}</p>
                    <p>SPD: {pokemon['SPD']}</p>
                    <p>TOTAL: {pokemon['TOTAL']}</p>
                </div>
            ) : 'Loading'}

            <Link href="/">
                Return to home
            </Link>
        </main>
    </>)
}