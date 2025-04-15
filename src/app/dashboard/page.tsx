"use client";

import { useState } from "react";
import AnimatedSidebar from "@/components/dashboard/AnimatedSidebar";
import StatCards from "@/components/dashboard/StatCards";
import PoolList from "@/components/pools/PoolList";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-green-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-green-900/10 to-transparent"></div>
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
            {activeSection === "home" && "Dashboard"}
            {activeSection === "bets" && "My Bets"}
            {activeSection === "wallet" && "Wallet"}
            {activeSection === "gamification" && "Gamification"}
            {activeSection === "history" && "Transaction History"}
            {activeSection === "support" && "Support"}
            {activeSection === "settings" && "Settings"}
          </motion.h1>

          {/* Dashboard content */}
          {activeSection === "home" && (
            <>
              <StatCards />
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="backdrop-blur-md bg-black/30 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                >
                  <h2 className="text-xl font-bold text-white mb-4">
                    Popular Pools
                  </h2>
                  <p className="text-gray-400">
                    Loading popular betting pools...
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="backdrop-blur-md bg-black/30 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                >
                  <h2 className="text-xl font-bold text-white mb-4">
                    Recent Activity
                  </h2>
                  <p className="text-gray-400">Loading recent activity...</p>
                </motion.div>
              </div>
            </>
          )}

          {/* Bets/Pools section */}
          {activeSection === "bets" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-2">
                  Available Betting Pools
                </h2>
                <p className="text-gray-400">
                  Join exciting betting pools and win big rewards!
                </p>
              </div>
              <div className="dynamic-import-pools">
                {/* This will be dynamically imported */}
                <PoolList />
              </div>
            </motion.div>
          )}

          {/* Placeholder for other sections */}
          {activeSection !== "home" && activeSection !== "bets" && (
            <div className="backdrop-blur-md bg-black/30 border border-gray-800 rounded-xl p-6 shadow-lg">
              <p className="text-gray-400">
                Content for {activeSection} will be implemented soon.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
