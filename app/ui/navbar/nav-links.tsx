"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
    
]

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-center">
            {links.map((link) => {
                    return (
                        <Link key={link.name} href={link.href} className="mr-12">
                    <div>
                        <p className={`${pathname === link.href ? "bg-sky-100 text-blue-600 font-semibold" : ""} p-2 rounded-lg text-sm`}>{ link.name }</p>
                    </div>
                </Link>
                    )
                }) 
                }
        </div>
    )
}