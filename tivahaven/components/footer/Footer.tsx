import Link from "next/link"


export default function Footer() {

    return (
        <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Baking Bliss</h3>
            <Link href="#" prefetch={false}>
              Home
            </Link>
            <Link href="#" prefetch={false}>
              About
            </Link>
            <Link href="#" prefetch={false}>
              Gallery
            </Link>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>
        </div>
      </footer>
    );
}