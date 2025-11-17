"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname(); 
  const router = useRouter();

  const lang = pathname.startsWith("/bg") ? "bg" : "en";

  const toggleLang = () => {
    let newPath;
    if (lang === "bg") {
      newPath = pathname.replace(/^\/bg/, "/en");
    } else {
      newPath = pathname.replace(/^\/en/, "/bg");
    }
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLang}
      className="ml-4 px-3 py-1 border rounded text-white hover:bg-white/10 transition"
    >
      {lang === "bg" ? "EN" : "BG"}
    </button>
  );
}
