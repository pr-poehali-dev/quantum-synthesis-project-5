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

      <div className="absolute inset-0 z-10 flex flex-col justify-between md:justify-center md:gap-8 px-6 py-12">
        <h3 className="text-white/70 uppercase text-sm md:text-base tracking-widest self-end">
          Программа курса
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { num: "01", title: "Анатомия тазового дна", desc: "Как устроено тазовое дно и мочеполовая система" },
            { num: "02", title: "Механика эрекции", desc: "Как формируется и усиливается эрекция" },
            { num: "03", title: "Половая конституция", desc: "Какой партнёр тебе подходит" },
            { num: "04", title: "Дисфункции мышц", desc: "Проблемы при некорректной работе мышц тазового дна" },
            { num: "05", title: "8 тренировок", desc: "Практические занятия с массажными техниками" },
            { num: "06", title: "Чекап здоровья", desc: "Инструмент для регулярного контроля здоровья" },
          ].map((item) => (
            <div key={item.num} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col gap-2">
              <span className="text-blue-400 font-bold text-sm">{item.num}.</span>
              <p className="text-white font-semibold text-sm md:text-base leading-tight">{item.title}</p>
              <p className="text-white/60 text-xs md:text-sm leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}