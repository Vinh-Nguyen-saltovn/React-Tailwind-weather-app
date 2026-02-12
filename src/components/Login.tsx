/* global google */
type CredentialReponseProps = {
  credential: string
}

import { useEffect, useState } from 'react'
import Header from './Header'
import SubmitButton from './Submit-button'
import Icon from './Icon'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import type { UserInfo } from '../types/commonTypes'
import { loginWithGithub } from '../auth/auth'
import { Github } from 'lucide-react'
import { toast } from 'react-toastify'
import { CLICKED_BG, DEFAULT_BG, HOVER_BG } from '../constants/theme'
import { CLIENT_ID_GOOGLE } from '../constants/env'

export default function Login() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const theme = darkMode ? 'dark' : 'light'

  useEffect(() => {
    function handleCredentialResponse(response: CredentialReponseProps) {
      const decoded = jwtDecode<UserInfo>(response.credential)
      const user: UserInfo = {
        name: decoded.name,
        picture: decoded.picture,
      }

      localStorage.setItem('user', JSON.stringify(user))
      toast.success('Đăng nhập Google thành công')
      navigate('/')
    }
    google.accounts.id.initialize({
      client_id: CLIENT_ID_GOOGLE,
      callback: handleCredentialResponse,
    })

    google.accounts.id.renderButton(document.getElementById('googleBtn')!, {
      theme: 'outline',
      size: 'large',
    })
  }, [navigate])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Check username
    if (!username.trim()) {
      toast.error('username không được để trống')
      return
    }

    if (username.length < 6) {
      toast.error('Username phải từ 6 ký tự trở lên')
      return
    }

    // Check password
    if (!password.trim()) {
      toast.error('Mật khẩu không được để trống')
      return
    }

    if (password.length < 6) {
      toast.error('Mật khẩu phải từ 6 ký tự trở lên')
      return
    }
    const user = {
      name: username,
      picture: '/default-avatar.webp',
    }

    localStorage.setItem('user', JSON.stringify(user))

    toast.success('Đăng nhập thành công')
    navigate('/')
  }
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`min-h-screen transition-colors ${DEFAULT_BG[theme]} `}>
        <main className="d-flex flex-col text-xl text-center justify-evenly pt-15 h-[600px] space-y-6 lg:flex-row lg:space-y-0">
          <section className="">
            <div className="d-flex md:block md:justify-normal md:items-start">
              <Icon
                darkMode={darkMode}
                darkClass="h-28 w-60 mt-4"
                lightClass="h-32 w-60"
              />
            </div>
            <p className="text-2xl md:text-3xl">
              Ứng dụng thời tiết của riêng bạn
            </p>
          </section>
          <form
            onSubmit={handleSubmit}
            className="w-[400px] lg:min-w-[500px] p-4 space-y-4 border border-slate-400 rounded-xl"
          >
            <h1 className="text-4xl md:text-5xl">Form đăng nhập</h1>
            <section className="space-y-2 mt-6 md:mt-12">
              <input
                type="text"
                placeholder="nhập username ..."
                className="border border-slate-400 rounded-lg p-2 w-full"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </section>
            <section className="space-y-2">
              <input
                type="password"
                placeholder="nhập mật khẩu ..."
                className="border border-slate-400 rounded-lg p-2 w-full"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </section>
            <SubmitButton
              title="Đăng nhập"
              classNames={`${HOVER_BG[theme]} ${CLICKED_BG[theme]}`}
            />
            <section className="d-flex justify-evenly">
              <section className="space-y-2">
                <h3 className="text-sm md:text-xl">Login với Google</h3>
                <div id="googleBtn"></div>
              </section>
              <section className="space-y-2">
                <h3 className="text-sm md:text-xl">Login với Github</h3>
                <button
                  className="d-flex p-1 bg-white text-sm text-[#3c4043] space-x-2 w-44 h-10 border border-[#dadce0] rounded-md hover:bg-[#e3ecff]"
                  type="button"
                  onClick={async () => {
                    await loginWithGithub()
                    navigate('/')
                    toast.success('Đăng nhập Github thành công')
                  }}
                >
                  <span className="pr-2">
                    <Github />
                  </span>
                  Login với GitHub
                </button>
              </section>
            </section>
          </form>
        </main>
      </div>
    </>
  )
}
