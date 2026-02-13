import { Cloud, Search, SearchIcon } from 'lucide-react'
import Header from './Header'
import { useState } from 'react'
import SubmitButton from './Submit-button'
import { CLICKED_BG, DEFAULT_BG, HOVER_BG } from '../constants/theme'
import { getCoordinates, getWeatherFromCoordinates } from '../auth/openweather'
import { Navigate } from 'react-router-dom'

interface WeatherData {
  city: string
  temp: number
  desc: string
  time: string
  date: string
  windDeg: number
  windSpeed: number
  humidity: number
  pressure: number
}

const defaultWeather: WeatherData = {
  city: '_',
  temp: 0,
  desc: '_',
  time: '--:--:--',
  date: '--/--/----',
  windDeg: 0,
  windSpeed: 0,
  humidity: 0,
  pressure: 0,
}

// hàm lấy thời gian hiện tại của thành phố tìm tọa độ
function getCityLocalTime(dt: number, timezone: number) {
  const cityDateTime = new Date((dt + timezone) * 1000)
  return {
    date: cityDateTime.toLocaleDateString('vi-VN', { timeZone: 'UTC' }),
    time: cityDateTime.toLocaleTimeString('vi-VN', { timeZone: 'UTC' }),
  }
}

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const theme = darkMode ? 'dark' : 'light'
  const [city, setCity] = useState<string>('')
  const [weather, setWeather] = useState<WeatherData>(defaultWeather)
  const [error, setError] = useState<string | null>(null)
  const user = localStorage.getItem('user')

  if (!user) {
    return <Navigate to="/login" replace />
  }

  // hàm fetch để gọi 2 api
  async function fetchSearchCity() {
    if (!city.trim()) return
    try {
      setError(null)
      // api lấy tọa độ theo tên thành phố nhập vào
      const geo = await getCoordinates(city)
      if (!geo) {
        setError('Không tìm thấy tọa độ hợp lệ')
        return
      }
      // api lấy thông tin thời tiết theo tọa độ
      const data = await getWeatherFromCoordinates(geo.lat, geo.lon)
      const { date, time } = getCityLocalTime(data.dt, data.timezone)
      setWeather({
        city: geo.name,
        temp: data.main.temp,
        desc: data.weather[0].description,
        time,
        date,
        windDeg: data.wind.deg,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
      })
    } catch (error: unknown) {
      // nếu lỗi, reset lại default
      setWeather(defaultWeather)
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Đã xảy ra lỗi không xác định')
      }
    }
  }

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
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <SubmitButton
          title={
            <>
              Search
              <span className="pl-2">
                <SearchIcon />
              </span>
            </>
          }
          classNames={`${HOVER_BG[theme]} ${CLICKED_BG[theme]}`}
          type="button"
          onClick={fetchSearchCity}
        />

        <div className="rounded-2xl shadow py-6 px-4 text-center border border-slate-400 space-y-3 text-sm md:text-[16px]">
          <h2 className="text-2xl font-medium">Tên : {weather.city}</h2>
          <h2 className="text-2xl">Ngày : {weather.date}</h2>
          <div className="flex justify-center my-4">
            <Cloud size={64} className="text-sky-500" />
          </div>
          <div className="text-3xl md:text-5xl font-bold ">
            Nhiệt độ : {weather.temp}°C
          </div>
          <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3 text-center">
            <p className="mt-2">Thời tiết : {weather.desc}</p>
            <p className="mt-2">Thời gian : {weather.time}</p>
            <p className="mt-2">Hướng gió : {weather.windDeg}Deg</p>
            <p className="mt-2">Tốc độ gió : {weather.windSpeed}m/s</p>
            <p className="mt-2">Độ ẩm : {weather.humidity}%</p>
            <p className="mt-2">Áp suất : {weather.pressure}hPa</p>
          </section>
        </div>
      </main>
    </div>
  )
}
