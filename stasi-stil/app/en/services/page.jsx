import ServiceWrapper from './ServiceWrapper';

export const metadata = {
  title: 'Services | STASI STIL HAIR SALON'
};

export default function ServicesPage() {
  
 
    return (
      <section className="relative bg-black/40 py-16 sm:py-28 bg-[url('/contacts2.jpg')] bg-cover bg-repeat bg-center" id="services">
        <div className="absolute inset-0 -z-10 backdrop-blur-sm"></div>
        
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Заглавие */}
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-[#b4ac77] text-3xl sm:text-5xl p-5">
              Our services
            </h2>
            <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-white/80">
            Professional care and a personalized approach — explore our offerings.
            </p>
          </div>
  
          {/* Client component */}
         <ServiceWrapper />
  
          <div className="mt-16 text-center">
            <p className="text-white/70 text-lg">
            Looking for a personalized service or package? Get in touch with us — we’re happy to help!
            </p>
          </div>
        </div>
      </section>
    );
  }
  