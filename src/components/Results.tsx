const results = [
  "Поймёшь, почему симптомы сохраняются даже при «нормальных анализах».",
  "Научишься снижать хроническое напряжение живота и тазового дна.",
  "Перестанешь тужиться при мочеиспускании и дефекации.",
  "Поймёшь причину ночных походов в туалет и как с этим работать.",
  "Сформируешь более здоровые привычки, влияющие на мочеиспускание, сон и сексуальную функцию.",
];

export default function Results() {
  return (
    <div className="bg-black px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Конкретный результат</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            После курса<br />
            <span className="text-neutral-500">ты:</span>
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-neutral-800 border-t border-neutral-800">
          {results.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-6 py-8 group"
            >
              <span className="text-xs text-neutral-600 font-mono mt-1 flex-shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-white text-lg lg:text-2xl leading-snug">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-neutral-300 text-lg lg:text-xl max-w-xl leading-relaxed">
            Это не теория. Это <span className="text-white font-semibold">практические изменения</span>, которые ты почувствуешь.
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
