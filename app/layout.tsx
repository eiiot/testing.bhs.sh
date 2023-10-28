import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import clsx from "clsx";
import { Fraunces, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const version = "1.3";

  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-right" closeButton />
        <Analytics />
        <main className={clsx(`p-4 flex flex-col space-y-4`, inter.className)}>
          {children}
          <span className="text-sm w-full text-center">
            made with ❤️ by{" "}
            <a className="underline" href="https://eliothertenstein.com">
              eliot
            </a>{" "}
            · version <span className={fraunces.className}>{version}</span>
          </span>
        </main>
      </body>
    </html>
  );
}
