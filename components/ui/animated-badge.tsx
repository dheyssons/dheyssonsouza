import { motion } from "framer-motion";

export default function AnimatedBadge() {
  return (
    <div className="relative flex flex-row items-center justify-center">
      <img width={82} height={24} src="/sla.png" className="rounded-full" />
      <motion.div
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.3,
        }}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        className="absolute origin-right w-full h-full bg-bg-primary z-10"
      ></motion.div>
    </div>
  );
}
