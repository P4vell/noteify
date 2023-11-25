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
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { AuthForm } from "./AuthForm";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { toast } from "sonner";
import Link from "next/link";
import axios from "axios";

export const SignupForm = () => {
  const form = useForm<SignupCredentials>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  const router = useRouter();

  const { mutate: signupHandler, isLoading } = useMutation({
    mutationFn: async (crendentials: SignupCredentials) => {
      const { data } = await axios.post("/api/signup", crendentials);
      return data;
    },
    onSuccess: () => {
      toast.success("Your account has been created!");
      router.push("/login");
    },
    onError: () => {
      toast.error("Something went wrong, please try again");
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
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit((data) => signupHandler(data))}
        >
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
          <Button type="submit" isLoading={isLoading} className="w-full">
            Sign up
          </Button>
        </form>
      </Form>
    </AuthForm>
  );
};
