export default function Author() {
  return (
    <div className="min-h-screen bg-neutral-950 px-6 py-20 lg:py-32 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          <div className="flex-shrink-0">
            <div className="w-64 h-80 lg:w-80 lg:h-[480px] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/9031e067-34a5-4f19-a06a-2f8833265d0f/bucket/84e68ad8-02e0-4dfb-a9d0-ffaa4f41f911.jpg"
                alt="Малявин Георгий"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="text-white flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Автор курса</p>
            <h2 className="text-4xl lg:text-6xl font-bold mb-2 leading-none">Малявин</h2>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-none text-neutral-400">Георгий</h2>

            <div className="flex gap-8 mb-10 border-t border-neutral-800 pt-8">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-white">7+</p>
                <p className="text-neutral-500 text-sm mt-1">лет в сфере<br />фитнеса</p>
              </div>
              <div className="border-l border-neutral-800 pl-8">
                <p className="text-3xl lg:text-4xl font-bold text-white">1000+</p>
                <p className="text-neutral-500 text-sm mt-1">человек прошли<br />через меня</p>
              </div>
            </div>

            <p className="text-neutral-300 text-lg lg:text-xl leading-relaxed max-w-xl">
              Фитнес-тренер, специалист по движению и восстановлению.
              Для меня важно, чтобы движение приносило человеку{" "}
              <span className="text-white font-semibold">понимание и удовольствие</span>,
              а не страх и дискомфорт.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}