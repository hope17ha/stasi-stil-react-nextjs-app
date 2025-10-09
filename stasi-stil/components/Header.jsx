import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/95 via-black/90 to-black/70 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.5)] border-b border-[#b4ac77]/20 transition-all">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Стаси Стил"
                        width={65}
                        height={35}
                        className="hover:opacity-80 transition-opacity duration-300"
                        priority
                    />
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-10 text-xl text-white font-semibold">
                    {[
                        { label: "Начало", href: "/" },
                        { label: "За нас", href: "/about" },
                        { label: "Услуги", href: "/services" },
                        { label: "Галерия", href: "/gallery" },
                        { label: "Контакти", href: "/contacts" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="relative px-2 py-1 border-b-2 border-transparent hover:border-[#b4ac77] hover:text-[#b4ac77] transition-all duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Call-to-Action */}
                <a
                    href="/contacts"
                    className="hidden md:inline-block bg-[#b4ac77] text-black font-medium py-1.5 px-5 rounded-full shadow-md hover:bg-[#9f9246] hover:shadow-lg transition-all duration-300 text-base"
                >
                    Запиши час
                </a>
            </div>

            {/* Fade ефект под хедъра */}
            <div className="absolute bottom-[-8px] left-0 w-full h-[8px] bg-gradient-to-b from-black/80 to-transparent"></div>
        </header>
    );
}
