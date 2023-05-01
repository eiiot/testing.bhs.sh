import { Fraunces } from "next/font/google";
import { toast } from "sonner";

const fraunces = Fraunces({ subsets: ["latin"] });

const onboardingToast = () =>
  toast(
    <p className="relative">
      <h1 className="font-semibold">About</h1>
      <br />
      This is a site for Berkeley High&apos;s testing schedule. The goal is to
      help students plan their studying and work during this stressful time of
      the year. The site is designed as a calendar, with the current day
      highlighted in <span className="text-yellow-500">yellow</span>.
      <br />
      <br />
      Exams are shown on each day. If an exam spans over multiple days, it will
      be displayed on each of those days. You can click on an exam to add it to
      your <span className="text-emerald-500">list of exams.</span> Once you
      have selected exams, you can click the filter button to only show those
      exams.
      <br />
      <br />
      IB exams have different papers for different days. Papers are displayed as
      tags, and are denoted with a roman numeral (
      <span className={fraunces.className}>I</span>,{" "}
      <span className={fraunces.className}>II</span>,{" "}
      <span className={fraunces.className}>III</span>, etc.).
      <br />
      <br />
      This site is open source. You can find the code on{" "}
      <a
        className="underline z-[999]"
        href="
                    https://www.github.com/eiiot/testing.bhs.sh"
      >
        GitHub
      </a>
      . Created by{" "}
      <a className="underline" href="https://eliothertenstein.com">
        Eliot Hertenstein
      </a>
      , class of 2024.
    </p>,
    {
      duration: Infinity,
      id: "info",
    }
  );

export default onboardingToast;
