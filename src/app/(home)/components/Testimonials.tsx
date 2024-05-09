

export default function Testimonials() {
  return (
    <div className="my-[9rem]">
      <div className="flex flex-col items-center">
        <div className="flex gap-5 items-start px-5 max-w-full text-4xl font-bold text-center text-white w-[780px] max-md:flex-wrap">
          <img
            loading="lazy"
            src="/chevron-down.svg"
            className="shrink-0 w-10 aspect-square"
          />
          <div className="flex-auto self-stretch max-md:max-w-full">
            What Our Clients Say About Us
          </div>
          <img
            loading="lazy"
            src="/chevron-right.svg"
            className="shrink-0 w-10 aspect-square"
          />
        </div>
        <div className="self-stretch mt-32 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-9 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col items-start self-stretch px-10 pt-px pb-9 my-auto text-xs text-center aspect-[0.91] fill-indigo-600 text-stone-300 max-md:pl-5 max-md:mt-9">
                      <img
                        loading="lazy"
                        src="/test-back1-blue.svg"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="flex overflow-hidden relative flex-col items-center px-10 pb-20 aspect-[0.88] fill-stone-950 max-md:px-5">
                        <img
                          loading="lazy"
                          src="/test-back1.svg"
                          className="object-cover absolute inset-0 size-full"
                        />
                        <img
                          loading="lazy"
                          src="/client1.png"
                          className="rounded-full aspect-square w-[76px] z-10"
                        />
                        <div className="relative mt-4 text-lg font-bold">
                          Hannah Schmitt
                        </div>
                        <div className="relative mt-3">Lead designer</div>
                        <img
                          loading="lazy"
                          src="/comma.svg"
                          className="mt-1 aspect-square w-[22px] z-10"
                        />
                        <div className="relative self-stretch mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cursus nibh mauris, nec turpis orci lectus
                          maecenas. Suspendisse sed magna eget nibh in turpis.
                          Consequat duis diam lacus arcu. Faucibus venenatis
                          felis id augue sit cursus pellentesque enim{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow items-center px-11 pb-20 text-lg text-center aspect-[0.96] fill-stone-950 text-stone-300 max-md:px-5 max-md:mt-4">
                      <img
                        loading="lazy"
                        src="/test-black2.svg"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <img
                        loading="lazy"
                        src="/client2.png"
                        className="z-10 mt-0 max-w-full rounded-full aspect-square w-[102px]"
                      />
                      <div className="relative mt-6 text-2xl font-bold">
                        Hannah Schmitt
                      </div>
                      <div className="relative mt-4">Lead designer</div>
                      <img
                        loading="lazy"
                        src="/comma.svg"
                        className="mt-2 w-9 aspect-square z-10"
                      />
                      <div className="relative self-stretch mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris, nec turpis orci lectus maecenas.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col items-start self-stretch pt-px pb-9 my-auto text-xs text-center aspect-[0.91] fill-indigo-600 text-stone-300 max-md:mt-10">
                <img
                  loading="lazy"
                  src="/test-black3-blue.svg"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex overflow-hidden relative flex-col items-center px-10 pb-20 aspect-[0.88] fill-stone-950 max-md:px-5">
                  <img
                    loading="lazy"
                    src="/test-black3.svg"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <img
                    loading="lazy"
                    src="/client3.png"
                    className="rounded-full aspect-square w-[76px] z-10"
                  />
                  <div className="relative mt-4 text-lg font-bold z-10">
                    Hannah Schmitt
                  </div>
                  <div className="relative mt-3">Lead designer</div>
                  <img
                    loading="lazy"
                    src="/comma.svg"
                    className="mt-1 aspect-square w-[22px] z-10"
                  />
                  <div className="relative self-stretch mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}