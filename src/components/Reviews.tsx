const reviews = [
  {
    name: "Дмитрий Дымов",
    text: "Отличная лекция, живая (одной видеодорожкой, как на лекциях в аудитории) 👍\n\nЛучше узнал устройство тазового дна и мочеполовой системы. Отличные картинки, интерактивная 3D-модель.\n\nПо личному опыту, симптоматике много отклика, поэтому очень жду продолжения, практической части курса.\n\nВидел Ваши труды в курсах bmchn, доверие к Вам уже сложилось. Буду спокойно двигаться с этим курсом, не торопясь, зная, что подход качественный!",
  },
  {
    name: "МаК$иМ",
    text: "Георгий, благодарю за курс! Самому не хотелось тратить время на поиск информации по этой теме, очень ждал курс и ожидания полностью оправдались. Узнал много полезного о работе половой системы и способах поддержания её в здоровом состоянии. Особенно понравилась обширная лекция и два потрясающих эфира с Михаилом Соркиным. Ну и конечно куда без практических упражнений. Они помогают лучше понять теорию и применить знания на практике. Понравилось что упражнения объединены в несколько коротких тренировок, которые очень легко внедрить в режим дня. От курса остались только положительные впечатления — как всегда информативно, структурно и по делу!",
  },
  {
    name: "Руслан Высоцкий",
    text: "Крайне ценный и полезный курс, очень рад что взял его!\n\nСчитаю, что данная тема заслуживает не менее важного внимания, чем те же утренние зарядки и тренировки. Информация подана на качественном уровне, обратная связь от Георгия как всегда на высоте.\n\nОбязательно повторю материал, и буду практиковать!\n\nБлагодарю за курс 💪🔥",
  },
  {
    name: "Кирилл, 28 лет, травматолог",
    text: "Георгий, приветствую! Хочу поблагодарить за подробные ответы в чате — максимал для ребят. Главное, что именно прикладных, а не эфемерной теории. Повальное стремление отправлять на операцию всех людей подряд. Плюс тотальное непонимание людей, что движением можно решить многие функциональные проблемы.",
  },
  {
    name: "AterEX",
    text: "Лекция огонь! Вот буквально то что нужно. В одном месте вся нужная информация 🔥",
  },
];

export default function Reviews() {
  return (
    <div className="bg-neutral-950 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Отзывы</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Что говорят<br />
            <span className="text-neutral-500">участники</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-neutral-950 p-6 lg:p-8 flex flex-col gap-4 hover:bg-neutral-900 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{review.name[0]}</span>
                </div>
                <p className="text-white text-sm font-semibold">{review.name}</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed whitespace-pre-line">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-neutral-300 text-lg lg:text-xl max-w-xl leading-relaxed">
            Присоединяйся к тем, кто уже <span className="text-white font-semibold">изменил своё здоровье</span>.
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
