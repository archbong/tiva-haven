import { CakeIcon } from "lucide-react";
import Link from "next/link"


export default function Navbar() {

    return (
        <header className="bg-background px-4 lg:px-6 h-14 flex items-center shadow-sm">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CakeIcon className="h-6 w-6" />
          <span className="sr-only">Baking Bliss</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Gallery
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
    );
}