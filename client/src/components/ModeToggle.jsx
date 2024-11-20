import { Sun } from 'lucide-react'
export default function ModeToggle() {
  return (
    <div className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 w-9">
      <button>
        <Sun color="#fff" />
      </button>
    </div>
  )
}
