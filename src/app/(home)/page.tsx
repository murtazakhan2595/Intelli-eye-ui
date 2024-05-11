import Image from "next/image";
import { Button } from "@/components/ui/button";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <img
          src="/bg.png"
          className="w-full aspect-[1.72]  absolute top-0 left-0"
          alt="Background"
        />
        <div className="relative z-10 px-40">
          <Nav />
          <div id="home">
            <Hero />
          </div>

          <div id="about">

            <Features />
          </div>
          <Integrations />
          <Testimonials />
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
          <div className="w-[245.62px] h-[223px] relative">
            <img src="/picture2.png" alt="" />
          </div>
        </div>
        <div className="absolute top-[286px] left-[1241px]">
          <div className="w-[184.37px] h-[151px] relative">
            <img src="/picture1.png" alt="" />
          </div>
        </div>
        <div className="absolute top-[630px] left-[1061px]">
          <div className="w-[313.62px] h-[264.53px] relative">
            <img src="/picture3.png" alt="" />
          </div>
        </div>
        <div className="absolute top-[1971px] left-[233px] w-[990px] h-[990px] opacity-50 bg-cyan-800 rounded-full blur-[600px]" />
        <div className="absolute w-[817px] h-[817px] top-[3180px] left-[320px] opacity-30 bg-stone-400 rounded-full blur-[600px]" />
      </div>
    </>
  );
}



