"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/photo1.jpeg", alt: "Nós juntos", aspect: "portrait" },
  { src: "/images/photo2.jpeg", alt: "Você", aspect: "portrait" },
  { src: "/images/photo3.jpeg", alt: "Nós", aspect: "portrait" },
  { src: "/images/photo4.jpeg", alt: "Um beijo", aspect: "portrait" },
  { src: "/images/photo5.jpeg", alt: "Amor", aspect: "portrait" },
  { src: "/images/photo6.jpeg", alt: "Reencontro", aspect: "portrait" },
];

export default function PhotoGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A1410 0%, #110e0b 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <p className="font-body text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.3em" }}>
          Memórias
        </p>
        <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, color: "var(--off-white)", fontStyle: "italic" }}>
          Os momentos que guardo
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            className="relative overflow-hidden"
            style={{
              aspectRatio: "3/4",
              border: "1px solid rgba(201,169,110,0.12)",
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Overlay gradient */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "linear-gradient(135deg, rgba(26,20,16,0.3) 0%, transparent 50%, rgba(201,169,110,0.08) 100%)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="font-script text-center mt-12"
        style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", color: "var(--rose-gold)", opacity: 0.7 }}
      >
        cada momento, um tesouro
      </motion.p>
    </section>
  );
}
