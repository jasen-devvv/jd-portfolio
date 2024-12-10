"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
    const pathname = usePathname()

    const navItems = [
        { name: 'Home', href: '/home'},
        { name: 'About', href: '/about'},
        { name: 'Projects', href: '/projects'},
        { name: 'Timeline', href: '/timeline'},
        { name: 'Contact', href: '/contact'},
    ]

    return (
        <nav className="bg-blue-500 z-[999] relative w-full lg:w-8/12 lg:mx-auto lg:rounded-full shadow-black-sb">
            <ul className="flex justify-evenly py-3 lg:px-10 lg:mt-5 text-white-1">
                {navItems.map((item) => (
                    <li key={item.name} className={`${pathname === item.href ? 'bg-blue-50 text-black-1 rounded-full' : ''} py-1 lg:px-5 w-16 lg:w-40 text-center`}><Link className="lato-large lato-bold" href={item.href}>{item.name}</Link></li>
                ))}
            </ul>
        </nav>
    )
}