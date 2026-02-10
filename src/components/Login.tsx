import { useState } from 'react'
import Header from './Header'
import { HOVER_BG, DEFAULT_BG } from '../constants/common'
import SubmitButton from './Submit-button'
import Icon from './Icon'

export default function Login() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const theme = darkMode ? 'dark' : 'light'
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`min-h-screen transition-colors ${DEFAULT_BG[theme]} `}>
        <main className="d-flex flex-col text-xl text-center justify-evenly pt-15 h-[600px] space-y-6 lg:flex-row lg:space-y-0">
          <section>
            <Icon
              darkMode={darkMode}
              darkHeight={340}
              darkWidth={368}
              lightHeight={400}
              lightWidth={400}
            />
            <p className="text-3xl pt-0 lg:pt-3">
              Ứng dụng thời tiết của riêng bạn
            </p>
          </section>
          <form className="w-[400px] lg:min-w-[500px] p-4 space-y-4 border border-slate-400 rounded-xl">
            <h1 className="text-5xl">Form đăng nhập</h1>
            <section className="space-y-2 mt-12">
              <input
                type="text"
                placeholder="nhập tài khoản ..."
                className="border border-slate-400 rounded-lg p-2 w-full"
              />
            </section>
            <section className="space-y-2">
              <input
                type="password"
                placeholder="nhập mật khẩu ..."
                className="border border-slate-400 rounded-lg p-2 w-full"
              />
            </section>
            <SubmitButton title="Đăng nhập" classNames={`${HOVER_BG[theme]}`} />
          </form>
        </main>
      </div>
    </>
  )
}
