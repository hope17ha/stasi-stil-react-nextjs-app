const services = {
    bg: [
        {
            id: 1,
            title: "Фризьорски услуги",
            description: `Подстригване, оформяне и поддръжка за всички дължини. Включва консултация, измиване и финално оформяне.`,
            img: "/services/hairdo.jpeg",
            alt: "Фризьорски услуги",
            prices: [
                { type: "Дамско подстригване", price: "20€" },
                { type: "Подстригване бретон", price: "5€" },
                { type: "Мъжко подстригване", price: "20€" },
                { type: "Подстригване с машинка", price: "15€" },
                {
                    type: "Мъжко измиване и стилизране след подстригване",
                    price: "10€",
                },
            ],
        },
        {
            id: 2,
            title: "Боядисване",
            description: `Пълно или частично боядисване — едноцветно, омбре, балеаж. Качествени професионални багрила и грижа за косата.`,
            img: "/services/haircolor.JPG",
            alt: "Боядисване",
            prices: [
                {
                    type: "Бодисване SEMI / Artistique",
                    byLength: {
                        short: "30€",
                        medium: "35€",
                        long: "40€",
                    },
                },
                {
                    type: "Бодисване TINTA / Artistique",
                    byLength: {
                        short: "30€",
                        medium: "35€",
                        long: "40€",
                    },
                },
                {
                    type: "Бодисване SO PURE",
                    byLength: {
                        short: "35€",
                        medium: "40€",
                        long: "45€",
                    },
                },
                {
                    type: "Бодисване с боя на клиента",
                    byLength: {
                        short: "15€",
                        medium: "20€",
                        long: "25€",
                    },
                },
                {
                    type: "Боя на коса с блондор",
                    byLength: {
                        short: "40€",
                        medium: "50€",
                        long: "60€",
                    },
                },
            ],
        },
        {
            id: 3,
            title: "Кичури",
            description: `Технологии за кичури (фолио/без фолио) за естествен или драматичен резултат, с внимание към здравето на косата.`,
            img: "/services/highlights.JPG",
            alt: "Кичури",
            prices: [
                {
                    type: "Кичури",
                    byLength: {
                        short: "45€",
                        medium: "50€",
                        long: "60€",
                    },
                },
                {
                    type: "Допълнителен цвят TINTA/SEMI",
                    price: "35€",
                },
                {
                    type: "Допълнителен цвят SO PURE",
                    price: "45€",
                },
                {
                    type: "Матиране с обливка",
                    price: "20€",
                },
                {
                    type: "Студено къдрене",
                    byLength: {
                        short: "40€",
                        medium: "50€",
                        long: "60€",
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
                        short: "15€",
                        medium: "20€",
                        long: "25€",
                    },
                },
                {
                    type: "Сешоар с четка и преса",
                    byLength: {
                        short: "20€",
                        medium: "25€",
                        long: "30€",
                    },
                },
                {
                    type: "Къдрици с преса",
                    byLength: {
                        short: "-",
                        medium: "25€",
                        long: "35€",
                    },
                },
                {
                    type: "Официална прическа",
                    price: "60€",
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
                { type: "Women's Haircut", price: "20€" },
                { type: "Bangs Trim", price: "5€" },
                { type: "Men's Haircut", price: "20€" },
                { type: "Clipper Cut", price: "15€" },
                {
                    type: "Men's Wash & Style after Haircut",
                    price: "10€",
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
                        short: "30€",
                        medium: "35€",
                        long: "40€",
                    },
                },
                {
                    type: "TINTA / Artistique Coloring",
                    byLength: {
                        short: "30€",
                        medium: "35€",
                        long: "40€",
                    },
                },
                {
                    type: "SO PURE Coloring",
                    byLength: {
                        short: "35€",
                        medium: "40€",
                        long: "45€",
                    },
                },
                {
                    type: "Client's Own Hair Dye",
                    byLength: {
                        short: "15€",
                        medium: "20€",
                        long: "25€",
                    },
                },
                {
                    type: "Hair Dye with Blondor",
                    byLength: {
                        short: "40€",
                        medium: "50€",
                        long: "60€",
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
                        short: "45€",
                        medium: "50€",
                        long: "60€",
                    },
                },
                {
                    type: "Additional Color TINTA/SEMI",
                    price: "35€",
                },
                {
                    type: "Additional Color SO PURE",
                    price: "45€",
                },
                {
                    type: "Toning with Rinse",
                    price: "20€",
                },
                {
                    type: "Cold Perm",
                    byLength: {
                        short: "40€",
                        medium: "50€",
                        long: "60€",
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
                        short: "15€",
                        medium: "20€",
                        long: "25€",
                    },
                },
                {
                    type: "Blow-dry with Brush & Flat Iron",
                    byLength: {
                        short: "20€",
                        medium: "25€",
                        long: "30€",
                    },
                },
                {
                    type: "Curls with Iron",
                    byLength: {
                        short: "-",
                        medium: "25€",
                        long: "35€",
                    },
                },
                {
                    type: "Formal Hairstyle",
                    price: "60€",
                },
            ],
        },
    ],
};

export function getServices(lang = 'bg'){
    return services[lang] || services.bg
}