"use client";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        px-4 py-2
        text-sm font-medium uppercase
        tracking-wide
        rounded-full
        border border-neutral-300
        text-neutral-700
        ${className}
      `}
    >
      {children}
    </span>
  );
}
