import TextRollHover from "./ui/text-roll";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="w-screen z-50 bg-blue-500 text-white!">
      <div className="w-[90%] lg:w-[70%] mx-auto flex flex-row justify-between py-8">
        <Link href="/" className="font-syne-sans text-3xl font-extrabold">
          DS
        </Link>
        <div className="flex items-center gap-16">
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
          <div className="flex gap-2 text-sm font-medium">
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
  );
}
