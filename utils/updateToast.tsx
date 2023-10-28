import { Fraunces } from "next/font/google";
import Link from "next/link";
import { toast } from "sonner";

const fraunces = Fraunces({ subsets: ["latin"] });

const updateToast = () => {
  toast(
    <p className="relative">
      <h1 className="font-semibold">What&apos;s New</h1>
      <br />
      The schedule now includes 2024 IB exams. You can find 2023 exams at{" "}
      <Link className="underline" href="/2023">/2023</Link>.
      <br />
      <br />
      You can now see reading and listening days for language exams, denoted with an{" "}
      <span className={fraunces.className}>R</span> or {" "}
      <span className={fraunces.className}>L</span> respectively.
      <br />
      <br />
      Assorted bug fixes and improvements.
    </p>,
    {
      duration: 10000,
      id: "info",
    }
  );
};

export default updateToast;
