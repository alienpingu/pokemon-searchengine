import React, { useState, useEffect } from 'react';
import axios from "axios";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Searchbar from '@/components/searchbar'
import Grid from '@/components/grid'
import Spinner from '@/components/spinner';
import {useSelector,useDispatch} from 'react-redux'
import {saveGrid} from '@/slices/actualSlice';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loaded, setLoaded] = useState(true)
  const actual = useSelector((state: any) => state.actual)
  const dispatch = useDispatch()

  useEffect(() => {
    if (actual.grid.length > 0) {
      return;
    } else {
      setLoaded(false);
      axios
        .get('/api/all')
        .then((response) => {
          dispatch(saveGrid(response.data))
          setLoaded(true);
        })
        .catch((error) => console.log(error));
    }
  },[actual.grid]);

  const searchHandler = () => {
    setLoaded(false);
    if (actual.query.length > 0) {
      axios
        .get(`/api/search/${actual.query.toLowerCase()}`)
        .then((response) => dispatch(saveGrid(response.data)))
        .catch((error) => console.log(error));
    } else {
      axios
        .get(`/api/all`)
        .then((response) => dispatch(saveGrid(response.data)))
        .catch((error) => console.log(error));
    }
    setLoaded(true);
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
     <Searchbar searchHandler={searchHandler}/>
     {(loaded) ? <Grid /> : <div className='mt-5'><Spinner /></div>}
    </main>
  )
}
