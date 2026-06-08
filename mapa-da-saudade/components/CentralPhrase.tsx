"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CentralPhrase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A1410 0%, #110e0b 50%, #1A1410 100%)" }}
    >
      {/* Decorative rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.06)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        className="absolute"
        style={{
          width: 350,
          height: 350,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.08)",
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8"
      >
        <div style={{ width: 1, height: 60, background: "linear-gradient(180deg, transparent, var(--gold))", margin: "0 auto" }} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.8em" }}
        animate={inView ? { opacity: 0.6, letterSpacing: "0.4em" } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="font-body text-xs uppercase mb-8 relative z-10"
        style={{ color: "var(--gold)", letterSpacing: "0.4em" }}
      >
        Para você
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="font-display relative z-10 mb-4"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "var(--off-white)",
        }}
      >
        A distância mede
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ color: "var(--rose-gold)" }}
          className="italic"
        >
          quilômetros.
        </motion.span>
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 1.4 }}
        style={{ width: 80, height: 1, background: "var(--gold)", margin: "1.5rem auto", opacity: 0.5 }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="font-display relative z-10"
        style={{
          fontSize: "clamp(2rem, 7vw, 4rem)",
          fontWeight: 300,
          lineHeight: 1.2,
          color: "var(--champagne)",
        }}
      >
        Nunca{" "}
        <span className="font-script" style={{ color: "var(--rose-gold)", fontSize: "1.4em" }}>
          amor.
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 2.4 }}
        className="relative z-10 mt-8"
      >
        <div style={{ width: 1, height: 60, background: "linear-gradient(180deg, var(--gold), transparent)", margin: "0 auto" }} />
      </motion.div>
    </section>
  );
}
