import React from "react";

/**
 * GradientHeading
 *
 * Props:
 * - text: string (required) → heading text
 * - size: string → Tailwind font-size class (default: "text-6xl")
 * - weight: string → Tailwind font-weight class (default: "font-bold")
 * - gradient: boolean → apply gradient (default: false)
 * - direction: "to-r" | "to-b" | "to-t" | "to-l" (default: "to-b")
 * - from: string → Tailwind color (default: "from-white")
 * - to: string → Tailwind color (default: "to-primary")
 */
export default function GradientHeading({
  text,
  size = "text-6xl",
  weight = "font-bold",
  gradient = false,
  direction = "to-b",
  from = "from-white",
  to = "to-primary",
  className = "",
}) {
  const base = `${size} ${weight} ${className}`;

  if (gradient) {
    return (
      <h1
        className={`${base} bg-gradient-${direction} ${from} ${to} bg-clip-text text-transparent`}
      >
        {text}
      </h1>
    );
  }

  return <h1 className={`${base} text-white`}>{text}</h1>;
}
