"use client"
import About from "@/components/widgets/About";
import Hero from "@/components/widgets/Hero";
import Signup from "@/components/widgets/Signup";
import Testimonial from "@/components/widgets/Testimonial";
import TreatmentsOffered from "@/components/widgets/Treatment";
import Work from "@/components/widgets/Work";


export default function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <TreatmentsOffered />
      <Testimonial />
      <About />
      <Signup/>
    </div>
  );
}