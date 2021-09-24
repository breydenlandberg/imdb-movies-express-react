import Movie from './Movie'

const Movies = ({ data }) => {
  return (
    <div>
      {data.map((movie) =>
        <Movie data={movie} />
      )}
    </div>
  )
}

export default Movies
