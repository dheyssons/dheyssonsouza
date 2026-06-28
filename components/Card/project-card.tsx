import Badge from "@/app/components/wrapper/Badge";
import { motion, useAnimation } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Props = {
  image: any;
  badges: string[];
  title: string;
  isInProgress?: boolean;
  href?: string;
  kpis?: any;
};

export default function ProjectCard({
  image,
  badges,
  title,
  href,
  kpis,
  isInProgress = false,
}: Props) {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({
      x: [0, 40],
      y: [0, -40],
      transition: { duration: 0.25, ease: "easeInOut" },
    });
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={item}
      className="flex flex-col"
    >
      <div className="line z-10 mb-10"></div>
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* text */}
        <div className="flex flex-col justify-between gap-y-10">
          <div className="flex flex-col items-start gap-6">
            {isInProgress && (
              <Badge className="bg-[#f0e2ca]! text-[#f49e0e]! border-[#f1ce90]!">
                {" "}
                <span className="text-xl leading-0">•</span> &nbsp;Em andamento
              </Badge>
            )}
            <h3 className="text-h3 text-balance lg:text-h2 font-bold font-syne-sans max-w-3xl leading-[110%]">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 max-w-3xl">
              {badges &&
                badges.map((badge, index) => {
                  return (
                    <div key={index}>
                      {" "}
                      <Badge>{badge}</Badge>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="flex flex-row gap-16">
            {kpis &&
              kpis.map((kpi: any, index: any) => {
                return (
                  <div key={index} className="flex flex-col">
                    <span className="text-3xl font-medium">{kpi.metric}</span>
                    <span>{kpi.label}</span>
                  </div>
                );
              })}
          </div>
        </div>

        <a
          href={href}
          onMouseOver={handleHover}
          className="relative rounded-xl overflow-hidden h-fit"
        >
          <Image
            src={image}
            className="w-xl hover:scale-105 transition-transform duration-300 ease-out"
            alt="Dakwerken De Haes"
          />

          {href && (
            <div className="w-14 h-14 overflow-hidden flex items-center justify-center absolute bottom-0 right-0 bg-bg-primary rounded-tl-md">
              <motion.div animate={controls} className="">
                <ArrowUpRight
                  className="text-font-primary "
                  width={40}
                  height={40}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8"
                animate={controls}
              >
                <ArrowUpRight
                  className="text-font-primary "
                  width={40}
                  height={40}
                />
              </motion.div>
            </div>
          )}
        </a>
      </div>
    </motion.div>
  );
}
