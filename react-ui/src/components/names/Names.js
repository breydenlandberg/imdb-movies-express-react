import Name from './Name'

const Names = ({ data }) => {
  return (
    <div>
      {data.map((name) =>
        <Name data={name} />
      )}
    </div>
  )
}

export default Names
