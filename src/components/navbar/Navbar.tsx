import { buttonVariants } from "../ui/Button";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { ArrowRight } from "lucide-react";
import { Container } from "../shared/Container";
import { UserMenu } from "./UserMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <nav className="h-14 sticky top-0 inset-x-0 bg-white/75 border-b border-gray-200 backdrop-blur-lg transition-all z-10">
      <Container className="h-full flex justify-between items-center">
        <Link href="/" className="font-semibold">
          Noteify
        </Link>

        {currentUser ? (
          <UserMenu currentUser={currentUser} />
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              Log in
            </Link>
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              <span>Get started</span>
              <ArrowRight className="w-5 h-5 ml-1.5" />
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
};
