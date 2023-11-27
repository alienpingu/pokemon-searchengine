import React, { useEffect } from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/router';
import Spinner from '@/components/spinner';
import {useSelector,useDispatch} from 'react-redux'
import {loadPokemon} from '@/slices/actualSlice';

export default function PokemonInfo() {
    const actual = useSelector((state: any) => state.actual)
    const dispatch = useDispatch()
    const router = useRouter();
    const id = router.query.pid;

    useEffect(() => {
        if (actual.pokemon.SERIAL) {
            return;
        }
        axios
            .get(`/api/id/${router.query.pid}`)
            .then((response) => {
                dispatch(loadPokemon(response.data))
            })
            .catch((error) => console.log(error));
        }, [id]);

    return(<>
            {(actual.pokemon) ? ( <main className='flex flex-col justify-center items-center bg-slate-800 text-neutral-50 min-h-screen  p-4 md:p-24 '>
                <div className='md:w-max p-5 md:border-2  border-slate-50 rounded-md'>
                    <div className='grid grid-cols-2 gap-4 mb-2'>
                            <span>N°: {actual.pokemon['NUMBER']}</span>
                            <span>CODE: {actual.pokemon['CODE']}</span>
                            <span>SERIAL: {actual.pokemon['SERIAL']}</span>
                            <span>GENERATION: {actual.pokemon['GENERATION']}</span>
                        </div>
                        
                        <h1 className={`text-4xl mb-5 text-center`}>{actual.pokemon['NAME']}</h1>
                        <p className='text-center text-red-600'>{(actual.pokemon['LEGENDARY'] !== '0') ? 'Legendary' : null} {(actual.pokemon['MEGA_EVOLUTION'] !== '0') ? 'MEGA' : null}</p>
                        <p className='text-center'>{actual.pokemon['TYPE1']} {(actual.pokemon['TYPE2']) ? " - "+actual.pokemon['TYPE2'] : null}</p>
                        <p className='text-center'>{actual.pokemon['ABILITY1']} {(actual.pokemon['ABILITY2']) ? " - "+actual.pokemon['ABILITY2'] : null}{(actual.pokemon['ABILITY HIDDEN']) ? '['+actual.pokemon['ABILITY HIDDEN']+']' : null }</p>
                       
                        <div className='grid grid-cols-2 gap-4 mb-2'>
                            <p>HEIGHT: {actual.pokemon['HEIGHT']}</p>
                            <p>WEIGHT: {actual.pokemon['WEIGHT']}</p>
                            <p>HP: {actual.pokemon['HP']}</p>
                            <p>SPD: {actual.pokemon['SPD']}</p>
                            <p>ATK: {actual.pokemon['ATK']}</p>
                            <p>SP_ATK: {actual.pokemon['SP_ATK']}</p>
                            <p>DEF: {actual.pokemon['DEF']}</p>
                            <p>SP_DEF: {actual.pokemon['SP_DEF']}</p>
                            <p className='col-span-2 text-center text-2xl'>TOT: {actual.pokemon['TOTAL']}</p>
                        </div>
                </div>
                    <Link href="/" className='bg-[#1c4587] p-2 rounded-md'>
                        Return to home
                    </Link>
            </main>) : <div className='flex w-full min-h-screen justify-center items-center bg-slate-800'><Spinner/></div>}
    </>)
}