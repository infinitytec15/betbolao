"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Coins, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardsProps {
  totalBet?: number;
  totalWinnings?: number;
  userLevel?: number;
  xpProgress?: number;
  avatarUrl?: string;
  username?: string;
}

const StatCards = ({
  totalBet = 5250,
  totalWinnings = 8750,
  userLevel = 12,
  xpProgress = 65,
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=gambler",
  username = "ProGambler",
}: StatCardsProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-background">
      {/* Total Bet Amount Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Card className="h-full overflow-hidden backdrop-blur-md bg-black/30 border-gray-800 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400 font-medium">Total Bet Amount</h3>
              <div className="p-2 rounded-full bg-emerald-900/30">
                <Coins className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-white">
                ${totalBet.toLocaleString()}
              </p>
              <div className="mt-2 flex items-center text-xs">
                <TrendingUp className="h-3 w-3 mr-1 text-emerald-400" />
                <span className="text-emerald-400">+12% from last month</span>
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
        <Card className="h-full overflow-hidden backdrop-blur-md bg-black/30 border-gray-800 shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400 font-medium">Total Winnings</h3>
              <div className="p-2 rounded-full bg-amber-900/30">
                <Trophy className="h-5 w-5 text-amber-400" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-white">
                ${totalWinnings.toLocaleString()}
              </p>
              <div className="mt-2 flex items-center text-xs">
                <TrendingUp className="h-3 w-3 mr-1 text-amber-400" />
                <span className="text-amber-400">+24% from last month</span>
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
        <Card className="h-full overflow-hidden backdrop-blur-md bg-black/30 border-gray-800 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400 font-medium">User Level</h3>
              <div className="p-2 rounded-full bg-purple-900/30">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-white">
                  Level {userLevel}
                </p>
                <span className="text-xs text-purple-400">
                  {xpProgress}% to Level {userLevel + 1}
                </span>
              </div>
              <div className="mt-3">
                <Progress value={xpProgress} className="h-2 bg-purple-900/30" />
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Earn 350 more XP to reach the next level
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* User Avatar Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Card className="h-full overflow-hidden backdrop-blur-md bg-black/30 border-gray-800 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="h-24 w-24 border-2 border-blue-500 shadow-lg shadow-blue-500/20">
                  <AvatarImage src={avatarUrl} alt={username} />
                  <AvatarFallback className="bg-blue-900 text-blue-100">
                    {username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <h3 className="mt-4 text-xl font-bold text-white">{username}</h3>
              <div className="mt-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs">
                Pro Gambler
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Member since April 2023
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default StatCards;
