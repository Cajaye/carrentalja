"use client";
import Link from "next/link";
import { Open_Sans } from 'next/font/google'

import { UserCircleIcon } from "@heroicons/react/24/outline"
import NavLinks from "./nav-links";

const font= Open_Sans({
  subsets:["latin"]    
})

export default function Nav() {
    return (
        <div className="flex items-center justify-between p-4">
            <div>
                <h1 className={`${font.className} font-bold text-xl`}>Car Rental JA</h1>
            </div>

            <div>
                <NavLinks/>
            </div>

            <div>
                 <Link href="profile">
                    <div className="flex items-center bg-sky-500 hover:bg-sky-700 rounded-lg px-3 py-2 text-white">
                        <p className="text-sm leading-5 font-semibold">Profile</p>
                        <UserCircleIcon className="h-6 w-6 ml-2"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}