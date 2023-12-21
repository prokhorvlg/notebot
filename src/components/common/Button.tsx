import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react"

// DEV NOTE
// Forward ref isn't being used for anything here, but it's a nice example of where you'd use one.
// This way, a ref to the actual button can be passed from a parent component.
// Also, spread! Means you can just use this as any button.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  ...props
}, ref) => {
  return (
    <button className="feature-link" ref={ref} {...props}>
      {children}
    </button>
  )
})

export default Button