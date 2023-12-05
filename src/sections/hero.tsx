import { Button } from "@/components/common/button";
import { Avatar } from "@/components/hero/avatar";
import { cn } from "@/lib/utils";
import user from "@/data.json";

export function HeroSection({ className }: { className?: string }) {
  return (
    <section
      id="home"
      className={cn(
        "flex flex-col items-center  w-full max-w-[670px]",
        className
      )}
    >
      <Avatar className="w-[213px] h-[213px]" />
      <div className="text-[40px] lg:text-[55px]  font-[800] text-white text-center">
        I do code and make content{" "}
        <span
          style={{
            background:
              "linear-gradient(116deg, #FF8660 71.79%, #9A33FF 95.51%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          about it!
        </span>
      </div>
      <div className="text-center text-[13px] lg:text-[16px] text-white mt-[39px]">
        I am a full-stack software engineer with over{" "}
        {new Date().getFullYear() -
          new Date(user.experiencedFrom).getFullYear()}{" "}
        years of professional experience. My expertise lies in crafting robust
        and scalable architectures. I develop a product from its specifications
        to successfull deployment.
      </div>
      <div className="flex mt-[54px] justify-center gap-[18px]">
        <Button>Get in touch</Button>
        <Button className="bg-transparent border-white border text-white">
          Download CV
        </Button>
      </div>
    </section>
  );
}
