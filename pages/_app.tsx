import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="bottom-right" closeButton />
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
