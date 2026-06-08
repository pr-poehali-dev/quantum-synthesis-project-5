export default function Offer() {
  return (
    <div className="bg-neutral-950 min-h-screen px-6 py-16 text-neutral-300">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-10 inline-block">
          ← Назад
        </a>
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Публичная оферта</h1>
        <p className="text-neutral-500 text-sm mb-10">Договор об оказании информационных услуг</p>

        <div className="flex flex-col gap-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">1. Общие положения</h2>
            <p>Настоящий документ является публичной офертой ИП Малявина Георгия (ИНН 311405879114), далее «Исполнитель», и содержит все существенные условия договора об оказании информационных услуг в форме онлайн-курса.</p>
            <p className="mt-2">Акцептом настоящей оферты является факт оплаты услуг Исполнителя. С момента оплаты договор считается заключённым.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">2. Предмет договора</h2>
            <p>Исполнитель обязуется предоставить Покупателю доступ к онлайн-курсу «Мужское здоровье», включающему:</p>
            <ul className="list-disc list-inside mt-2 flex flex-col gap-1 text-neutral-400">
              <li>Вводную лекцию по анатомии тазового дна</li>
              <li>8 тренировочных видеоуроков</li>
              <li>Чекап для самодиагностики</li>
              <li>Ответы на вопросы в формате текстовой переписки</li>
              <li>Для тарифа «С сопровождением»: разбор техники упражнений и сопровождение в течение 2 недель</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">3. Стоимость и оплата</h2>
            <p>Стоимость услуг указана на сайте на момент оформления заказа. Оплата производится через платёжный сервис в рублях РФ. Обязательство по оплате считается исполненным с момента поступления денежных средств на счёт Исполнителя.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">4. Порядок предоставления услуг</h2>
            <p>Доступ к материалам курса предоставляется в течение 24 часов с момента подтверждения оплаты. Материалы направляются в мессенджер или на контактные данные, указанные Покупателем при оплате.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">5. Возврат денежных средств</h2>
            <p>Покупатель вправе отказаться от услуг и получить возврат денежных средств в полном объёме до момента предоставления доступа к материалам курса.</p>
            <p className="mt-2">После предоставления доступа к материалам возврат денежных средств не производится, так как услуга считается оказанной (ст. 782 ГК РФ, ст. 32 Закона РФ «О защите прав потребителей»).</p>
            <p className="mt-2">По вопросам возврата обращаться в Telegram: <a href="https://t.me/george_bmchn" className="text-white underline hover:text-neutral-400 transition-colors" target="_blank" rel="noopener noreferrer">@george_bmchn</a></p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">6. Права и обязанности сторон</h2>
            <p className="text-neutral-400 mb-2">Исполнитель обязуется:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 text-neutral-400 mb-4">
              <li>Предоставить доступ к материалам курса в установленные сроки</li>
              <li>Отвечать на вопросы Покупателя в разумные сроки</li>
            </ul>
            <p className="text-neutral-400 mb-2">Покупатель обязуется:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 text-neutral-400">
              <li>Использовать материалы курса исключительно в личных целях</li>
              <li>Не копировать, не распространять и не передавать материалы третьим лицам</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">7. Интеллектуальная собственность</h2>
            <p>Все материалы курса являются интеллектуальной собственностью Исполнителя. Любое воспроизведение, копирование или распространение без письменного согласия Исполнителя запрещено.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">8. Ответственность</h2>
            <p>Материалы курса носят информационный характер и не являются медицинским назначением. При наличии заболеваний необходима консультация врача. Исполнитель не несёт ответственности за последствия самостоятельного применения материалов без консультации специалиста.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">9. Контактные данные</h2>
            <p>ИП Малявин Георгий</p>
            <p className="text-neutral-500">ИНН: 311405879114</p>
            <p className="mt-2">Telegram: <a href="https://t.me/george_bmchn" className="text-white underline hover:text-neutral-400 transition-colors" target="_blank" rel="noopener noreferrer">@george_bmchn</a></p>
          </section>

          <p className="text-neutral-600 text-xs pt-4 border-t border-neutral-800">Дата публикации: июнь 2026 г.</p>
        </div>
      </div>
    </div>
  );
}
