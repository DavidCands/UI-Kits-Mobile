import { Stack } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RootLayout() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Stack />
      </PaperProvider>
    </QueryClientProvider>
  );
}
