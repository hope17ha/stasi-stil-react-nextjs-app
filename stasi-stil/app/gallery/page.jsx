"use client";
import GallerySection from "@/components/GallerySection";
import {
    haircolorPhotos,
    haircutPhotos,
    hairstylePhotos,
} from "@/data/galleryPhotos";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {

    const [selectedImage, setSelectedImage] = useState(null);

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
                    onClickPhoto={setSelectedImage}
                />

                {/* === Section 2 === */}
               <GallerySection
                    title="Боядисване и кичури"
                    photos={haircolorPhotos}
                    onClickPhoto={setSelectedImage}
                />

                {/* === Section 3 === */}
               <GallerySection 
                    title="Подстригване"
                    photos={haircutPhotos}
                    onClickPhoto={setSelectedImage}
                />
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-3xl w-full p-4" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Expanded"
                            width={1200}
                            height={1200}
                            className="rounded-2xl shadow-xl object-contain"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-[#b4ac77] transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
