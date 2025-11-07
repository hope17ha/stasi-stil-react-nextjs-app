
import Image  from "next/image";

export default function GallerySection({title, photos}) {
    return (

        <div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#b4ac77] mb-8 text-center">
            {title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((src, i) => {
                return (
                    <div
                        key={i}
                        className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-[#b4ac77]/30"
                    >
                        <Image
                            src={src}
                            alt={`Hairstyle photo ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                );
            })}
        </div>
        </div>
    )
}