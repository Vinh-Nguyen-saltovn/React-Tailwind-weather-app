interface SubmitButtonProps {
  title: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  classNames?: string
  type?: 'submit' | 'button'
}
export default function SubmitButton({
  title,
  classNames,
  onClick,
  type = 'submit',
}: SubmitButtonProps) {
  return (
    <section className="d-flex">
      <button
        onClick={onClick}
        type={type}
        className={`text-xl sm:text-2xl md:text-3xl p-4 rounded-2xl border border-slate-400 cursor-pointer d-flex ${classNames}`}
      >
        {title}
      </button>
    </section>
  )
}
