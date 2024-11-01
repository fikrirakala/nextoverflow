"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import NavLinks from "./navbar/NavLinks";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";

export default function LeftSidebar() {
  const { data: session } = useSession();

  return (
    <section className="sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r bg-background p-6 pt-36 shadow dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-4 pb-6">
        <NavLinks />
      </div>
      {!session?.user ? (
        <div className="flex flex-col gap-3">
          <Button asChild variant="secondary">
            <Link href={ROUTES.SIGN_IN}>
              <Image
                src="/icons/account.svg"
                alt="Account"
                width={20}
                height={20}
                className="invert dark:invert-0 lg:hidden"
              />
              <span className="max-lg:hidden">Log In</span>
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={ROUTES.SIGN_UP}>
              <Image
                src="/icons/sign-up.svg"
                alt="Account"
                width={20}
                height={20}
                className="invert dark:invert-0 lg:hidden"
              />
              <span className="max-lg:hidden">Sign up</span>
            </Link>
          </Button>
        </div>
      ) : (
        <LogoutButton />
      )}
    </section>
  );
}
