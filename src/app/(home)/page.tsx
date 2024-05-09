import Image from "next/image";
import { Button } from "@/components/ui/button";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
export default function Home() {
  return (
    <>
      <div className="min-h-screen relative">
        <img
          src="/bg.png"
          className="absolute inset-0 w-full "
          alt="Background"
        />
        <div className="relative z-10 px-40">
          <Nav />
          <Hero />
          <Features />
          <Integrations />
        </div>
        <div className="absolute top-0 left-0">
          <div
            className="bg-blue-600 rounded-full absolute"
            style={{
              width: "723px",
              height: "723px",
              left: "-260px",
              top: "-256px",
              opacity: "0.5",
              filter: "blur(300px)",
            }}
          ></div>
        </div>
        <div className="absolute -right-[252px] top-[1306px] w-[817px] h-[817px] opacity-40 bg-stone-400 rounded-full blur-[600px] z-20" />
        <div className="absolute top-[192px] left-[783px] ">
          <div className="min-h-[60px] min-w-[142px] font-bold text-xs text-[#4452FE] flex items-center justify-center border-[1.52px] border-solid border-[#4452FE] rounded-[11px]">
            Violence detected
          </div>
        </div>
        <div className="absolute top-[286px] left-[1241px]">
          <div className="min-h-[60px] min-w-[142px] font-bold text-xs text-[#4452FE] flex items-center justify-center border-[1.52px] border-solid border-[#4452FE] rounded-[11px]">
            Human fall detected
          </div>
          <img className="w-[160px] h-[90px]" src="/human-fall.svg" />
        </div>
        <div className="absolute top-[634.92px] left-[1060px]">
          <div className="min-h-[60px] min-w-[142px] font-bold text-xs text-[#4452FE] flex items-center justify-center border-[1.52px] border-solid border-[#4452FE] rounded-[11px]">
            Fire Deteccted
          </div>
        </div>
        <div className="absolute top-[1971px] left-[233px] w-[990px] h-[990px] opacity-50 bg-cyan-800 rounded-full blur-[600px]" />
      </div>
    </>
  );
}



