import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Inter } from 'next/font/google'
import SearchBasicExample from '@/components/searchbar'
import Grid from '@/components/grid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [gridProps, setGridProps] = useState({ pokemons: []})

  useEffect(() => {
    axios
      .get('/api/all')
      .then((response) => setGridProps({pokemons: response.data}))
      .catch((error) => console.log(error));
  },[]);

  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
     <SearchBasicExample/>
     {(gridProps.pokemons.length) ? <Grid {...gridProps}/> : 'Loading...'}
    </main>
  )
}
