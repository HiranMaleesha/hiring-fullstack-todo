import * as React from "react"

import { cn } from "../../utils/cn"

const Button = React.forwardRef(({ className, variant = "primary", ...props }, ref) => {
  const variantClass = variant === "destructive" ? "btn-destructive" : variant === "outline" ? "btn-outline" : "btn-primary"
  return (
    <button
      className={cn("btn", variantClass, className)}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }