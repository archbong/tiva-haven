"use client"

import { useState } from 'react';
import { CakeIcon, MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { NavMenu } from './NavMenu';
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center shadow-sm text-gold">
      <div className="flex items-center justify-between w-full">
        <Link href="#" className="flex items-center" prefetch={false}>
          <CakeIcon className="h-6 w-6" />
          <span className="sr-only">Tivas Haven</span>
        </Link>
        <button
          className="lg:hidden text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
        <motion.nav
         animate={isMenuOpen ? "open" : "close"}
         variants={variants}
         className={`lg:flex gap-4 sm:gap-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          {NavMenu.map((menu) => (
            <Link key={menu.id} href={menu.path} className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              {menu.title}
            </Link>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}
