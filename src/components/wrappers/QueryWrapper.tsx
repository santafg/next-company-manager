"use client";

import queryClinet from "@/react-query/client";
import { QueryClientProvider } from "@tanstack/react-query";

const QueryWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
    </div>
  );
};

export default QueryWrapper;
