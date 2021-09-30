import { useEffect, useState } from 'react'
import namesService from '../../services/namesService'
import Loading from '../Loading'
import { Link } from 'react-router-dom'

/*
 *  Any way to compose/structure this better?
 */
const NameLinkBox = ({ name }) => {
  const {
    name_id,
    current_name,
    birth_name,
    biography,
    birth_details,
    death_details
  } = name

  const [nameCharacters, setNameCharacters] = useState(undefined)

  /*
   *
   */
  useEffect(() => {
    namesService.getDefaultSingleNameCharacters(name_id)
      .then((nameCharacters) => setNameCharacters(nameCharacters))
      .catch((error) => console.error(error))
  }, [])

  console.log(nameCharacters)

  /*
   *
   */
  if (nameCharacters === undefined) {
    return (
      <Loading />
    )
  } else {
    return (
      <div class='container py-3'>
        <div class='box has-background-black-ter'>
          <p class='title is-3 has-text-lighter'>
            <Link to={{
              pathname: `names/${name_id}`,
              nameProps: {
                name_id,
                current_name,
                birth_name,
                biography,
                birth_details,
                death_details
              }
            }}
            >
              {current_name}
            </Link>
          </p>

          <p class='subtitle is-5 has-text-grey'> Born as: {birth_name} </p>
        </div>
      </div>
    )
  }
}

export default NameLinkBox
