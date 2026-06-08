"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OpeningScreen from "@/components/OpeningScreen";
import CentralPhrase from "@/components/CentralPhrase";
import InteractiveMap from "@/components/InteractiveMap";
import PhotoGallery from "@/components/PhotoGallery";
import Countdown from "@/components/Countdown";
import FinalMessage from "@/components/FinalMessage";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main>
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="opening"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <OpeningScreen onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CentralPhrase />
            <InteractiveMap />
            <PhotoGallery />
            <Countdown />
            <FinalMessage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
