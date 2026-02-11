import { Sun, Moon } from 'lucide-react'
import { DEFAULT_BG, HOVER_BG } from '../constants/common'
import Icon from './Icon'
import UserInfo from './UserInfo'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const theme = darkMode ? 'dark' : 'light'
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  return (
    <header
      className={`d-flex justify-between px-6 py-4 border-b border-slate-400 min-h-[100px] ${DEFAULT_BG[theme]}`}
    >
      <section className={`d-flex space-x-4`}>
        <Icon
          darkMode={darkMode}
          darkHeight={100}
          darkWidth={120}
          lightHeight={120}
          lightWidth={120}
        />
        <h1 className={`text-2xl font-semibold`}>Weather App</h1>
      </section>
      <section
        className={`w-[300px] d-flex  ${user ? 'justify-between' : 'justify-end'}`}
      >
        <UserInfo darkMode={darkMode} user={user} />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-lg ${HOVER_BG[theme]}`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </section>
    </header>
  )
}
