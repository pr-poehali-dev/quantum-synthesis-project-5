export default function Author() {
  return (
    <div className="min-h-screen bg-neutral-950 px-6 py-20 lg:py-32 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          <div className="flex gap-4 lg:gap-6 flex-shrink-0">
            <div className="w-48 h-64 lg:w-64 lg:h-80 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/9031e067-34a5-4f19-a06a-2f8833265d0f/bucket/7a4ae1f0-5709-466c-a7ef-2a8131eca5d8.jpg"
                alt="Малявин Георгий"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-36 h-48 lg:w-48 lg:h-64 overflow-hidden mt-16">
              <img
                src="https://cdn.poehali.dev/projects/9031e067-34a5-4f19-a06a-2f8833265d0f/bucket/a0676fc6-6de1-4c63-a2c1-19b9aad7abd7.jpg"
                alt="Малявин Георгий тренировка"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
