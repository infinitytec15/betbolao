"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AtSign,
  Key,
  User,
  ArrowRight,
  Mail,
  Shield,
  Trophy,
} from "lucide-react";
import Link from "next/link";

type AuthFormType = "login" | "register" | "forgot-password";

export const AuthForms = () => {
  const [formType, setFormType] = useState<AuthFormType>("login");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (formType === "login") {
        window.location.href = "/dashboard";
      } else if (formType === "register") {
        setFormType("login");
      } else {
        // Reset password flow
        setFormType("login");
      }
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-green-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-green-900/10 to-transparent"></div>
      </div>

      <motion.div
        className="w-full max-w-md z-10"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <Card className="backdrop-blur-md bg-black/30 border-gray-800 shadow-xl shadow-green-900/20">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center"
              >
                <Trophy className="h-8 w-8 text-green-500" />
              </motion.div>
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              {formType === "login"
                ? "Entrar na sua conta"
                : formType === "register"
                  ? "Criar nova conta"
                  : "Recuperar senha"}
            </CardTitle>
            <CardDescription className="text-gray-400">
              {formType === "login"
                ? "Entre com seu e-mail e senha para acessar"
                : formType === "register"
                  ? "Preencha seus dados para se cadastrar"
                  : "Enviaremos um link para seu e-mail"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {formType === "register" && (
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <User size={16} className="text-green-400" /> Nome completo
                  </Label>
                  <motion.div
                    whileFocus="focus"
                    whileBlur="blur"
                    variants={inputVariants}
                  >
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      required
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                  </motion.div>
                </div>
              )}

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-gray-300 flex items-center gap-2"
                >
                  <AtSign size={16} className="text-green-400" /> E-mail
                </Label>
                <motion.div
                  whileFocus="focus"
                  whileBlur="blur"
                  variants={inputVariants}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-gray-800/50 border-gray-700 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </motion.div>
              </div>

              {formType !== "forgot-password" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="password"
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <Key size={16} className="text-green-400" /> Senha
                    </Label>
                    {formType === "login" && (
                      <button
                        type="button"
                        onClick={() => setFormType("forgot-password")}
                        className="text-xs text-green-400 hover:text-green-300"
                      >
                        Esqueceu a senha?
                      </button>
                    )}
                  </div>
                  <motion.div
                    whileFocus="focus"
                    whileBlur="blur"
                    variants={inputVariants}
                  >
                    <Input
                      id="password"
                      type="password"
                      required
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                  </motion.div>
                </div>
              )}

              {formType === "register" && (
                <div className="space-y-2">
                  <Label
                    htmlFor="confirm-password"
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <Shield size={16} className="text-green-400" /> Confirmar
                    senha
                  </Label>
                  <motion.div
                    whileFocus="focus"
                    whileBlur="blur"
                    variants={inputVariants}
                  >
                    <Input
                      id="confirm-password"
                      type="password"
                      required
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                  </motion.div>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white"
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
                    <Mail className="h-4 w-4" />
                  </motion.div>
                ) : null}
                {formType === "login"
                  ? "Entrar"
                  : formType === "register"
                    ? "Cadastrar"
                    : "Enviar link de recuperação"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="text-center text-sm text-gray-400">
                {formType === "login" ? (
                  <>
                    Não tem uma conta?{" "}
                    <button
                      type="button"
                      onClick={() => setFormType("register")}
                      className="text-green-400 hover:text-green-300 font-medium"
                    >
                      Cadastre-se
                    </button>
                  </>
                ) : (
                  <>
                    Já tem uma conta?{" "}
                    <button
                      type="button"
                      onClick={() => setFormType("login")}
                      className="text-green-400 hover:text-green-300 font-medium"
                    >
                      Entrar
                    </button>
                  </>
                )}
              </div>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthForms;
