"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, TrendingUp, Filter } from "lucide-react";

interface Pool {
  id: string;
  title: string;
  sport: string;
  event: string;
  participants: number;
  prize: number;
  endDate: string;
  image: string;
}

interface PoolListProps {
  onPoolSelect?: (poolId: string) => void;
}

const PoolList = ({ onPoolSelect }: PoolListProps = {}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Mock data for pools
  const pools: Pool[] = [
    {
      id: "1",
      title: "Premier League Championship",
      sport: "Futebol",
      event: "Manchester City vs. Liverpool",
      participants: 1245,
      prize: 25000,
      endDate: "2023-05-28",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=800&q=80",
    },
    {
      id: "2",
      title: "NBA Finals",
      sport: "Basquete",
      event: "Boston Celtics vs. Golden State Warriors",
      participants: 2389,
      prize: 35000,
      endDate: "2023-06-15",
      image:
        "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=800&q=80",
    },
    {
      id: "3",
      title: "UFC 287",
      sport: "MMA",
      event: "Alex Pereira vs. Israel Adesanya",
      participants: 987,
      prize: 15000,
      endDate: "2023-04-08",
      image:
        "https://images.unsplash.com/photo-1579034628318-5b4d95ea36be?w=800&q=80",
    },
    {
      id: "4",
      title: "Wimbledon",
      sport: "Tênis",
      event: "Final de Simples Masculino",
      participants: 1567,
      prize: 20000,
      endDate: "2023-07-16",
      image:
        "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
    },
  ];

  const categories = [
    { id: "all", name: "Todos os Esportes" },
    { id: "futebol", name: "Futebol" },
    { id: "basquete", name: "Basquete" },
    { id: "mma", name: "MMA" },
    { id: "tênis", name: "Tênis" },
  ];

  const filteredPools =
    selectedCategory === "all"
      ? pools
      : pools.filter(
          (pool) => pool.sport.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const handleParticipate = (poolId: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(`Participating in pool ${poolId}`);
      // In a real app, you would navigate to the pool details page
      if (onPoolSelect) {
        onPoolSelect(poolId);
      }
    }, 1000);
  };

  return (
    <div className="w-full bg-transparent">
      {/* Filter section */}
      <div className="mb-6 flex flex-wrap items-center gap-3 backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl p-4 shadow-md">
        <Filter className="h-5 w-5 text-green-400 mr-2" />
        <span className="text-white font-medium mr-4">Filtrar por:</span>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className={
              selectedCategory === category.id
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            }
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Pools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPools.map((pool, index) => (
          <motion.div
            key={pool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full overflow-hidden backdrop-blur-md bg-black/20 border-gray-800 shadow-md hover:shadow-green-500/10 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pool.image}
                  alt={pool.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{pool.title}</h3>
                  <p className="text-green-400">{pool.sport}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="text-sm text-gray-300">{pool.event}</div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-blue-400" />
                      <span className="text-sm text-gray-300">
                        {pool.participants.toLocaleString()} jogadores
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-2 text-amber-400" />
                      <span className="text-sm text-gray-300">
                        R${pool.prize.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                    <span className="text-sm text-gray-300">
                      Termina em: {new Date(pool.endDate).toLocaleDateString()}
                    </span>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white"
                    onClick={() => handleParticipate(pool.id)}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="mr-2"
                      >
                        <TrendingUp className="h-4 w-4" />
                      </motion.div>
                    ) : null}
                    Participar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PoolList;
