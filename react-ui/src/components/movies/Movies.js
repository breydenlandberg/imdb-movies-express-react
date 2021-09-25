import MovieLink from './MovieLink'

const MoviesPage = ({ data }) => {
  return (
    <div>
      {data.map((movie) =>
        <MovieLink data={movie} />
      )}
    </div>
  )
}

export default MoviesPage
