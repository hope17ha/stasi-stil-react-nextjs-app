import Image from "next/image";

export const metadata = {
    title: 'Home Page | STASI STIL HAIR SALON'
};

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden text-white pt-20">

            <div className="absolute inset-0">
                <Image
                    src="/hero4.png.png"
                    alt="Hero"
                    fill
                    style={{ objectFit: "cover", objectPosition: "40% 15%" }}
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black/25"></div>
            </div>

            {/* Background overlay с blur ефект */}
            <div className="absolute inset-0 bg-black/25"></div>

            {/* Hero секция */}
            <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-30">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg animate-fade-in">
                <span className="text-accent">Welcome to</span>
                {" "}
                <span className="text-accent">Stasi Stil !</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in delay-200">
                A professional hair salon where beauty and style meet. Highlight your individuality with care and attention to every detail.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="/en/about"
                        className="bg-transparent border border-white/70 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                    >
                        Learn more about us
                    </a>

                    <a
                        href="/en/services"
                        className="bg-transparent border border-white/70 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                    >
                        See our services
                    </a>
                    <a
                        href="#"
                        className="bg-transparent border border-white/70 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                    >
                       Book an appointment
                    </a>
                </div>
            </section>

            {/* Soft wave transition */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(150%+1.3px)] h-[100px]"
                >
                    <path
                        d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
                        className="fill-light"
                    ></path>
                </svg>
            </div>
        </main>
    );
}
