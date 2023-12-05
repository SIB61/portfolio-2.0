"use client";
import Link from "next/link";
const navs = [
  { text: "Home", link: "#home" },
  { text: "Projects", link: "#projects" },
  { text: "Experience", link: "#experience" },
  { text: "Contact", link: "#contact" },
];
export function NavBar() {
  return (
    <nav
      className="w-screen overflow-x-hidden backdrop:blur-lg opacity-95 bg-[#222] sticky top-0 backdrop-blur-lg flex justify-center text-white h-[80px]"
      style={{
        boxShadow: "0px 4.364px 16px -2.182px rgba(0, 0, 0, 0.10)",
      }}
    >
      <div className=" backdrop:blur-lg w-3/4 flex justify-between h-full items-center">
        <img
          src="/assets/signature.png"
          className="h-14 -translate-x-20"
          alt=""
        />
        <nav className="text-[14px] md:text-base">
          <ul className="flex flex-wrap gap-[10px]">
            {navs.map((nav, idx) => (
              <li key={idx}>
                <Link href={nav.link}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
}
