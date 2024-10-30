import { Button } from "@/components/ui/button";
import { auth, signOut } from "../../../auth";
import { ROUTES } from "@/constants/routes";

export default async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>

      <form
        action={async () => {
          "use server";

          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
        className="mt-24"
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </>
  );
}
