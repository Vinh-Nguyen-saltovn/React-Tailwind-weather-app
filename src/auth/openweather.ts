import { OPENWEATHER_API_KEY } from '../constants/env'

export async function getCoordinates(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${OPENWEATHER_API_KEY}`,
  )
  if (!res.ok) throw new Error('Lỗi khi call api')
  const data = await res.json()
  if (data.length === 0) throw new Error('Không tìm thấy thành phố')
  return data[0]
}

export async function getWeatherFromCoordinates(lat: number, lon: number) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`,
  )
  if (!res.ok) throw new Error('Lỗi khi call api')
  return await res.json()
}
