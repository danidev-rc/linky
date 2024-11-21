export const ButtonTag = ({ name }) => {
  return (
    <div>
      <button className="px-2 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700">
        <span>{name}</span>
      </button>
    </div>
  )
}

export const ButtonAmount = ({ name }) => {
  return (
    <div>
      <button
        title="Amount of links"
        className="px-2 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700"
      >
        <span>{name}</span>
      </button>
    </div>
  )
}
