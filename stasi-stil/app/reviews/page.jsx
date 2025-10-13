import Image from 'next/image';

export default function ReviewPage() {
    return (
        <section className="relative min-h-screen py-24 bg-black/40 flex items-center" id="reviews">

        <div className="absolute inset-0 -z-10 backdrop-blur-sm">
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
        </div>
      
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-white">
          {/* Заглавие */}
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#b4ac77] mb-3">
              Отзивите на нашите клиенти
            </h2>
            <p className="text-white/70 text-lg">
              Вашето мнение ни вдъхновява да бъдем по-добри всеки ден.
            </p>
          </div>
      
          {/* Картичка за отзив */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-[#b4ac77]/30 shadow-lg hover:shadow-[#b4ac77]/40 transition-all duration-500 max-w-3xl mx-auto">
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center space-x-4">
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt="Потребител"
                  className="w-14 h-14 rounded-full object-cover border border-[#b4ac77]/40"
                />
                <div>
                  <h4 className="font-semibold text-[#b4ac77] text-lg">
                    Leroy Jenkins
                  </h4>
                  <span className="text-sm text-gray-300">преди 2 дни</span>
                </div>
              </div>
      
              <div className="flex items-center space-x-1 text-[#b4ac77]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Z"></path>
                </svg>
                <span className="text-lg font-bold">4.5</span>
              </div>
            </div>
      
            <div className="space-y-3 text-gray-200 text-base leading-relaxed">
              <p>
                Прекрасно отношение и професионализъм! Салонът е уютен, а резултатът
                винаги надминава очакванията ми.
              </p>
              <p>
                Благодаря на екипа на{" "}
                <span className="text-[#b4ac77]">Стаси Стил</span> – истински
                майстори на красивата визия!
              </p>
            </div>
          </div>
        </div>
      </section>
      
    )
}