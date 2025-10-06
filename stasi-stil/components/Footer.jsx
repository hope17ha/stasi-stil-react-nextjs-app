export default function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-pink-900/80 backdrop-blur-md text-white z-50 shadow-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Контакти */}
          <div className="space-y-1">
            <p className="text-sm font-medium tracking-wide">Стаси Стил</p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="tel:0888123456" className="hover:text-yellow-400 transition-colors">
                📞 0888 123 456
              </a>
              <span className="opacity-50">|</span>
              <a href="mailto:stanislava.anastasova6@gmail.com" className="hover:text-yellow-400 transition-colors">
                ✉️ stanislava.anastasova6@gmail.com
              </a>
            </div>
          </div>
  
          {/* Линия и авторско право */}
          <div className="border-t border-pink-700 my-2 opacity-40"></div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Стаси Стил. Всички права запазени.
          </p>
        </div>
      </footer>
    );
  }
  