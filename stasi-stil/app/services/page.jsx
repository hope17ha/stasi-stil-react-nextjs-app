import Image from 'next/image';

export default function ServicesPage() {
    return (
      <section className="bg-black/40 py-28" id="services">
        <div className="absolute inset-0 -z-10 backdrop-blur-sm"></div>
        <Image
            src="/contacts2.jpg"
            alt="Salon background"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "30% 50%",
            }}
            quality={100}
            priority
          />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Заглавие */}
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-[#b4ac77] text-3xl sm:text-5xl">
              Нашите услуги
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-white/80">
              Професионални грижи и индивидуален подход — разгледайте нашите предложения.
            </p>
          </div>
  
          {/* Картичка 1 */}
          <article className="flex flex-col md:flex-row items-center bg-gradient-to-br from-black/60 to-black/30 border border-gray-400 rounded-3xl overflow-hidden shadow-2xl mb-16 hover:scale-[1.02] transition-transform duration-500 ease-in-out">
            <div className="w-full md:w-1/2 lg:w-2/5 h-96 relative flex-shrink-0">
              <img
                src="/services/hairdo.jpeg"
                alt="Фризьор прави подстригване"
                className="absolute inset-0 w-full h-full object-cover rounded-l-3xl md:rounded-none md:rounded-l-3xl"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 p-10">
              <h3 className="text-3xl font-semibold text-[#b4ac77] mb-4">
                Фризьорски услуги
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                Подстригване, оформяне и поддръжка за всички дължини. Включва консултация, измиване и финално оформяне.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="inline-block rounded-full bg-white/5 border border-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  Научи повече
                </button>
              </div>
            </div>
          </article>
  
          {/* Картичка 2 (обърната) */}
          <article className="flex flex-col md:flex-row-reverse items-center bg-gradient-to-bl from-black/60 to-black/30 border border-gray-400 rounded-3xl overflow-hidden shadow-2xl mb-16 hover:scale-[1.02] transition-transform duration-500 ease-in-out">
            <div className="w-full md:w-1/2 lg:w-2/5 h-96 relative flex-shrink-0">
              <img
                src="/services/haircolor.jpg"
                alt="Стайлинг и боядисване на коса"
                className="absolute inset-0 w-full h-full object-cover rounded-r-3xl md:rounded-none md:rounded-r-3xl"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 p-10">
              <h3 className="text-3xl font-semibold text-[#b4ac77] mb-4">Боядисване</h3>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                Пълно или частично боядисване — едноцветно, омбре, балаяж. Качествени професионални багрила и грижа за косата.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="inline-block rounded-full bg-white/5 border border-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  Научи повече
                </button>
              </div>
            </div>
          </article>
  
          {/* Картичка 3 */}
          <article className="flex flex-col md:flex-row items-center bg-gradient-to-br from-black/60 to-black/30 border border-gray-400 rounded-3xl overflow-hidden shadow-2xl mb-16 hover:scale-[1.02] transition-transform duration-500 ease-in-out">
            <div className="w-full md:w-1/2 lg:w-2/5 h-96 relative flex-shrink-0">
              <img
                src="/services/highlights.jpg"
                alt="Кичури с фолио"
                className="absolute inset-0 w-full h-full object-cover rounded-l-3xl md:rounded-none md:rounded-l-3xl"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 p-10">
              <h3 className="text-3xl font-semibold text-[#b4ac77] mb-4">Кичури</h3>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                Технологии за кичури (фолио/безфолио) за естествен или драматичен резултат, с внимание към здравето на косата.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="inline-block rounded-full bg-white/5 border border-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  Научи повече
                </button>
              </div>
            </div>
          </article>
  
          {/* Картичка 4 (обърната) */}
          <article className="flex flex-col md:flex-row-reverse items-center bg-gradient-to-bl from-black/60 to-black/30 border border-gray-400 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-in-out">
            <div className="w-full md:w-1/2 lg:w-2/5 h-96 relative flex-shrink-0">
              <img
                src="/services/hairstyle.jpg"
                alt="Официална прическа"
                className="absolute inset-0 w-full h-full object-cover rounded-r-3xl md:rounded-none md:rounded-r-3xl"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 p-10">
              <h3 className="text-3xl font-semibold text-[#b4ac77] mb-4">Прически</h3>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                Официални и ежедневни прически — плитки, букли, кокове и персонализирани решения за специални поводи.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="inline-block rounded-full bg-white/5 border border-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  Научи повече
                </button>
              </div>
            </div>
          </article>
  
          <div className="mt-16 text-center">
            <p className="text-white/70 text-lg">
              Искате персонализирана услуга или пакет? Свържете се с нас — радваме се да помогнем!
            </p>
          </div>
        </div>
      </section>
    );
  }
  