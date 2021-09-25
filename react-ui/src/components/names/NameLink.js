import { Link } from 'react-router-dom'

/*
 *  Any way to compose/structure this better?
 */
const NameLink = ({ data }) => {
  const { name_id, current_name, birth_name, biography, birth_details, death_details } = data

  return (
    <div>
      <ul>
        <li key={name_id}>
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
          {birth_name}
          {biography}
          {birth_details}
          {death_details}
        </li>
      </ul>
    </div>
  )
}

export default NameLink
