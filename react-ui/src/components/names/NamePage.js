import { useLocation } from 'react-router-dom'

const NamePage = () => {
  const data = useLocation()
  const nameData = data.nameProps.data
  const { name_id, current_name, birth_name, biography, birth_details, death_details } = nameData

  return (
    <div>
      <ul>
        <li key={name_id}>
          {current_name}
          {birth_name}
          {biography}
          {birth_details}
          {death_details}
        </li>
      </ul>
    </div>
  )
}

export default NamePage
