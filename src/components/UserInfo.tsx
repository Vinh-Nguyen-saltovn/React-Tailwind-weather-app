import { useNavigate } from 'react-router-dom'
import type { UserInfo } from '../types/commonTypes'
import { CLICKED_BG, DEFAULT_BG, HOVER_BG } from '../constants/theme'
import { useEffect, useState } from 'react'

interface UserInfoProps {
  darkMode: boolean
  user: UserInfo
}

export default function UserInfo({ darkMode, user }: UserInfoProps) {
  const theme = darkMode ? 'light' : 'dark'
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)
  const [isHoverable, setIsHoverable] = useState(false)

  // check thiết bị có hover được hay ko, nếu có -> pc, nếu ko -> mobile
  useEffect(() => {
    const media = window.matchMedia('(hover: hover)')

    const handleChange = () => {
      setIsHoverable(media.matches)
    }

    // nếu là mobile , đổi qua click để toggle ẩn hiện
    handleChange()
    media.addEventListener('change', handleChange)

    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [])

  function handleLogout() {
    localStorage.removeItem('user')
    navigate('/login')
  }
  if (!user) return null

  return (
    <section className="d-flex space-x-3 relative group">
      <img
        src={user.picture}
        alt=""
        className="rounded-2xl h-10 w-10 sm:h-12 md:h-15 sm:w-12 md:w-15"
        onClick={() => {
          // nếu ko hover được, click để toggle ẩn hiện
          if (!isHoverable) setOpen(!open)
        }}
      />
      <section
        className={`${DEFAULT_BG[theme]} absolute -bottom-15 left-2 md:left-5 h-[60px] w-25 d-flex transition-all duration-300 shadow rounded-lg ${
          isHoverable
            ? 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
            : open
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
        }
`}
      >
        <button
          onClick={handleLogout}
          className={`px-2 py-1 rounded ${HOVER_BG[theme]} ${CLICKED_BG[theme]}`}
        >
          Đăng xuất
        </button>
        <div
          className={` absolute left-3 -top-1 w-0 h-0 border-x-8 border-x-transparent border-b-8
        transition-all duration-300 ${darkMode ? 'border-b-slate-100' : 'border-b-slate-800'}
`}
        ></div>
      </section>

      <p className="text-sm sm:text-[16px] md:text-lg">{user.name}</p>
    </section>
  )
}
