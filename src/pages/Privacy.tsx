export default function Privacy() {
  return (
    <div className="bg-neutral-950 min-h-screen px-6 py-16 text-neutral-300">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-10 inline-block">
          ← Назад
        </a>
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Политика конфиденциальности</h1>
        <p className="text-neutral-500 text-sm mb-10">Обработка персональных данных</p>

        <div className="flex flex-col gap-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">1. Общие положения</h2>
            <p>Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей сайта, осуществляемой ИП Малявиным Георгием (ИНН 311405879114), далее «Оператор».</p>
            <p className="mt-2">Используя сайт и оплачивая услуги, вы соглашаетесь с условиями настоящей Политики.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">2. Какие данные мы собираем</h2>
            <p className="text-neutral-400 mb-2">При оплате курса и использовании сайта могут собираться:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 text-neutral-400">
              <li>Имя и фамилия</li>
              <li>Адрес электронной почты</li>
              <li>Номер телефона (при указании)</li>
              <li>Данные мессенджера (Telegram)</li>
              <li>Технические данные: IP-адрес, тип браузера, страницы посещений</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">3. Цели обработки данных</h2>
            <ul className="list-disc list-inside flex flex-col gap-1 text-neutral-400">
              <li>Предоставление доступа к приобретённым материалам курса</li>
              <li>Связь с Покупателем по вопросам оказания услуг</li>
              <li>Обработка платежей и возвратов</li>
              <li>Улучшение качества сервиса</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">4. Передача данных третьим лицам</h2>
            <p>Персональные данные не передаются третьим лицам, за исключением:</p>
            <ul className="list-disc list-inside mt-2 flex flex-col gap-1 text-neutral-400">
              <li>Платёжных сервисов для обработки транзакций</li>
              <li>Случаев, предусмотренных законодательством РФ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">5. Хранение данных</h2>
            <p>Персональные данные хранятся в течение срока, необходимого для исполнения договора, и не более 3 лет после его окончания, если иное не предусмотрено законодательством РФ.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">6. Права пользователя</h2>
            <p className="text-neutral-400 mb-2">Вы имеете право:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 text-neutral-400">
              <li>Получить информацию об обрабатываемых персональных данных</li>
              <li>Потребовать исправления неточных данных</li>
              <li>Потребовать удаления данных (право на забвение)</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
            <p className="mt-3">Для реализации прав обращайтесь в Telegram: <a href="https://t.me/george_bmchn" className="text-white underline hover:text-neutral-400 transition-colors" target="_blank" rel="noopener noreferrer">@george_bmchn</a></p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">7. Cookies</h2>
            <p>Сайт использует файлы cookie для корректной работы и анализа посещаемости. Продолжая использовать сайт, вы соглашаетесь с использованием cookies. Вы можете отключить cookies в настройках браузера.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">8. Контактные данные</h2>
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
