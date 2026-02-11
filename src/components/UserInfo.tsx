import { DEFAULT_BG, HOVER_BG } from '../constants/common'
import { useNavigate } from 'react-router-dom'
import type { UserInfo } from '../types/commonTypes'

interface UserInfoProps {
  darkMode: boolean
  user: UserInfo
}

export default function UserInfo({ darkMode, user }: UserInfoProps) {
  const theme = darkMode ? 'light' : 'dark'
  const navigate = useNavigate()

  function handleLogout() {
    navigate('/login')
    localStorage.removeItem('user')
  }
  if (!user) return null

  return (
    <section className="d-flex space-x-3 relative group">
      <img
        src={user.picture}
        alt=""
        className="rounded-2xl"
        height={60}
        width={60}
      />
      <section
        className={`${DEFAULT_BG[theme]} absolute -bottom-15 left-5 h-[60px] w-25 d-flex transition-all duration-300 opacity-0 shadow group-hover:opacity-100 group-hover:translate-y-0`}
      >
        <button
          onClick={handleLogout}
          className={`px-2 py-1 rounded ${HOVER_BG[theme]}`}
        >
          Đăng xuất
        </button>
        <div
          className={` absolute left-3 -top-1 w-0 h-0 border-x-8 border-x-transparent border-b-8
        transition-all duration-300 ${darkMode ? 'border-b-slate-100' : 'border-b-slate-800'}
`}
        ></div>
      </section>

      <p>{user.name}</p>
    </section>
  )
}
