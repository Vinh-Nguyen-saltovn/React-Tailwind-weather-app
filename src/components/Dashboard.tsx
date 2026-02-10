import { Cloud, Search, SearchIcon } from 'lucide-react'
import Header from './Header'
import { useState } from 'react'
import { HOVER_BG, DEFAULT_BG } from '../constants/common'
import SubmitButton from './Submit-button'
export default function Dashboard() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const theme = darkMode ? 'dark' : 'light'

  return (
    <div className={`min-h-screen transition-colors ${DEFAULT_BG[theme]}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-xl mx-auto mt-10 px-4 space-y-6">
        <div
          className={`flex items-center gap-2 rounded-xl shadow px-4 py-3 border border-slate-400`}
        >
          <Search className="text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Nhập tên thành phố..."
            className="flex-1 bg-transparent outline-none placeholder:text-slate-400"
          />
        </div>

        <SubmitButton
          title={
            <>
              Search <SearchIcon />
            </>
          }
          classNames={`${HOVER_BG[theme]}`}
        />

        <div className=" rounded-2xl shadow p-6 text-center border border-slate-400">
          <h2 className="text-lg font-medium">Hồ Chí Minh</h2>

          <div className="flex justify-center my-4">
            <Cloud size={64} className="text-sky-500" />
          </div>

          <div className="text-5xl font-bold ">30°C</div>
          <p className="mt-2">Trời nhiều mây</p>
          <p className="mt-2">Thời gian hiện tại</p>
        </div>
      </main>
    </div>
  )
}
