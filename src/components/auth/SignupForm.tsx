"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { SignupCredentials, signupSchema } from "@/lib/schemas/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthForm } from "./AuthForm";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import Link from "next/link";

export const SignupForm = () => {
  const form = useForm<SignupCredentials>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const footer = (
    <>
      <p>Already have an account?</p>
      <Link
        href="/login"
        className="text-indigo-600 font-semibold hover:underline"
      >
        Log in
      </Link>
    </>
  );

  return (
    <AuthForm
      title="Welcome to Noteify!"
      subtitle="Create your account"
      footer={footer}
    >
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Name" {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
      </Form>
    </AuthForm>
  );
};
