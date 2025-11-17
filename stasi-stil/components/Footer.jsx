export default function Footer({ lang }) {

  const h3Message = lang === 'bg' ? 'Стаси Стил' : 'Stasi Stil';
  const rightsMessage = lang === 'bg' ? 'Стаси Стил. Всички права запазени.' : 'Stasi Stil. All rights reserved.'

    return (
      <footer className="w-full bg-gradient-to-t from-black/90 to-black/70 text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Контакти и социални линкове */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Ляво: Контакти */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-[#b4ac77] mb-2">{h3Message}</h3>
              <div className="flex flex-col space-y-1 text-sm">
                <a href="tel:0897892885" className="hover:text-[#d4c57f] transition-colors flex items-center gap-1">
                  📞 0897 892 885
                </a>
                <a href="mailto:stanislava.anastasova6@gmail.com" className="hover:text-[#d4c57f] transition-colors flex items-center gap-1">
                  ✉️ stanislava.anastasova6@gmail.com
                </a>
              </div>
            </div>
  
            {/* Дясно: Социални линкове */}
            <div className="flex space-x-4">
              <a 
              href="https://www.facebook.com/people/Стасистил/100057262727008/"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#b4ac77] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.77l-.44 2.89h-2.33v6.99c4.78-.75 8.44-4.89 8.44-9.88z"/></svg>
              </a>
            </div>
          </div>
  
          {/* Линия и авторско право */}
          <div className="border-t border-[#b4ac77] my-4 opacity-50"></div>
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} {rightsMessage}
          </p>
        </div>
      </footer>
    );
  }
  