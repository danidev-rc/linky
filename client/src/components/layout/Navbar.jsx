import Logo from '../icons/logo'
import { Link } from 'react-router-dom'
import { Github, X } from '../icons/logos'
import { ComandK } from '../commandK'
import ButtonUser from '../auth/user-btn'
import ModeToggle from '../ModeToggle'

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
              <span className="relative inline-block overflow-hidden rounded-full p-[1px] font-mono">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-xs font-medium dark:border-neutral-800 dark:bg-neutral-900 dark:text-white  cursor-pointer md:block">
                  v1.0.0
                </div>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Github size="24" />
          <ComandK />
          <ModeToggle />
          <ButtonUser />
        </div>
      </nav>
    </header>
  )
}
