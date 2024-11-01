"use client";

import { ROUTES } from "@/constants/routes";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function LogoutButton({
  isMobileNav = false,
}: {
  isMobileNav?: boolean;
}) {
  return (
    <Button
      variant="secondary"
      onClick={() => signOut({ redirectTo: ROUTES.SIGN_IN })}
    >
      {!isMobileNav && (
        <Image
          src="/icons/sign-up.svg"
          alt="Account"
          width={20}
          height={20}
          className="invert dark:invert-0 lg:hidden"
        />
      )}
      <span className={cn(!isMobileNav && "max-lg:hidden")}>Logout</span>
    </Button>
  );
}
