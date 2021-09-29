import loading from './loading.gif'

/*
 *
 */
const Loading = () => {
  return (
    <div>
      <section class='section is-large has-background-black-bis'>
        <div class='columns is-centered is-full'>
          <p class='title is-1 has-text-light'> Fetching data... </p>
        </div>

        <div class='columns is-centered is-full py-6'>
          <img src={loading} />
        </div>
      </section>
    </div>
  )
}

export default Loading
