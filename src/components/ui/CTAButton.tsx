import type { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

const variantClasses = {
  primary:
    "bg-accent text-bg-primary hover:bg-accent-hover font-bold",
  secondary:
    "border border-border text-text-primary hover:border-accent hover:text-accent font-bold",
  outline:
    "border border-border text-text-secondary hover:text-accent hover:border-accent",
};

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  target,
  rel,
  ariaLabel,
}: CTAButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 px-5 py-3 text-sm font-sans transition-colors duration-150 cursor-pointer ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
