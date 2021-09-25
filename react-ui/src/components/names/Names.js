import NameLink from './NameLink'

const Names = ({ data }) => {
  return (
    <div>
      {data.map((name) =>
        <NameLink data={name} />
      )}
    </div>
  )
}

export default Names
