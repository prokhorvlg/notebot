import { MouseEventHandler, ReactNode } from "react"

const Button = ({
  onClick,
  children
}: {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}) => {
  return (
    <button onClick={onClick} className="feature-link">
      {children}
    </button>
  )
}

export default Button