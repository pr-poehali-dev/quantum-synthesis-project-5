import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/9031e067-34a5-4f19-a06a-2f8833265d0f/files/d4787e4c-7c61-47e1-a335-09aaa310ac00.jpg"
          alt="3D анатомия тазового дна"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 text-blue-300 font-medium">
          Онлайн-курс
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          МУЖСКОЕ<br />ЗДОРОВЬЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-10 leading-relaxed">
          Лекция, 8 тренировок и чекап — всё, что нужно для понимания
          и восстановления здоровья тазового дна
        </p>
        <a
          href="#buy"
          className="inline-block bg-white text-black px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors duration-300"
        >
          Записаться на курс
        </a>
      </div>
    </div>
  );
}