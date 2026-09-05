import Footer from "@/components/Footer";
import TextRollHover from "@/components/ui/text-roll";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Square, Star, Target } from "lucide-react";

export default function HospitalSantaCecilia() {
  const t = useTranslations("header");

  return (
    <main>
      <header className={`w-screen z-50 bg-white text-black `}>
        <div className="w-[90%] lg:w-[70%] mx-auto flex flex-row justify-between py-8">
          <Link href="/" className="font-syne-sans text-3xl font-extrabold">
            DS
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <nav>
              <ul className="flex flex-row gap-x-6">
                <li>
                  <a href="#projects">
                    <TextRollHover
                      defaultText={t("work")}
                      hoverText={t("work")}
                    />
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <TextRollHover
                      defaultText={t("about")}
                      hoverText={t("about")}
                    />
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <TextRollHover
                      defaultText={t("contact")}
                      hoverText={t("contact")}
                    />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" locale="en" className="hover:opacity-80">
                EN
              </Link>
              <Link href="/" locale="pt" className="hover:opacity-80">
                PT
              </Link>
              <Link href="/" locale="nl" className="hover:opacity-80">
                NL
              </Link>
              <Link href="/" locale="fr" className="hover:opacity-80">
                FR
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="grid grid-cols-12 grid-flow-row gap-12 w-full">
          <div className="col-span-12 flex flex-col gap-12">
            <div className="flex flex-col">
              <span>Projeto website</span>
              <h1 className="h2 font-syne-sans">
                Hospital e Maternidade Santa Cecília
              </h1>
            </div>
          </div>
          <div className="flex flex-row col-span-6">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-2">
                <Star width={14} height={14} strokeWidth={1} />
                <span>Facilitar contato</span>
              </div>
              <div className="flex flex-row gap-2">
                <Star width={14} height={14} strokeWidth={1.0} />
                <span>Aumentar tráfego orgânico</span>
              </div>
              <div className="flex flex-row gap-2">
                <Star width={14} height={14} strokeWidth={1} />
                <span>Melhorar branding</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-2">
                <Square width={14} height={14} strokeWidth={1} />
                <span>Orçamento limitado</span>
              </div>
              <div className="flex flex-row gap-2">
                <Square width={14} height={14} strokeWidth={1} />
                <span>Usuários com baixa maturidade digital</span>
              </div>
              <div className="flex flex-row gap-2">
                <Square width={14} height={14} strokeWidth={1} />
                <span>Pouco tempo para pesquisa</span>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-black"></div>
          <Image
            className="col-span-12"
            width={1280}
            height={720}
            src="/images/projects/hmsc.webp"
            alt="hospital santa cecilia website homepage screenshot"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
