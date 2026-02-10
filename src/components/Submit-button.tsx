interface SubmitButtonProps {
  title: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  classNames?: string
}
export default function SubmitButton({
  title,
  onClick,
  classNames,
}: SubmitButtonProps) {
  return (
    <section className="d-flex">
      <button
        onClick={onClick}
        className={`text-3xl p-4 rounded-2xl border border-slate-400  cursor-pointer d-flex ${classNames}`}
      >
        {title}
      </button>
    </section>
  )
}
