"use client";

// images
import DehaesProjectImage from "@/public/images/projects/dehaes.png";
import SiliciumProjectImage from "@/public/images/projects/silicium.webp";
import WDProjectImage from "@/public/images/projects/wdtoitures.webp";
import HospitalProjectImage from "@/public/images/projects/image.png";
import FonsecaProjectImage from "@/public/images/projects/fonseca.png";

// components
import Header from "./components/Header";
import MagneticWrapper from "./components/wrapper/MagneticWrapper";
import Badge from "./components/wrapper/Badge";
import Footer from "./components/Footer";
import { MagneticText } from "@/components/ui/morphing-cursor";
import Preloader from "@/components/ui/preloader";
import { TextReveal } from "@/components/ui/text-reveal";
import { SpinningText } from "@/components/ui/spinning-text";
import AnimatedBadge from "@/components/ui/animated-badge";

// imports
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import ProjectCard from "@/components/Card/project-card";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handleComplete = useCallback(() => {
    setShowPreloader(false);
  }, []);

  return (
    <div>
      <Header />

      {showPreloader && <Preloader onComplete={handleComplete} />}

      <section className="relative w-screen h-screen" id="hero">
        {showPreloader == false && (
          <motion.div
            initial={{ opacity: 0.1 }}
            transition={{ duration: 0.4 }}
            animate={{ opacity: [0.1, 1.0] }}
            className="section flex flex-col justify-center mt-20 w-full h-full"
          >
            {/* top */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between z-10">
              {/* text */}
              <div className="flex flex-col justify-center gap-8">
                <div className="flex flex-col gap-4 lg:gap-8 mb-16">
                  <div className="flex flex-row gap-x-2 items-center">
                    {/* <div className="w-32 h-4 bg-black rounded-full"></div> */}
                    <AnimatedBadge />

                    <span className="text-font-primary text-xl">
                      SEU PARCEIRO DE NEGÓCIO
                    </span>
                    {/* <Globe className="text-paragraph-color" size={16}></Globe> */}
                  </div>
                  <h1 className="text-5xl lg:text-display-large font-extrabold font-syne-sans text-font-primary flex flex-col items-start space-y-4 lg:space-y-8 ">
                    <MagneticText
                      text="Dheysson"
                      hoverText="UX/UI Designer"
                    ></MagneticText>
                    <MagneticText
                      text="Souza"
                      hoverText="Developer"
                    ></MagneticText>
                  </h1>
                  {/* info */}
                  <div className="lg:my-12">
                    <h2
                      className="h4 text-2xl!
                    
                    
                    text-font-primary"
                    >
                      <span className="flex flex-row gap-2 items-center">
                        <TextReveal blur={0} text="UX Designer &" />
                      </span>
                      <span className="flex flex-row items-center">
                        <TextReveal blur={0} text="Desenvolvedor web" />
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mt-36 lg:mt-0 ml-10 lg:ml-0 lg:mr-40">
                <SpinningText duration={10} radius={12}>
                  Marketing - Desenvolvedor web - Marketing -
                </SpinningText>
              </div>
            </div>
            {/* bottom */}
          </motion.div>
        )}
      </section>

      <section>
        <div className="section mb-12">
          <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-0 z-10">
            <h3 className="text-h5 lg:text-h4 max-w-prose text-pretty">
              <TextReveal
                whileInView={true}
                text="Designer web para empresas que desejam mais do que um site bonito."
              />
              <span className="text-paragraph-color">
                <TextReveal
                  whileInView={true}
                  text="Para alcançar seus objetivos de negócios, todo projeto começa com
pesquisa: seu mercado, seus concorrentes e o que faz você valer a pena
ser escolhido."
                />
              </span>
            </h3>
            <div data-scroll data-scroll-speed="0.15">
              <MagneticWrapper className="ballon mb-24 ml-10 lg:ml-0 lg:mb-48 lg:mr-40">
                <a
                  href="#projects"
                  className="w-full h-full flex justify-center items-center"
                >
                  Ver projetos
                </a>
              </MagneticWrapper>
            </div>
          </div>
        </div>

        <ScrollVelocityContainer className="text-4xl font-bold md:text-5xl mb-56 space-y-3 font-syne-sans uppercase">
          <ScrollVelocityRow baseVelocity={10} direction={1}>
            {" "}
            web design - marketing - seo -{" "}
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={10} direction={-1}>
            {" "}
            web design - marketing - seo -{" "}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>

      <section className="mb-48 relative w-screen" id="projects">
        <div className="section flex flex-col">
          {/* top */}
          <div className="flex flex-row items-center justify-between z-10">
            {/* text */}
            <div className="flex flex-col justify-center">
              <div className="mb-16">
                {/* <div className="flex flex-row gap-x-2 items-center">
                  <AnimatedBadge />

                  <span className="text-black text-2xl">SELECTED PROJECTS</span>
                </div> */}
                <h1 className="text-5xl font-syne-sans font-extrabold lg:text-display-large text-font-primary flex flex-col ">
                  <span>projetos recentes</span>
                </h1>
              </div>
            </div>
          </div>

          {/* projects */}
          <motion.div className="flex flex-col gap-y-16">
            <ProjectCard
              isInProgress={true}
              href="https://hospitalsantaceciliarondonia.com"
              title="Hospital e Maternidade Santa Cecília"
              image={HospitalProjectImage}
              badges={[
                "AUDITORIA",
                "ANÁLISE DE COMPETIDORES",
                "pesquisa e OTIMIZAÇÃO DE SEO",
                "análise de comportamento de usuário",
                "wireframe e prototipagem",
              ]}
            />

            <ProjectCard
              href="https://schrijnwerkerij-dehaes.be"
              title="Dakwerken De Haes"
              image={DehaesProjectImage}
              badges={[
                "AUDITORIA",
                "ANÁLISE DE COMPETIDORES",
                "pesquisa e OTIMIZAÇÃO DE SEO",
                "wireframe",
              ]}
              kpis={[
                { metric: "+42%", label: "pedidos de orçamento" },
                { metric: "-33%", label: "taxa de rejeição" },
                { metric: "+67%", label: "engajamento no site" },
              ]}
            />

            <ProjectCard
              href="https://wdtoitures.be"
              title="WD Toitures"
              image={WDProjectImage}
              badges={[
                "ANÁLISE DE COMPETIDORES",
                "pesquisa e OTIMIZAÇÃO DE SEO",
                "wireframe",
              ]}
              kpis={[
                { metric: "+34%", label: "pedidos de orçamento" },
                { metric: "61%", label: "engajamento no site" },
              ]}
            />
            <ProjectCard
              isInProgress={true}
              href="#"
              title="Silicium Solar Energie"
              image={SiliciumProjectImage}
              badges={[
                "auditoria",
                "ANÁLISE DE COMPETIDORES",
                "pesquisa e OTIMIZAÇÃO DE SEO",
                "wireframe",
              ]}
            />
            <ProjectCard
              href="https://hygorfonseca.framer.website/"
              title="Hygor Fonseca - Fotógrafo"
              image={FonsecaProjectImage}
              badges={["Desenvolvimento com Framer", "Animações scroll-based"]}
            />
          </motion.div>
        </div>
      </section>

      <section className="mb-48 relative" id="about">
        <div className="section flex flex-col gap-y-12">
          {/* top */}
          <div className="flex flex-col gap-16 lg:flex-row items-start justify-between z-10">
            {/* text */}
            <div className="flex flex-col justify-center">
              <div>
                {/* <div className="flex flex-row gap-x-2 items-center">
                  <AnimatedBadge />

                  <span className="text-black text-2xl">MORE ABOUT ME</span>
                </div> */}
                <h1 className="text-5xl lg:text-display-medium font-syne-sans font-extrabold text-font-primary flex flex-col -space-y-20">
                  <span>Sobre</span>
                </h1>
              </div>
            </div>

            <div data-scroll data-scroll-speed="0.15">
              <MagneticWrapper className="ballon mr-40 ml-10 lg:ml-0">
                <a
                  href="#projects"
                  className="w-full h-full flex justify-center items-center"
                >
                  Contate-me
                </a>
              </MagneticWrapper>
            </div>
          </div>

          <div className="flex flex-col gap-y-8">
            <p className="p max-w-prose">
              Sou Dheysson, um web designer focado na criação de sites
              estruturados que comunicam valor com clareza e consistência.
            </p>
            <p className="p max-w-prose">
              Crio e redesenho sites para pequenas e médias empresas que
              precisam apresentar seus serviços de forma clara e facilitar o
              contato dos clientes.
            </p>
            <p className="p max-w-prose">
              Todo projeto começa com a organização das informações, a definição
              da estrutura do site e o planejamento da navegação. O design é
              construído sobre essa estrutura.
            </p>
          </div>

          <div className="flex flex-col gap-4 opacity-70">
            <span className="font-medium">HABILIDADES</span>
            <div className="space-y-2">
              <div className="space-x-2 space-y-2">
                <Badge>Marketing</Badge>
                <Badge>Experiência do usuário</Badge>
                <Badge>Desenvolvimento baseado em dados</Badge>
                <Badge>Pesquisa & Síntese</Badge>
              </div>
              <div className="space-x-2 space-y-2">
                <Badge>Teste A/B</Badge>
                <Badge>UX Writing</Badge>
                <Badge>Desenvolvimento web</Badge>
                <Badge>Otimização de motor de busca</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
