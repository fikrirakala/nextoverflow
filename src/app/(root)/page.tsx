import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">All Questions</h1>
        <Button asChild size="lg">
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section className="mt-11">LocalSearch</section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        <p>Question Card 1</p>
        <p>Question Card 1</p>
        <p>Question Card 1</p>
        <p>Question Card 1</p>
      </div>
    </>
  );
}
