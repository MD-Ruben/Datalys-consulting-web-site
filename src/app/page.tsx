import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import OurWorks from "@/components/OurWorks";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import ContactHome from "@/components/ContactHome";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DATALYS Consulting",
  description: "La page d'accueil de DATALYS Consulting",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionTwo />
      <AboutSectionOne />
      <Features />
      <OurWorks />
      <Testimonials />
      <Brands />
      <ContactHome />
    </>
  );
}
