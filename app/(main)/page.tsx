import Image from "next/image";
import { Merriweather } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MerriweatherFont = Merriweather({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <section className="py-10 grid md:grid-cols-2 gap-10 items-center px-3">
      <div className="space-y-3">
        <h1
          className={`${MerriweatherFont.className} text-3xl lg:text-5xl capitalize font-semibold`}
        >
          Secure & Scalable Authentication system
        </h1>

        <p className="text-sm leading-5">
          As a developer, I know how crucial secure and efficient authentication
          is for any project. That's why I've crafted a robust, scalable, and
          customizable auth system just for you. With my solution, you can
          effortlessly integrate top-notch authentication and authorization into
          your applications, ensuring both security and ease of use.
        </p>
        <div className="flex gap-3">
          <Link href={"/login"}>
            <Button size={"lg"} className="capitalize">
              login
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button size={"lg"} className="capitalize" variant={"outline"}>
              register
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src={"/authimg.svg"}
        alt="authentication image"
        height={100}
        width={100}
        className="max-w-lg w-full"
      />
    </section>
  );
}
