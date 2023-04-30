import { ExamInfo } from "@/data/exams";
import clsx from "clsx";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";

import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"] });

interface ExamProps {
  exam: ExamInfo;
  date: Date;
}

const romanize = (number: number): string => {
  switch (number) {
    case 1:
      return "I";

    case 2:
      return "II";

    case 3:
      return "III";

    case 4:
      return "IV";

    case 5:
      return "V";

    default:
      return "";
  }
};

const disableExams = (exams: string[]): string[] => {
  const disabled = [];

  if (exams.includes("Computer Science SL")) {
    disabled.push("Computer Science HL");
  }

  if (exams.includes("Economics SL")) {
    disabled.push("Economics HL");
  } else if (exams.includes("Economics HL")) {
    disabled.push("Economics SL");
  }

  if (exams.includes("French SL")) {
    disabled.push("French HL");
  } else if (exams.includes("French HL")) {
    disabled.push("French SL");
  }

  if (exams.includes("Spanish SL")) {
    disabled.push("Spanish HL");
  } else if (exams.includes("Spanish HL")) {
    disabled.push("Spanish SL");
  }

  if (exams.includes("Biology HL")) {
    disabled.push("Biology SL");
  } else if (exams.includes("Biology SL")) {
    disabled.push("Biology HL");
  }

  if (exams.includes("Calculus AB")) {
    disabled.push("Calculus BC");
  } else if (exams.includes("Calculus BC")) {
    disabled.push("Calculus AB");
  }

  return disabled;
};

const Exam = ({ exam, date }: ExamProps) => {
  const examDates = exam.dates.filter((dateInfo) => {
    return (
      dateInfo.date.getDate() === date.getDate() &&
      dateInfo.date.getMonth() === date.getMonth() &&
      dateInfo.date.getFullYear() === date.getFullYear()
    );
  });

  const [userExams, setUserExams] = useLocalStorage<string[]>("userExams", []);

  const disabledExams = disableExams(userExams);

  if (!examDates.length) {
    return null;
  }

  return (
    <button
      className={clsx(
        "p-2 border-neutral-200 relative border-[1px] w-full rounded-sm flex flex-row space-x-2 items-center justify-end",
        userExams.includes(exam.name) && "ring-emerald-500 ring-1",
        disabledExams.includes(exam.name) && "opacity-50 cursor-not-allowed"
      )}
      onClick={() => {
        if (userExams.includes(exam.name)) {
          setUserExams(userExams.filter((e) => e !== exam.name));
        } else {
          setUserExams([...userExams, exam.name]);
        }
      }}
      disabled={disabledExams.includes(exam.name)}
    >
      <span className="font-semibold mr-auto">
        {exam.type.toUpperCase()} {exam.name}
      </span>
      <span className="text-sm text-neutral-500">
        {examDates[0].date.getHours() % 12 || 12}:
        {examDates[0].date.getMinutes().toString().padStart(2, "0")}{" "}
        {examDates[0].date.getHours() >= 12 ? "PM" : "AM"}
      </span>
      {examDates.reverse().map(
        (examDate, index) =>
          examDate.paper && (
            <div
              className={clsx(
                "text-[11px] flex w-5 items-center justify-center text-neutral-500 absolute -bottom-2 bg-white border-[1px] rounded-full aspect-square",
                fraunces.className
              )}
              style={{ right: `${-0.25 + index * 1.4}rem` }}
              key={examDate.paper}
            >
              {romanize(examDate.paper)}
            </div>
          )
      )}
    </button>
  );
};

export default Exam;
