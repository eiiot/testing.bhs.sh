import { Fraunces } from "next/font/google";
import { toast } from "sonner";

const fraunces = Fraunces({ subsets: ["latin"] });

const updateToast = () => {
  toast(
    <p className="relative">
      <h1 className="font-semibold">What's New</h1>
      <br />
      The schedule now includes information about calculators on each exam.
      Calculators are denoted with a <span className={fraunces.className}>G</span>{" "}
      for graphing calculator, <span className={fraunces.className}>S</span>{" "}
      for scientific calculator, and <span className={fraunces.className}>F</span>{" "}
      for four-function calculator.
      <br />
      <br />
      Assorted bug fixes and improvements.
    </p>,
    {
      duration: 10000,
      id: "info",
    }
  );
}

export default updateToast
