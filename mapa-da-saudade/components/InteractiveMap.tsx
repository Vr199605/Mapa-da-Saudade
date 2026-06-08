"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const mapPoints = [
  {
    id: 1,
    icon: "✦",
    label: "O que mais admiro em você",
    x: 15,
    y: 30,
    color: "#C9917A",
    text: `Eu admiro a sua capacidade de ser gigante e delicada ao mesmo tempo. Eu olho para a sua rotina, para a professora dedicada, paciente e brilhante que você é para os seus alunos, para a filha e parceira amorosa que cuida de todos ao seu redor com tanto zelo, e sinto um orgulho que não cabe no meu peito.

Mesmo quando a vida te apresenta dias difíceis, mesmo diante das dores do luto e do cansaço que a rotina impõe, você não permite que a sua essência se perca. A sua resiliência é um espetáculo à parte; você chora quando precisa chorar, limpa o rosto e continua caminhando com uma dignidade que me desmonta inteiro.

Você tem uma força silenciosa que move montanhas e, ao mesmo tempo, o abraço mais acolhedor do universo.`,
  },
  {
    id: 2,
    icon: "◆",
    label: "O que aprendi com você",
    x: 78,
    y: 20,
    color: "#C9A96E",
    text: `Com você, eu aprendi que o amor de verdade não é feito de urgências ou de cobranças, mas de paciência, presença e calmaria. Antes de você chegar, a minha mente era um lugar muito focado em metas, números e na correria exata da engenharia e das finanças. Você me ensinou a desacelerar.

Aprendi que o cuidado se manifesta nos pequenos detalhes: em uma mensagem de apoio no meio de um dia caótico, no respeito ao silêncio do outro e na capacidade de acolher o mal-humor ou os dias sentimentais sem julgar.

Você me ensinou que amar alguém é dar um lugar seguro para que o outro seja exatamente quem ele é, com todas as suas luzes e sombras.`,
  },
  {
    id: 3,
    icon: "♡",
    label: "Quando percebi que te amava",
    x: 22,
    y: 68,
    color: "#E8BFB0",
    text: `Foi no dia treze de janeiro, o dia em que o nosso namoro começou oficialmente, mas a certeza absoluta se consolidou em uma das nossas primeiras chamadas de vídeo de madrugada. Eu estava exausto, com a cabeça estourando de tanta sobrecarga mental por conta dos estudos e das responsabilidades, e você simplesmente ficou ali comigo.

Você não precisou dizer nenhuma frase de efeito; o seu olhar compreensivo através da câmera e o seu sorriso manso foram como um anestésico para a minha mente.

Naquele momento, enquanto o mundo inteiro dormia e só existia a sua voz me trazendo paz, eu olhei para a tela e pensei: Deus colocou a minha vida nas mãos da mulher certa. Eu não quero e não posso mais caminhar sem ela.`,
  },
  {
    id: 4,
    icon: "✝",
    label: "O que Deus tem me ensinado",
    x: 68,
    y: 62,
    color: "#E8D5A3",
    text: `O Senhor tem me ensinado o verdadeiro significado da palavra fé. Amar à distância é viver o que diz a Bíblia sobre acreditar naquilo que a gente ainda não pode tocar todos os dias. Deus tem moldado o meu caráter através do nosso relacionamento, me ensinando a ser um homem mais maduro, mais protetor e mais paciente.

Ele tem me mostrado que o nosso amor não é uma obra do acaso, mas um propósito santo estruturado na rocha firme.

Através de nós, eu aprendi que as maiores promessas do Pai exigem um tempo de espera e de preparação, e que cada quilômetro entre o Rio e a Paraíba serve apenas para purificar e fortalecer o que vamos viver juntos logo ali na frente.`,
  },
  {
    id: 5,
    icon: "◇",
    label: "O que mais sinto falta",
    x: 42,
    y: 45,
    color: "#C9917A",
    text: `Sinto falta da sua voz sem filtro de áudio, daquela voz que só existe quando você está ali, de verdade, a centímetros de mim. Sinto falta do cheiro do seu cabelo, do calor do seu ombro encostado no meu, dos seus olhos que me contam histórias antes mesmo de qualquer palavra.

Sinto falta das conversas que se estendem pela madrugada sem que nenhum de nós perceba as horas passarem. Sinto falta das risadas em coisas tolas, daquele silêncio confortável que só existe entre duas pessoas que se amam de verdade.

Sinto falta de simplesmente estar junto, sem tela, sem distância, sem contar dias. Sinto falta do abraço que nenhuma chamada de vídeo consegue substituir.`,
  },
  {
    id: 6,
    icon: "★",
    label: "O que espero viver no reencontro",
    x: 82,
    y: 80,
    color: "#C9A96E",
    text: `Espero aquele abraço que começa longo e não tem pressa de acabar, o tipo de abraço que recarrega a alma e confirma que tudo valeu a pena. Espero ouvir a sua voz sem qualquer distorção de linha, sentir o calor do seu riso de perto.

Espero os passeios sem destino certo, o café compartilhado na mesma mesa, as conversas sem tela que se tornam as memórias mais bonitas. Espero te olhar nos olhos e dizer tudo aquilo que as palavras escritas nunca vão conseguir carregar completamente.

Espero construir novas memórias, marcar novas datas no calendário, fotografar novos sorrisos. Espero que esse reencontro seja o primeiro de muitos que a distância jamais vai conseguir roubar de nós.`,
  },
  {
    id: 7,
    icon: "✿",
    label: "Uma oração por nós",
    x: 48,
    y: 82,
    color: "#E8D5A3",
    text: `Senhor Deus, eu Te agradeço do fundo da minha alma por ter colocado essa mulher maravilhosa na minha vida. Obrigado por ser o arquiteto da nossa história e por nos sustentar com tanta graça através dessa distância.

Eu te peço, Pai, que guarde a vida dela aí na Paraíba agora mesmo. Envie os Teus anjos para cercarem a sua casa, dê leveza para a sua rotina como professora e console o peito dela quando a saudade apertar. Abençoe os nossos planos, a nossa saúde e o nosso futuro.

Que o nosso relacionamento continue sendo um solo sagrado, pautado no respeito, na fidelidade e na Tua palavra. Prepara os nossos caminhos para essas próximas duas semanas e faz com que o nosso reencontro seja coberto pela Tua paz e pela Tua benção. Em nome de Jesus, amém.`,
  },
];

function MapPoint({ point, onClick, isActive }: {
  point: typeof mapPoints[0];
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="absolute flex flex-col items-center cursor-pointer group"
      style={{ left: `${point.x}%`, top: `${point.y}%`, transform: "translate(-50%, -50%)" }}
      whileHover={{ scale: 1.2 }}
      animate={isActive ? { scale: 1.15 } : { scale: 1 }}
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute rounded-full"
        animate={{
          scale: [1, 2.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 28,
          height: 28,
          border: `1px solid ${point.color}`,
          borderRadius: "50%",
        }}
      />
      
      {/* Main dot */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full"
        style={{
          width: 32,
          height: 32,
          background: isActive
            ? `radial-gradient(circle, ${point.color}, rgba(201,169,110,0.2))`
            : "rgba(26,20,16,0.8)",
          border: `1.5px solid ${point.color}`,
          boxShadow: isActive ? `0 0 20px ${point.color}60` : "none",
          transition: "all 0.3s ease",
        }}
      >
        <span style={{ color: point.color, fontSize: 12 }}>{point.icon}</span>
      </div>
      
      {/* Label on hover */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute top-9 whitespace-nowrap pointer-events-none"
        style={{
          background: "rgba(26,20,16,0.95)",
          border: `1px solid ${point.color}40`,
          padding: "4px 10px",
          fontSize: 10,
          fontFamily: "Jost, sans-serif",
          fontWeight: 300,
          letterSpacing: "0.05em",
          color: point.color,
        }}
      >
        {point.label}
      </motion.div>
    </motion.button>
  );
}

function PointModal({ point, onClose }: { point: typeof mapPoints[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,8,6,0.92)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative max-w-xl w-full max-h-[85vh] overflow-y-auto"
        style={{
          background: "linear-gradient(135deg, #1e1712 0%, #15110e 100%)",
          border: `1px solid ${point.color}30`,
          boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 60px ${point.color}10`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header line */}
        <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${point.color}, transparent)` }} />
        
        <div className="p-8 md:p-12">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex items-center justify-center mb-6"
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 56,
                height: 56,
                background: `radial-gradient(circle, ${point.color}30, transparent)`,
                border: `1px solid ${point.color}60`,
              }}
            >
              <span style={{ fontSize: 22, color: point.color }}>{point.icon}</span>
            </div>
          </motion.div>
          
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-center mb-8"
            style={{
              fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
              fontWeight: 300,
              color: "var(--off-white)",
              fontStyle: "italic",
            }}
          >
            {point.label}
          </motion.h3>
          
          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ width: 60, height: 1, background: point.color, margin: "0 auto 2rem", opacity: 0.6 }}
          />
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {point.text.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="font-body mb-4 last:mb-0 leading-relaxed"
                style={{
                  fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                  color: "rgba(248,244,239,0.85)",
                  fontWeight: 300,
                  lineHeight: 1.85,
                }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
          
          {/* Close */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={onClose}
            className="mt-10 w-full py-3 font-body text-xs uppercase tracking-widest"
            style={{
              border: `1px solid ${point.color}40`,
              color: point.color,
              background: "transparent",
              letterSpacing: "0.2em",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            whileHover={{
              background: `${point.color}15`,
              borderColor: point.color,
            }}
          >
            Fechar ✕
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function InteractiveMap() {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const selectedPoint = mapPoints.find(p => p.id === activePoint);

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A1410 0%, #0d0a08 50%, #1A1410 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.3em" }}>
          Explore
        </p>
        <h2 className="font-display mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: "var(--off-white)" }}>
          O Mapa da Saudade
        </h2>
        <p className="font-body" style={{ color: "var(--text-muted)", fontSize: "0.85rem", letterSpacing: "0.1em" }}>
          Toque nos pontos para descobrir cada sentimento
        </p>
      </motion.div>
      
      {/* Map container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative mx-auto"
        style={{
          maxWidth: 700,
          height: 420,
          background: "radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)",
          border: "1px solid rgba(201,169,110,0.1)",
        }}
      >
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {[20, 40, 60, 80].map(x => (
            <line key={x} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke="rgba(201,169,110,0.04)" strokeWidth="1" />
          ))}
          {[25, 50, 75].map(y => (
            <line key={y} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="rgba(201,169,110,0.04)" strokeWidth="1" />
          ))}
          
          {/* Connection lines */}
          <path
            d="M 15% 30% Q 35% 10% 78% 20%"
            stroke="rgba(201,169,110,0.06)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
          <path
            d="M 22% 68% Q 42% 55% 68% 62%"
            stroke="rgba(201,145,122,0.06)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
          <path
            d="M 42% 45% Q 45% 63% 48% 82%"
            stroke="rgba(201,169,110,0.06)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
        </svg>
        
        {/* Points */}
        {mapPoints.map((point, i) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
          >
            <MapPoint
              point={point}
              onClick={() => setActivePoint(point.id)}
              isActive={activePoint === point.id}
            />
          </motion.div>
        ))}
        
        {/* Corner decorations */}
        {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos) => (
          <div key={pos} className={`absolute ${pos}`} style={{ width: 12, height: 12, borderTop: "1px solid rgba(201,169,110,0.3)", borderLeft: pos.includes("right") ? "none" : "1px solid rgba(201,169,110,0.3)", borderRight: pos.includes("right") ? "1px solid rgba(201,169,110,0.3)" : "none", borderBottom: pos.includes("bottom") ? "1px solid rgba(201,169,110,0.3)" : "none" }} />
        ))}
      </motion.div>
      
      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-8 flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
      >
        {mapPoints.map((point) => (
          <button
            key={point.id}
            onClick={() => setActivePoint(point.id)}
            className="flex items-center gap-2 font-body text-xs hover:opacity-100 transition-opacity"
            style={{ color: "var(--text-muted)", fontSize: "0.75rem", opacity: 0.7 }}
          >
            <span style={{ color: point.color }}>{point.icon}</span>
            {point.label}
          </button>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPoint && (
          <PointModal
            point={selectedPoint}
            onClose={() => setActivePoint(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
