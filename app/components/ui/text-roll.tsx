type TextRollHoverProps = {
  defaultText: string;
  hoverText: string;
  className?: string;
};

export default function TextRollHover({
  defaultText,
  hoverText,
  className = "",
}: TextRollHoverProps) {
  return (
    <span
      className={`relative inline-block overflow-hidden h-[1.2em] group  ${className}`}
    >
      {/* Texto padrão */}
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {defaultText}
      </span>

      {/* Texto hover */}
      <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {hoverText}
      </span>
    </span>
  );
}
