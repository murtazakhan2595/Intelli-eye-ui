import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <div>
      <div className="text-white text-3xl font-normal  leading-[88px] tracking-tight">
        Introducing the{" "}
      </div>
      <div className="w-[678px] flex flex-col gap-10">
        <div className="w-[594px] h-[263px] text-white text-[74px] font-medium  leading-[88px] tracking-tight">
          Next Generation of Anomaly Detection
        </div>
        <div className="w-[678px] text-white text-[28px] font-normal  leading-7 tracking-tight">
          Harness the power of state-of-the-art AI to
          <br /> monitor, detect, and analyze anomalies in real <br />
          -time
        </div>
        <div className="w-[329px] h-[88px] px-20 bg-indigo-600 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-[32px] font-medium  leading-[88px] tracking-tight">
            Try our API
          </div>
        </div>
      </div>
    </div>
  );
}