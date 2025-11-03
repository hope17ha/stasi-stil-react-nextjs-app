import Image from "next/image";
import { salonPhotos, seminarPhotos, personalPhotos } from '@/data/aboutPhotos'

export default function AboutPage() {
    

    return (
        <section className="relative min-h-screen pt-24 bg-black/40" id="about">
            <div className="absolute inset-0 -z-10 backdrop-blur-sm">
                <div
                    className="relative w-full h-full"
                    // style={{
                    //     backgroundImage: "url('/contacts2.jpg')",
                    //     backgroundRepeat: "repeat",
                    //     backgroundSize: "600px 600px",
                    //     backgroundPosition: "center",
                    // }}
                >
                    <Image
                        src="/contacts2.jpg"
                        alt="About Stasi Stil"
                        fill
                        style={{
                            objectFit: "contain",
                            objectPosition: "30% 50%",
                        }}
                        quality={100}
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 text-white">
                <div className="mb-12 text-center">
                    <h2 className="font-heading mb-6 text-3xl sm:text-5xl font-bold text-[#b4ac77]">
                        За нас
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-white/80">
                        Красотата е вдъхновение, което започва от теб.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Лява част – снимка */}
                    <div className="relative w-full h-[650px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/about-main.jpeg"
                            alt="Stasi Stil Salon"
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "20% 20%",
                            }}
                            className="rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Дясна част – текст */}
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            <span className="text-[#b4ac77] font-semibold">
                                Салон „Стаси Стил“
                            </span>{" "}
                            отваря врати през май 2001 г. с мисия да създава
                            красота, увереност и индивидуален стил чрез силата
                            на прическата. Основател и водещ стилист е{" "}
                            <span className="font-semibold text-[#b4ac77]">
                                Станислава Анастасова
                            </span>{" "}
                            – майстор фризьор с дългогодишен опит и страст към
                            детайла.
                        </p>

                        <p>
                            В салона се предлагат висококачествени услуги –
                            подстригване, колористика (включително тон върху
                            тон, тотален блонд, кичури, балеаж), терапии за
                            коса, къдрене, сешоар, официални прически и
                            професионални продукти за домашна грижа.
                        </p>

                        <p>
                            Станислава непрекъснато усъвършенства уменията си,
                            като има сертификати от{" "}
                            <span className="italic text-[#b4ac77]">
                                Keune Academy (Холандия), Sassoon Academy
                                (Лондон), Artistique, American Crew Barber
                                Class, Christian of Roma
                            </span>{" "}
                            и други водещи академии. 
                        </p>
                        <p>Притежава{" "}
                            <span className="font-semibold text-[#b4ac77]">
                                Майсторско свидетелство
                            </span>{" "}
                            от Националната занаятчийска камара на Република
                            България.
                            </p>
                        <p>
                            Позитивна и приятелски настроена, тя вярва, че
                            добрата визия започва с доверие и индивидуален
                            подход. В „Стаси Стил“ ще откриете професионализъм,
                            уют и атмосфера, в която ще се почувствате
                            специални.
                        </p>
                    </div>
                </div>

                {/* Галерия / долен акцент */}
                <section className="mt-20 space-y-16">
                    {/* 1️⃣ Лични моменти */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#b4ac77] mb-6 text-center">
                            Лични моменти
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {personalPhotos.map((src, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="relative h-[32rem] rounded-2xl overflow-hidden group"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Лична снимка ${i + 1}`}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* 2️⃣ Семинари и обучения */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#b4ac77] mb-6 text-center">
                            Семинари и обучения
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {seminarPhotos.map((src, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="relative h-[32rem] rounded-2xl overflow-hidden group"
                                    >
                                        <img
                                            src={src}
                                            alt={`Снимка от семинар ${i + 1}`}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* 3️⃣ Салонът „Стаси Стил“ */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[#b4ac77] mb-6 text-center">
                            Салонът „Стаси Стил“
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {salonPhotos.map((src, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="relative h-[32rem] rounded-2xl overflow-hidden group"
                                    >
                                        <img
                                            src={src}
                                            alt={`Снимка на салона ${i + 1}`}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}
