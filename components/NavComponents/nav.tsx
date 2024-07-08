import { Navlinks } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="shadow-md">
      <nav className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link
          href={"/"}
          className="tracking-wide uppercase font-semibold border-2 rounded-md p-2 border-black"
        >
          logo
        </Link>
        <ul className="flex items-center gap-5">
          {Navlinks.map((item) => {
            const islogin = item.title === "login";
            const isregister = item.title === "register";
            return (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={cn(`capitalize hover:tracking-wide transition`, {
                    "px-3 py-2 bg-black rounded-sm text-white": islogin,
                    "px-3 py-2 bg-white text-black border-black border rounded-sm":
                      isregister,
                  })}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
