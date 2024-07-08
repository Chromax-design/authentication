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

const MerriweatherFont = Merriweather({ subsets: ["latin"], weight: ["700"] });

const FormSchema = z.object({
  firstName: z.string().min(5,{message: 'This field shoould be at least 5 characters long'}),
  lastName: z.string().min(5,{message: 'This field shoould be at least 5 characters long'}),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(5, { message: "Password too short" }),
});

const RegisterPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="p-3">
      <h1
        className={`${MerriweatherFont.className} text-2xl font-semibold mb-5 capitalize`}
      >
        Sign up
      </h1>
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="First Name"
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Last Name"
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
            Sign Up
          </Button>
        </form>
      </Form>
      <div className="mt-5 space-y-3">
        <p className="text-sm text-gray-500 text-center">
          Already have an account, please{" "}
          <Link
            href={"/login"}
            className="capitalize font-semibold underline"
          >
            login.
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

export default RegisterPage;
