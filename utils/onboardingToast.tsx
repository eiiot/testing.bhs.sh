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
      highlighted in{" "}
      <span
        style={{
          color: "rgb(234 179 8 / 1)",
        }}
      >
        yellow
      </span>
      .
      <br />
      <br />
      Exams are shown on each day. If an exam spans over multiple days, it will
      be displayed on each of those days. You can click on an exam to add it to
      your{" "}
      <span
        style={{
          color: "rgb(16 185 129)",
        }}
      >
        list of exams.
      </span>{" "}
      Once you have selected exams, you can click the filter button to only show
      those exams.
      <br />
      <br />
      Calculators are permitted on some exams, and are denoted with a{" "}
      <span className={fraunces.className}>G</span> for graphing calculator,{" "}
      <span className={fraunces.className}>S</span> for scientific calculator,
      and <span className={fraunces.className}>F</span> for four-function
      calculator.
      <br />
      <br />
      IB exams have different papers for different days. Papers are displayed as
      tags, and are denoted with a roman numeral (
      <span className={fraunces.className}>I</span>,{" "}
      <span className={fraunces.className}>II</span>,{" "}
      <span className={fraunces.className}>III</span>, etc.). Makeup exams are
      denoted with a <span className={fraunces.className}>M</span>.
      <br />
      <br />
      IB Language exams have different formats. Reading exams are denoted with an {" "}
      <span className={fraunces.className}>R</span>, while listening exams are denoted with an {" "}
      <span className={fraunces.className}>L</span>.
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
