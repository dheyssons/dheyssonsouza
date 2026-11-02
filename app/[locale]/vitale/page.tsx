import type { Metadata } from "next";
import Image from "next/image";
import vitaleCover from "@/public/images/cases/vitale/capa.jpg";
import vitaleDesignSystem from "@/public/images/cases/vitale/vitale-design-system.webp";
import { getLocale } from "next-intl/server";
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseImagePlaceholder from "@/components/cases/image-placeholder";
import VitaleResearchOrbit from "@/components/cases/vitale-research-orbit";
import VitaleIdentityGrid from "@/components/cases/vitale-identity-grid";
import CaseParagraph from "@/components/cases/case-paragraph";
import { Link } from "@/i18n/routing";
import { vitaleCases } from "@/lib/cases/vitale";

const technologyLogos: Record<string, string[]> = {
  "Next.js + TypeScript": ["/nextjs.svg", "/typescript.svg"],
  "Supabase + PostgreSQL": [
    "/images/technologies/supabase.svg",
    "/images/technologies/postgresql.svg",
  ],
  "Cloudflare R2 + Sharp": [
    "/images/technologies/cloudflare.svg",
    "/images/technologies/sharp.svg",
  ],
  "Mercado Pago": ["/images/technologies/mercadopago.svg"],
  Resend: ["/images/technologies/resend.svg"],
  Contentful: ["/images/technologies/contentful.svg"],
};

async function getCase() {
  const locale = await getLocale();
  return vitaleCases[locale] ?? vitaleCases.pt;
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCase();
  return {
    title: "Vitale — Branding, UX/UI & Development | Dheysson Souza",
    description: content.intro,
    openGraph: {
      title: `Vitale — ${content.headline}`,
      description: content.intro,
      type: "article",
    },
  };
}

export default async function VitalePage() {
  const content = await getCase();
  const locale = await getLocale();

  return (
    <>
      <Header />
      <main className="text-font-primary">
        <section className="bg-blue-500 text-white">
          <div className="mx-auto w-[90%] py-12 md:py-20 lg:w-[70%]">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <ArrowLeft aria-hidden="true" className="size-4" /> {content.back}
            </Link>
            <h1 className="mt-16 text-balance font-syne-sans text-[clamp(5rem,15vw,12rem)] font-extrabold leading-none tracking-[-0.07em] md:mt-24">
              Vitale
            </h1>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
              <h2 className="max-w-2xl text-balance font-syne-sans text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                {content.headline}
              </h2>
              <div className="flex flex-col items-start gap-7">
                <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                  {content.intro}
                </p>
                <a
                  href="https://vitaleimoveis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#141415] transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {content.visit}{" "}
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </a>
              </div>
            </div>
            <dl className="mt-16 grid gap-8 border-t border-white/25 pt-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
              {content.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="mb-3 text-sm text-white/60">{fact.label}</dt>
                  <dd className="max-w-xs text-sm leading-relaxed">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="mx-auto w-[90%] py-10 md:py-16 lg:w-[80%]">
          <Image
            src={vitaleCover}
            alt={content.cover}
            sizes="(min-width: 1024px) 80vw, 90vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>

        <nav
          aria-label={content.index}
          className="mx-auto w-[90%] border-y border-black/15 py-6 lg:w-[70%]"
        >
          <ol className="hidden items-center justify-between gap-x-2 lg:flex">
            {content.sections.map((section) => (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-1 whitespace-nowrap text-[clamp(0.625rem,0.85vw,0.875rem)] transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3 shrink-0 xl:size-4"
                  />
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
          <details className="lg:hidden">
            <summary className="cursor-pointer text-sm">
              {content.index}
            </summary>
            <ol className="mt-4 space-y-3">
              {content.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex items-center gap-2 text-sm hover:text-blue-600"
                  >
                    <ChevronRight
                      aria-hidden="true"
                      className="size-4 shrink-0"
                    />
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </details>
        </nav>

        <article>
          {content.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="scroll-mt-8 py-16 md:py-24"
            >
              <div className="mx-auto w-[90%] lg:w-[70%]">
                <div
                  className={
                    section.id === "contexto"
                      ? "grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                      : ""
                  }
                >
                  <div className="max-w-3xl">
                    <h2
                      id={`${section.id}-title`}
                      className="max-w-2xl text-balance font-syne-sans text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                    >
                      {section.title}
                    </h2>
                    <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.85] text-paragraph-color">
                      {section.paragraphs.map((paragraph) => (
                        <CaseParagraph key={paragraph} text={paragraph} />
                      ))}
                    </div>
                  </div>

                  {section.id === "contexto" && (
                    <VitaleResearchOrbit
                      locale={locale}
                      label={section.label}
                    />
                  )}
                </div>

                {section.id === "marca" && (
                  <VitaleIdentityGrid
                    identity={content.identity}
                    applicationAlt={content.identityApplication}
                  />
                )}

                {section.id === "engenharia" && (
                  <dl className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                    {content.stack.map((item) => (
                      <div
                        key={item.title}
                        className="border-t border-black/15 py-6"
                      >
                        <dt className="flex items-center gap-3 text-lg font-medium">
                          <span
                            aria-hidden="true"
                            className="flex shrink-0 items-center gap-2"
                          >
                            {(technologyLogos[item.title] ?? []).map((src) => (
                              <Image
                                key={src}
                                src={src}
                                alt=""
                                width={24}
                                height={24}
                                className="size-6 object-contain"
                              />
                            ))}
                          </span>
                          <span>{item.title}</span>
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-paragraph-color">
                          {item.text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.id === "sistema" && (
                  <Image
                    src={vitaleDesignSystem}
                    alt={content.designSystemImage}
                    sizes="(min-width: 1024px) 70vw, 90vw"
                    className="mt-12 h-auto w-full rounded-2xl"
                  />
                )}

                {section.images.length > 0 &&
                  section.id !== "marca" &&
                  section.id !== "sistema" && (
                    <div
                      className={`mt-12 grid gap-8 ${section.images.length === 2 ? "md:grid-cols-2" : ""}`}
                    >
                      {section.images.map((caption, imageIndex) => (
                        <CaseImagePlaceholder
                          key={caption}
                          label={content.placeholder}
                          caption={caption}
                          number={`${String(index + 1).padStart(2, "0")}.${imageIndex + 1}`}
                          wide={section.images.length !== 2}
                        />
                      ))}
                    </div>
                  )}
              </div>
            </section>
          ))}
        </article>

        <section className="bg-blue-500 text-white py-16 md:py-24">
          <div className="mx-auto flex w-[90%] flex-col items-start justify-between gap-10 lg:w-[70%] lg:flex-row lg:items-center">
            <h2 className="max-w-xl text-balance font-syne-sans text-3xl font-semibold tracking-tight md:text-5xl">
              {content.closing}
            </h2>
            <a
              href="https://vitaleimoveis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-6 rounded-full bg-[#141415] px-7 py-4 text-sm text-white transition-colors hover:bg-white hover:text-font-primary focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {content.visit}{" "}
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
