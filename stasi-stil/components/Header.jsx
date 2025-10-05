
export default function Header() {
  return (
  <>
    <header className="bg-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex items-center justify-between">
                {/* <!-- Logo Section --> */}
                <div className="flex-shrink-0">
                    <a href="#" className="text-2xl font-bold">Стаси Стил </a>
                </div>

                {/* <!-- Navigation Menu --> */}
                <nav className="hidden md:flex space-x-10 text-lg">
                    <a href="#" className="hover:text-gray-300 transition-all">Начало</a>
                    <a href="#services" className="hover:text-gray-300 transition-all">Услуги</a>
                    <a href="#about" className="hover:text-gray-300 transition-all">За нас</a>
                    <a href="#gallery" className="hover:text-gray-300 transition-all">Галерия</a>
                    <a href="#contact" className="hover:text-gray-300 transition-all">Контакти</a>
                </nav>

                {/* <!-- Call-to-Action Button --> */}
                <div className="hidden md:block">
                    <a href="#contact" className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all">
                       Свържи се с нас
                    </a>
                </div>

                {/* <!-- Mobile Menu Button (for smaller screens) --> */}
                <div className="md:hidden flex items-center">
                    <button id="menu-button" className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* <!-- Mobile Navigation Menu --> */}
            <div id="mobile-menu" className="md:hidden mt-5 hidden space-y-4">
                <a href="#" className="block text-lg hover:text-gray-300 transition-all">Home</a>
                <a href="#services" className="block text-lg hover:text-gray-300 transition-all">Services</a>
                <a href="#about" className="block text-lg hover:text-gray-300 transition-all">About Us</a>
                <a href="#contact" className="block text-lg hover:text-gray-300 transition-all">Contact</a>
            </div>
        </div>
    </header>
    </>
  );
}
