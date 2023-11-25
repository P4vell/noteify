"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactNode, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Toaster position="top-center" />
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
};
