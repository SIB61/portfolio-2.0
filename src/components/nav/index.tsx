"use client";
import { useEffect, useState } from "react";
import { Css } from "@sib61/react-classnames";
import styles from "./index.module.css";
import { Inter } from "next/font/google";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { navs } from "@/constants";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
export function Nav() {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<number>();
  const router = useRouter();
  const [prev, setPrev] = useState<number>();
  useEffect(() => {
    if (searchParams.get("page")) {
      setPrev(selected);
      setSelected(navs.indexOf(searchParams.get("page")!!));
    } else {
      setSelected(0);
    }
  }, [searchParams]);
  return (
    <Css module={styles}>
      <nav className={inter.className}>
        <ul>
          {navs.map((item, index) => (
            <li
              key={index}
              className={cn(
                {
                  selected: selected == index,
                  "prev-selected": prev == index,
                },
                "text-[16px]"
              )}
            >
              <Link href={{ pathname: "", query: { page: item } }} shallow>
                {item?.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Css>
  );
}
