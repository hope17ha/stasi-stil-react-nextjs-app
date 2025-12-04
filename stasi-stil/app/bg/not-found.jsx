export default function Custom404() {

    return (
        
      <main className="relative min-h-screen overflow-hidden text-white pt-20 flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <img
            src="/hero4.png.png"
            alt="Not Found Background"
            className="w-full h-full object-cover object-[40%_15%]"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
  
        <section className="relative z-10 max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 drop-shadow-xl animate-fade-in">
            404
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md animate-fade-in delay-200">
            Страницата, която търсите, не съществува или е преместена.
          </p>
  
          <a
            href="/bg"
            className="inline-block bg-transparent border border-white/70 hover:bg-white/20 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 animate-fade-in delay-300"
          >
            Обратно към началната страница
          </a>
        </section>
  
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
  