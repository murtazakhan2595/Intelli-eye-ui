

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
                    <div className="relative">
                      <img src="/testimonial-3.png" alt="" />

                      <img
                        src="/person1.png"
                        alt=""
                        className="absolute top-0 left-[145px] max-w-full rounded-full aspect-square w-[76px]"
                      />
                      <div className="absolute top-[115px] left-[63px] w-[200px] flex items-center justify-center flex-col">
                        <div className="text-2xl font-bold ">
                          Hannah Schmitt
                        </div>
                        <div className="relative mt-4 text-xs">
                          Lead Developer
                        </div>
                        <img
                          loading="lazy"
                          src="/comma.svg"
                          className="  aspect-square z-10 w-[22px]"
                        />
                        <div className="relative self-stretch text-center text-xs ">
                          Innovating with teams, crafting solutions beyond
                          expectations.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="relative">
                      <img src="/testimonial-2.png" alt="" />

                      <img
                        src="/download.png"
                        alt=""
                        className="absolute -top-[40px] right-[155px] max-w-full rounded-full aspect-square w-[102px]"
                      />
                      <div className="absolute top-[96px] right-[53px] w-[300px] flex items-center justify-center flex-col">
                        <div className="text-center text-stone-300 text-2xl font-bold">
                          Mr Rozi khan
                        </div>
                        <div className="relative mt-4 ">ML Researcher</div>
                        <img
                          loading="lazy"
                          src="/comma.svg"
                          className="  aspect-square z-10 w-9 h-9 "
                        />
                        <div className="relative self-stretch tw-[346px] h-[171px] text-center text-stone-300 text-lg font-normal ">
                          Turning data into actionable insights, thriving on
                          innovation.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
              <div className="relative">
                <img src="/testimonial-1.png" alt="" />

                <img
                  src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=Ckv0nR4AAAAJ&citpid=15"
                  alt=""
                  className="absolute top-0 right-[145px] max-w-full rounded-full aspect-square w-[76px]"
                />
                <div className="absolute top-[115px] right-[63px] w-[200px] flex items-center justify-center flex-col">
                  <div className="text-2xl font-bold ">Dr Mohsin Raza</div>
                  <div className="relative mt-4 text-xs">ML Researcher</div>
                  <img
                    loading="lazy"
                    src="/comma.svg"
                    className="  aspect-square z-10 w-[22px]"
                  />
                  <div className="relative self-stretch text-center text-xs ">
                    Exploring frontiers, driving progress through
                    interdisciplinary collaboration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}