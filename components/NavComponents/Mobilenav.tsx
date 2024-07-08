import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Navlinks } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Mobilenav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Image src={"/hamburger.svg"} alt="hamburger" width={10} height={8} className="w-8 h-6"/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-5 min-h-full py-5">
          {Navlinks.map((item) => {
            const islogin = item.title === "login";
            const isregister = item.title === "register";
            return (
              <SheetClose key={item.id} asChild>
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
              </SheetClose>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Mobilenav;
