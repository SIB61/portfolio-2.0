import { cn } from "@/lib/utils";

export function Button({ ...props }) {
  return (
    <button
      className={cn(
        " bg-white text-[16px] md:text-[21px] font-[600] text-[#161513] px-[15px] py-[10px] md:px-[30px] md:py-[16px] rounded-full",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
