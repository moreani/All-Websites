/**
 * A component that renders a curved SVG shape to create a visual transition between sections.
 * It should be placed between a section with one background color and a section with another.
 * The `className` of the path should be set to the background color of the *following* section.
 * e.g., `text-background-white` if the next section is white.
 */
export default function SectionDivider() {
  return (
    // The negative margin pulls the divider up over the bottom of the preceding section.
    <div className="relative -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-32" style={{ lineHeight: 0 }}>
      <svg
        className="w-full h-auto"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The path creates a gentle curve. The fill color should match the upcoming section's background. */}
        <path d="M0 100 C 480 0, 960 0, 1440 100 Z" className="fill-current text-background-white" />
      </svg>
    </div>
  )
}
