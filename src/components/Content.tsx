import { Cloud } from 'lucide-react'
import ContentBlock from './Content-block'

export default function Content() {
  return (
    <div className="mt-6 rounded-2xl shadow p-6 text-center border border-slate-400">
      <h2 className="text-lg font-medium">Hồ Chí Minh</h2>

      <div className="flex justify-center my-4">
        <Cloud size={64} className="text-sky-500" />
      </div>

      <div className="text-5xl font-bold ">30°C</div>
      <p className="mt-2 ">Trời nhiều mây</p>

      {/* Extra info */}
      <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
        <ContentBlock desc="abc" temp="30" />
        <ContentBlock desc="abc" temp="30" />
        <ContentBlock desc="abc" temp="30" />
      </div>
    </div>
  )
}
