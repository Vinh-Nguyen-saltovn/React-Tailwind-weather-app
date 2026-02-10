interface ContentBlockProps {
  desc: string
  temp: string
}
export default function ContentBlock({ desc, temp }: ContentBlockProps) {
  return (
    <div className="rounded-lg p-3">
      <p className="">{desc}</p>
      <p className="font-semibold">{temp}°C</p>
    </div>
  )
}
