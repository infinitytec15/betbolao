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
                ? "bg-primary/20 text-primary border-l-4 border-primary"
                : "hover:bg-accent/50 text-muted-foreground hover:text-foreground",
            )}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className={cn(
                "flex items-center justify-center",
                isActive && "text-primary",
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
                  isActive ? "text-primary" : "text-foreground",
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
}

const AnimatedSidebar = ({ className = "" }: AnimatedSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const sidebarItems = [
    { id: "home", label: "Home", icon: <Home size={22} /> },
    { id: "bets", label: "My Bets", icon: <TicketCheck size={22} /> },
    { id: "wallet", label: "Wallet", icon: <Wallet size={22} /> },
    { id: "gamification", label: "Gamification", icon: <Trophy size={22} /> },
    {
      id: "history",
      label: "Transaction History",
      icon: <History size={22} />,
    },
    { id: "support", label: "Support", icon: <HelpCircle size={22} /> },
    { id: "settings", label: "Settings", icon: <Settings size={22} /> },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.div
      className={cn(
        "h-full bg-background border-r border-border flex flex-col justify-between",
        isCollapsed ? "w-[80px]" : "w-[280px]",
        className,
      )}
      initial={{ width: isCollapsed ? 80 : 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-bold text-xl text-primary"
            >
              BetXP
            </motion.div>
          )}
          <motion.button
            className="p-2 rounded-full hover:bg-accent/50 text-muted-foreground hover:text-foreground"
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
              onClick={() => setActiveItem(item.id)}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-border mt-auto">
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-muted-foreground"
          >
            <p>© 2023 BetXP</p>
            <p className="mt-1">All rights reserved</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AnimatedSidebar;
