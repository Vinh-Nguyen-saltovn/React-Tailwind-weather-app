interface IconProps {
  darkMode: boolean
  darkClass?: string
  lightClass?: string
}
export default function Icon({ darkMode, darkClass, lightClass }: IconProps) {
  return (
    <>
      {darkMode ? (
        <img src="/logo_white.webp" alt="" className={darkClass} />
      ) : (
        <img src="/logo.svg" className={lightClass} alt="" />
      )}
    </>
  )
}
