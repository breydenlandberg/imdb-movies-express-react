import loading from './loading.gif'

const LoadingScreen = () => {
  return (
    <div>
      <section class='section is-large has-background-black-bis'>
        <div class='columns is-centered is-full'>
          <p class='title is-1 has-text-light'> Fetching data for a smoother user experience... </p>
        </div>

        <div class='columns is-centered is-full'>
          <p class='subtitle is-3 has-text-light'> *elevator music playing* </p>
        </div>

        <div class='columns is-centered is-full py-6'>
          <img src={loading} />
        </div>
      </section>
    </div>
  )
}

export default LoadingScreen
