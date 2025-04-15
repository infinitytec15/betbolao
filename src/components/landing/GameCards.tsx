"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users } from "lucide-react";

interface Game {
  id: string;
  homeTeam: {
    name: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    logo: string;
  };
  league: string;
  date: string;
  time: string;
  minBet: number;
  poolCount: number;
}

const GameCards = () => {
  // Mock data for games
  const games: Game[] = [
    {
      id: "1",
      homeTeam: {
        name: "Flamengo",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=FLA&backgroundColor=red",
      },
      awayTeam: {
        name: "Palmeiras",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=PAL&backgroundColor=green",
      },
      league: "Campeonato Brasileiro",
      date: "2023-05-28",
      time: "16:00",
      minBet: 5,
      poolCount: 24,
    },
    {
      id: "2",
      homeTeam: {
        name: "Corinthians",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=COR&backgroundColor=black",
      },
      awayTeam: {
        name: "São Paulo",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=SAO&backgroundColor=red",
      },
      league: "Campeonato Paulista",
      date: "2023-05-30",
      time: "19:30",
      minBet: 10,
      poolCount: 18,
    },
    {
      id: "3",
      homeTeam: {
        name: "Lakers",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=LAK&backgroundColor=purple",
      },
      awayTeam: {
        name: "Celtics",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=CEL&backgroundColor=green",
      },
      league: "NBA",
      date: "2023-06-02",
      time: "21:00",
      minBet: 15,
      poolCount: 32,
    },
    {
      id: "4",
      homeTeam: {
        name: "Brasil",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=BRA&backgroundColor=yellow",
      },
      awayTeam: {
        name: "Argentina",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=ARG&backgroundColor=blue",
      },
      league: "Copa América",
      date: "2023-06-10",
      time: "20:00",
      minBet: 20,
      poolCount: 45,
    },
    {
      id: "5",
      homeTeam: {
        name: "Nadal",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=NAD&backgroundColor=orange",
      },
      awayTeam: {
        name: "Djokovic",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=DJO&backgroundColor=blue",
      },
      league: "Roland Garros",
      date: "2023-06-05",
      time: "15:30",
      minBet: 10,
      poolCount: 28,
    },
    {
      id: "6",
      homeTeam: {
        name: "Chiefs",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=CHI&backgroundColor=red",
      },
      awayTeam: {
        name: "Eagles",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=EAG&backgroundColor=green",
      },
      league: "NFL",
      date: "2023-09-15",
      time: "20:30",
      minBet: 15,
      poolCount: 22,
    },
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Jogos Disponíveis
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Participe dos bolões dos principais jogos e campeonatos. Faça suas
            apostas e concorra a prêmios incríveis!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full overflow-hidden backdrop-blur-md bg-black/30 border-gray-800 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-green-400 bg-green-900/20 px-3 py-1 rounded-full">
                      {game.league}
                    </span>
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>
                        {formatDate(game.date)} • {game.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2 bg-gray-800">
                        <img
                          src={game.homeTeam.logo}
                          alt={game.homeTeam.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-white font-medium">
                        {game.homeTeam.name}
                      </span>
                    </div>

                    <div className="text-center">
                      <span className="text-2xl font-bold text-white">VS</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2 bg-gray-800">
                        <img
                          src={game.awayTeam.logo}
                          alt={game.awayTeam.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-white font-medium">
                        {game.awayTeam.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-300">
                      <Trophy className="h-4 w-4 mr-2 text-amber-400" />
                      <span>A partir de R${game.minBet},00</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Users className="h-4 w-4 mr-2 text-blue-400" />
                      <span>{game.poolCount} bolões</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white">
                    Ver Bolões
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
          >
            Ver Todos os Jogos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameCards;
