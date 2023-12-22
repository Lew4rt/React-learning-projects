import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const {query} = Object.fromEntries(new window.FormData(event.target))
    console.log(query)
  }

  return (
    <div className="page">
      <header>
        <h1>Movie Searcher</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" placeholder="Star wars, Avatar, Matrix ..." />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
