import { ArrowUpRight } from "lucide-react";
import MagneticWrapper from "./wrapper/MagneticWrapper";
import TextRollHover from "./ui/text-roll";
import GridLines from "@/components/SVGs/grid";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="pt-24 pb-8 bg-[#1D1D1F] text-white/90 z-50 relative"
    >
      <div className="w-[95%] lg:w-[75%] mx-auto flex flex-col gap-20 relative">
        <GridLines />

        <div className="flex flex-row justify-between w-full">
          <a
            href="https://www.instagram.com/dheysson.ss/"
            className="flex flex-row items-center group"
          >
            <span className="display-medium text-3xl! lg:text-6xl! text-white group-hover:text-blue-500 transition-colors duration-300">
              Vamos conversar
            </span>
            <ArrowUpRight
              strokeWidth={3}
              className="w-20 h-20 text-white group-hover:text-blue-500 transition-colors duration-300"
            />
          </a>
          <MagneticWrapper className="ballon2 mr-44">
            <a
              href="https://www.instagram.com/dheysson.ss/"
              className="w-full h-full flex justify-center items-center"
            >
              Contate-me
            </a>
          </MagneticWrapper>
        </div>
        <div className="flex flex-col items-center gap-y-6">
          {/* texto */}
          <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end gap-10">
            <div className="flex flex-col">
              <span>Goiás, Brazil</span>
              <span>dheyssonsousasilva@gmail.com</span>
            </div>
            <div className="flex flex-row gap-4 justify-between w-full lg:w-auto">
              <a href="mailto:dheyssonsousasilva@gmail.com">
                <TextRollHover defaultText="Email" hoverText="Email" />
              </a>
              <a href="https://www.instagram.com/dheysson.ss/">
                {" "}
                <TextRollHover defaultText="Instagram" hoverText="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/dheysson/">
                <TextRollHover defaultText="LinkedIn" hoverText="LinkedIn" />
              </a>
            </div>
          </div>
          <span className="text-center">
            © 2026 · UX Designer & Desenvolvedor
          </span>
        </div>
      </div>
    </footer>
  );
}
