"use client";

import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "@/components/LanguageSwitcher"; 

export default function Header({ lang }) {

    const [isOpen, setIsOpen] = useState(false);

    const navigationOptions = lang === 'bg' ? [  
        { label: "Начало", href: "/bg" },
        { label: "За нас", href: "/bg/about" },
        { label: "Услуги", href: "/bg/services" },
        { label: "Галерия", href: "/bg/gallery" },
        { label: "Контакти", href: "/bg/contacts" },
        { label: "Отзиви", href: "/bg/reviews" }
    ]
    :
    [
        { label: "Home", href: "/en" },
        { label: "About Us", href: "/en/about" },
        { label: "Services", href: "/en/services" },
        { label: "Gallery", href: "/en/gallery" },
        { label: "Contacts", href: "/en/contacts" },
        { label: "Reviews", href: "/en/reviews" }
    ];


    const ctaLabel = lang === 'bg' ? 'Запази час' : 'Book an appointment';

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all  
        ${isOpen ? 'bg-black backdrop-none' : 'bg-gradient-to-b from-black/95 via-black/90 to-black/70 backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between">
                {/* Logo */}
                <a href={lang === 'bg' ? '/bg' : '/en'} className="flex items-center">
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
                    {navigationOptions.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="relative px-2 py-1 border-b-2 border-transparent hover:border-[#b4ac77] hover:text-[#b4ac77] transition-all duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Right side buttons: Language Switch + CTA */}
                <div className="hidden md:flex items-center space-x-4">


                    {/* CTA */}
                    <a
                        href={lang === 'bg' ? '/bg' : '/en'}
                        className="bg-[#b4ac77] text-black font-medium py-1.5 px-5 rounded-full shadow-md hover:bg-[#9f9246] hover:shadow-lg transition-all duration-300 text-base"
                    >
                        {ctaLabel}
                    </a>
                    {/* Language Switch */}
                    <div className="flex space-x-2 text-white font-medium">
                    <LanguageSwitcher currentLang={lang} />
                    </div>
                </div>

                  {/* Mobile Menu Button */}
                  <button onClick={() => setIsOpen(true)} className="md:hidden text-white text-3xl">
                    <HiMenu />
                </button>
            </div>

            {/* Fade bottom */}
            <div className="absolute bottom-[-8px] left-0 w-full h-[8px] bg-gradient-to-b from-black/80 to-transparent" />

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer (Right Panel) */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-black border-l border-[#b4ac77] px-6 py-8 flex flex-col space-y-8 transition-transform duration-300  z-50 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="self-end text-white text-3xl">
                    <HiX />
                </button>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-6 text-xl text-white font-medium">
                    {navigationOptions.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-[#b4ac77] transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button inside drawer */}
                <a
                    href={lang === 'bg' ? '/bg' : '/en'}
                    onClick={() => setIsOpen(false)}
                    className="bg-[#b4ac77] text-black text-center font-medium py-2 rounded-full hover:bg-[#9f9246] transition-all"
                >
                    {ctaLabel}
                </a>
            <div className="flex space-x-4 justify-center text-white pt-4 text-lg">
            <LanguageSwitcher currentLang={lang} />
                
                </div>
            </div>
         

            {/* Fade ефект под хедъра */}
            <div className="absolute bottom-[-8px] left-0 w-full h-[8px] bg-gradient-to-b from-black/80 to-transparent"></div>
        </header>
    );
}
