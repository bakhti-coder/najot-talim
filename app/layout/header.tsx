'use client'
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

    let Links = [
        { name: "Kurslar", link: "/courses" },
        { name: "Blog", link: "/blog" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <header className="bg-lightgraysh w-full h-20 fixed z-50">
            <nav className="container max-w-1100 py-4 flex justify-between items-center">
                <div className="z-50">
                    <Link href='/' >
                        <Image src='/images/logo.svg' alt="logo" height={46} width={214} />
                    </Link>
                </div>
                <div>
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl absolute right-0 top-0 cursor-pointer md:hidden z-30 mt-2  "
                    >
                        <Hamburger toggled={open} toggle={setOpen} />
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 md:pt-0 pt-20 absolute md:static md:bg-white bg-white z-10 md:z-auto left-0 w-full h-64 text-center md:h-[0] md:w-auto pl-0 transition-all duration-500 ease-in ${open ? "top-0 " : "top-[-330px]"
                        }`}>
                        {Links.map((link) => (
                            <li
                                onClick={e => setOpen(false)}
                                key={link.name}
                                className={` text-base pl-0 pb-10 md:pb-0 md:pl-14`}
                            >
                                <Link
                                    href={link.link}
                                    className="text-black hover:underline"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        <p className="pl-0 ps-0 md:pl-14 md:ps-5 text-base  md:ml-8  my-0 md:my-7 ">
                            <button onClick={e => setOpen(false)} type="button" className="bg-orange hover:bg-white border-orange  md:text-black border md:border-white md:bg-white md:hover:border-orange focus:outline-none rounded-full text-sm px-10 py-2.5 text-center transition ">
                                <Link href={'https://go.najottalim.uz/auth/login'}>
                                    Kirish
                                </Link>
                            </button>
                        </p>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
