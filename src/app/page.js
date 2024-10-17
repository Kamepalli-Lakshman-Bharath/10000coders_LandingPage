import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import("@/components/LandingPage"));

export default function Home() {
  return (
    <div className="">
      <LandingPage />
    </div>
  );
}
