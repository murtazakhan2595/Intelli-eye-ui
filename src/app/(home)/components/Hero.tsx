import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <div>
      <h3 className="font-normal text-3xl leading-[88px] w-fit">
        Introducing the
      </h3>
      <div className="w-[678px] flex flex-col gap-10">
        <h1 className="w-[594px] text-7xl leading-[88px] font-medium">
          Next Generation of Anomaly Detection
        </h1>
        <p className="font-normal text-[28px]">
          Harness the power of state-of-the-art AI to monitor, detect, and
          analyze anomalies in real-time
        </p>
        <Button className="px-20 py-11 w-fit">
          <span className="text-white font-medium  text-[32px]">Try our API</span>
        </Button>
      </div>
    </div>
  );
}