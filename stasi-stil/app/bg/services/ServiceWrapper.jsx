"use client"

import { usePathname } from "next/navigation";
import ServicesCard from '@/components/ServicesCard'

export default function ServiceWrapper(){

    const pathname = usePathname();
    const lang = pathname.startsWith('/bg') ? 'bg' : 'en';

    return <ServicesCard lang={lang} />
}