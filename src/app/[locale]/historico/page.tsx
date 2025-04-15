"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSidebar from "@/components/dashboard/AnimatedSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Download,
  Filter,
  Search,
  CheckCircle2,
  XCircle,
  ArrowUpDown,
} from "lucide-react";

export default function Historico() {
  const [activeSection, setActiveSection] = useState("history");
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [transactionType, setTransactionType] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for transactions
  const transactions = [
    {
      id: 1,
      date: "15/05/2023",
      type: "depósito",
      amount: 100,
      status: "concluído",
      description: "Depósito via Pix",
      reference: "PIX123456",
    },
    {
      id: 2,
      date: "18/05/2023",
      type: "aposta",
      amount: -50,
      status: "concluído",
      description: "Aposta em Flamengo vs Corinthians",
      reference: "BET789012",
    },
    {
      id: 3,
      date: "20/05/2023",
      type: "prêmio",
      amount: 200,
      status: "concluído",
      description: "Prêmio da aposta Flamengo vs Corinthians",
      reference: "WIN345678",
    },
    {
      id: 4,
      date: "22/05/2023",
      type: "saque",
      amount: -100,
      status: "pendente",
      description: "Saque via Pix",
      reference: "WDR901234",
    },
    {
      id: 5,
      date: "25/05/2023",
      type: "depósito",
      amount: 150,
      status: "concluído",
      description: "Depósito via Pix",
      reference: "PIX567890",
    },
    {
      id: 6,
      date: "27/05/2023",
      type: "bônus",
      amount: 50,
      status: "concluído",
      description: "Bônus de indicação",
      reference: "BNS123456",
    },
    {
      id: 7,
      date: "30/05/2023",
      type: "aposta",
      amount: -75,
      status: "concluído",
      description: "Aposta em São Paulo vs Palmeiras",
      reference: "BET234567",
    },
    {
      id: 8,
      date: "02/06/2023",
      type: "cashback",
      amount: 25,
      status: "concluído",
      description: "Cashback semanal",
      reference: "CSH345678",
    },
  ];

  // Filter transactions based on search query and filters
  const filteredTransactions = transactions.filter((transaction) => {
    // Filter by type
    if (transactionType !== "todos" && transaction.type !== transactionType) {
      return false;
    }

    // Filter by search query
    if (
      searchQuery &&
      !transaction.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
      !transaction.reference.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  // Function to export transactions as CSV
  const exportToCSV = () => {
    const headers = [
      "Data",
      "Tipo",
      "Valor",
      "Status",
      "Descrição",
      "Referência",
    ];
    const csvData = filteredTransactions.map((t) => [
      t.date,
      t.type,
      t.amount.toString(),
      t.status,
      t.description,
      t.reference,
    ]);

    const csvContent =
      headers.join(",") + "\n" + csvData.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "historico_transacoes.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            Histórico de Transações
          </motion.h1>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <Card className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-green-400" /> Filtros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="search" className="text-gray-300">
                      Buscar
                    </Label>
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        id="search"
                        placeholder="Descrição ou referência"
                        className="pl-8 bg-gray-900 border-gray-700 text-white"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-gray-300">
                      Tipo de Transação
                    </Label>
                    <Select
                      value={transactionType}
                      onValueChange={setTransactionType}
                    >
                      <SelectTrigger
                        id="type"
                        className="bg-gray-900 border-gray-700 text-white"
                      >
                        <SelectValue placeholder="Todos" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700 text-white">
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="depósito">Depósito</SelectItem>
                        <SelectItem value="saque">Saque</SelectItem>
                        <SelectItem value="aposta">Aposta</SelectItem>
                        <SelectItem value="prêmio">Prêmio</SelectItem>
                        <SelectItem value="bônus">Bônus</SelectItem>
                        <SelectItem value="cashback">Cashback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="text-gray-300">
                      Data Inicial
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="startDate"
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-gray-900 border-gray-700 text-white"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? (
                            startDate.toLocaleDateString()
                          ) : (
                            <span>Selecionar data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate" className="text-gray-300">
                      Data Final
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="endDate"
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-gray-900 border-gray-700 text-white"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? (
                            endDate.toLocaleDateString()
                          ) : (
                            <span>Selecionar data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button
                    onClick={exportToCSV}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" /> Exportar CSV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Transactions Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="backdrop-blur-md bg-black/20 border border-gray-800 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">
                  Transações ({filteredTransactions.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs uppercase text-gray-400 border-b border-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          <div className="flex items-center cursor-pointer">
                            Data
                            <ArrowUpDown className="ml-1 h-3 w-3" />
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <div className="flex items-center cursor-pointer">
                            Tipo
                            <ArrowUpDown className="ml-1 h-3 w-3" />
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <div className="flex items-center cursor-pointer">
                            Valor
                            <ArrowUpDown className="ml-1 h-3 w-3" />
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Descrição
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Referência
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTransactions.map((transaction) => (
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
                            R$ {Math.abs(transaction.amount).toFixed(2)}
                          </td>
                          <td className="px-6 py-4">
                            {transaction.description}
                          </td>
                          <td className="px-6 py-4 font-mono text-xs">
                            {transaction.reference}
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
