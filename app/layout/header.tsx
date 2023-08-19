import Image from "next/image";
import Link from "next/link";

export default function Header() {

    let Links = [
        { name: "Kurslar", link: "/courses" },
        { name: "Blog", link: "/blog" },
        // { name: "Kirish", link: "https://go.najottalim.uz/auth/login" },
    ];

    return (
        <header className="bg-lightgraysh w-full h-20 fixed z-50">
            <nav className="container max-w-1100 py-4 flex justify-between items-center">
                <div>
                    <Link href='/' >
                        <Image src='/images/logo.svg' alt="logo" height={46} width={214} />
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center">
                        {Links.map((link) => (
                            <li
                                key={link.name}
                                className={`pl-12 text-base md:my-0 `}
                            >
                                <Link
                                    href={link.link}
                                    className="text-black hover:underline"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pl-14 text-base md:my-0">
                            <button type="button" className="text-black border border-white bg-white hover:border-orange focus:outline-none rounded-full text-sm px-10 py-2.5 text-center transition ">
                                <Link href={'https://go.najottalim.uz/auth/login'}>
                                    Kirish
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
