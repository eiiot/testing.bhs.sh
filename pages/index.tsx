import { Fraunces, Inter } from "next/font/google";
import clsx from "clsx";
import { bhsExams } from "@/data/exams";
import Day from "@/components/Day";
import { Filter, HelpCircle, X } from "react-feather";
import { useState } from "react";
import { toast } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"] });

const days = new Array(32).fill(0).map((_, i) => new Date(2023, 3, 23 + i));

export default function Home() {
  const [filterExams, setFilterExams] = useState<boolean>(false);
  const [userExams, setUserExams] = useLocalStorage<string[]>("userExams", []);

  const examsForDate = days.map((day) => {
    return bhsExams.filter((exam) => {
      return exam.dates.some((date) => {
        return (
          date.date.getDate() === day.getDate() &&
          date.date.getMonth() === day.getMonth() &&
          date.date.getFullYear() === day.getFullYear()
        );
      });
    });
  });

  const filteredExams = filterExams
    ? examsForDate.map((exams) =>
        exams.filter((exam) => userExams.includes(exam.name))
      )
    : examsForDate;

  return (
    <>
      <Head>
        <title>BHS Testing Schedule</title>
        <link rel="icon" href="https://emojicdn.elk.sh/📝" />
      </Head>
      <main className={clsx(`p-4 flex flex-col space-y-4`, inter.className)}>
        <header className="flex flex-row items-center justify-end space-x-2">
          <span className="mr-auto flex flex-row space-x-2 items-center">
            <h1 className="font-semibold text-lg">BHS Testing Schedule</h1>
          </span>
          <button
            className={clsx(
              "p-2 rounded-md border-neutral-200 border-[1px] bg-white",
              filterExams && "ring-emerald-500 ring-1"
            )}
            onClick={() => {
              if (!filterExams && userExams.length === 0) {
                toast.error("Click an exam to add it to your list of exams");
              } else {
                setFilterExams(!filterExams);
                toast(filterExams ? "Filtering disabled" : "Filtering enabled");
              }
            }}
          >
            <Filter size={14} />
          </button>
          <button
            className={clsx(
              "p-2 rounded-md border-neutral-200 border-[1px] bg-white"
            )}
            onClick={() => {
              toast.dismiss("info");
              toast(
                <p>
                  <h1 className="font-semibold">About</h1>
                  <br />
                  This is a site for Berkeley High&apos;s testing schedule. The
                  goal is to help students plan their studying and work during
                  this stressful time of the year. The site is designed as a
                  calendar, with the current day highlighted in{" "}
                  <span className="text-yellow-500">yellow</span>.
                  <br />
                  <br />
                  Exams are shown on each day. If an exam spans over multiple
                  days, it will be displayed on each of those days. You can
                  click on an exam to add it to your{" "}
                  <span className="text-emerald-500">list of exams.</span> Once
                  you have selected exams, you can click the filter button to
                  only show those exams.
                  <br />
                  <br />
                  IB exams have different papers for different days. Papers are
                  displayed as tags, and are denoted with a roman numeral (
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
                  <br />
                  <br />
                  <i>Swipe or click the x to dismiss this toast</i>
                </p>,
                {
                  duration: Infinity,
                  id: "info",
                }
              );
            }}
          >
            <HelpCircle size={14} />
          </button>
        </header>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {days.map((day, index) => (
            <Day key={day.getTime()} date={day} exams={filteredExams[index]} />
          ))}
        </div>

        <span className="text-sm w-full text-center">
          made with ❤️ by{" "}
          <a className="underline" href="https://eliothertenstein.com">
            eliot
          </a>
        </span>
      </main>
    </>
  );
}
