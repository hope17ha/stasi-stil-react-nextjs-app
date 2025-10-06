import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-backdrop-blur-md bg-black/20 text-white fixed top-0 left-0 w-full z-50 shadow-md transition-all">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Стаси Стил"
                        width={80}
                        height={40}
                        className="hover:opacity-80 transition-opacity duration-300"
                        priority
                    />
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-12 text-2xl font-bold">
                    {[
                        { label: "Начало", href: "/" },
                        { label: "Услуги", href: "/services" },
                        { label: "За нас", href: "/about" },
                        { label: "Галерия", href: "/gallery" },
                        { label: "Контакти", href: "/contact" },
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
                    href="#contact"
                    className="hidden md:inline-block bg-[#b4ac77] text-black font-medium py-2 px-6 rounded-full shadow-md hover:bg-[#9f9246] hover:shadow-lg transition-all duration-300 text-lg"
                >
                    Свържи се с нас
                </a>
            </div>
        </header>
    );
}
