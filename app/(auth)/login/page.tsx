"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import { signInMethods } from "@/data";

const MerriweatherFont = Merriweather({ subsets: ["latin"], weight: ["700"] });

const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(5, { message: "Password too short" }),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="p-3">
      <h1
        className={`${MerriweatherFont.className} text-2xl font-semibold mb-5 capitalize`}
      >
        Sign In
      </h1>
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="w-full !h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="w-full !h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Link
              href={"/"}
              className="text-sm text-gray-500 capitalize hover:underline"
            >
              forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            className={`w-full !h-12 ${MerriweatherFont.className}`}
          >
            Sign In
          </Button>
        </form>
      </Form>
      <div className="mt-5 space-y-5">
        <p className="text-sm text-center uppercase">or</p>
        <div className="flex gap-3 flex-col">
          {signInMethods.map((item) => {
            return (
              <Button
                variant={"outline"}
                className="w-full text-xl py-4 !h-12 space-x-3"
              >
                {item.icon}
                <span className="text-sm capitalize">{item.title}</span>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="mt-5 space-y-3">
        <p className="text-sm text-gray-500 text-center">
          No account, please{" "}
          <Link
            href={"/register"}
            className="capitalize font-semibold underline"
          >
            register.
          </Link>
        </p>
        <p className="text-sm text-gray-500 text-center">
          Back to{" "}
          <Link href={"/"} className="capitalize font-semibold underline">
            home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
