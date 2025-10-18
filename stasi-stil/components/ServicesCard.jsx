export default function ServicesCard() {
    const services = [
        {
            id: 1,
            title: "Фризьорски услуги",
            description: `Подстригване, оформяне и поддръжка за всички дължини. Включва консултация, измиване и финално оформяне.`,
            img: "/services/hairdo.jpeg",
            alt: "Фризьорски услуги",
            prices: [
                { type: "Дамско подстригване", price: "30 лв/15.34€" },
                { type: "Подстригване бретон", price: "5 лв/2.57€" },
                { type: "Мъжко подстригване", price: "30 лв/15.34€" },
                { type: "Подстригване с машинка", price: "20 лв/10.23€" },
                {
                    type: "Мъжко измиване и стилизране след подстригване",
                    price: "15 лв/7.67€",
                },
            ],
        },
        {
            id: 2,
            title: "Боядисване",
            description: `Пълно или частично боядисване — едноцветно, омбре, балаяж. Качествени професионални багрила и грижа за косата.`,
            img: "/services/haircolor.jpg",
            alt: "Боядисване",
            prices: [
                {
                    type: "Бодисване SEMI / Artistique",
                    byLength: {
                        short: "50 лв/25.56€",
                        medium: "60 лв/30.68€",
                        long: "70 лв/35.79€",
                    },
                },
                {
                    type: "Бодисване TINTA / Artistique",
                    byLength: {
                        short: "50 лв/25.56€",
                        medium: "60 лв/30.68€",
                        long: "70 лв/35.79€",
                    },
                },
                {
                    type: "Бодисване SO PURE",
                    byLength: {
                        short: "60 лв/30.68€",
                        medium: "70 лв/35.79€",
                        long: "80 лв/40.90€",
                    },
                },
                {
                    type: "Бодисване с боя на клиента",
                    byLength: {
                        short: "25 лв/12.78€",
                        medium: "35 лв/17.90€",
                        long: "45 лв/23.01€",
                    },
                },
                {
                    type: "Боя на коса с блондор",
                    byLength: {
                        short: "70 лв/35.79€",
                        medium: "90 лв/46.02€",
                        long: "110 лв/56.24€",
                    },
                },
            ],
        },
        {
            id: 3,
            title: "Кичури",
            description: `Технологии за кичури (фолио/без фолио) за естествен или драматичен резултат, с внимание към здравето на косата.`,
            img: "/services/highlights.jpg",
            alt: "Кичури",
            prices: [
                {
                    type: "Кичури",
                    byLength: {
                        short: "60 лв/30.68€",
                        medium: "80 лв/40.90€",
                        long: "110 лв/56.24€",
                    },
                },
                {
                    type: "Допълнителен цвят TINTA/SEMI",
                    price: "60 лв/30.68€",
                },
                {
                    type: "Допълнителен цвят SO PURE",
                    price: "80 лв/40.90€",
                },
                {
                    type: "Матиране с обливка",
                    price: "30 лв/15.34€",
                },
                {
                    type: "Студено къдрене",
                    byLength: {
                        short: "70 лв/35.79€",
                        medium: "90 лв/46.02€",
                        long: "110 лв/56.24€",
                    },
                },
            ],
        },
        {
            id: 4,
            title: "Прически",
            description: `Официални и ежедневни прически - плитки, букли, кокове и персонализирани решения за специални поводи.`,
            img: "/services/hairstyle.jpg",
            alt: "Прически",
            prices: [
                {
                    type: "Сешоар с четка",
                    byLength: {
                        short: "20 лв/10.23€",
                        medium: "30 лв/15.34€",
                        long: "40 лв/20.45€",
                    },
                },
                {
                    type: "Сешоар с четка и преса",
                    byLength: {
                        short: "25 лв/12.78€",
                        medium: "35 лв/17.90€",
                        long: "45 лв/23.01€",
                    },
                },
                {
                    type: "Къдрици с преса",
                    byLength: {
                        short: "-",
                        medium: "40 лв/20.45€",
                        long: "60 лв/30.68€",
                    },
                },
                {
                    type: "Официална прическа",
                    price: "100 лв/51.13€",
                },
                
            ],
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
                                <button className="inline-block rounded-full border border-[#b4ac77] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#b4ac77] hover:text-black">
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
