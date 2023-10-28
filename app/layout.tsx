import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import clsx from "clsx";
import { Fraunces, Inter } from "next/font/google";
import { Metadata } from "next";
import version from "@/utils/version";

const inter = Inter({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"] });

const buildDate: number = new Date().getTime();

export const metadata: Metadata = {
  openGraph: {
    images: [
      `https://v1.screenshot.11ty.dev/https%3A%2F%2Ftesting.bhs.sh%2F/opengraph/1:1/_${buildDate.toString()}_wait:2`,
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      `https://v1.screenshot.11ty.dev/https%3A%2F%2Ftesting.bhs.sh%2F/opengraph/16:9/_${buildDate.toString()}_wait:2`,
    ],
  },
  icons: "https://emojicdn.elk.sh/📝"
};

export default function Layout({ children }: { children: React.ReactNode }) {
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
