import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ActivitiesSection from "./components/ActivitiesSection";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0e001c]">
      <NavBar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection /> 
        <AchievementsSection />
        <AboutSection />
        <ActivitiesSection />
      </div>
      <Footer />
    </main>
  );
}
