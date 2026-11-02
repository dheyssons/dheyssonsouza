import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  caption: string;
  number: string;
  wide?: boolean;
  dark?: boolean;
  embedded?: boolean;
};

/** Replace this figure's bordered panel with the final image, keeping its caption. */
export default function CaseImagePlaceholder({ label, caption, number, wide = false, dark = false, embedded = false }: Props) {
  return (
    <figure className={embedded ? "h-full min-w-0" : "min-w-0"}>
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-[#f2f3f5] px-6 py-12 ${embedded ? "h-full min-h-64" : wide ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[4/3]"}`}
        style={{
          backgroundImage:
            "linear-gradient(to right, #14141505 1px, transparent 1px), linear-gradient(to bottom, #14141505 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="flex max-w-sm flex-col items-center gap-4 text-center">
          <ImageIcon aria-hidden="true" className="size-8 text-blue-500/60" strokeWidth={1} />
          <p className="text-sm text-black/50">{label}</p>
          <p className="text-base font-medium leading-relaxed text-black/70">{caption}</p>
        </div>
        <div aria-hidden="true" className="absolute bottom-5 right-5 size-3 rounded-full bg-blue-500" />
      </div>
      <figcaption className={embedded ? "sr-only" : `mt-3 flex gap-4 text-xs leading-relaxed ${dark ? "text-white/65" : "text-black/55"}`}>
        <span className="shrink-0 font-mono">{number}</span>
        {caption}
      </figcaption>
    </figure>
  );
}
