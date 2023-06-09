import { Fraunces, Inter } from "next/font/google";
import clsx from "clsx";
import { bhsExams } from "@/data/exams";
import Day from "@/components/Day";
import { Clock, Filter, HelpCircle, X } from "react-feather";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useIsClient, useLocalStorage } from "usehooks-ts";
import Head from "next/head";
import onboardingToast from "@/utils/onboardingToast";
import updateToast from "@/utils/updateToast";

const inter = Inter({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"] });

const days = new Array(28).fill(0).map((_, i) => new Date(2023, 3, 27 + i));

export default function Home() {
  const version = "1.3";

  const isClient = useIsClient();
  const [filterExams, setFilterExams] = useState<boolean>(false);
  const [userExams, setUserExams] = useLocalStorage<string[]>("userExams", []);
  const [onboarded, setOnboarded] = useLocalStorage<boolean>(
    "onboarded",
    false
  );
  const [updated, setUpdated] = useLocalStorage<boolean>(
    "updated-" + version,
    false
  );

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

  useEffect(() => {
    if (!onboarded) {
      onboardingToast();
      setOnboarded(true);
      setUpdated(true);
    } else if (!updated) {
      updateToast();
      setUpdated(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>BHS Testing Schedule</title>
        <link rel="icon" href="https://emojicdn.elk.sh/📝" />
        <meta name="description" content="BHS Testing Schedule" />
      </Head>
      <main className={clsx(`p-4 flex flex-col space-y-4`, inter.className)}>
        <header className="flex flex-row items-center justify-end space-x-2">
          <span className="mr-auto flex flex-row space-x-2 items-center">
            <h1 className="font-semibold text-lg">BHS Testing Schedule</h1>
          </span>
          {isClient && document && document.getElementById("today") && (
            <button
              className="p-2 rounded-md border-neutral-200 border-[1px] bg-white fixed top-4 right-24 z-20 "
              onClick={() => {
                document.getElementById("today")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              aria-label="Scroll to today"
            >
              <Clock size={14} />
            </button>
          )}
          <button
            className={clsx(
              "p-2 rounded-md border-neutral-200 border-[1px] bg-white fixed top-4 right-14 z-20 ",
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
            aria-label="Filter exams"
          >
            <Filter size={14} />
          </button>
          <button
            className={clsx(
              "p-2 rounded-md border-neutral-200 border-[1px] bg-white fixed top-4 right-4 z-20 "
            )}
            onClick={() => {
              toast.dismiss("info");
              onboardingToast();
            }}
            aria-label="Help"
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
          </a>{" "}
          · version <span className={fraunces.className}>{version}</span>
        </span>
      </main>
    </>
  );
}
