import Link from "next/link";


export default function Nav() {
  return (
    <header className="flex items-center justify-center mb-10 ">
      <nav className="flex w-[1097px] items-center justify-around p-[15px]">
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-[131px] h-[88px]" />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2.5 font-medium text-base">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex items-center px-9 py-5 border-2 border-solid border-[#4452FE] rounded-[10px] text-[#4452FE]">
          <Link href="/subscribe">Subscribe</Link>
        </div>
      </nav>
    </header>
  );
}




