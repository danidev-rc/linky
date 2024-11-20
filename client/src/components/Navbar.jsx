import { Link } from 'react-router-dom'
import { Github, X } from './icons/logos'
import { ComandK } from './ComandK'
import Logo from './icons/logo'

export default function Navbar() {
  return (
    <header className="py-6 px-6">
      <nav className="flex w-full items-center justify-between container">
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1 pr-1 md:pr-4">
            <Link
              to="/"
              className="flex items-center space-x-3 transition-opacity hover:opacity-80 rtl:space-x-reverse"
            >
              <Logo size={24} />
              <span className="self-center whitespace-nowrap text-lg font-medium tracking-tight dark:text-white">
                Linky
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Link>
            <Github size="24" />
          </Link>
          <button>
            <ComandK />
            <span className="sr-only">Open on comand</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
