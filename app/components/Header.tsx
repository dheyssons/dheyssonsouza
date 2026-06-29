import TextRollHover from "./ui/text-roll";

export default function Header() {
  return (
    <header className="w-screen z-50 bg-blue-500 text-white!">
      <div className="w-[90%] lg:w-[75%] mx-auto flex flex-row justify-between py-8">
        <a href="/" className="font-syne-sans text-3xl font-extrabold">
          DS
        </a>
        <nav>
          <ul className="flex flex-row gap-x-6">
            <li>
              <a href="#projects">
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
