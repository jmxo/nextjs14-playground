import { Medal } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex flex-col items-center justify-center font-bold",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          #1 Task Management Tool
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps teams move
        </h1>
        <div className="text-3xl md:text-6xl text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        The ultimate project management solution for seamless collaboration and
        enhanced productivity. With customizable boards, task assignments, and
        deadline tracking.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
