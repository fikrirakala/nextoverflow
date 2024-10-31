import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between gap-5 bg-background p-6 shadow dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="NextOverflow Logo"
          width={32}
          height={32}
        />
        <p className="text-2xl font-medium max-sm:hidden">NextOverflow</p>
      </Link>
      <div className="flex items-center gap-5">
        <Theme />
        <MobileNav />
      </div>
    </nav>
  );
}
