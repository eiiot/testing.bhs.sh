import { Fraunces } from "next/font/google";
import { toast } from "sonner";

const fraunces = Fraunces({ subsets: ["latin"] });

const updateToast = () => {
  toast(
    <p className="relative">
      <h1 className="font-semibold">What&apos;s New</h1>
      <br />
      The schedule now includes AP makeup exams. Makeup exams are denoted with a{" "}
      <span className={fraunces.className}>M</span>.
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
