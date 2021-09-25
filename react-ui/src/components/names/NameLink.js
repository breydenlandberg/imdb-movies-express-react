import { Link } from 'react-router-dom'

/*
 *  Any way to compose/structure this better?
 */
const NameLink = ({ data }) => {
  const {
    name_id,
    current_name,
    birth_name,
    biography,
    birth_details,
    death_details
  } = data

  return (
    <div class='columns py-3'>
      <div class='column is-four-fifths'>
        <div class='box has-background-black-ter'>
          <p class='title is-3 has-text-light'>
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

          <p class='subtitle is-5 has-text-grey'> Subtitle </p>
        </div>
      </div>

      <div class='column'>
        <div class='box has-background-black-ter'>
          <p class='title is-3 has-text-light'> principal_characters </p>
          <p class='subtitle is-5 has-text-grey'> Subtitle </p>
        </div>
      </div>
    </div>
  )
}

export default NameLink
