type TechBadgeProps = {
  name: string;
  size?: "sm" | "md";
};

export default function TechBadge({ name, size = "sm" }: TechBadgeProps) {
  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <span
      className={`inline-block ${sizeClasses} font-mono glass rounded-full text-text-secondary hover:text-accent transition-colors`}
    >
      {name}
    </span>
  );
}
