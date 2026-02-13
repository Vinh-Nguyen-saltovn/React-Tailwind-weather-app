import { Sun, Moon } from 'lucide-react'
import Icon from './Icon'
import UserInfo from './UserInfo'
import { CLICKED_BG, DEFAULT_BG, HOVER_BG } from '../constants/theme'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const theme = darkMode ? 'dark' : 'light'
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  return (
    <header
      className={`d-flex justify-between px-6 border-b border-slate-400 h-20 md:h-25 ${DEFAULT_BG[theme]}`}
    >
      <section className={`d-flex space-x-4 ${darkMode && 'mt-1'}`}>
        <Icon
          darkMode={darkMode}
          darkClass="h-9 w-23 sm:h-10 sm:w-25 md:h-12 md:w-30"
          lightClass="h-14 w-21 sm:h-17 sm:w-26 md:h-16 md:w-31"
        />
        <h1 className="text-sm sm:text-[16px] md:text-2xl font-semibold">
          Weather App
        </h1>
      </section>
      <section className={`w-[300px] d-flex  ${!user && 'justify-end'}`}>
        <UserInfo darkMode={darkMode} user={user} />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-lg ${HOVER_BG[theme]} ${CLICKED_BG[theme]}`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </section>
    </header>
  )
}
