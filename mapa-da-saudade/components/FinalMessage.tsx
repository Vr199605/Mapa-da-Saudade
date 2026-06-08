"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import StarField from "./StarField";

interface Particle {
  id: number;
  x: number;
  y: number;
  tx: number;
  color: string;
  size: number;
  duration: number;
}

function ParticleExplosion({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) return;
    const colors = ["#C9A96E", "#C9917A", "#E8D5A3", "#E8BFB0", "#FFF8F0"];
    const newParticles: Particle[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 20,
      y: 60 + (Math.random() - 0.5) * 10,
      tx: (Math.random() - 0.5) * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 3,
      duration: Math.random() * 1.5 + 1,
    }));
    setParticles(newParticles);
    const t = setTimeout(() => setParticles([]), 3000);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, scale: 1, opacity: 1 }}
          animate={{ y: `${p.y - 40}vh`, x: `calc(${p.x}vw + ${p.tx}px)`, scale: 0, opacity: 0 }}
          transition={{ duration: p.duration, ease: "easeOut" }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

export default function FinalMessage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [clicked, setClicked] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setShowFinal(true), 800);
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d0a08 0%, #1A1410 50%, #0f0c0a 100%)" }}
    >
      <StarField count={150} />
      <ParticleExplosion active={clicked} />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto mb-12 overflow-hidden"
          style={{
            width: 220,
            height: 280,
            border: "1px solid rgba(201,169,110,0.3)",
            boxShadow: "0 0 60px rgba(201,169,110,0.15)",
          }}
        >
          <Image
            src="/images/photo3.jpeg"
            alt="Nós dois"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, transparent 60%, rgba(201,169,110,0.15) 100%)" }}
          />
        </motion.div>

        {/* Text lines */}
        {[
          { text: "Obrigado por existir.", delay: 0.4 },
          { text: "Obrigado por caminhar comigo.", delay: 0.7 },
          { text: "Obrigado por acreditar em nós.", delay: 1.0 },
        ].map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: line.delay, duration: 0.8 }}
            className="font-display mb-1"
            style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)", fontWeight: 300, color: "var(--off-white)", fontStyle: "italic" }}
          >
            {line.text}
          </motion.p>
        ))}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
          style={{ width: 60, height: 1, background: "var(--gold)", margin: "1.5rem auto", opacity: 0.5 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="font-display mb-6"
          style={{ fontSize: "clamp(1rem, 3vw, 1.35rem)", fontWeight: 300, color: "var(--champagne)", lineHeight: 1.7 }}
        >
          Você é uma das maiores respostas de oração da minha vida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="font-display italic mb-16"
          style={{ fontSize: "clamp(1rem, 3vw, 1.35rem)", fontWeight: 300, color: "var(--rose-light)", lineHeight: 1.7 }}
        >
          E agora falta pouco. Muito pouco.
          <br />
          Porque em breve a distância deixará de ser tela
          <br />
          e voltará a ser abraço.
        </motion.p>

        {/* Final button */}
        <AnimatePresence>
          {!showFinal && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 2.2 }}
              onClick={handleClick}
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(201,145,122,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="relative px-14 py-5 font-body text-sm uppercase tracking-widest cursor-pointer overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(201,145,122,0.2) 0%, rgba(201,169,110,0.2) 100%)",
                border: "1px solid rgba(201,145,122,0.6)",
                color: "var(--rose-light)",
                letterSpacing: "0.2em",
                fontSize: "0.85rem",
              }}
            >
              Eu te amo ❤️
            </motion.button>
          )}
        </AnimatePresence>

        {/* Final reveal */}
        <AnimatePresence>
          {showFinal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="mb-8"
                style={{ width: 1, height: 60, background: "linear-gradient(180deg, transparent, var(--rose-gold))", margin: "0 auto 2rem" }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.p
                className="font-script"
                style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)", color: "var(--rose-gold)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Até o nosso reencontro.
              </motion.p>
              
              <motion.div
                className="mt-8 flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div style={{ width: 30, height: 1, background: "var(--gold)", opacity: 0.5 }} />
                <span style={{ color: "var(--gold)", fontSize: 18 }}>✦</span>
                <div style={{ width: 30, height: 1, background: "var(--gold)", opacity: 0.5 }} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
