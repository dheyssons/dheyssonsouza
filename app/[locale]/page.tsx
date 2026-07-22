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
import { cubicBezier, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import ProjectCard from "@/components/Card/project-card";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import GridLines from "@/components/SVGs/grid";
import Image from "next/image";
import Eu from "@/public/images/me.webp";
import LocomotiveScrollProvider from "./components/scripts/locomotive-scroll";

export default function Home() {
  const t = useTranslations();
  const [showPreloader, setShowPreloader] = useState(true);

  const handleComplete = useCallback(() => {
    setShowPreloader(false);
  }, []);

  const projectCards = [
    {
      href: "https://hospitalsantaceciliarondonia.com",
      title: t("projects.cards.hospital.title"),
      badges: t.raw("projects.cards.hospital.badges") as string[],
      isInProgress: true,
      statusLabel: t("projects.cards.inProgress"),
    },
    {
      href: "https://schrijnwerkerij-dehaes.be",
      title: t("projects.cards.dehaes.title"),
      badges: t.raw("projects.cards.dehaes.badges") as string[],
      kpis: t.raw("projects.cards.dehaes.kpis") as Array<{
        metric: string;
        label: string;
      }>,
    },
    {
      href: "https://wdtoitures.be",
      title: t("projects.cards.wd.title"),
      badges: t.raw("projects.cards.wd.badges") as string[],
      kpis: t.raw("projects.cards.wd.kpis") as Array<{
        metric: string;
        label: string;
      }>,
    },
    {
      title: t("projects.cards.silicium.title"),
      badges: t.raw("projects.cards.silicium.badges") as string[],
      isInProgress: true,
      statusLabel: t("projects.cards.inProgress"),
    },
  ];

  return (
    <div>
      {/* <GridLines /> */}

      <Header />

      {showPreloader && <Preloader onComplete={handleComplete} />}

      <section
        className="w-screen h-screen bg-blue-500 overflow-hidden relative"
        id="hero"
      >
        {showPreloader == false && (
          <div className="section flex flex-col justify-center w-full h-full relative overflow-x-visible">
            <GridLines />
            {/* top */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between z-10 ">
              {/* text */}
              <div
                data-scroll
                data-scroll-speed="0.15"
                className="flex flex-col justify-center gap-8"
              >
                <div className="flex flex-col gap-4 lg:gap-4 mb-16">
                  {/* <div className="flex flex-row gap-x-2 items-center">
                      <AnimatedBadge />

                      <span className="text-white text-xl">
                        Localizado no Brasil
                      </span>
                    </div> */}
                  {/* <h1 className="text-5xl lg:text-display-large font-extrabold font-syne-sans flex flex-col items-start space-y-4 lg:space-y-8 relative z-20">
                      <MagneticText
                        text="Dheysson"
                        hoverText="UX/UI Designer"
                      ></MagneticText>
                      <MagneticText
                        text="Souza"
                        hoverText="Developer"
                      ></MagneticText>
                    </h1> */}
                  {/* info */}
                  <div className="lg:my-8">
                    <h2
                      className="h4 text-2xl
                    text-white"
                    >
                      <span className="flex flex-row gap-2 items-center">
                        <TextReveal blur={0} text={t("hero.role1")} />
                      </span>
                      <span className="flex flex-row items-center">
                        <TextReveal blur={0} text={t("hero.role2")} />
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: cubicBezier(0.7, 0, 0.3, 1),
                }}
                data-scroll
                data-scroll-speed="-0.3"
                className="absolute bottom-0 translate-x-1/2 md:translate-x-1/4 lg:translate-x-1/6 right-1/3 z-10 md:z-20 w-sm md:w-xl lg:w-2xl"
              >
                <Image
                  loading="eager"
                  fetchPriority="high"
                  src={Eu}
                  className="w-full"
                  alt="me"
                />
              </motion.div>

              <div
                data-scroll
                data-scroll-speed="0.15"
                className="mt-36 lg:mt-0 ml-10 lg:ml-0 lg:mr-36 -z-10"
              >
                <SpinningText className="text-white" duration={10} radius={10}>
                  {t("hero.spin")}
                </SpinningText>
              </div>
            </div>
          </div>
        )}
        <motion.div className="absolute bottom-32 z-10">
          <ScrollVelocityContainer>
            <ScrollVelocityRow baseVelocity={10} direction={-1}>
              <span className=" text-[5rem] md:text-[9rem] font-syne-sans font-extrabold text-white">
                Dheysson Souza&nbsp;—&nbsp;
              </span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </motion.div>
      </section>

      <section className="bg-white relative">
        <div className="section py-20">
          <div className="flex flex-col md:flex-row justify-between gap-20 md:gap-0 z-10">
            <h3 className="text-h5 lg:text-h4 max-w-prose text-pretty">
              <TextReveal whileInView={true} text={t("intro.title")} />
              <span className="text-paragraph-color">
                <TextReveal whileInView={true} text={t("intro.body")} />
              </span>
            </h3>
            <div data-scroll data-scroll-speed="0.15">
              <MagneticWrapper className="ballon mb-24 ml-40 lg:ml-0 lg:mb-48 lg:mr-44">
                <a
                  href="#projects"
                  className="w-full h-full flex justify-center items-center"
                >
                  {t("intro.cta")}
                </a>
              </MagneticWrapper>
            </div>
          </div>
        </div>

        {/* <ScrollVelocityContainer className="text-4xl font-bold md:text-5xl pb-56 space-y-3 font-syne-sans uppercase">
          <ScrollVelocityRow baseVelocity={10} direction={1}>
            {" "}
            web design - marketing - seo -{" "}
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={10} direction={-1}>
            {" "}
            web design - marketing - seo -{" "}
          </ScrollVelocityRow>
        </ScrollVelocityContainer> */}
      </section>

      <section className="pb-48 relative w-screen bg-white z-40" id="projects">
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
                  <span>{t("projects.title")}</span>
                </h1>
              </div>
            </div>
          </div>

          {/* projects */}
          <motion.div className="flex flex-col gap-y-24">
            {projectCards.map((project, index) => {
              const image =
                index === 0
                  ? HospitalProjectImage
                  : index === 1
                    ? DehaesProjectImage
                    : index === 2
                      ? WDProjectImage
                      : SiliciumProjectImage;

              return (
                <ProjectCard
                  key={project.title}
                  href={project.href}
                  title={project.title}
                  image={image}
                  badges={project.badges}
                  kpis={project.kpis}
                  isInProgress={project.isInProgress}
                  statusLabel={project.statusLabel}
                />
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="pt-14 pb-48 relative bg-white z-20" id="about">
        <div className="section flex flex-col ">
          {/* top */}
          <div className="flex flex-col gap-16 md:flex-row items-start justify-between z-10">
            {/* text */}
            <div className="flex flex-col justify-center">
              <div>
                {/* <div className="flex flex-row gap-x-2 items-center">
                  <AnimatedBadge />

                  <span className="text-black text-2xl">MORE ABOUT ME</span>
                </div> */}
                <h1 className="text-5xl md:text-display-medium font-syne-sans font-extrabold text-font-primary flex flex-col -space-y-20">
                  <span>{t("about.title")}</span>
                </h1>
              </div>
            </div>

            <div data-scroll data-scroll-speed="0.15">
              <MagneticWrapper className="ballon ml-40 md:ml-0 md:mr-40 md:mb-20 lg:md:mb-0">
                <a
                  href="https://www.instagram.com/dheysson.ss/"
                  className="w-full h-full flex justify-center items-center"
                >
                  {t("about.cta")}
                </a>
              </MagneticWrapper>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <p className="p max-w-prose">{t("about.paragraph1")}</p>
            <p className="p max-w-prose">{t("about.paragraph2")}</p>
            <p className="p max-w-prose">{t("about.paragraph3")}</p>
            <p className="p max-w-prose">{t("about.paragraph4")}</p>
          </div>

          <div className="flex flex-col gap-4 opacity-70 mt-10">
            <div className="space-y-2">
              <div className="space-x-2 space-y-2">
                {t
                  .raw("about.badges")
                  .slice(0, 4)
                  .map((badge: string) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
              </div>
              <div className="space-x-2 space-y-2">
                {t
                  .raw("about.badges")
                  .slice(4)
                  .map((badge: string) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
