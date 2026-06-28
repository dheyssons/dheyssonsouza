import TextRollHover from "./ui/text-roll";

export default function Header() {
  return (
    <header className="fixed top-0 w-screen z-50">
      <div className="w-[75%] mx-auto flex flex-row justify-between py-8">
        <a href="#hero" className="font-syne-sans text-xl">
          DS
        </a>
        <nav>
          <ul className="flex flex-row gap-x-6">
            <li>
              <a href="#work">
                <TextRollHover defaultText="Trabalho" hoverText="Trabalho" />
              </a>
            </li>
            <li>
              <a href="#about">
                <TextRollHover defaultText="Sobre" hoverText="Sobre" />
              </a>
            </li>
            <li>
              <a href="#contact">
                <TextRollHover defaultText="Contato" hoverText="Contato" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
