import { NavBar } from "@/components/portfolio/navbar";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import user from "@/data.json";
import { Nav } from "@/components/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Md Sabit Islam Bhuiya",
  description: "This is a personal portfolio.",
  keywords: [
    "Sabit",
    "Portfolio",
    "Sabit Islam",
    "Web developer portfolio",
    "Software engineer portfolio",
  ],
};

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "w-screen min-h-screen  flex  flex-col items-center bg-[#161513]"
      )}
    >
      <header className="w-full relative h-[200px] pt-10 text-white text-center">
        <h1 className="sticky top-10 text-xl uppercase font-bold text-blue-gradient font-mono">
          {user.name}
        </h1>
      </header>
      {/* <Nav /> */}
      <div className={cn("w-11/12 lg:w-3/4")}>{children}</div>
    </div>
  );
}
