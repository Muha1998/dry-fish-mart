"use client"

import Link from "next/link"
import { Phone, Mail, Facebook, Instagram } from "lucide-react"

export default function Footer() {
    const links = [
        { name: "Home", link: "/" },
        { name: "Offers", link: "/offers" },
        { name: "Receipes", link: "/receipes" },
        { name: "Contact", link: "/contact" },
    ]

    return (
        <footer className="mt-16 border-t bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

                {/* Brand */}
                <div className="space-y-3">
                    <h2 className="text-xl font-bold">
                        කරවල කඩේ
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Premium quality Sri Lankan dry fish. Fresh, authentic, and delivered with care.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        {links.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.link}
                                    className="text-sm text-muted-foreground hover:text-primary transition"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact + Social */}
                <div className="space-y-3">
                    <h3 className="font-semibold mb-3">Contact</h3>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone size={16} />
                        <span>+94 77 123 4567</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail size={16} />
                        <span>info@ceylondryfish.lk</span>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4 pt-2">
                        <Link href="https://wa.me/94771234567" target="_blank">
                            <span className="p-2 rounded-full border hover:bg-green-500/10 transition">
                                🟢
                            </span>
                        </Link>

                        <Link href="https://instagram.com" target="_blank">
                            <span className="p-2 rounded-full border hover:bg-pink-500/10 transition">
                                <Instagram size={18} />
                            </span>
                        </Link>

                        <Link href="https://facebook.com" target="_blank">
                            <span className="p-2 rounded-full border hover:bg-blue-500/10 transition">
                                <Facebook size={18} />
                            </span>
                        </Link>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t py-4 text-center text-xs text-muted-foreground">
                © CEYLON Dry Fish Mart. All rights reserved.
            </div>
        </footer>
    )
}