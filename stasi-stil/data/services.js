const services = {
    bg: [
        {
            id: 1,
            title: "Фризьорски услуги",
            description: `Подстригване, оформяне и поддръжка за всички дължини. Включва консултация, измиване и финално оформяне.`,
            img: "/services/hairdo.jpeg",
            alt: "Фризьорски услуги",
            prices: [
                { type: "Дамско подстригване", price: "30 BGN/15.34€" },
                { type: "Подстригване бретон", price: "5 BGN/2.57€" },
                { type: "Мъжко подстригване", price: "30 BGN/15.34€" },
                { type: "Подстригване с машинка", price: "20 BGN/10.23€" },
                {
                    type: "Мъжко измиване и стилизране след подстригване",
                    price: "15 BGN/7.67€",
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
                        short: "50 BGN/25.56€",
                        medium: "60 BGN/30.68€",
                        long: "70 BGN/35.79€",
                    },
                },
                {
                    type: "Бодисване TINTA / Artistique",
                    byLength: {
                        short: "50 BGN/25.56€",
                        medium: "60 BGN/30.68€",
                        long: "70 BGN/35.79€",
                    },
                },
                {
                    type: "Бодисване SO PURE",
                    byLength: {
                        short: "60 BGN/30.68€",
                        medium: "70 BGN/35.79€",
                        long: "80 BGN/40.90€",
                    },
                },
                {
                    type: "Бодисване с боя на клиента",
                    byLength: {
                        short: "25 BGN/12.78€",
                        medium: "35 BGN/17.90€",
                        long: "45 BGN/23.01€",
                    },
                },
                {
                    type: "Боя на коса с блондор",
                    byLength: {
                        short: "70 BGN/35.79€",
                        medium: "90 BGN/46.02€",
                        long: "110 BGN/56.24€",
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
                        short: "60 BGN/30.68€",
                        medium: "80 BGN/40.90€",
                        long: "110 BGN/56.24€",
                    },
                },
                {
                    type: "Допълнителен цвят TINTA/SEMI",
                    price: "60 BGN/30.68€",
                },
                {
                    type: "Допълнителен цвят SO PURE",
                    price: "80 BGN/40.90€",
                },
                {
                    type: "Матиране с обливка",
                    price: "30 BGN/15.34€",
                },
                {
                    type: "Студено къдрене",
                    byLength: {
                        short: "70 BGN/35.79€",
                        medium: "90 BGN/46.02€",
                        long: "110 BGN/56.24€",
                    },
                },
            ],
        },
        {
            id: 4,
            title: "Прически",
            description: `Официални и ежедневни прически - плитки, букли, кокове и персонализирани решения за специални поводи.`,
            img: "/services/hairstyle.jpeg",
            alt: "Прически",
            prices: [
                {
                    type: "Сешоар с четка",
                    byLength: {
                        short: "20 BGN/10.23€",
                        medium: "30 BGN/15.34€",
                        long: "40 BGN/20.45€",
                    },
                },
                {
                    type: "Сешоар с четка и преса",
                    byLength: {
                        short: "25 BGN/12.78€",
                        medium: "35 BGN/17.90€",
                        long: "45 BGN/23.01€",
                    },
                },
                {
                    type: "Къдрици с преса",
                    byLength: {
                        short: "-",
                        medium: "40 BGN/20.45€",
                        long: "60 BGN/30.68€",
                    },
                },
                {
                    type: "Официална прическа",
                    price: "100 BGN/51.13€",
                },
            ],
        },
    ],
    en: [
        {
            id: 1,
            title: "Hairdressing Services",
            description: `Haircuts, styling, and maintenance for all lengths. Includes consultation, washing, and final styling.`,
            img: "/services/hairdo.jpeg",
            alt: "Hairdressing Services",
            prices: [
                { type: "Women's Haircut", price: "30 BGN/15.34€" },
                { type: "Bangs Trim", price: "5 BGN/2.57€" },
                { type: "Men's Haircut", price: "30 BGN/15.34€" },
                { type: "Clipper Cut", price: "20 BGN/10.23€" },
                {
                    type: "Men's Wash & Style after Haircut",
                    price: "15 BGN/7.67€",
                },
            ],
        },
        {
            id: 2,
            title: "Coloring",
            description: `Full or partial coloring — solid color, ombre, balayage. High-quality professional dyes and hair care.`,
            img: "/services/haircolor.jpg",
            alt: "Coloring",
            prices: [
                {
                    type: "SEMI / Artistique Coloring",
                    byLength: {
                        short: "50 BGN/25.56€",
                        medium: "60 BGN/30.68€",
                        long: "70 BGN/35.79€",
                    },
                },
                {
                    type: "TINTA / Artistique Coloring",
                    byLength: {
                        short: "50 BGN/25.56€",
                        medium: "60 BGN/30.68€",
                        long: "70 BGN/35.79€",
                    },
                },
                {
                    type: "SO PURE Coloring",
                    byLength: {
                        short: "60 BGN/30.68€",
                        medium: "70 BGN/35.79€",
                        long: "80 BGN/40.90€",
                    },
                },
                {
                    type: "Client's Own Hair Dye",
                    byLength: {
                        short: "25 BGN/12.78€",
                        medium: "35 BGN/17.90€",
                        long: "45 BGN/23.01€",
                    },
                },
                {
                    type: "Hair Dye with Blondor",
                    byLength: {
                        short: "70 BGN/35.79€",
                        medium: "90 BGN/46.02€",
                        long: "110 BGN/56.24€",
                    },
                },
            ],
        },
        {
            id: 3,
            title: "Highlights",
            description: `Highlight techniques (with or without foil) for natural or dramatic results, with care for hair health.`,
            img: "/services/highlights.jpg",
            alt: "Highlights",
            prices: [
                {
                    type: "Highlights",
                    byLength: {
                        short: "60 BGN/30.68€",
                        medium: "80 BGN/40.90€",
                        long: "110 BGN/56.24€",
                    },
                },
                {
                    type: "Additional Color TINTA/SEMI",
                    price: "60 BGN/30.68€",
                },
                {
                    type: "Additional Color SO PURE",
                    price: "80 BGN/40.90€",
                },
                {
                    type: "Toning with Rinse",
                    price: "30 BGN/15.34€",
                },
                {
                    type: "Cold Perm",
                    byLength: {
                        short: "70 BGN/35.79€",
                        medium: "90 BGN/46.02€",
                        long: "110 BGN/56.24€",
                    },
                },
            ],
        },
        {
            id: 4,
            title: "Hairstyles",
            description: `Formal and everyday hairstyles — braids, curls, updos, and customized solutions for special occasions.`,
            img: "/services/hairstyle.jpeg",
            alt: "Hairstyles",
            prices: [
                {
                    type: "Blow-dry with Brush",
                    byLength: {
                        short: "20 BGN/10.23€",
                        medium: "30 BGN/15.34€",
                        long: "40 BGN/20.45€",
                    },
                },
                {
                    type: "Blow-dry with Brush & Flat Iron",
                    byLength: {
                        short: "25 BGN/12.78€",
                        medium: "35 BGN/17.90€",
                        long: "45 BGN/23.01€",
                    },
                },
                {
                    type: "Curls with Iron",
                    byLength: {
                        short: "-",
                        medium: "40 BGN/20.45€",
                        long: "60 BGN/30.68€",
                    },
                },
                {
                    type: "Formal Hairstyle",
                    price: "100 BGN/51.13€",
                },
            ],
        },
    ],
};

export function getServices(lang = 'bg'){
    return services[lang] || services.bg
}