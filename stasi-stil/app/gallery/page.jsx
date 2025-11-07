"use client";
import GallerySection from "@/components/GallerySection";
import {
    haircolorPhotos,
    haircutPhotos,
    hairstylePhotos,
} from "@/data/galleryPhotos";
import Image from "next/image";

export default function GalleryPage() {
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
                />

                {/* === Section 2 === */}
               <GallerySection
                    title="Боядисване и кичури"
                    photos={haircolorPhotos}
                />

                {/* === Section 3 === */}
               <GallerySection 
                    title="Подстригване"
                    photos={haircutPhotos}
                />
            </div>
        </section>
    );
}
