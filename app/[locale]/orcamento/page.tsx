import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Check, Plus } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpinningText } from "@/components/ui/spinning-text";

type ServicePackage = {
  name: string;
  price: string;
  time: string;
  description: string;
  features: string[];
};

type TextItem = { title: string; body: string };
type Cost = { name: string; value: string };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("quote");
  return { title: t("metaTitle"), description: t("intro") };
}

export default async function QuotePage() {
  const t = await getTranslations("quote");
  const packages = t.raw("packages") as ServicePackage[];
  const costs = t.raw("costs") as Cost[];
  const terms = t.raw("terms") as TextItem[];
  const support = t.raw("support") as string[];

  const contactHref = (service: string) =>
    `mailto:dheyssonsousasilva@gmail.com?subject=${encodeURIComponent(t("emailSubject"))}&body=${encodeURIComponent(t("emailBody", { service }))}`;

  return (
    <>
      <Header />
      <main className="text-font-primary">
        <section className="relative overflow-hidden bg-blue-500 text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-48 size-96 rounded-full border border-white/20 md:top-12 md:size-160"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-64 size-64 rounded-full border border-white/20 md:top-28 md:size-128"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <SpinningText
                duration={24}
                radius={18}
                className="size-full text-[10px] font-medium uppercase tracking-wider text-white/90 md:text-lg"
              >
                {t("spin")}
              </SpinningText>
            </div>
          </div>
          <div className="section relative gap-8 pt-20 pb-48 md:py-28 lg:py-36">
            <h1 className="max-w-5xl text-balance font-syne-sans text-2xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-6xl">
              {t("title")}
            </h1>

            <a
              href="#packages"
              className="mt-4 flex w-fit items-center gap-4 border-b border-white/50 pb-3 transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-8"
            >
              {t("explore")}
              <ArrowDown aria-hidden="true" size={20} />
            </a>
          </div>
        </section>

        <section
          id="packages"
          aria-labelledby="packages-title"
          className="scroll-mt-8 bg-white py-20 md:py-28"
        >
          <div className="section">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2
                id="packages-title"
                className="max-w-2xl font-syne-sans text-4xl font-extrabold leading-tight md:text-5xl"
              >
                {t("packagesTitle")}
              </h2>
              <p className="max-w-sm leading-relaxed text-paragraph-color">
                {t("packagesIntro")}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {packages.map((service, index) => (
                <article
                  key={service.name}
                  className={`flex flex-col border p-6 md:p-10 ${index === 2 ? "border-blue-500 bg-blue-500 text-white" : "border-black/15 bg-white"}`}
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span
                      className={`text-sm ${index === 2 ? "text-white/80" : "text-paragraph-color"}`}
                    >
                      0{index + 1} /
                    </span>
                    <ArrowUpRight aria-hidden="true" size={24} />
                  </div>
                  <h3 className="font-syne-sans text-3xl font-bold">
                    {service.name}
                  </h3>
                  <p
                    className={`mt-4 leading-relaxed ${index === 2 ? "text-white/90" : "text-paragraph-color"}`}
                  >
                    {service.description}
                  </p>
                  <div className="my-8">
                    <p className="mb-2 text-sm">{t("investment")}</p>
                    <p className="font-syne-sans text-4xl font-bold tracking-tight lg:text-5xl">
                      {service.price}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed">
                      {t("delivery")}: {service.time}.
                    </p>
                  </div>
                  <div
                    className={`mb-8 border-t pt-6 ${index === 2 ? "border-white/30" : "border-black/15"}`}
                  >
                    <p className="mb-5 font-medium">
                      {t(index === 3 ? "possibilities" : "included")}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm leading-relaxed"
                        >
                          <Check
                            aria-hidden="true"
                            size={18}
                            className={`mt-0.5 shrink-0 ${index === 2 ? "text-white" : "text-blue-600"}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {index === 3 && (
                      <p className="mt-6 text-sm leading-relaxed text-paragraph-color">
                        {t("customNote")}
                      </p>
                    )}
                  </div>
                  <a
                    href={contactHref(service.name)}
                    aria-label={`${t(index === 3 ? "choose" : "discussPackage")}: ${service.name}`}
                    className={`mt-auto flex items-center justify-between gap-4 border px-5 py-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${index === 2 ? "border-white bg-white text-blue-600 hover:bg-blue-50" : "border-black/20 hover:border-blue-500 hover:bg-blue-500 hover:text-white"}`}
                  >
                    {t(index === 3 ? "choose" : "discussPackage")}
                    <ArrowUpRight aria-hidden="true" size={20} />
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-paragraph-color">
              {t("currencyNote")}
            </p>
          </div>
        </section>

        <section
          aria-labelledby="costs-title"
          className="bg-white py-20 md:py-28"
        >
          <div className="section gap-14 lg:flex-row lg:gap-20">
            <h2
              id="costs-title"
              className="font-syne-sans text-4xl font-extrabold leading-tight md:text-5xl lg:w-1/3"
            >
              {t("costsTitle")}
            </h2>
            <div className="min-w-0 flex-1">
              <table className="w-full text-left text-sm md:text-base">
                <caption className="sr-only">{t("costsTitle")}</caption>
                <thead>
                  <tr className="border-b border-black/20">
                    <th scope="col" className="pb-4 pr-6 font-medium">
                      {t("service")}
                    </th>
                    <th scope="col" className="pb-4 font-medium">
                      {t("cost")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {costs.map((cost) => (
                    <tr key={cost.name} className="border-b border-black/10">
                      <th scope="row" className="py-5 pr-6 font-normal">
                        {cost.name}
                      </th>
                      <td className="py-5 text-paragraph-color">
                        {cost.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 text-sm leading-relaxed text-paragraph-color">
                {t("hostingNote")}
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="support-title"
          className="bg-blue-50 py-20 md:py-24"
        >
          <div className="section gap-10 lg:flex-row lg:gap-20">
            <h2
              id="support-title"
              className="font-syne-sans text-4xl font-extrabold leading-tight md:text-5xl lg:w-1/3"
            >
              {t("supportTitle")}
            </h2>
            <div className="flex-1 space-y-5">
              <h3 className="font-syne-sans text-2xl font-bold">
                {t("supportLead")}
              </h3>
              {support.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-relaxed text-paragraph-color"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="terms-title"
          className="bg-white py-20 md:py-28"
        >
          <div className="section gap-12 lg:flex-row lg:gap-20">
            <h2
              id="terms-title"
              className="font-syne-sans text-4xl font-extrabold leading-tight md:text-5xl lg:w-1/3"
            >
              {t("termsTitle")}
            </h2>
            <div className="min-w-0 flex-1 border-t border-black/15">
              {terms.map((term) => (
                <details
                  key={term.title}
                  className="group border-b border-black/15"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-syne-sans text-xl font-bold transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500 [&::-webkit-details-marker]:hidden">
                    {term.title}
                    <Plus
                      aria-hidden="true"
                      size={20}
                      className="shrink-0 transition-transform group-open:rotate-45 motion-reduce:transition-none"
                    />
                  </summary>
                  <p className="pb-6 leading-relaxed text-paragraph-color">
                    {term.body}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
