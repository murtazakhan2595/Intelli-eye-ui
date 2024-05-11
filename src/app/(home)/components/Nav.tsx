import Link from "next/link";


export default function Nav() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-between items-center px-5 font-medium tracking-wide whitespace-nowrap w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src="/logo.png"
          className="shrink-0 self-stretch max-w-full aspect-[1.49] w-[131px]"
        />
        <div className="flex gap-5 justify-between self-stretch p-2.5 my-auto text-base leading-6 text-center text-white">
          <a href="#home" className="cursor-pointer">
            Home
          </a>
          <a href="#about" className="cursor-pointer">
            About
          </a>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </div>
        <a
          href="https://www.npmjs.com/package/inteli-eye"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="justify-center self-stretch px-9 py-3.5 my-auto text-lg leading-6 text-indigo-600 rounded-xl border-2 border-indigo-600 border-solid shadow-lg max-md:px-5 cursor-pointer">
            Subscribe
          </div>
        </a>
      </div>
    </div>
  );
}




