'use client';

import { ExamInfo } from "@/data/types";
import onboardingToast from "@/utils/onboardingToast";
import updateToast from "@/utils/updateToast";
import clsx from "clsx";
import { useEffect, useState, createContext } from "react";
import { Calendar, Clock, Filter, HelpCircle } from "react-feather";
import Link from "next/link";
import { toast } from "sonner";
import { useIsClient, useLocalStorage } from "usehooks-ts";
import Day from "@/components/Day";
import version from "@/utils/version";

interface ScheduleProps {
  days: Date[];
  exams: ExamInfo[];
  link: string;
  year: number;
}

// @ts-ignore
export const YearContext = createContext<number>();

export default function Schedule({ days, exams, link, year }: ScheduleProps) {
  const storageYear = year == 2023 ? 'userExams' : 'userExams' + year;
  const currentYear = new Date().getFullYear();
  const isClient = useIsClient();
  const [filterExams, setFilterExams] = useState<boolean>(false);
  const [userExams, _] = useLocalStorage<string[]>(storageYear, []);
  const [onboarded, setOnboarded] = useLocalStorage<boolean>(
    "onboardedv2",
    false
  );
  const [updated, setUpdated] = useLocalStorage<boolean>(
    "updated-" + version,
    false
  );

  const examsForDate = days.map((day) => {
    return exams.filter((exam) => {
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
    <YearContext.Provider value={year}>
      <header className="flex flex-row items-center justify-end space-x-2">
        <span className="mr-auto flex flex-row space-x-2 items-center">
          <h1 className="font-semibold text-lg">
            {year != currentYear ? `(${year}) ` : ""}
            BHS Testing Schedule</h1>
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
        <Link href={link}
          className={clsx(
            "p-2 rounded-md border-neutral-200 border-[1px] bg-white fixed top-4 right-24 z-20 ",
          )}
          aria-label="Switch years"
        >
          <Calendar size={14} />
        </Link>
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
    </YearContext.Provider>
  );
}
