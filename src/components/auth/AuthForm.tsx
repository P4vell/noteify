"use client"

import { ReactNode, ReactElement, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import { Container } from "../shared/Container";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/Button";

type AuthFormProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactElement;
};

export const AuthForm = ({
  title,
  subtitle,
  children,
  footer,
}: AuthFormProps) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
      router.refresh();
    }
  }, [session.status, router]);

  return (
    <Container className="mt-28 sm:mt-40">
      <div className="w-full max-w-[450px] bg-white space-y-6 px-4 py-8 rounded-xl shadow-xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-neutral-500">{subtitle}</p>
        </div>

        {children}

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm font-semibold">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            className="relative"
            onClick={() => signIn("google")}
          >
            <FcGoogle
              size={24}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <span>Continue with Google</span>
          </Button>
          <Button
            variant="outline"
            className="relative"
            onClick={() => signIn("github")}
          >
            <AiFillGithub
              size={24}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <span>Continue with Github</span>
          </Button>
        </div>

        <div className="flex justify-center items-center gap-1 text-sm text-neutral-500">
          {footer}
        </div>
      </div>
    </Container>
  );
};
