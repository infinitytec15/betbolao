"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSidebar from "@/components/dashboard/AnimatedSidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Users, DollarSign, CheckCircle2, Clock } from "lucide-react";

export default function Afiliados() {
  const [activeSection, setActiveSection] = useState("afiliados");
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  // Mock data
  const affiliateLink = "betxp.com/afiliado/user123";
  const stats = {
    totalReferrals: 28,
    activeReferrals: 15,
    totalEarnings: 750.5,
  };

  const commissions = [
    {
      id: 1,
      name: "João Silva",
      amount: 25.0,
      date: "15/05/2023",
      status: "Pago",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      amount: 50.0,
      date: "18/05/2023",
      status: "Pago",
    },
    {
      id: 3,
      name: "Pedro Santos",
      amount: 25.0,
      date: "20/05/2023",
      status: "Pendente",
    },
    {
      id: 4,
      name: "Ana Costa",
      amount: 75.0,
      date: "22/05/2023",
      status: "Pendente",
    },
    {
      id: 5,
      name: "Lucas Ferreira",
      amount: 25.0,
      date: "25/05/2023",
      status: "Pendente",
    },
  ];

  // Calculate pending amount
  const pendingAmount = commissions
    .filter((commission) => commission.status === "Pendente")
    .reduce((acc, commission) => acc + commission.amount, 0);

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Background gradients */}
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
            Programa de Afiliados
          </motion.h1>

          {/* Affiliate Link Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300 mb-6">
              <CardHeader>
                <CardTitle className="text-white">
                  Seu Link de Afiliado
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Compartilhe este link e ganhe comissões por cada novo usuário
                  que se registrar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="flex-1 p-3 bg-gray-900 rounded-lg border border-gray-800 text-green-400 font-mono">
                    {affiliateLink}
                  </div>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-500 hover:bg-green-950"
                  >
                    <Copy className="w-4 h-4 mr-2" /> Copiar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          >
            {/* Total Referrals Card */}
            <Card className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-400" /> Total de
                  Indicados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="text-3xl font-bold text-blue-400"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {stats.totalReferrals}
                </motion.div>
                <p className="text-gray-400 text-sm mt-1">Pessoas indicadas</p>
              </CardContent>
            </Card>

            {/* Active Referrals Card */}
            <Card className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-lg flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />{" "}
                  Contas Ativadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="text-3xl font-bold text-green-400"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {stats.activeReferrals}
                </motion.div>
                <p className="text-gray-400 text-sm mt-1">
                  {(
                    (stats.activeReferrals / stats.totalReferrals) *
                    100
                  ).toFixed(0)}
                  % de conversão
                </p>
              </CardContent>
            </Card>

            {/* Total Earnings Card */}
            <Card className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-lg flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-yellow-400" /> Total
                  Ganho
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="text-3xl font-bold text-yellow-400"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  R$ {stats.totalEarnings.toFixed(2)}
                </motion.div>
                <p className="text-gray-400 text-sm mt-1">Em comissões</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Commissions Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">
                    Histórico de Comissões
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Você tem R$ {pendingAmount.toFixed(2)} em comissões
                    pendentes
                  </CardDescription>
                </div>
                <Dialog
                  open={showWithdrawModal}
                  onOpenChange={setShowWithdrawModal}
                >
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Solicitar Saque de Comissões
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="backdrop-blur-md bg-black/80 border border-gray-800 text-white">
                    <DialogHeader>
                      <DialogTitle>Solicitar Saque de Comissões</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="p-4 bg-gray-900 rounded-lg">
                        <p className="text-sm text-gray-300 mb-2">
                          Valor disponível para saque:
                        </p>
                        <p className="text-2xl font-bold text-green-500">
                          R$ {pendingAmount.toFixed(2)}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pixKey">
                          Chave Pix para recebimento
                        </Label>
                        <Input
                          id="pixKey"
                          placeholder="CPF, e-mail ou telefone"
                          className="bg-gray-900 border-gray-700"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setShowWithdrawModal(false)}
                      >
                        Cancelar
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        Confirmar Saque
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs uppercase text-gray-400 border-b border-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Nome do Indicado
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Valor da Comissão
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Data
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {commissions.map((commission) => (
                        <tr
                          key={commission.id}
                          className="border-b border-gray-800 hover:bg-gray-900/30"
                        >
                          <td className="px-6 py-4">{commission.name}</td>
                          <td className="px-6 py-4 text-green-500">
                            R$ {commission.amount.toFixed(2)}
                          </td>
                          <td className="px-6 py-4">{commission.date}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`flex items-center ${commission.status === "Pago" ? "text-green-500" : "text-yellow-500"}`}
                            >
                              {commission.status === "Pago" ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 mr-1" /> Pago
                                </>
                              ) : (
                                <>
                                  <Clock className="w-4 h-4 mr-1" /> Pendente
                                </>
                              )}
                            </span>
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
      </motion.div>
    </div>
  );
}
