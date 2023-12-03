"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { LoginCredentials, loginSchema } from "@/lib/schemas/login";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthForm } from "./AuthForm";
import { Button } from "../ui/Button";
import { signIn } from "next-auth/react";
import { Input } from "../ui/Input";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const form = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginHandler: SubmitHandler<LoginCredentials> = async (credentials) => {
    try {
      const res = await signIn("credentials", {
        ...credentials,
        redirect: false,
      });
      if (res?.error) {
        toast.error(res.error);
      }
    } catch {
      toast.error("Something went wrong, please try again");
    }
  };

  const footer = (
    <>
      <p>New to Formify?</p>
      <Link
        href="/signup"
        className="text-indigo-600 font-semibold hover:underline"
      >
        Sign up
      </Link>
    </>
  );

  return (
    <AuthForm
      title="Welcome back!"
      subtitle="Log in to your account"
      footer={footer}
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(loginHandler)}>
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
          <Button
            type="submit"
            isLoading={form.formState.isSubmitting}
            className="w-full"
          >
            Log in
          </Button>
        </form>
      </Form>
    </AuthForm>
  );
};
