"use client";

import { Icons } from "@/components/Icons";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  isMobileNav: boolean;
};

export default function NavLinks({ isMobileNav = false }: NavLinkProps) {
  return (
    <>
      <LinkComponent
        href="/"
        icon={<Icons.home />}
        title="Home"
        isMobileNav={isMobileNav}
      />
      <LinkComponent
        href="/community"
        icon={<Icons.users />}
        title="Community"
        isMobileNav={isMobileNav}
      />
      <LinkComponent
        href="/collection"
        icon={<Icons.star />}
        title="Collections"
        isMobileNav={isMobileNav}
      />
      <LinkComponent
        href="/jobs"
        icon={<Icons.suitcase />}
        title="Find Jobs"
        isMobileNav={isMobileNav}
      />
      <LinkComponent
        href="/tags"
        icon={<Icons.tag />}
        title="Tags"
        isMobileNav={isMobileNav}
      />
      <LinkComponent
        href="/ask-question"
        icon={<Icons.question />}
        title="Ask a question"
        isMobileNav={isMobileNav}
      />
    </>
  );
}

type LinkComponentProps = {
  href: string;
  icon: ReactNode;
  title: string;
  isMobileNav: boolean;
};

function LinkComponent({ href, icon, title, isMobileNav }: LinkComponentProps) {
  const pathname = usePathname();

  const isActive =
    (pathname.includes(href) && href.length > 1) || pathname === href;

  const linkContent = (
    <Link
      href={href}
      className={cn("flex items-center gap-3", isActive && "text-primary")}
    >
      {icon}
      <p className={cn("font-medium")}>{title}</p>
    </Link>
  );

  return isMobileNav ? (
    <SheetClose asChild>{linkContent}</SheetClose>
  ) : (
    <>{linkContent}</>
  );
}
