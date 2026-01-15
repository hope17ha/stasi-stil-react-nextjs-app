import ServiceWrapper from "@/app/en/services/ServiceWrapper";

export const metadata = {
    title: "Фризьорски услуги | СТАСИ СТИЛ ФРИЗЬОРСКИ САЛОН",
};

export default function ServicesPage() {
    return (
        <section
            className="relative bg-black/40 py-16 sm:py-28 bg-[url('/contacts2.jpg')] bg-cover bg-repeat bg-center"
            id="services"
        >
            <div className="absolute inset-0 -z-10 backdrop-blur-sm"></div>

            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Заглавие */}
                <div className="mb-16 text-center">
                    <h2 className="font-heading mb-4 font-bold tracking-tight text-[#b4ac77] text-3xl sm:text-5xl p-5">
                        Нашите услуги
                    </h2>
                    <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-white/80">
                        Професионални грижи и индивидуален подход — разгледайте
                        нашите предложения.
                    </p>
                </div>

                <div className="mb-16 mx-auto max-w-4xl space-y-6 rounded-2xl bg-black/50 p-6 sm:p-8 backdrop-blur-md border border-white/10">
                    <h3 className="text-center text-2xl sm:text-3xl font-semibold text-[#b4ac77]">
                        Актуални промоции
                    </h3>

                    <div className="space-y-4 text-white/90 text-base sm:text-lg">
                        <p>
                            <span className="font-semibold text-[#b4ac77]">
                                🎉 Промоция за постоянни клиенти:
                            </span>{" "}
                            До края на януари всички постоянни клиенти на салона
                            получават специална отстъпка в цената. За повече
                            информация, моля свържете се с нас по посочените
                            начини или елате на място в салона.
                        </p>

                        <p>
                            <span className="font-semibold text-[#b4ac77]">
                                ✂️ Комбинирани услуги:
                            </span>{" "}
                            При ползване на повече от две услуги от едно лице
                            при едно посещение – специална отстъпка в цената. За
                            повече информация, моля свържете се с нас по
                            посочените начини или елате на място в салона.
                        </p>
                    </div>
                </div>

                {/* Client component */}
                <ServiceWrapper />

                <div className="mt-16 text-center">
                    <p className="text-white/70 text-lg">
                        Искате персонализирана услуга или пакет? Свържете се с
                        нас — радваме се да помогнем!
                    </p>
                </div>
            </div>
        </section>
    );
}
