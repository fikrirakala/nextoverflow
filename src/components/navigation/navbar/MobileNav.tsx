"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ROUTES } from "@/constants/routes";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { useSession } from "next-auth/react";
import LogoutButton from "../LogoutButton";

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="flex-none">
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/site-logo.svg"
              width={23}
              height={23}
              alt="Logo"
            />
            <p className="text-2xl font-medium">NextOverflow</p>
          </Link>
        </div>

        <div className="flex flex-1 flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex flex-col gap-2 py-10">
              <NavLinks isMobileNav={true} />
            </section>
          </SheetClose>

          {!session?.user ? (
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Button asChild variant="secondary">
                  <Link href={ROUTES.SIGN_IN}>Log In</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="secondary">
                  <Link href={ROUTES.SIGN_UP}>Sign up</Link>
                </Button>
              </SheetClose>
            </div>
          ) : (
            <LogoutButton isMobileNav={true} />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
