import noResultsMovies from '../mocks/no-results.json'
import resultsMovies from '../mocks/with-results.json'

export function useMovies () {
    const movies = resultsMovies.Search

    const mappedMovies = movies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
      image: movie.Poster,
    }))

    return {movies: mappedMovies}
}
