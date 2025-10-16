export default function ServicesCard() {
    const services = [
        {
            id: 1,
            title: "Фризьорски услуги",
            description: `Подстригване, оформяне и поддръжка за всички дължини. Включва консултация, измиване и финално оформяне.`,
            img: "/services/hairdo.jpeg",
            alt: "Фризьорски услуги",
        },
        {
            id: 2,
            title: "Боядисване",
            description: `Пълно или частично боядисване — едноцветно, омбре, балаяж. Качествени професионални багрила и грижа за косата.`,
            img: "/services/haircolor.jpg",
            alt: "Боядисване",
        },
        {
            id: 3,
            title: "Кичури",
            description: `Технологии за кичури (фолио/без фолио) за естествен или драматичен резултат, с внимание към здравето на косата.`,
            img: "/services/highlights.jpg",
            alt: "Кичури",
        },
        {
            id: 4,
            title: "Прически",
            description: `Официални и ежедневни прически - плитки, букли, кокове и персонализирани решения за специални поводи.`,
            img: "/services/hairstyle.jpg",
            alt: "Прически",
        },
    ];

    return (
        <div>
            {services.map((s, idx) => {
                const isReverse = idx % 2 === 1;
                return (
                    <article
                        key={s.id}
                        className={`flex flex-col md:flex-row ${isReverse ? "md:flex-row-reverse" : ""} items-center bg-gradient-to-br from-black/60 to-black/30 border border-gray-400 rounded-3xl overflow-hidden shadow-2xl mb-16 hover:scale-[1.02] transition-transform duration-500 ease-in-out`}
                    >
                        <div className="w-full md:w-1/2 lg:w-2/5 h-96 relative flex-shrink-0">
                            <img
                                src={s.img}
                                alt={s.alt}
                                className="absolute inset-0 w-full h-full object-cover rounded-l-3xl md:rounded-none md:rounded-l-3xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-3/5 p-10">
                            <h3 className="text-3xl font-semibold text-[#b4ac77] mb-4">
                                {s.title}
                            </h3>
                            <p className="text-white/80 mb-8 leading-relaxed text-lg">
                                {s.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="inline-block rounded-full bg-white/5 border border-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                                    Научи повече
                                </button>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
