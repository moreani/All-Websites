interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "dark" // Add variant prop
}

export function IPCameraLogo({ className = "", size = "md", variant = "default" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Camera Body - Different colors based on variant */}
        <rect
          x="4"
          y="8"
          width="24"
          height="16"
          rx="3"
          fill="currentColor"
          className={variant === "dark" ? "text-white" : "text-primary"}
        />

        {/* Camera Lens */}
        <circle
          cx="16"
          cy="16"
          r="6"
          fill="currentColor"
          className={variant === "dark" ? "text-primary" : "text-white"}
        />
        <circle
          cx="16"
          cy="16"
          r="4"
          fill="currentColor"
          className={variant === "dark" ? "text-white" : "text-primary"}
        />
        <circle cx="16" cy="16" r="2" fill="currentColor" className="text-yellow" />

        {/* AI Circuit Pattern */}
        <path
          d="M6 6L10 10M26 6L22 10M6 26L10 22M26 26L22 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-orange"
        />

        {/* AI Dots */}
        <circle cx="8" cy="8" r="1" fill="currentColor" className="text-orange" />
        <circle cx="24" cy="8" r="1" fill="currentColor" className="text-yellow" />
        <circle cx="8" cy="24" r="1" fill="currentColor" className="text-yellow" />
        <circle cx="24" cy="24" r="1" fill="currentColor" className="text-orange" />

        {/* Recording Indicator */}
        <circle cx="24" cy="12" r="1.5" fill="currentColor" className="text-orange animate-pulse" />
      </svg>
    </div>
  )
}
