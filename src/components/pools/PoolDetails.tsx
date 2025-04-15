"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Trophy,
  Users,
  Calendar,
  TrendingUp,
  ArrowLeft,
  Check,
  Info,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface Pool {
  id: string;
  title: string;
  sport: string;
  event: string;
  participants: number;
  prize: number;
  endDate: string;
  image: string;
  description?: string;
  teams?: {
    id: string;
    name: string;
    logo: string;
    odds: number;
  }[];
  options?: {
    id: string;
    name: string;
    odds: number;
  }[];
}

interface PoolDetailsProps {
  poolId?: string;
  onBack?: () => void;
}

const PoolDetails = ({ poolId = "1", onBack }: PoolDetailsProps) => {
  const [pool, setPool] = useState<Pool | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [betAmount, setBetAmount] = useState<number>(10);
  const [potentialWinnings, setPotentialWinnings] = useState<number>(0);
  const [placingBet, setPlacingBet] = useState(false);
  const [betPlaced, setBetPlaced] = useState(false);
  const t = useTranslations("poolDetails");

  // Mock data fetch
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      // This would be replaced with actual API call
      const mockPool: Pool = {
        id: "1",
        title: "Premier League Championship",
        sport: "Soccer",
        event: "Manchester City vs. Liverpool",
        participants: 1245,
        prize: 25000,
        endDate: "2023-05-28",
        image:
          "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=800&q=80",
        description:
          "The Premier League Championship is the pinnacle of English football, featuring the country's top clubs competing for the prestigious title. This season's final showdown sees Manchester City facing Liverpool in what promises to be an electrifying match.",
        teams: [
          {
            id: "team1",
            name: "Manchester City",
            logo: "https://api.dicebear.com/7.x/initials/svg?seed=MC&backgroundColor=blue",
            odds: 1.85,
          },
          {
            id: "team2",
            name: "Liverpool",
            logo: "https://api.dicebear.com/7.x/initials/svg?seed=LIV&backgroundColor=red",
            odds: 2.1,
          },
          {
            id: "draw",
            name: "Draw",
            logo: "https://api.dicebear.com/7.x/initials/svg?seed=DRAW&backgroundColor=gray",
            odds: 3.5,
          },
        ],
      };

      setPool(mockPool);
      setLoading(false);
    }, 1000);
  }, [poolId]);

  // Calculate potential winnings when selection or bet amount changes
  useEffect(() => {
    if (!selectedOption || !pool?.teams) return;

    const selectedTeam = pool.teams.find((team) => team.id === selectedOption);
    if (selectedTeam) {
      setPotentialWinnings(Number((betAmount * selectedTeam.odds).toFixed(2)));
    }
  }, [selectedOption, betAmount, pool]);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleBetAmountChange = (value: number[]) => {
    setBetAmount(value[0]);
  };

  const handlePlaceBet = () => {
    if (!selectedOption) return;

    setPlacingBet(true);
    // Simulate API call
    setTimeout(() => {
      setPlacingBet(false);
      setBetPlaced(true);

      // Reset after showing success
      setTimeout(() => {
        setBetPlaced(false);
        // Here you would typically navigate to bets history or similar
        if (onBack) onBack();
      }, 3000);
    }, 1500);
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background p-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <TrendingUp className="h-12 w-12 text-primary" />
        </motion.div>
      </div>
    );
  }

  if (!pool) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background p-6">
        <Card className="w-full max-w-2xl backdrop-blur-md bg-black/30 border-gray-800 shadow-lg">
          <CardContent className="p-6">
            <p className="text-muted-foreground">{t("poolNotFound")}</p>
            {onBack && (
              <Button className="mt-4" variant="outline" onClick={onBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("backToPools")}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full bg-background p-6">
      <AnimatePresence>
        {betPlaced ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm"
          >
            <Card className="w-full max-w-md backdrop-blur-md bg-black/30 border-green-500 shadow-lg">
              <CardContent className="p-8 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
                >
                  <Check className="h-10 w-10 text-green-500" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {t("betPlacedSuccess")}
                </h2>
                <p className="text-gray-300 text-center mb-4">
                  {t("betPlacedMessage", {
                    amount: betAmount,
                    team: pool.teams?.find((t) => t.id === selectedOption)
                      ?.name,
                  })}
                </p>
                <p className="text-green-400 font-semibold text-lg">
                  {t("potentialWinnings", { amount: potentialWinnings })}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        {onBack && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="mb-6"
          >
            <Button
              variant="outline"
              onClick={onBack}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("backToPools")}
            </Button>
          </motion.div>
        )}

        {/* Pool header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden backdrop-blur-md bg-black/30 border-gray-800 shadow-lg mb-6">
            <div className="relative h-48 overflow-hidden">
              <img
                src={pool.image}
                alt={pool.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-3xl font-bold text-white">{pool.title}</h1>
                <p className="text-green-400">{pool.sport}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">{t("participants")}</p>
                    <p className="text-lg font-semibold text-white">
                      {pool.participants.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 mr-3 text-amber-400" />
                  <div>
                    <p className="text-sm text-gray-400">{t("prizePool")}</p>
                    <p className="text-lg font-semibold text-white">
                      ${pool.prize.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">{t("endDate")}</p>
                    <p className="text-lg font-semibold text-white">
                      {new Date(pool.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{pool.description}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Betting section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Betting options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="md:col-span-2"
          >
            <Card className="backdrop-blur-md bg-black/30 border-gray-800 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {t("placeBet")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {pool.teams?.map((team) => (
                    <motion.div
                      key={team.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "relative p-4 rounded-lg border-2 cursor-pointer transition-all",
                        selectedOption === team.id
                          ? "border-primary bg-primary/10"
                          : "border-gray-700 hover:border-gray-500",
                      )}
                      onClick={() => handleOptionSelect(team.id)}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-3 bg-gray-800">
                          <img
                            src={team.logo}
                            alt={team.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-white mb-1">
                          {team.name}
                        </h3>
                        <p className="text-lg font-bold text-amber-400">
                          {team.odds}x
                        </p>
                      </div>
                      {selectedOption === team.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                        >
                          <Check className="h-4 w-4 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bet amount and confirmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="backdrop-blur-md bg-black/30 border-gray-800 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {t("betSummary")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">{t("betAmount")}</p>
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-400 mr-1" />
                    <span className="text-2xl font-bold text-white">
                      {betAmount}
                    </span>
                  </div>
                  <Slider
                    value={[betAmount]}
                    min={5}
                    max={100}
                    step={5}
                    onValueChange={handleBetAmountChange}
                    className="my-4"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$5</span>
                    <span>$100</span>
                  </div>
                </div>

                {selectedOption && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/30"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{t("selection")}</span>
                      <span className="font-medium text-white">
                        {pool.teams?.find((t) => t.id === selectedOption)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{t("odds")}</span>
                      <span className="font-medium text-amber-400">
                        {pool.teams?.find((t) => t.id === selectedOption)?.odds}
                        x
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{t("potentialWin")}</span>
                      <span className="font-bold text-green-400">
                        ${potentialWinnings}
                      </span>
                    </div>
                  </motion.div>
                )}

                <div className="pt-4">
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white"
                    size="lg"
                    onClick={handlePlaceBet}
                    disabled={!selectedOption || placingBet}
                  >
                    {placingBet ? (
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
                    {placingBet ? t("processing") : t("finalizeButton")}
                  </Button>
                </div>

                {!selectedOption && (
                  <div className="flex items-center justify-center text-sm text-gray-400 mt-2">
                    <Info className="h-4 w-4 mr-1" />
                    <span>{t("selectOption")}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PoolDetails;
