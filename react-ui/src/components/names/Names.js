import React, { useEffect, useState } from 'react'
import namesService from '../../services/namesService'
import Loading from '../Loading'
import NameLink from './NameLink'

const Names = () => {
  const [names, setNames] = useState(undefined)
  const [namesCharacters, setNamesCharacters] = useState(undefined)

  useEffect(() => {
    namesService.getDefaultAllNames()
      .then((names) => setNames(names))
      .catch((error) => console.error(error))
  }, [])

  console.log(names)

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
            <p class='subtitle is-3 has-text-light'> with subtitle text... </p>
          </div>
        </section>

        <section class='section has-background-black-bis'>
          {names.map((name) =>
            <NameLink data={name} />
          )}
        </section>
      </div>
    )
  }
}

export default Names
