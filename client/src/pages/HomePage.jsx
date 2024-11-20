export default function HomePage() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-neutral-900">
      <section className="flex flex-col items-center px-6 pt-16 text-center md:pt-24 lg:pt-32 text-white">
        <span>
          If you spot any issues or have any suggestions, please open an
          <a href="https://github.com/danidev-rc/linky"> issue</a> in the
          repository.
        </span>
        <h1 className="mt-6 text-6xl font-bold tracking-tight lg:text-6xl max-w-[75ch] duration-500 animate-in fade-in-5 slide-in-from-bottom-2">
          Welcome to Linky 🚀
        </h1>
        <p className="text-pretty max-w-[75ch] text-sm duration-700 animate-in fade-in-5 slide-in-from-top-2 md:text-base [&:not(:first-child)]:mt-6">
          Linky is a simple app to save your favorite links. You can add, edit,
          and delete links. You can also add tags to your links to organize
          them.
        </p>
        <div className="mt-8 items-center justify-center gap-x-3 space-y-3 duration-700 animate-in fade-in-30 sm:flex sm:space-y-0 flex space-x-4">
          <a
            className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 bg-neutral-800 text-neutral-50 shadow hover:bg-neutral-800/90 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700/50 h-12  px-5 group"
            href="/"
          >
            Create Link
          </a>
          <a
            className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 bg-neutral-800 text-neutral-50 shadow hover:bg-neutral-800/90 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700/50 h-12  px-5 group"
            href="/"
          >
            Start on GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
