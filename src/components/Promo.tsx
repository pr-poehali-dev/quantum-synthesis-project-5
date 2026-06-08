import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/9031e067-34a5-4f19-a06a-2f8833265d0f/files/2a8a8e82-280a-41c6-a63d-f1706d98425b.jpg"
            alt="Анатомия и здоровье"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white/70 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Программа курса
      </h3>

      <div className="absolute z-10 left-6 right-6 bottom-12 max-w-4xl">
        <ul className="space-y-3">
          {[
            "Как устроено тазовое дно и мочеполовая система",
            "Как формируется и усиливается эрекция",
            "Половая конституция — какой партнёр тебе подходит",
            "Проблемы при некорректной работе мышц тазового дна",
            "8 практических тренировок с массажными техниками",
            "Чекап для регулярного контроля здоровья",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white text-lg sm:text-xl md:text-2xl">
              <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
