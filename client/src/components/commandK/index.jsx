import { useState, useEffect } from 'react'
import { Command } from 'cmdk'

export const ComandK = () => {
  const [open, setOpen] = useState(false)

  // Atajo de teclado Ctrl+K o Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div>
      {/* Botón para abrir el cuadro de comando */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-neutral-800 text-neutral-50 transition hover:bg-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icon-tabler-search"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </button>

      {/* Cuadro de comando */}
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div className="w-full max-w-lg rounded-lg bg-neutral-50 p-4 shadow-lg dark:bg-neutral-900">
          <Command.Input
            placeholder="Type a command or search..."
            className="w-full border-none bg-transparent p-2 text-lg text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-neutral-50 dark:placeholder:text-neutral-600"
          />

          <Command.List className="mt-4">
            <Command.Empty className="p-4 text-center text-neutral-600 dark:text-neutral-400">
              No results found.
            </Command.Empty>

            <Command.Group heading="Options" className="mb-2">
              <Command.Item
                onSelect={() => alert('Option 1 selected')}
                className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-700"
              >
                Option 1
              </Command.Item>
              <Command.Item
                onSelect={() => alert('Option 2 selected')}
                className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-700"
              >
                Option 2
              </Command.Item>
            </Command.Group>

            <Command.Separator className="my-2 h-[1px] bg-neutral-200 dark:bg-neutral-700" />

            <Command.Group heading="More Options">
              <Command.Item
                onSelect={() => alert('Another option selected')}
                className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-700"
              >
                Another Option
              </Command.Item>
            </Command.Group>
          </Command.List>
        </div>
      </Command.Dialog>
    </div>
  )
}
