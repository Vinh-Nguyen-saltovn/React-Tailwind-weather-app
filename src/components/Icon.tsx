interface IconProps {
  darkMode: boolean
  darkHeight: number
  darkWidth: number
  lightHeight: number
  lightWidth: number
}
export default function Icon({
  darkMode,
  darkHeight,
  darkWidth,
  lightHeight,
  lightWidth,
}: IconProps) {
  return (
    <>
      {darkMode ? (
        <img
          src="/logo_white.webp"
          alt=""
          height={darkHeight}
          width={darkWidth}
        />
      ) : (
        <img src="/logo.svg" alt="" height={lightHeight} width={lightWidth} />
      )}
    </>
  )
}
