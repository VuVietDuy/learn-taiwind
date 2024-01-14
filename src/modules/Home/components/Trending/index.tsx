import React from 'react'
import { listMovies } from './listMovies'
import MovieCard from '../MovieCard'

export default function Trending() {
  return (
    <div>
        <h3 className='border-b border-primary mt-12 mb-6 pb-4'>Trending</h3>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12'>
          {listMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie}></MovieCard>
          ))}
        </div>
        <div className='flex justify-center'>
          <button className='btn hover:scale-125 transition ease-out duration-200'>Load more</button>
        </div>
    </div>
  )
}
