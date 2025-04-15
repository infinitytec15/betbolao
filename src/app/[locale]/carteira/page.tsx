"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSidebar from "@/components/dashboard/AnimatedSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  ArrowDownCircle,
  ArrowUpCircle,
  CheckCircle2,
  XCircle,
  Filter,
} from "lucide-react";

export default function Carteira() {
  const [activeSection, setActiveSection] = useState("carteira");
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [transactionType, setTransactionType] = useState("todos");

  // Mock data for transactions
  const transactions = [
    {
      id: 1,
      date: "15/05/2023",
      type: "depósito",
      amount: 100,
      status: "concluído",
    },
    {
      id: 2,
      date: "18/05/2023",
      type: "aposta",
      amount: -50,
      status: "concluído",
    },
    {
      id: 3,
      date: "20/05/2023",
      type: "prêmio",
      amount: 200,
      status: "concluído",
    },
    {
      id: 4,
      date: "22/05/2023",
      type: "saque",
      amount: -100,
      status: "pendente",
    },
    {
      id: 5,
      date: "25/05/2023",
      type: "depósito",
      amount: 150,
      status: "concluído",
    },
  ];

  // Calculate balance
  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0,
  );

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
            Carteira
          </motion.h1>

          {/* Balance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Saldo Disponível</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <motion.div
                    className="text-4xl font-bold text-green-500 mb-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    R$ {balance.toFixed(2)}
                  </motion.div>
                  <div className="flex gap-4">
                    <Dialog
                      open={showDepositModal}
                      onOpenChange={setShowDepositModal}
                    >
                      <DialogTrigger asChild>
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                          Depositar via Pix
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="backdrop-blur-md bg-black/80 border border-gray-800 text-white">
                        <DialogHeader>
                          <DialogTitle>Depositar via Pix</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="amount">Valor</Label>
                            <Input
                              id="amount"
                              placeholder="R$ 0,00"
                              className="bg-gray-900 border-gray-700"
                            />
                          </div>
                          <div className="p-4 bg-gray-900 rounded-lg">
                            <p className="text-sm text-gray-400 mb-2">
                              Instruções:
                            </p>
                            <ol className="list-decimal pl-4 text-sm space-y-1">
                              <li>Copie a chave Pix abaixo</li>
                              <li>Abra o aplicativo do seu banco</li>
                              <li>Selecione a opção Pix</li>
                              <li>Cole a chave e confirme o valor</li>
                              <li>Seu saldo será atualizado automaticamente</li>
                            </ol>
                            <div className="mt-4 p-3 bg-gray-800 rounded flex justify-between items-center">
                              <code className="text-green-400">
                                pix@betxp.com.br
                              </code>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs"
                              >
                                Copiar
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button onClick={() => setShowDepositModal(false)}>
                            Fechar
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Dialog
                      open={showWithdrawModal}
                      onOpenChange={setShowWithdrawModal}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-green-600 text-green-500 hover:bg-green-950"
                        >
                          Sacar via Pix
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="backdrop-blur-md bg-black/80 border border-gray-800 text-white">
                        <DialogHeader>
                          <DialogTitle>Sacar via Pix</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="pixKey">Chave Pix</Label>
                            <Input
                              id="pixKey"
                              placeholder="CPF, e-mail ou telefone"
                              className="bg-gray-900 border-gray-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="withdrawAmount">Valor</Label>
                            <Input
                              id="withdrawAmount"
                              placeholder="R$ 0,00"
                              className="bg-gray-900 border-gray-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirmation">
                              Confirme sua senha
                            </Label>
                            <Input
                              id="confirmation"
                              type="password"
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Movimentações</CardTitle>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 border-gray-700 text-gray-300"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? date.toLocaleDateString() : "Selecionar data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <Select
                    value={transactionType}
                    onValueChange={setTransactionType}
                  >
                    <SelectTrigger className="w-[180px] h-8 border-gray-700 bg-transparent text-gray-300">
                      <SelectValue placeholder="Tipo de transação" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700 text-white">
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="depósito">Depósito</SelectItem>
                      <SelectItem value="saque">Saque</SelectItem>
                      <SelectItem value="aposta">Aposta</SelectItem>
                      <SelectItem value="prêmio">Prêmio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs uppercase text-gray-400 border-b border-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Data
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Tipo
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Valor
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr
                          key={transaction.id}
                          className="border-b border-gray-800 hover:bg-gray-900/30"
                        >
                          <td className="px-6 py-4">{transaction.date}</td>
                          <td className="px-6 py-4 capitalize">
                            {transaction.type}
                          </td>
                          <td
                            className={`px-6 py-4 ${transaction.amount > 0 ? "text-green-500" : "text-red-500"}`}
                          >
                            {transaction.amount > 0 ? "+" : ""}
                            {transaction.amount.toFixed(2)}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`flex items-center ${transaction.status === "concluído" ? "text-green-500" : "text-yellow-500"}`}
                            >
                              {transaction.status === "concluído" ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 mr-1" />{" "}
                                  Concluído
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-4 h-4 mr-1" /> Pendente
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
