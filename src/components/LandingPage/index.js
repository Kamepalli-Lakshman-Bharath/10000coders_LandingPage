import React from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"));
const SuccessStories = dynamic(() => import("./SuccessStories"));
const NextBatchInfo = dynamic(() => import("./NextBatchInfo"));
const GuidingExperts = dynamic(() => import("./GuidingExperts"));
const StudentVoices = dynamic(() => import("./StudentVoices"));
const PathToPlacements = dynamic(() => import("./PathToPlacements"));
const FAQSection = dynamic(() => import("./FAQSection"));
const HiringPartners = dynamic(() => import("./HiringPartners"));
const StackCarousel = dynamic(() => import("./StackCarousel"));
const Footer = dynamic(() => import("@/widgets/Footer"));
const RegisterForAssignmentSession = dynamic(() =>
  import("./RegisterForAssignmentSession")
);

const LandingPage = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <HiringPartners />
      <SuccessStories />
      <NextBatchInfo />
      <GuidingExperts />
      <StudentVoices />
      <StackCarousel />
      <RegisterForAssignmentSession />
      <PathToPlacements />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
