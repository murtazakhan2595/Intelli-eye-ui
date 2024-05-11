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

      <div className="flex items-center justify-center gap-[166px] mb-[212px]">
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
      <div
        className="flex items-start justify-center gap-[204px]"
        id="integration"
      >
        <div className="flex flex-col text-white max-w-[353px]">
          <div className="w-full text-3xl font-semibold">
            Get started with Eagle Eye
          </div>
          <div className="mt-6 w-full text-lg leading-5">
            Getting started with Eagle Eye API is a breeze. With just a few
            simple steps, you can integrate our powerful anomaly detection
            capabilities into your surveillance systems. Begin by installing the
            Eagle Eye NPM module with a single command. Next, initialize Eagle
            Eye in your project and start detecting anomalies in your visual
            input streams effortlessly. Whether you&apos;re monitoring for
            incidents of violence, human falls, fire, smoke, or unauthorized
            entry, Eagle Eye API provides reliable and real-time predictions.
            Additionally, you can leverage Eagle Eye&apos;s thermal imaging
            capabilities to detect anomalies in thermal input streams with ease.
            Stay ahead of potential threats and enhance the security and safety
            measures of your surveillance systems today with Eagle Eye API.
          </div>
        </div>
        <div className="w-[675.77px] h-[1160px] relative">
          <div className="w-[960px] h-[0px] left-[36.26px] top-[35.44px] absolute origin-top-left rotate-90 border border-indigo-600"></div>
          <div className="w-[70.05px] h-[70.05px] left-0 top-0 absolute">
            <div className="w-[70.05px] h-[70.05px] left-0 top-0 absolute bg-indigo-600 rounded-full" />
            <div className="left-[29.67px] top-[20.60px] absolute text-white text-[28.02px] font-medium ">
              1
            </div>
          </div>
          <div className="w-[70.05px] h-[70.05px] left-[-0px] top-[200px] absolute">
            <div className="w-[70.05px] h-[70.05px] left-0 top-0 absolute bg-indigo-600 rounded-full" />
            <div className="left-[29.67px] top-[20.60px] absolute text-white text-[28.02px] font-medium ">
              2
            </div>
          </div>
          <div className="w-[70.05px] h-[70.05px] left-[-0px] top-[380px] absolute">
            <div className="w-[70.05px] h-[70.05px] left-0 top-0 absolute bg-indigo-600 rounded-full" />
            <div className="left-[29.67px] top-[20.60px] absolute text-white text-[28.02px] font-medium ">
              3
            </div>
          </div>
          <div className="w-[70.05px] h-[70.05px] left-[-0px] top-[680px] absolute">
            <div className="w-[70.05px] h-[70.05px] left-0 top-0 absolute bg-indigo-600 rounded-full" />
            <div className="left-[29.67px] top-[20.60px] absolute text-white text-[28.02px] font-medium ">
              4
            </div>
          </div>
          <div className="w-[70.05px] h-[70.05px] left-[-0px] top-[960px] absolute">
            <div className="w-[70.05px] h-[70.05px] left-0 top-0 absolute bg-indigo-600 rounded-full"></div>
            <div className="left-[29.67px] top-[20.60px] absolute text-white text-[28.02px] font-medium ">
              5
            </div>
          </div>

          <div className="w-[502.70px] left-[173.06px] top-[20.60px] absolute flex-col justify-start items-start gap-[19.78px] inline-flex">
            <div className="text-white text-[28.02px] font-medium ">
              Install the Eagle Eye NPM Module{" "}
            </div>
            <div className="w-[502.70px] text-white text-sm leading-5">
              <div className="relative bg-gray-800 rounded-md p-2 w-fit">
                <pre className={`language-javascript`}>
                  <code className={`language-javascript`}>
                    {`npm install eagle-eye`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="w-[502.70px] left-[173.06px] top-[200px] absolute flex-col justify-start items-start gap-[19.78px] inline-flex">
            <div className="text-white text-[28.02px] font-medium ">
              {" "}
              Initialize Eagle Eye in Your Project{" "}
            </div>
            <div className="relative bg-gray-800 rounded-md p-2 w-fit">
              <pre className={`language-javascript`}>
                <code className={`language-javascript`}>
                  {`const eagleEye = require('eagle-eye');`}
                </code>
              </pre>
            </div>
          </div>
          <div className="w-[502.70px] left-[173.06px] top-[380px] absolute flex-col justify-start items-start gap-[19.78px] inline-flex">
            <div className="text-white text-[28.02px] font-medium ">
              Detect Anomalies in Visual Input Stream
            </div>
            <div className="w-[502.70px] text-white text-sm leading-5">
              <div className="relative bg-gray-800 rounded-md p-2 w-fit">
                <pre className={`language-javascript`}>
                  <code className={`language-javascript`}>
                    {`const anomalies = eagleEye.detectAnomalies({
  input: 'your_visual_input_stream',
  detectionTypes: ['human fall', 'fire', 'smoke', 'weapons', 
    'wall theft', 'violence']
});
`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="w-[502.70px] left-[173.06px] top-[680px] absolute flex-col justify-start items-start gap-[19.78px] inline-flex">
            <div className="text-white text-[28.02px] font-medium ">
              Detect Violence and Human Fall in Thermal Imaging
            </div>
            <div className="w-[502.70px] text-white text-sm leading-5">
              <div className="relative bg-gray-800 rounded-md p-2 w-fit">
                <pre className={`language-javascript`}>
                  <code className={`language-javascript`}>
                    {`const thermalAnomalies = eagleEye.detectAnomalies({
  input: 'your_thermal_input_stream',
  detectionTypes: ['violence', 'human fall']
});
`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="w-[502.70px]  left-[173.06px] top-[960px] absolute flex-col justify-start items-start gap-[19.78px] inline-flex">
            <div className="text-white text-[28.02px] font-medium ">
              Take Action Based on Anomaly Detection Results
            </div>
            <div className="w-[502.70px] text-white text-sm leading-5">
              <div className="relative bg-gray-800 rounded-md p-2 w-fit">
                <pre className={`language-javascript`}>
                  <code className={`language-javascript`}>
                    {`anomalies.then(result => {
  // Perform actions based on anomaly detection results
}).catch(error => {
  console.error('An error occurred:', error);
});`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
