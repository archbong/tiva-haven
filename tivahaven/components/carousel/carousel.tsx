"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { carouselData } from "./carousel-data";

export default function Carousel() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <section
    className="bg-gradient-to-r glass from-primary to-secondary text-primary-foreground sm:py-32 rounded shadow-3xl">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
         {carouselData.map((item) => (
           <div key={item.id} className="embla__slide">
           <div className="mx-auto md:max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
             <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
               <span className="">Tivas Haven</span>: {item.header}{" "}
               <span className="font-bold text-primary">Moment</span>
             </h1>
             <p className="mt-4 max-w-3xl text-lg sm:text-xl">
              {item.text}
             </p>
             <div className="mt-8 flex gap-4">
               <motion.div
                 whileHover={{
                   scale: 1.2,
                   transition: { duration: 1 },
                 }}
                 whileTap={{ scale: 0.9 }}
               >
                 <Link
                   href={item.linkOne ?? "#"}
                   className="inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                   prefetch={false}
                 >
                   Explore Our Products
                 </Link>
               </motion.div>
               <Link
                 href={item.linkTwo ?? "#"}
                 className="inline-flex items-center justify-center rounded border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                 prefetch={false}
               >
                 Learn More
               </Link>
             </div>
           </div>
         </div>
         ))}
        </div>
      </div>
    </section>
  );
}
