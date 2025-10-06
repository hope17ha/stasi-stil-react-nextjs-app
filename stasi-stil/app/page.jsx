export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-pink-700 to-accent text-white">
      {/* Background overlay with smooth blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      {/* Hero section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg animate-fade-in">
          Добре дошли в <span className="text-accent">Стаси Стил</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in delay-200">
          Професионален фризьорски салон, където красотата и стилът се срещат.
          Подчертайте своята индивидуалност с грижа и внимание към всеки детайл.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="bg-accent text-dark font-semibold py-3 px-8 rounded-full shadow-glow hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Виж услугите
          </a>

          <a
            href="#contact"
            className="bg-transparent border border-white/70 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Свържи се с нас
          </a>
        </div>
      </section>

      {/* Soft wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="relative block w-[calc(150%+1.3px)] h-[100px]"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            className="fill-light"
          ></path>
        </svg>
      </div>
    </main>
  );
}
