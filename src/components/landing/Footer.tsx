"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    empresa: [
      { name: "Sobre Nós", href: "/sobre" },
      { name: "Nosso Time", href: "/time" },
      { name: "Carreiras", href: "/carreiras" },
      { name: "Contato", href: "/contato" },
    ],
    suporte: [
      { name: "Central de Ajuda", href: "/ajuda" },
      { name: "FAQ", href: "/faq" },
      { name: "Contato", href: "/contato" },
    ],
    legal: [
      { name: "Termos de Uso", href: "/termos" },
      { name: "Política de Privacidade", href: "/privacidade" },
      { name: "Jogo Responsável", href: "/jogo-responsavel" },
      { name: "Licenças", href: "/licencas" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
    { icon: <Youtube size={20} />, href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-green-500">BetXP</span>
            </Link>
            <p className="text-gray-400 mb-6">
              A melhor plataforma de bolões esportivos do Brasil. Aposte, ganhe
              e suba no ranking com o sistema de gamificação mais moderno do
              mercado.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2023 BetXP. Todos os direitos reservados.
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>contato@betxp.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
