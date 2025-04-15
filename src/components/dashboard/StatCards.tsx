"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Coins, TrendingUp, Sparkles, TicketCheck } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardsProps {
  totalBet?: number;
  totalWinnings?: number;
  activePools?: number;
  userLevel?: number;
  xpProgress?: number;
  avatarUrl?: string;
  username?: string;
}

const StatCards = ({
  totalBet = 5250,
  totalWinnings = 8750,
  activePools = 8,
  userLevel = 12,
  xpProgress = 65,
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=gambler",
  username = "Pedro Gamer",
}: StatCardsProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent">
      {/* Total Bet Amount Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Card className="h-full overflow-hidden backdrop-blur-md bg-black/20 border-gray-800 shadow-md hover:shadow-emerald-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400 font-medium">Total Apostado</h3>
              <div className="p-2 rounded-full bg-emerald-900/20">
                <Coins className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-white">
                R${totalBet.toLocaleString()}
              </p>
              <div className="mt-2 flex items-center text-xs">
                <TrendingUp className="h-3 w-3 mr-1 text-emerald-400" />
                <span className="text-emerald-400">
                  +12% em relação ao mês anterior
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Total Winnings Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Card className="h-full overflow-hidden backdrop-blur-md bg-black/20 border-gray-800 shadow-md hover:shadow-amber-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400 font-medium">Total Ganho</h3>
              <div className="p-2 rounded-full bg-amber-900/20">
                <Trophy className="h-5 w-5 text-amber-400" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-white">
                R${totalWinnings.toLocaleString()}
              </p>
              <div className="mt-2 flex items-center text-xs">
                <TrendingUp className="h-3 w-3 mr-1 text-amber-400" />
                <span className="text-amber-400">
                  +24% em relação ao mês anterior
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Active Pools Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Card className="h-full overflow-hidden backdrop-blur-md bg-black/20 border-gray-800 shadow-md hover:shadow-blue-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400 font-medium">Bolões Ativos</h3>
              <div className="p-2 rounded-full bg-blue-900/20">
                <TicketCheck className="h-5 w-5 text-blue-400" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-white">{activePools}</p>
              <div className="mt-2 flex items-center text-xs">
                <TrendingUp className="h-3 w-3 mr-1 text-blue-400" />
                <span className="text-blue-400">
                  +3 novos bolões esta semana
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* User Level Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Card className="h-full overflow-hidden backdrop-blur-md bg-black/20 border-gray-800 shadow-md hover:shadow-purple-500/10 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400 font-medium">Nível do Usuário</h3>
              <div className="p-2 rounded-full bg-purple-900/20">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-white">
                  Nível {userLevel}
                </p>
                <span className="text-xs text-purple-400">
                  {xpProgress}% para Nível {userLevel + 1}
                </span>
              </div>
              <div className="mt-3">
                <Progress value={xpProgress} className="h-2 bg-purple-900/20" />
              </div>
              <div className="mt-2 text-xs text-purple-400 flex items-center">
                <Avatar className="h-6 w-6 mr-2 border border-purple-500">
                  <AvatarImage src={avatarUrl} alt={username} />
                  <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                </Avatar>
                {username}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default StatCards;
