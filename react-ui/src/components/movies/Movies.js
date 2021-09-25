import MovieLink from './MovieLink'

const MoviesPage = ({ data }) => {
  return (
    <div>
      <section class='section is-large has-background-black-bis'>
        <div class='columns is-centered is-full'>
          <p class='title is-1 has-text-light'> IMDb Movies Page </p>
        </div>
        <div class='columns is-centered is-full'>
          <p class='subtitle is-3 has-text-light'> with subtitle text... </p>
        </div>
      </section>

      <section class='section has-background-black-bis'>
        {data.map((movie) =>
          <MovieLink data={movie} />
        )}
      </section>
    </div>
  )
}

export default MoviesPage
