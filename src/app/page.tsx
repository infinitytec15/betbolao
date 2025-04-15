"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, DollarSign, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  const upcomingGames = [
    {
      id: 1,
      homeTeam: "Brazil",
      awayTeam: "Argentina",
      date: "2023-11-15",
      time: "20:00",
      availablePools: 5,
      homeTeamLogo: "https://api.dicebear.com/7.x/avataaars/svg?seed=brazil",
      awayTeamLogo: "https://api.dicebear.com/7.x/avataaars/svg?seed=argentina",
    },
    {
      id: 2,
      homeTeam: "Germany",
      awayTeam: "France",
      date: "2023-11-16",
      time: "18:30",
      availablePools: 3,
      homeTeamLogo: "https://api.dicebear.com/7.x/avataaars/svg?seed=germany",
      awayTeamLogo: "https://api.dicebear.com/7.x/avataaars/svg?seed=france",
    },
    {
      id: 3,
      homeTeam: "Spain",
      awayTeam: "Italy",
      date: "2023-11-17",
      time: "21:00",
      availablePools: 7,
      homeTeamLogo: "https://api.dicebear.com/7.x/avataaars/svg?seed=spain",
      awayTeamLogo: "https://api.dicebear.com/7.x/avataaars/svg?seed=italy",
    },
  ];

  const topBettors = [
    {
      id: 1,
      name: "João Silva",
      points: 1250,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
    },
    {
      id: 2,
      name: "Maria Santos",
      points: 980,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    },
    {
      id: 3,
      name: "Carlos Oliveira",
      points: 875,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
    },
  ];

  const recentWinnings = [
    {
      id: 1,
      name: "Pedro Alves",
      amount: "R$ 1.500,00",
      game: "Brazil vs Argentina",
    },
    {
      id: 2,
      name: "Ana Costa",
      amount: "R$ 750,00",
      game: "Germany vs France",
    },
    {
      id: 3,
      name: "Lucas Mendes",
      amount: "R$ 2.000,00",
      game: "Spain vs Italy",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Animated Background */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80"
            alt="Sports Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bolão Esportivo
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Aposte, ganhe e suba no ranking com o sistema de gamificação mais
            moderno do mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-6 text-lg rounded-full">
              Cadastre-se Agora <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Games Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-10 text-center text-green-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Jogos Disponíveis
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden hover:border-green-500 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                          <Image
                            src={game.homeTeamLogo}
                            alt={game.homeTeam}
                            width={40}
                            height={40}
                          />
                        </div>
                        <span className="mx-2 text-xl font-bold">vs</span>
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                          <Image
                            src={game.awayTeamLogo}
                            alt={game.awayTeam}
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{game.date}</p>
                        <p className="text-sm font-bold text-white">
                          {game.time}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">
                      {game.homeTeam} vs {game.awayTeam}
                    </h3>

                    <div className="flex justify-between items-center">
                      <p className="text-green-400">
                        {game.availablePools} bolões disponíveis
                      </p>
                      <Button
                        variant="outline"
                        className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                      >
                        Ver Bolões
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings and Recent Winnings */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Top Bettors Ranking */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Trophy className="text-yellow-500 mr-3" size={24} />
                    <h3 className="text-2xl font-bold">Top Apostadores</h3>
                  </div>

                  <div className="space-y-4">
                    {topBettors.map((bettor, index) => (
                      <div
                        key={bettor.id}
                        className="flex items-center p-3 bg-gray-700/50 rounded-lg"
                      >
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-600 rounded-full mr-3 text-yellow-500 font-bold">
                          {index + 1}
                        </div>
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-600 mr-3">
                          <Image
                            src={bettor.avatar}
                            alt={bettor.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold">{bettor.name}</p>
                        </div>
                        <div className="flex items-center">
                          <Award className="text-yellow-500 mr-1" size={16} />
                          <span className="font-bold text-yellow-500">
                            {bettor.points}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      href="/ranking"
                      className="text-green-400 hover:text-green-300 font-medium"
                    >
                      Ver ranking completo
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Recent Winnings */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <DollarSign className="text-green-500 mr-3" size={24} />
                    <h3 className="text-2xl font-bold">Prêmios Recentes</h3>
                  </div>

                  <div className="space-y-4">
                    {recentWinnings.map((winning) => (
                      <div
                        key={winning.id}
                        className="p-3 bg-gray-700/50 rounded-lg"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <p className="font-bold">{winning.name}</p>
                          <p className="font-bold text-green-500">
                            {winning.amount}
                          </p>
                        </div>
                        <p className="text-sm text-gray-400">{winning.game}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      href="/winnings"
                      className="text-green-400 hover:text-green-300 font-medium"
                    >
                      Ver todos os prêmios
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
              Pronto para começar a ganhar?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Cadastre-se agora e ganhe bônus de boas-vindas para fazer suas
              primeiras apostas!
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-6 text-lg rounded-full">
              Cadastre-se e Participe <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
