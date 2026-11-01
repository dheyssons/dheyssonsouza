"use client";

import TextRollHover from "./ui/text-roll";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("header");
  const pathname = usePathname();

  return (
    <header className={`w-screen z-50 bg-blue-500 text-white `}>
      <div className="w-[90%] lg:w-[70%] mx-auto flex flex-wrap items-start justify-between gap-6 py-8">
        <Link href="/" className="font-syne-sans text-3xl font-extrabold">
          DS
        </Link>
        <div className="flex flex-col items-end gap-6 md:flex-row md:items-center md:gap-10">
          <nav>
            <ul className="flex flex-wrap justify-end gap-x-4 gap-y-3 md:gap-x-6">
              <li>
                <Link href="/#projects">
                  <TextRollHover
                    defaultText={t("work")}
                    hoverText={t("work")}
                  />
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <TextRollHover
                    defaultText={t("about")}
                    hoverText={t("about")}
                  />
                </Link>
              </li>
              <li>
                <Link href={pathname === "/" ? "/#contact" : `${pathname}#contact`}>
                  <TextRollHover
                    defaultText={t("contact")}
                    hoverText={t("contact")}
                  />
                </Link>
              </li>
              <li>
                <Link href="/orcamento" aria-current={pathname === "/orcamento" ? "page" : undefined}>
                  <TextRollHover defaultText={t("quote")} hoverText={t("quote")} />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-6 text-sm font-medium">
            <Link href={pathname} locale="en" className="hover:opacity-80">
              EN
            </Link>
            <Link href={pathname} locale="pt" className="hover:opacity-80">
              PT
            </Link>
            <Link href={pathname} locale="nl" className="hover:opacity-80">
              NL
            </Link>
            <Link href={pathname} locale="fr" className="hover:opacity-80">
              FR
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
