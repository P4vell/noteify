import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-screen-xl px-2.5 mx-auto md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
