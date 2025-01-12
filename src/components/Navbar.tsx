"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/Men' },
    { name: 'Women', href: '/Women' },
    { name: 'Teens', href: '/Teens' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { handleCartClick } = useShoppingCart();

    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Next<span className="text-primary">Commerce</span>
                    </h1>
                </Link>
               
                {/* Navbar Links for Desktop */}
                <nav
                    className={`lg:flex gap-8 ${isOpen ? 'block' : 'hidden'} lg:block`}
                >
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link
                                    className="text-lg font-semibold text-primary"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link
                                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
               {/* Cart Button */}
               <div className="flex divide-x sm:divide-x-0 border-r sm:border-l">
                    <Button
                        variant="outline"
                        onClick={() => handleCartClick()}
                        className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:w-24 rounded-none"
                    >
                        <ShoppingBag />
                        <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                            Cart
                        </span>
                    </Button>
                </div>
                  {/* Mobile Menu Button */}
              <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}
