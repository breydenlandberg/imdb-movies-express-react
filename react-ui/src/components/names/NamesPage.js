import { useEffect, useState } from 'react'
import namesService from '../../services/namesService'
import Loading from '../Loading'
import NameLinkBox from './NameLinkBox'

/*
 *
 */
const NamesPage = () => {
  const [names, setNames] = useState(undefined)

  /*
   *
   */
  useEffect(() => {
    namesService.getAllNames()
      .then((names) => setNames(names))
      .catch((error) => console.error(error))
  }, [])

  /*
   *
   */
  if (names === undefined) {
    return (
      <Loading />
    )
  } else {
    return (
      <div>
        <section class='section is-large has-background-black-bis'>
          <div class='columns is-centered is-full'>
            <p class='title is-1 has-text-light'> IMDb Names Page </p>
          </div>

          <div class='columns is-centered is-full'>
            <p class='subtitle is-3 has-text-light'> Click on a person's name to learn more about their life! </p>
          </div>
        </section>

        <section class='section has-background-black-bis'>
          {names.map((name) =>
            <NameLinkBox name={name} />
          )}
        </section>
      </div>
    )
  }
}

export default NamesPage
