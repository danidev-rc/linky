import { Activity, Copy, Bolt, Trash2 } from 'lucide-react'

export default function CardLink({ name, clicks, url, date, onEdit }) {
  return (
    <div className="px-2 py-2 border border-neutral-500 rounded-lg">
      <div className="flex justify-between items-center">
        <a href="/" className="text-white font-mono">
          /{name}
        </a>
        <div className="flex gap-2">
          <button className="flex gap-2">
            <Activity width={18} color="#008000" />
            {clicks}
            <span>|</span>
          </button>
          <button>
            <Copy width={18} />
          </button>
          <button onClick={() => onEdit({ name, clicks, url, date })}>
            <Bolt width={18} />
          </button>
          <button>
            <Trash2 width={18} />
          </button>
        </div>
      </div>
      <div>
        <p className="text-neutral-400 font-mono">{url}</p>
      </div>
      <div className="flex justify-end font-mono text-sm">{date}</div>
    </div>
  )
}
