import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Author from "@/components/Author";
import ForWho from "@/components/ForWho";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ForWho />
      <Featured />
      <Promo />
      <Author />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;