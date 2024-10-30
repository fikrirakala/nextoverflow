"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

export default function SocialAuthForm() {
  const { toast } = useToast();

  async function handleSignIn(provider: "github" | "google") {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Sign-in Failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          width={20}
          height={20}
          alt="Google logo"
        />
        Login with Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="Github logo"
          className="invert dark:invert-0"
        />
        Login with Github
      </Button>
    </>
  );
}
