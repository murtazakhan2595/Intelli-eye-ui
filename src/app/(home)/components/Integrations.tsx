import { Button } from "@/components/ui/button";


export default function Integrations() {
  return (
    <div className="mt-6 flex flex-col justify-center items-center gap-[90px]">
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="text-white text-5xl font-normal leading-10 tracking-tight">
            Integrations
          </div>
        </div>
        <div className="px-2.5 justify-start items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-xl font-normal leading-7 tracking-tight">
            Most calendars are designed for teams. Slate is designed for{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[166px]">
        <div className="w-[463.50px] h-[304.74px] flex-col flex justify-start items-start gap-[58.62px]">
          <img className="w-[463.50px] h-[182.36px]" src="/logo 1.png" />
          <div className="justify-start items-center flex gap-16 ">
            <div className="w-[63.76px] h-[63.76px] relative">
              <img src="/diamond-icon.svg" />
            </div>
            <div className="w-[70.29px] h-[62.67px] relative">
              <img src="/react-icon.svg" />
            </div>
            <div className="w-[61.46px] h-[61.46px] relative">
              <img src="js-icon.svg" alt="" />
            </div>
            <div className="w-[61.46px] h-[61.46px] relative">
              <img src="next-icon.svg" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-[456px] h-[225px] flex flex-col justify-start items-start gap-[5px] ">
            <div className="text-white text-[34px] font-medium leading-[59.46px] tracking-tight">
              Why Eagle Eye?{" "}
            </div>
            <div className="w-[456px] text-white text-xl font-normal leading-10 tracking-tight">
              It can be easily integrated with any platform you name like React
              js, ruby, Next js, or Pure JS.  It is also an open source api any
              one is more then welcomed to contribute
            </div>
          </div>
          <Button className="mt-[34px] px-[50px] h-[68px] bg-indigo-600 rounded-[15px] justify-center items-center gap-2.5 inline-fle">
            <div className=" text-white text-xl font-medium  leading-[68px] tracking-tight">
              Contribute
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}