const Name = ({ data }) => {
  const { name_id, current_name, birth_name, biography, birth_details, death_details } = data

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

export default Name
