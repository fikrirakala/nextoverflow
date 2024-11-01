"use client";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  isMobileNav: boolean;
};

export default function NavLinks({ isMobileNav = false }: NavLinkProps) {
  return (
    <>
      {sidebarLinks.map((item) => (
        <LinkComponent
          key={item.route}
          href={item.route}
          icon={item.imgURL}
          title={item.label}
          isMobileNav={isMobileNav}
        />
      ))}
    </>
  );
}

type LinkComponentProps = {
  href: string;
  icon: string;
  title: string;
  isMobileNav: boolean;
};

function LinkComponent({ href, icon, title, isMobileNav }: LinkComponentProps) {
  const pathname = usePathname();
  const userId = 1;

  const isActive =
    (pathname.includes(href) && href.length > 1) || pathname === href;

  if (href === "/profile") {
    if (userId) href = `${href}/${userId}`;
    else return null;
  }

  const linkContent = (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 p-4",
        isActive && "rounded bg-primary text-white",
      )}
    >
      <Image
        src={icon}
        alt={title}
        width={20}
        height={20}
        className={cn("invert", isActive && "invert-0")}
      />
      <p className={cn("font-medium")}>{title}</p>
    </Link>
  );

  return isMobileNav ? (
    <SheetClose asChild>{linkContent}</SheetClose>
  ) : (
    <>{linkContent}</>
  );
}
