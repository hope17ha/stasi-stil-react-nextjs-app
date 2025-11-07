import ServicesCard from '@/components/ServicesCard';

export const metadata = {
  title: 'Фризьорски услуги | СТАСИ СТИЛ ФРИЗЬОРСКИ САЛОН'
};

export default function ServicesPage() {
    return (
      <section className="relative bg-black/40 py-28 bg-[url('/contacts2.jpg')] bg-cover bg-repeat bg-center" id="services">
        <div className="absolute inset-0 -z-10 backdrop-blur-sm"></div>
        
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
  
          {/* Картички */}
          <ServicesCard />
  
          <div className="mt-16 text-center">
            <p className="text-white/70 text-lg">
              Искате персонализирана услуга или пакет? Свържете се с нас — радваме се да помогнем!
            </p>
          </div>
        </div>
      </section>
    );
  }
  