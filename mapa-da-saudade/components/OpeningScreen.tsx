"use client";
import { motion } from "framer-motion";
import StarField from "./StarField";

interface Props {
  onEnter: () => void;
}

const MapSVG = () => (
  <svg viewBox="0 0 500 180" className="w-full max-w-lg mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Subtle map-like background lines */}
    <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(201,169,110,0.08)" strokeWidth="1" />
    <line x1="250" y1="0" x2="250" y2="180" stroke="rgba(201,169,110,0.08)" strokeWidth="1" />
    
    {/* Animated dashed connection line */}
    <path
      d="M 80,90 C 140,60 180,70 250,90 C 310,110 360,100 420,90"
      stroke="url(#lineGrad)"
      strokeWidth="1.5"
      strokeDasharray="6 4"
      className="map-line"
      fill="none"
    />
    
    {/* Heart in the middle */}
    <motion.text
      x="250" y="78"
      textAnchor="middle"
      fontSize="18"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
    >
      ❤️
    </motion.text>
    
    {/* João Pessoa pin */}
    <motion.g
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <circle cx="80" cy="90" r="8" fill="rgba(201,145,122,0.3)" stroke="#C9917A" strokeWidth="1.5" />
      <circle cx="80" cy="90" r="3" fill="#C9917A" />
      <text x="80" y="115" textAnchor="middle" fill="#E8BFB0" fontSize="9" fontFamily="Jost, sans-serif" fontWeight="300">
        João Pessoa
      </text>
      <text x="80" y="126" textAnchor="middle" fill="rgba(232,191,176,0.6)" fontSize="7" fontFamily="Jost, sans-serif">
        Paraíba
      </text>
    </motion.g>
    
    {/* Rio de Janeiro pin */}
    <motion.g
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      <circle cx="420" cy="90" r="8" fill="rgba(201,145,122,0.3)" stroke="#C9917A" strokeWidth="1.5" />
      <circle cx="420" cy="90" r="3" fill="#C9917A" />
      <text x="420" y="115" textAnchor="middle" fill="#E8BFB0" fontSize="9" fontFamily="Jost, sans-serif" fontWeight="300">
        Rio de Janeiro
      </text>
      <text x="420" y="126" textAnchor="middle" fill="rgba(232,191,176,0.6)" fontSize="7" fontFamily="Jost, sans-serif">
        RJ
      </text>
    </motion.g>
    
    <defs>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C9917A" />
        <stop offset="50%" stopColor="#C9A96E" />
        <stop offset="100%" stopColor="#C9917A" />
      </linearGradient>
    </defs>
  </svg>
);

export default function OpeningScreen({ onEnter }: Props) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d0a08 0%, #1A1410 50%, #0f0c0a 100%)' }}>
      <StarField count={250} />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-body text-xs uppercase mb-12"
          style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
        >
          12 de junho · Dia dos Namorados
        </motion.p>
        
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display mb-4 leading-tight"
          style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 300, color: "var(--off-white)" }}
        >
          Entre João Pessoa e Rio de Janeiro
          <br />
          existem milhares de quilômetros.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display italic mb-10"
          style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", fontWeight: 300, color: "var(--rose-light)" }}
        >
          Mas nenhum deles é capaz de medir
          <br />
          o que sinto por você.
        </motion.p>
        
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 1.4 }}
          className="w-full mb-12"
        >
          <MapSVG />
        </motion.div>
        
        {/* Enter button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          onClick={onEnter}
          whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(201,169,110,0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="relative px-12 py-4 font-body text-sm uppercase tracking-widest cursor-pointer overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(201,145,122,0.15) 100%)",
            border: "1px solid rgba(201,169,110,0.5)",
            color: "var(--gold)",
            letterSpacing: "0.25em",
            transition: "all 0.4s ease",
          }}
        >
          <span className="relative z-10">Começar a jornada</span>
          <motion.div
            className="absolute inset-0"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.4 }}
            style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.1) 0%, rgba(201,145,122,0.1) 100%)" }}
          />
        </motion.button>
        
        {/* Decorative */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-16 flex items-center gap-4"
        >
          <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, var(--gold))" }} />
          <span className="font-script text-2xl" style={{ color: "var(--gold)" }}>com amor</span>
          <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, var(--gold), transparent)" }} />
        </motion.div>
      </div>
    </div>
  );
}
