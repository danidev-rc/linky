export default function CardLink({ name, url, clicks, date }) {
  return (
    <div className="px-2 py-2 border border-neutral-500 rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-white font-mono">/{name}</h1>
        <div className="flex gap-2">
          <p>{clicks}</p>
          <p>copy</p>
          <p>settings</p>
          <p>delete</p>
        </div>
      </div>
      <div>
        <p className="text-neutral-400 font-mono">{url}</p>
      </div>
      <div className="flex justify-end font-mono text-sm">{date}</div>
    </div>
  )
}
