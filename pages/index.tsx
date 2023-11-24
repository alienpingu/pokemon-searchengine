import React, { useState, useEffect } from 'react';
import axios from "axios";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import SearchBasicExample from '@/components/searchbar'
import Grid from '@/components/grid'
import Spinner from '@/components/spinner';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [gridProps, setGridProps] = useState({ pokemons: []})

  useEffect(() => {
    axios
      .get('/api/all')
      .then((response) => setGridProps({pokemons: response.data}))
      .catch((error) => console.log(error));
  },[]);

  const searchHandler = (query: String) => {
    if (query.length > 0) {
      axios
        .get(`/api/search/${query.toLowerCase()}`)
        .then((response) => setGridProps({pokemons: response.data}))
        .catch((error) => console.log(error));
    } else {
      axios
        .get(`/api/all`)
        .then((response) => setGridProps({pokemons: response.data}))
        .catch((error) => console.log(error));
    }
  }

  return (
    <main className={`flex min-h-screen flex-col items-center p-8 md:p-24 bg-slate-800 ${inter.className}`}>
     <Image
      src="/logo-white.png"
      alt="PokeSearch"
      width={500}
      height={500}
	    quality={100}
      className='mb-5'/>
     <SearchBasicExample searchHandler={searchHandler}/>
     {(gridProps.pokemons.length) ? <Grid {...gridProps}/> : <div className='mt-5'><Spinner /></div>}
    </main>
  )
}
