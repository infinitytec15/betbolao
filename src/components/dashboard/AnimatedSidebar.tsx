"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  TicketCheck,
  Wallet,
  Trophy,
  History,
  HelpCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
  isCollapsed: boolean;
}

const SidebarItem = ({
  icon,
  label,
  isActive = false,
  onClick,
  isCollapsed,
}: SidebarItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className={cn(
              "flex items-center gap-3 px-4 py-3 cursor-pointer rounded-lg transition-all",
              isActive
                ? "bg-green-500/10 text-green-400 border-l-4 border-green-500"
                : "hover:bg-gray-800/50 text-gray-400 hover:text-white",
            )}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className={cn(
                "flex items-center justify-center",
                isActive && "text-green-400",
              )}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 0.5,
                repeat: isActive ? Infinity : 0,
                repeatDelay: 5,
              }}
            >
              {icon}
            </motion.div>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className={cn(
                  "font-medium",
                  isActive ? "text-green-400" : "text-white",
                )}
              >
                {label}
              </motion.span>
            )}
          </motion.div>
        </TooltipTrigger>
        {isCollapsed && (
          <TooltipContent side="right">
            <p>{label}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

interface AnimatedSidebarProps {
  className?: string;
  onNavigate?: (section: string) => void;
}

const AnimatedSidebar = ({
  className = "",
  onNavigate,
}: AnimatedSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const sidebarItems = [
    { id: "home", label: "Início", icon: <Home size={22} /> },
    { id: "bets", label: "Minhas Apostas", icon: <TicketCheck size={22} /> },
    { id: "wallet", label: "Carteira", icon: <Wallet size={22} /> },
    {
      id: "gamification",
      label: "Gamificação",
      icon: <Trophy size={22} />,
    },
    {
      id: "history",
      label: "Histórico de Transações",
      icon: <History size={22} />,
    },
    { id: "support", label: "Suporte", icon: <HelpCircle size={22} /> },
    { id: "settings", label: "Configurações", icon: <Settings size={22} /> },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.div
      className={cn(
        "h-full bg-black/40 backdrop-blur-md border-r border-gray-800 flex flex-col justify-between",
        isCollapsed ? "w-[80px]" : "w-[250px]",
        className,
      )}
      initial={{ width: isCollapsed ? 80 : 250 }}
      animate={{ width: isCollapsed ? 80 : 250 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-bold text-xl text-green-400"
            >
              BetXP
            </motion.div>
          )}
          <motion.button
            className="p-2 rounded-full hover:bg-gray-800/50 text-gray-400 hover:text-white"
            onClick={toggleSidebar}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </motion.button>
        </div>

        <div className="flex flex-col gap-2 p-3 mt-4">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.id}
              onClick={() => {
                setActiveItem(item.id);
                if (onNavigate) onNavigate(item.id);
              }}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-800 mt-auto">
        <div className="flex items-center justify-between mb-3">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-gray-400"
            >
              <p>© 2023 BetXP</p>
              <p className="mt-1">Todos os direitos reservados</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedSidebar;
