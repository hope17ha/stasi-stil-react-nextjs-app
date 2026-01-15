import ServiceWrapper from "./ServiceWrapper";

export const metadata = {
    title: "Services | STASI STIL HAIR SALON",
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
                        Our services
                    </h2>
                    <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-white/80">
                        Professional care and a personalized approach — explore
                        our offerings.
                    </p>
                </div>

                <div className="mb-16 mx-auto max-w-4xl space-y-6 rounded-2xl bg-black/50 p-6 sm:p-8 backdrop-blur-md border border-white/10">
                    <h3 className="text-center text-2xl sm:text-3xl font-semibold text-[#b4ac77]">
                        Current Promotions
                    </h3>

                    <div className="space-y-4 text-white/90 text-base sm:text-lg">
                        <p>
                            <span className="font-semibold text-[#b4ac77]">
                                🎉 Loyalty Promotion:
                            </span>{" "}
                            Until the end of January, all returning clients of
                            the salon receive a special discount on service
                            prices. For more information, please contact us
                            using the provided methods or visit us directly at
                            the salon.
                        </p>

                        <p>
                            <span className="font-semibold text-[#b4ac77]">
                                ✂️ Multiple Services Offer:
                            </span>{" "}
                            When more than two services are used by one person
                            during a single visit, a special discount is applied
                            to the total price. For more information, please
                            contact us using the provided methods or visit us
                            directly at the salon.
                        </p>
                    </div>
                </div>

                {/* Client component */}
                <ServiceWrapper />

                <div className="mt-16 text-center">
                    <p className="text-white/70 text-lg">
                        Looking for a personalized service or package? Get in
                        touch with us — we’re happy to help!
                    </p>
                </div>
            </div>
        </section>
    );
}
