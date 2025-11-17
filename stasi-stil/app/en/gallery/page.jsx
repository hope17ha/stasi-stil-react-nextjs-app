"use client";
import GallerySection from "@/components/GallerySection";
import {
    haircolorPhotos,
    haircutPhotos,
    hairstylePhotos,
} from "@/data/galleryPhotos";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryPage() {
    const allPhotos = [
        ...hairstylePhotos,
        ...haircolorPhotos,
        ...haircutPhotos,
    ];
    const [selectedIndex, setSelectedIndex] = useState(null);

    const prevPhoto = () => {
        setSelectedIndex(
            (selectedIndex + allPhotos.length - 1) % allPhotos.length
        );
    };

    const nextPhoto = () => {
        setSelectedIndex((selectedIndex + 1) % allPhotos.length);
    };

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === "Escape") {
                setSelectedIndex(null);
            } else if (e.key === "ArrowLeft") {
                prevPhoto();
            } else if (e.key === "ArrowRight") {
                nextPhoto();
            }
        };

        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    }, [selectedIndex]);

    return (
        <section
            className="relative min-h-screen py-24 bg-black/40 flex flex-col items-center"
            id="gallery"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10 backdrop-blur-sm">
                <Image
                    src="/contacts2.jpg"
                    alt="Salon background"
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl px-6 text-white space-y-24">
                {/* === Section 1 === */}
                <GallerySection
                    title="Прически"
                    photos={hairstylePhotos}
                    onClickPhoto={(index) => setSelectedIndex(index)}
                />

                {/* === Section 2 === */}
                <GallerySection
                    title="Боядисване и кичури"
                    photos={haircolorPhotos}
                    onClickPhoto={(index) => setSelectedIndex(index)}
                />

                {/* === Section 3 === */}
                <GallerySection
                    title="Подстригване"
                    photos={haircutPhotos}
                    onClickPhoto={(index) => setSelectedIndex(index)}
                />
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setSelectedIndex(null)}
                >
                    <div
                        className="relative max-w-3xl w-full p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={allPhotos[selectedIndex]}
                            alt="Expanded"
                            width={1200}
                            height={1200}
                            className="rounded-2xl shadow-xl object-contain"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-[#b4ac77] transition-colors"
                            onClick={() => setSelectedIndex(null)}
                        >
                            ×
                        </button>
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-2 hover:text-[#b4ac77] transition-colors"
                            onClick={prevPhoto}
                        >
                            ‹
                        </button>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-2 hover:text-[#b4ac77] transition-colors"
                            onClick={nextPhoto}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
