const features = [
  {
    icon: "🎓",
    title: "1 лекция — 1,5 часа",
    desc: "Анатомия тазового дна и мочеполовой системы, механизмы эрекции, половая конституция — разбор на анатомической модели",
  },
  {
    icon: "💪",
    title: "8 тренировок",
    desc: "Расслабление и восстановление тазового дна через массаж, работу с тазобедренным суставом, мышцами живота и дыхание",
  },
  {
    icon: "📋",
    title: "Базовый чекап",
    desc: "Чёткий список обязательных показателей для контроля здоровья. Ничего лишнего — только важное",
  },
  {
    icon: "🎙️",
    title: "Эфир со специалистом",
    desc: "Запись прямого эфира с Михаилом Соркиным — физическим терапевтом и реабилитологом. Мифы, вопросы, реальные ответы",
  },
];

export default function Featured() {
  return (
    <div id="about" className="min-h-screen px-6 py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 lg:mb-24">
          <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">Что входит в курс</h3>
          <p className="text-3xl lg:text-5xl text-neutral-900 leading-tight max-w-3xl font-bold">
            Один курс — полная система для понимания и улучшения мужского здоровья
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-neutral-200">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex gap-6 py-10 px-4 border-b border-neutral-200 md:border-r md:odd:border-r md:even:border-r-0 group hover:bg-neutral-50 transition-colors duration-300"
            >
              <span className="text-4xl flex-shrink-0">{f.icon}</span>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-3">{f.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#buy" className="inline-block bg-black text-white px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors duration-300">
            Записаться на курс
          </a>
        </div>
      </div>
    </div>
  );
}