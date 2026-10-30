import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
       <HeroSection /> 

       <AboutPreview /> 

       <SolutionsSection /> 

      <WhyChooseUs /> 

      <FeaturedProjects /> 

       <CTASection /> 
    </>
  );
}

