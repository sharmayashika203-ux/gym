import React from "react";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import Features from "../components/Home/Features";
import ProgramsSection from "../components/Home/ProgramsSection";
import ScheduleSection from "../components/Home/ScheduleSection";
import TrainersSection from "../components/Home/TrainersSection";
import BMICalculator from "../components/Home/BMICalculator";
import GallerySection from "../components/Home/GallerySection";
import Testimonials from "../components/Home/Testimonials";
import PageTransition from "../components/Common/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <AboutSection />
      <Features />
      <ProgramsSection />
      <ScheduleSection />
      <TrainersSection />
      <BMICalculator />
      <GallerySection />
      <Testimonials />
    </PageTransition>
  );
};

export default Home;
