const symptoms = [
  "Проблемы с выделением мочи после мочеиспускания",
  "Преждевременное семяизвержение",
  "Варикоцеле — варикозное расширение вен яичка",
  "Геморрой",
  "Тянущие ощущения в яичках",
  "Слабая эрекция",
  "Сниженное либидо",
  "Проблемы с зачатием ребёнка",
  "Частые ночные позывы в туалет",
];

export default function ForWho() {
  return (
    <div className="bg-neutral-950 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Этот курс для тебя</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Кому подойдёт<br />
            <span className="text-neutral-500">этот курс?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {symptoms.map((item, i) => (
            <div
              key={i}
              className="bg-neutral-950 p-6 lg:p-8 group hover:bg-neutral-900 transition-colors duration-300"
            >
              <span className="text-xs text-neutral-600 font-mono mb-3 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-white text-base lg:text-lg leading-snug">{item}</p>
            </div>
          ))}
          <div className="bg-neutral-900 p-6 lg:p-8 flex flex-col justify-between">
            <p className="text-neutral-400 text-sm leading-relaxed">
              И многое другое — всё это я разбираю в курсе и делюсь стратегией решения каждой проблемы.
            </p>
            <p className="text-neutral-600 text-xs mt-4 leading-relaxed">
              От упражнений — до рекомендаций, когда уже пора к врачу.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-neutral-300 text-lg lg:text-xl max-w-xl leading-relaxed">
            Узнал себя хотя бы в одном пункте?<br />
            <span className="text-white font-semibold">Этот курс создан именно для тебя.</span>
          </p>
          <a
            href="#buy"
            className="flex-shrink-0 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors duration-300"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </div>
  );
}
