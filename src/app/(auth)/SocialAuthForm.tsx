import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SocialAuthForm() {
  return (
    <>
      <Button variant="outline" className="w-full">
        <Image
          src="/icons/google.svg"
          width={20}
          height={20}
          alt="Google logo"
        />
        Login with Google
      </Button>
      <Button variant="outline" className="w-full">
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
