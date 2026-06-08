"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// Target: June 22, 2025 (set your actual reunion date here)
const TARGET_DATE = new Date("2025-06-22T00:00:00");

export default function Countdown() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: "dias" },
    { value: time.hours, label: "horas" },
    { value: time.minutes, label: "minutos" },
    { value: time.seconds, label: "segundos" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 px-4 text-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #110e0b 0%, #1A1410 50%, #110e0b 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            border: "1px solid rgba(201,169,110,0.04)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div style={{ width: 1, height: 50, background: "linear-gradient(180deg, transparent, var(--gold))", margin: "0 auto 2rem" }} />

        <p className="font-body text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.3em" }}>
          Reencontro
        </p>
        
        <h2
          className="font-display italic mb-4"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 300, color: "var(--off-white)" }}
        >
          Cada segundo que passa
        </h2>
        <p
          className="font-display mb-16"
          style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 300, color: "var(--champagne)", opacity: 0.8 }}
        >
          nos aproxima do próximo abraço.
        </p>

        {/* Counter grid */}
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className="relative flex items-center justify-center mb-2"
                style={{
                  width: 80,
                  height: 80,
                  border: "1px solid rgba(201,169,110,0.25)",
                  background: "rgba(26,20,16,0.6)",
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: "var(--gold)", opacity: 0.6 }} />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r" style={{ borderColor: "var(--gold)", opacity: 0.6 }} />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l" style={{ borderColor: "var(--gold)", opacity: 0.6 }} />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: "var(--gold)", opacity: 0.6 }} />

                <motion.span
                  key={unit.value}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-display"
                  style={{ fontSize: "2rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}
                >
                  {pad(unit.value)}
                </motion.span>
              </div>
              <span className="font-body uppercase" style={{ fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.2em" }}>
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <div style={{ width: 1, height: 50, background: "linear-gradient(180deg, var(--gold), transparent)", margin: "0 auto" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
