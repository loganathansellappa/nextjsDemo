"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";

const routes = [
    { name: "Home", path: "/" },
    { name: "All Events", path: "/events/all" },
];

export default function Header() {
    const activePathName = usePathname();
    return (<header className={"flex items-center justify-between border-b border-white/10 h-14 px-3 md:px-9 sm:px-9"}>
        <Logo />
        <nav className={"h-full"}>
            <ul className={"flex gap-x-6 text-sm h-full"}>
                {
                    routes.map((route) => (
                        <li key={route.name} className={cn("relative hover:text-white transition flex items-center", {
                            "text-white": route.path === activePathName,
                            "text-white/50": route.path !== activePathName,
                        })
                        }>

                            <Link href={route.path}>{route.name}</Link>
                            {
                                route.path === activePathName && <motion.div layoutId={'header-active-link'} className={"h-1 w-full absolute bg-accent bottom-0"}/>

                            }

                        </li>))
                }
            </ul>
        </nav>

    </header>);
}