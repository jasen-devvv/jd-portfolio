"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
    const pathname = usePathname()

    const navItems = [
        { name: 'HOME', href: '/home'},
        { name: 'ABOUT', href: '/about'},
        { name: 'PROJECTS', href: '/projects'},
        { name: 'TIMELINE', href: '/timeline'},
        { name: 'CONTACT', href: '/contact'},
    ]

    return (
        <nav className="bg-white-2 z-[999] relative w-full px-3 md:w-[40rem] md:mx-auto md:rounded-full shadow-black-sb">
            <ul className="flex flex-wrap md:flex-nowrap justify-evenly py-3 md:mt-5 text-black-1">
                {navItems.map((item) => (
                    <li key={item.name} className={`${pathname === item.href ? 'bg-primary text-white-1 rounded-full' : ''} py-1 sm:py-2 px-2 md:px-4`}><Link className="text-center font-latoBold" href={item.href}>{item.name}</Link></li>
                ))} 
            </ul>
        </nav>
    )
}