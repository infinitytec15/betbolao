"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Menu,
  X,
  Flag,
  CircleDot,
  Dumbbell,
  Trophy,
  Gamepad2,
  Shirt,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sports = [
    { name: "Futebol", icon: <Shirt className="mr-2" size={18} /> },
    { name: "Basquete", icon: <Trophy className="mr-2" size={18} /> },
    { name: "Tênis", icon: <Dumbbell className="mr-2" size={18} /> },
    {
      name: "Futebol Americano",
      icon: <Gamepad2 className="mr-2" size={18} />,
    },
    { name: "Vôlei", icon: <CircleDot className="mr-2" size={18} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-green-500"
            >
              BetXP
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              {sports.map((sport, index) => (
                <motion.div
                  key={sport.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={`/esportes/${sport.name.toLowerCase()}`}
                    className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {sport.icon}
                    <span>{sport.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Auth Buttons and Theme Switcher */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeSwitcher />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                >
                  Entrar
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <Link href="/login?register=true">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Criar Conta
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col space-y-4">
              {sports.map((sport) => (
                <Link
                  key={sport.name}
                  href={`/esportes/${sport.name.toLowerCase()}`}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {sport.icon}
                  <span>{sport.name}</span>
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-800">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    Entrar
                  </Button>
                </Link>
                <Link
                  href="/login?register=true"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Criar Conta
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
