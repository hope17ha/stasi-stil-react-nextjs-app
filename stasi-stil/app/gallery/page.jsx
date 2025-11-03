"use client";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <section className="relative min-h-screen py-24 bg-black/40 flex flex-col items-center" id="gallery">
      {/* Background */}
      <div className="absolute inset-0 -z-10 backdrop-blur-sm">
        <Image
          src="/contacts2.jpg"
          alt="Salon background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 text-white space-y-24">
        {/* === Section 1 === */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#b4ac77] mb-8 text-center">
            Подстригване
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Примерен елемент */}
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-[#b4ac77]/30">
              <Image
                src="/about/personal-1.jpeg"
                alt="Personal photo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
          </div>
        </div>

        {/* === Section 2 === */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#b4ac77] mb-8 text-center">
            Боядиване и кичури
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-[#b4ac77]/30">
              <Image
                src="/about/seminar-1.jpeg"
                alt="Seminar photo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* === Section 3 === */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#b4ac77] mb-8 text-center">
            Официални прически
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-[#b4ac77]/30">
              <Image
                src="/about/salon-1.jpeg"
                alt="Salon photo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}