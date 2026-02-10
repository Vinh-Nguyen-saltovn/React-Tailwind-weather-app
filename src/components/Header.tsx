import { Sun, Moon } from 'lucide-react'
import { DEFAULT_BG } from '../constants/common'
import Icon from './Icon'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const theme = darkMode ? 'dark' : 'light'

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
      <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg">
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </header>
  )
}
