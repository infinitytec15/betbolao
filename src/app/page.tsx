import Header from "@/components/landing/Header";
import Banner from "@/components/landing/Banner";
import GameCards from "@/components/landing/GameCards";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Banner />
      <GameCards />
      <Footer />
    </main>
  );
}
