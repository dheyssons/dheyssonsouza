"use client";

import { useState } from "react";
import Image from "next/image";
import { Pause, Play, Search } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const brands = [
  {
    name: "QuintoAndar",
    image: "quintoandar.png",
    url: "https://www.quintoandar.com.br",
  },
  { name: "OLX", image: "olx.svg", url: "https://www.olx.com.br" },
  {
    name: "Viva Real",
    image: "vivareal.svg",
    url: "https://www.vivareal.com.br",
  },
  {
    name: "Imovelweb",
    image: "imovelweb.svg",
    url: "https://www.imovelweb.com.br",
  },
];

const controls: Record<string, { pause: string; play: string }> = {
  pt: { pause: "Pausar animação", play: "Retomar animação" },
  en: { pause: "Pause animation", play: "Resume animation" },
  fr: { pause: "Mettre l’animation en pause", play: "Reprendre l’animation" },
  nl: { pause: "Animatie pauzeren", play: "Animatie hervatten" },
};

function BrandLogo({ brand }: { brand: (typeof brands)[number] }) {
  return (
    <div
      title={brand.name}
      className="flex size-full items-center justify-center rounded-full border border-black/10 bg-white p-3 shadow-sm"
    >
      <Image
        src={`/images/cases/vitale/references/${brand.image}`}
        alt={brand.name}
        width={64}
        height={64}
        className="size-full object-contain"
      />
    </div>
  );
}

export default function VitaleResearchOrbit({
  locale,
  label,
}: {
  locale: string;
  label: string;
}) {
  const [paused, setPaused] = useState(false);
  const text = controls[locale] ?? controls.pt;
  const orbitClass = `motion-reduce:[animation-play-state:paused] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] ${paused ? "[animation-play-state:paused]" : ""}`;

  return (
    <figure
      aria-label={label}
      className="group relative min-w-0 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? text.play : text.pause}
        aria-pressed={paused}
        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-black/10 bg-white text-font-primary transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 motion-reduce:hidden"
      >
        {paused ? (
          <Play aria-hidden="true" className="size-4" />
        ) : (
          <Pause aria-hidden="true" className="size-4" />
        )}
      </button>
      <div className="flex h-[310px] items-center justify-center min-[400px]:h-[390px] sm:h-[480px] lg:h-[340px] xl:h-[410px] 2xl:h-[480px]">
        <div className="relative flex size-[440px] shrink-0 scale-[0.65] items-center justify-center min-[400px]:scale-[0.8] sm:scale-100 lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-100">
          <div className="flex size-20 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/15">
            <Search aria-hidden="true" className="size-8" strokeWidth={1.5} />
          </div>
          <OrbitingCircles
            radius={105}
            iconSize={72}
            duration={32}
            reverse
            className={orbitClass}
          >
            {brands.slice(0, 2).map((brand) => (
              <BrandLogo key={brand.name} brand={brand} />
            ))}
          </OrbitingCircles>
          <OrbitingCircles
            radius={180}
            iconSize={80}
            duration={44}
            className={orbitClass}
          >
            {brands.slice(2).map((brand) => (
              <BrandLogo key={brand.name} brand={brand} />
            ))}
          </OrbitingCircles>
        </div>
      </div>
      <figcaption className="sr-only">
        {brands.map((brand) => brand.name).join(", ")}
      </figcaption>
    </figure>
  );
}
