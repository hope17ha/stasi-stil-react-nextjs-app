import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-pink-900/80 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 shadow-md transition-all">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo */}

                <a href="#" className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        alt="Стаси Стил"
                        width={120}
                        height={60}
                        className="hover:opacity-80 transition-all duration-300"
                        priority
                    />
                </a>
                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-10 text-lg">
                    <a
                        href="#"
                        className="hover:text-pink-200 transition-colors duration-300"
                    >
                        Начало
                    </a>
                    <a
                        href="#services"
                        className="hover:text-pink-200 transition-colors duration-300"
                    >
                        Услуги
                    </a>
                    <a
                        href="#about"
                        className="hover:text-pink-200 transition-colors duration-300"
                    >
                        За нас
                    </a>
                    <a
                        href="#gallery"
                        className="hover:text-pink-200 transition-colors duration-300"
                    >
                        Галерия
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-pink-200 transition-colors duration-300"
                    >
                        Контакти
                    </a>
                </nav>

                {/* Call-to-Action */}
                <a
                    href="#contact"
                    className="hidden md:inline-block bg-yellow-400 text-black font-medium py-2 px-6 rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
                >
                    Свържи се с нас
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    id="menu-button"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className="hidden md:hidden flex flex-col items-center bg-pink-800 py-4 space-y-4 text-lg transition-all"
            >
                <a
                    href="#"
                    className="hover:text-pink-200 transition-all duration-200"
                >
                    Начало
                </a>
                <a
                    href="#services"
                    className="hover:text-pink-200 transition-all duration-200"
                >
                    Услуги
                </a>
                <a
                    href="#about"
                    className="hover:text-pink-200 transition-all duration-200"
                >
                    За нас
                </a>
                <a
                    href="#gallery"
                    className="hover:text-pink-200 transition-all duration-200"
                >
                    Галерия
                </a>
                <a
                    href="#contact"
                    className="hover:text-pink-200 transition-all duration-200"
                >
                    Контакти
                </a>
            </div>
        </header>
    );
}
