"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#06070A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center"
          >
            {/* Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

            <Image
              src="/plane_w_clouds.svg"
              alt="Beyond Contrails"
              width={420}
              height={420}
              className="relative z-10"
            />

            <h1 className="mt-8 text-center text-5xl font-light tracking-[0.14em] text-white">
              BEYOND
              <br />
              CONTRAILS
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}