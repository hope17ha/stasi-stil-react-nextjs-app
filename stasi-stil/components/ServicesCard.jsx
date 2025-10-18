"use client";
import { useState } from "react";
import { services } from '../data/services.js'

export default function ServicesCard() {
    
    const [openMoreId, setOpenMore] = useState(null);

    return (
        <div>
          {services.map((s, idx) => {
            const isReverse = idx % 2 === 1;
            return (
              <div key={s.id} className="mb-16">
                
                <article
                  className={`flex flex-col md:flex-row ${
                    isReverse ? "md:flex-row-reverse" : ""
                  } items-center bg-gradient-to-br from-black/60 to-black/30 border border-gray-400 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-in-out`}
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
                      <button
                        onClick={() =>
                          setOpenMore(openMoreId === s.id ? null : s.id)
                        }
                        className="inline-block rounded-full border border-[#b4ac77] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#b4ac77] hover:text-black"
                      >
                        {openMoreId === s.id
                          ? "Скрий подробности"
                          : "Научи повече"}
                      </button>
                    </div>
                  </div>
                </article>
    
                
                <div
                  className={`transition-[max-height,opacity,margin-top] duration-700 ease-in-out overflow-hidden ${
                    openMoreId === s.id
                      ? "max-h-[1000px] opacity-100 mt-6"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                   
                  <ul className="text-white/90 space-y-3 px-10 py-8 bg-black/40 rounded-3xl border border-gray-700 shadow-inner w-full">
                    {s.prices.map((price, i) => (
                      <li
                        key={i}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-3"
                      >
                        <span className="text-lg">{price.type}</span>
                        {price.byLength ? (
                          <div className="flex justify-between sm:gap-10 text-[#b4ac77] font-semibold mt-2 sm:mt-0 text-sm sm:text-base">
                            <span>Къса: {price.byLength.short}</span>
                            <span>Средна: {price.byLength.medium}</span>
                            <span>Дълга: {price.byLength.long}</span>
                          </div>
                        ) : (
                          <span className="text-[#b4ac77] font-semibold text-base sm:text-lg mt-2 sm:mt-0">
                            {price.price}
                          </span>
                        )}
                         
                      </li>
                      
                    ))}
                    <p className="text-[#b4ac77]/90 text-sm md:text-base leading-relaxed mt-6 border-t border-[#b4ac77]/30 pt-4 italic">
                        Цените включват свободно изсушаване и стилизиране на косата. 
                        Всички цени са в български лева/евро, с включено ДДС за 1 брой услуга.
                         Цената за боядисване е за един брой опаковка или за една доза.</p>
                  </ul>
                </div>
              </div> 
            );
          })}
        </div>
      );
    }