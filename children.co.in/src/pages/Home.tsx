import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VisionSection from "../components/VisionSection";
import LearningModules from "../components/LearningModules";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-inter text-[#1A1A1A]">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <LearningModules />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
