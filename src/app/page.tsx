import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <Container className="flex flex-col justify-center items-center text-center mt-28 sm:mt-40">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[55rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />

      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl">
        Capture Ideas, Unleash Potential: Your Notes, Your Way!
      </h1>

      <p className="max-w-prose text-zinc-700 mt-5 lg:text-lg">
        Effortless organization, boundless creativity. Noteify adapts to your
        rhythm, turning ideas into action with a sleek design and powerful
        features. Simplify your life, amplify your productivity.
      </p>

      <Link
        className={buttonVariants({
          size: "lg",
          className: "mt-5",
        })}
        href="/dashboard"
      >
        <span>Get started</span>
        <ArrowRight className="w-5 h-5 ml-2" />
      </Link>

      <Image src="/images/hero.svg" alt="" width={400} height={100} priority />

      <div className="max-w-5xl my-12 mx-auto">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start just in few seconds
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Creating notes has never been easier than with Noteify.
            </p>
          </div>
        </div>

        <ol className="mt-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-indigo-600">
                Step 1
              </span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                Sign up with your email address, Google or Github.
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-indigo-600">
                Step 2
              </span>
              <span className="text-xl font-semibold">Create notes</span>
              <span className="mt-2 text-zinc-700">
                With our advanced text editor, you can create different types of
                notes in just a few minutes.
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-indigo-600">
                Step 3
              </span>
              <span className="text-xl font-semibold">Share your notes</span>
              <span className="mt-2 text-zinc-700">
                Once you&apos;ve created your notes, share it with your friends
                or co-workers.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </Container>
  );
};

export default Home;
