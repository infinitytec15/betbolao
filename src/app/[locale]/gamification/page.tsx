"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSidebar from "@/components/dashboard/AnimatedSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, Star, Award, Users, Clock, Gift, Lock } from "lucide-react";

export default function Gamification() {
  const [activeSection, setActiveSection] = useState("gamification");
  const t = useTranslations("gamification");
  const td = useTranslations("dashboard");

  // Mock user data
  const userData = {
    name: "Pedro Gamer",
    level: 12,
    currentXP: 2450,
    nextLevelXP: 3000,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=gambler",
  };

  // Mock achievements data
  const achievements = [
    {
      id: 1,
      title: "Apostador Iniciante",
      description: "Faça sua primeira aposta",
      icon: <Trophy size={24} className="text-yellow-400" />,
      unlocked: true,
      xpReward: 100,
    },
    {
      id: 2,
      title: "Apostador Frequente",
      description: "Faça 10 apostas em uma semana",
      icon: <Star size={24} className="text-yellow-400" />,
      unlocked: true,
      xpReward: 250,
    },
    {
      id: 3,
      title: "Vencedor em Série",
      description: "Ganhe 5 apostas consecutivas",
      icon: <Award size={24} className="text-yellow-400" />,
      unlocked: false,
      xpReward: 500,
    },
    {
      id: 4,
      title: "Rei do Futebol",
      description: "Ganhe 20 apostas em jogos de futebol",
      icon: <Trophy size={24} className="text-yellow-400" />,
      unlocked: false,
      xpReward: 750,
    },
  ];

  // Mock ranking data
  const rankingData = [
    {
      rank: 1,
      player: "MasterBettor",
      points: 12500,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MasterBettor",
    },
    {
      rank: 2,
      player: "LuckyStriker",
      points: 10200,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LuckyStriker",
    },
    {
      rank: 3,
      player: "BetKing",
      points: 9800,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BetKing",
    },
    {
      rank: 4,
      player: "Pedro Gamer",
      points: 8450,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gambler",
    },
    {
      rank: 5,
      player: "GoldenBet",
      points: 7200,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GoldenBet",
    },
  ];

  // Mock points table data
  const pointsTableData = [
    {
      action: t("dailyLogin"),
      points: 10,
      icon: <Clock size={20} className="text-blue-400" />,
    },
    {
      action: t("placeBet"),
      points: 20,
      icon: <Star size={20} className="text-green-400" />,
    },
    {
      action: t("winBet"),
      points: 50,
      icon: <Trophy size={20} className="text-yellow-400" />,
    },
    {
      action: t("referFriend"),
      points: 100,
      icon: <Users size={20} className="text-purple-400" />,
    },
    {
      action: t("completeProfile"),
      points: 30,
      icon: <Award size={20} className="text-pink-400" />,
    },
  ];

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Background gradients - subtle and clean */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-green-900/10 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-green-900/5 to-transparent"></div>
      </div>

      {/* Sidebar */}
      <AnimatedSidebar className="z-10" onNavigate={setActiveSection} />

      {/* Main content */}
      <motion.div
        className="flex-1 overflow-y-auto p-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-3xl font-bold text-white mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t("title")}
          </motion.h1>

          {/* User profile and XP progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-green-500/10 transition-all duration-300 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-green-500">
                  <AvatarImage src={userData.avatarUrl} alt="Avatar" />
                  <AvatarFallback>PG</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">
                  {userData.level}
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {userData.name}
                </h2>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>
                      {t("level")}: {userData.level}
                    </span>
                    <span>
                      {userData.currentXP} / {userData.nextLevelXP} XP
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-green-300"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(userData.currentXP / userData.nextLevelXP) * 100}%`,
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{t("currentXP")}</span>
                    <span>
                      {t("nextLevel")}: {userData.level + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Achievements section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="backdrop-blur-md bg-black/20 border border-gray-800 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                    <Trophy size={20} className="text-yellow-400" />
                    {t("achievements")}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {t("achievementsDesc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement) => (
                      <motion.div
                        key={achievement.id}
                        className={`p-4 rounded-lg border ${achievement.unlocked ? "border-green-500/50 bg-green-900/10" : "border-gray-700 bg-gray-800/20"} flex items-start gap-3`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="mt-1">{achievement.icon}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-white">
                              {achievement.title}
                            </h3>
                            {!achievement.unlocked && (
                              <Lock size={14} className="text-gray-500" />
                            )}
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            {achievement.description}
                          </p>
                          <div className="flex items-center gap-1 mt-2 text-xs">
                            <Gift size={14} className="text-green-400" />
                            <span className="text-green-400">
                              {achievement.xpReward} XP
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-2 rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800/50 hover:text-white transition-colors text-sm">
                    {t("viewAll")} →
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ranking section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="backdrop-blur-md bg-black/20 border border-gray-800 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                    <Users size={20} className="text-blue-400" />
                    {t("ranking")}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {t("rankingDesc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border border-gray-700">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-800/50">
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">
                            {t("rank")}
                          </th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">
                            {t("player")}
                          </th>
                          <th className="py-3 px-4 text-right text-xs font-medium text-gray-400">
                            {t("totalPoints")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rankingData.map((item, index) => (
                          <tr
                            key={index}
                            className={`border-t border-gray-700 ${item.player === "Pedro Gamer" ? "bg-green-900/20" : ""}`}
                          >
                            <td className="py-3 px-4 text-sm text-gray-300">
                              {item.rank <= 3 ? (
                                <span
                                  className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${item.rank === 1 ? "bg-yellow-500" : item.rank === 2 ? "bg-gray-400" : "bg-amber-700"} text-black font-bold text-xs`}
                                >
                                  {item.rank}
                                </span>
                              ) : (
                                <span>{item.rank}</span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-sm text-white">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage
                                    src={item.avatar}
                                    alt={item.player}
                                  />
                                  <AvatarFallback>
                                    {item.player.substring(0, 2)}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{item.player}</span>
                                {item.player === "Pedro Gamer" && (
                                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                                    Você
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-right font-medium text-green-400">
                              {item.points.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Points table section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card className="backdrop-blur-md bg-black/20 border border-gray-800 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                    <Award size={20} className="text-purple-400" />
                    {t("pointsTable")}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {t("pointsDesc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border border-gray-700">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-800/50">
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">
                            {t("action")}
                          </th>
                          <th className="py-3 px-4 text-right text-xs font-medium text-gray-400">
                            {t("pointsEarned")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {pointsTableData.map((item, index) => (
                          <tr key={index} className="border-t border-gray-700">
                            <td className="py-3 px-4 text-sm text-white">
                              <div className="flex items-center gap-2">
                                {item.icon}
                                <span>{item.action}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-right font-medium text-green-400">
                              +{item.points}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
