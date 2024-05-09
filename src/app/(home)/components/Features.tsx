export default function Features() {
  return (
    <div className="px-12 py-16 flex items-center justify-center flex-col gap-[76px] mt-56">
      <div className=" flex-col justify-start items-center gap-5 inline-flex">
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="text-white text-5xl font-normal  leading-10 tracking-tight">
            FEATURES
          </div>
        </div>
        <div className="px-2.5 justify-start items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-xl font-normal  leading-loose tracking-tight">
            Most calendars are designed for teams. Slate is designed for <br />
            freelancers who want a simple way to plan their schedule.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  w-full">
        <div className="relative min-w-[775.01px] min-h-[727.69px]">
          <img
            className=" min-w-[586.91px] min-h-[570px] rounded-xl absolute top-0 left-0 shadow border-2 border-indigo-600"
            src="/Boards-Notifications.png"
          />
          <img
            className=" min-w-[385.52px] min-h-[280.03px] rounded-xl absolute right-8 bottom-8 shadow border-2 border-indigo-600"
            src="/features-1.png"
          />
        </div>
        <div className="bg-black w-[324.14px] h-[608.39px] p-[19.18px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="h-[166.36px] flex-col justify-start items-start flex">
            <div className="justify-start items-start inline-flex">
              <img src="/eye.svg" alt="eye icon" />

              <div className="h-[77.18px] p-[9.59px] justify-start items-center gap-[9.59px] flex">
                <div className="text-white text-xl font-medium  leading-[30px] tracking-tight">
                  Dual Spectrum <br />
                  Detection
                </div>
              </div>
            </div>
            <div className="w-[285.78px] p-[9.59px] justify-start items-center gap-[9.59px] inline-flex">
              <div className="text-white text-base font-normal  leading-normal tracking-tight">
                Leverage combined visual and <br />
                thermal imaging for comprehensive
                <br />
                anomaly detection
              </div>
            </div>
          </div>
          <div className="h-[189.36px] flex-col justify-start items-start flex">
            <div className="justify-start items-start inline-flex">
              <div className="px-[1.92px] py-[14.39px] justify-start items-center gap-[9.59px] flex">
                <div className="w-[37.88px] h-[37.88px] relative">
                  <img src="/ad-nl.svg" alt="eye icon" />
                </div>
              </div>

              <div className="p-[9.59px] justify-start items-center gap-[9.59px] flex">
                <div className="text-white text-xl font-medium  leading-[30px] tracking-tight">
                  Advance Machine
                  <br />
                  Learning Models
                </div>
              </div>
            </div>
            <div className="p-[9.59px] justify-start items-center gap-[9.59px] inline-flex">
              <div className="text-white text-base font-normal  leading-normal tracking-tight">
                Built with EfficientNet, Vision <br />
                Transformers, and LSTMs to ensure
                <br />
                high accuracy and real-time
                <br />
                processing.
              </div>
            </div>
          </div>
          <div className="h-[166.36px] flex-col justify-start items-start flex">
            <div className="justify-start items-center inline-flex">
                  <img src="/real-time.svg" alt="eye icon" />
              <div className="p-[9.59px] justify-start items-center gap-[9.59px] flex">
                <div className="text-white text-xl font-medium  leading-[30px] tracking-tight">
                  Real Time
                  <br />
                  Alerts
                </div>
              </div>
            </div>
            <div className="p-[9.59px] justify-start items-center gap-[9.59px] inline-flex">
              <div className="text-white text-base font-normal  leading-normal tracking-tight">
                Receive instant alerts and detailed
                <br />
                reports when anomalies are <br />
                detected.
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
