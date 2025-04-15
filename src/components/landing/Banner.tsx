"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  color: string;
}

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const bannerItems: BannerItem[] = [
    {
      id: 1,
      title: "Copa do Brasil 2023",
      subtitle: "Bolão com prêmio de R$50.000",
      cta: "Participar Agora",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
      color: "from-green-500/50",
    },
    {
      id: 2,
      title: "NBA Finals",
      subtitle: "Aposte nos seus times favoritos",
      cta: "Ver Bolões",
      image:
        "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80",
      color: "from-purple-500/50",
    },
    {
      id: 3,
      title: "Campeonato Brasileiro",
      subtitle: "Bolões semanais com prêmios incríveis",
      cta: "Participar",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=800&q=80",
      color: "from-amber-500/50",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === bannerItems.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerItems.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] mt-16 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div
              className={`absolute inset-0 bg-gradient-to-t ${bannerItems[currentIndex].color} to-transparent z-10`}
            ></div>
            <img
              src={bannerItems[currentIndex].image}
              alt={bannerItems[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                {bannerItems[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl text-gray-200 mb-8"
              >
                {bannerItems[currentIndex].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6"
                >
                  {bannerItems[currentIndex].cta}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-green-500" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
