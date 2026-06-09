const plans = [
  {
    id: 1,
    name: "Базовый",
    description: "Самостоятельное прохождение курса",
    price: 5900,
    oldPrice: 7500,
    features: [
      "Вводная лекция по анатомии тазового дна",
      "8 тренировок с подробными инструкциями",
      "Чекап для самодиагностики",
      "Ответы на вопросы",
    ],
    cta: "Купить базовый",
    href: "#buy",
    highlight: false,
  },
  {
    id: 2,
    name: "С сопровождением",
    description: "Личная обратная связь по технике",
    price: 9900,
    oldPrice: 12500,
    features: [
      "Вводная лекция по анатомии тазового дна",
      "8 тренировок с подробными инструкциями",
      "Чекап для самодиагностики",
      "Ответы на вопросы",
      "Разбор техники упражнений",
      "Сопровождение в течение 2 недель курса",
    ],
    cta: "Купить с сопровождением",
    href: "#buy",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <div id="buy" className="bg-black px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Стоимость</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Выбери свой<br />
            <span className="text-neutral-500">формат</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 mb-12">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p className="text-white text-sm font-medium">Скидка 20% действует до конца набора</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-800">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 lg:p-12 flex flex-col justify-between gap-10 ${plan.highlight ? "bg-white" : "bg-neutral-950"}`}
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className={`text-xs uppercase tracking-[0.25em] mb-1 ${plan.highlight ? "text-neutral-500" : "text-neutral-500"}`}>
                      Тариф {plan.id}
                    </p>
                    <h3 className={`text-2xl lg:text-3xl font-bold whitespace-nowrap ${plan.highlight ? "text-black" : "text-white"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mt-1 ${plan.highlight ? "text-neutral-500" : "text-neutral-500"}`}>
                      {plan.description}
                    </p>
                  </div>
                  {plan.highlight && (
                    <span className="bg-black text-white text-xs uppercase tracking-widest px-3 py-1 font-bold">
                      Хит
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-3 mb-8">
                  {plans[0].features.map((f, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm ${plan.highlight ? "text-neutral-700" : "text-neutral-400"}`}>
                      <span className={`mt-0.5 text-xs ${plan.highlight ? "text-black" : "text-neutral-500"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                  {plan.features.slice(plans[0].features.length).map((f, i) => (
                    <li key={`extra-${i}`} className={`flex items-start gap-3 text-sm font-semibold ${plan.highlight ? "text-black" : "text-white"}`}>
                      <span className={`mt-0.5 text-xs ${plan.highlight ? "text-black" : "text-white"}`}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-6">
                  <p className={`text-sm line-through mb-1 ${plan.highlight ? "text-neutral-400" : "text-neutral-600"}`}>
                    {plan.oldPrice.toLocaleString("ru-RU")} ₽
                  </p>
                  <p className={`text-5xl lg:text-6xl font-bold leading-none ${plan.highlight ? "text-black" : "text-white"}`}>
                    {plan.price.toLocaleString("ru-RU")} ₽
                  </p>
                </div>
                <a
                  href={plan.href}
                  className={`block text-center py-4 text-sm uppercase tracking-widest font-bold transition-colors duration-300 ${
                    plan.highlight
                      ? "bg-black text-white hover:bg-neutral-800"
                      : "bg-white text-black hover:bg-neutral-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}