import { ExamInfo } from "@/data/types";
import clsx from "clsx";
import { useLocalStorage } from "usehooks-ts";
import { Fraunces } from "next/font/google";
import { YearContext } from "./Schedule";
import { useContext } from "react";

const fraunces = Fraunces({ subsets: ["latin"] });

interface ExamProps {
  exam: ExamInfo;
  date: Date;
}

// format minutes as 1h30m or xhym
const minutesToHours = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}m`;
  } else if (remainingMinutes === 0) {
    return `${hours}h`;
  } else {
    return `${hours}h${remainingMinutes}m`;
  }
};

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

const calculatorSymbol = (
  type: "graphing" | "scientific" | "four-function",
): string => {
  switch (type) {
    case "graphing":
      return "G";

    case "scientific":
      return "S";

    case "four-function":
      return "F";

    default:
      return "";
  }
};

const langSymbol = (type: "reading" | "listening"): string => {
  switch (type) {
    case "reading":
      return "R";

    case "listening":
      return "L";

    default:
      return "";
  }
};

const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const disableExams = (exams: string[]): string[] => {
  const disabled = [];

  if (exams.includes("Computer Science SL")) {
    disabled.push("Computer Science HL");
  } else if (exams.includes("Computer Science HL")) {
    disabled.push("Computer Science SL");
  }

  if (exams.includes("Economics SL")) {
    disabled.push("Economics HL");
  } else if (exams.includes("Economics HL")) {
    disabled.push("Economics SL");
  }

  if (exams.includes("French B SL")) {
    disabled.push("French B HL");
  } else if (exams.includes("French B HL")) {
    disabled.push("French B SL");
  }

  if (exams.includes("Spanish B SL")) {
    disabled.push("Spanish B HL");
  } else if (exams.includes("Spanish B HL")) {
    disabled.push("Spanish B SL");
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

  if (exams.includes("Math Analysis SL")) {
    disabled.push("Math Analysis HL");
  } else if (exams.includes("Math Analysis HL")) {
    disabled.push("Math Analysis SL");
  }

  if (exams.includes("Latin SL")) {
    disabled.push("Latin HL");
  } else if (exams.includes("Latin HL")) {
    disabled.push("Latin SL");
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

  const year = useContext(YearContext);
  const storageYear = year == 2023 ? "userExams" : "userExams" + year;

  const [userExams, setUserExams] = useLocalStorage<string[]>(storageYear, []);

  const disabledExams = disableExams(userExams);

  if (!examDates.length) {
    return null;
  }

  const examLocation = // get unique locations
    examDates
      .map((dateInfo) => dateInfo.location)
      .filter((location, index, self) => self.indexOf(location) === index)
      .length === 1
      ? examDates[0].location
      : "Multiple locations";

  return (
    <button
      className={clsx(
        "p-2 border-neutral-200 relative border-[1px] w-full rounded-sm flex flex-col space-y-2",
        userExams.includes(exam.name) && "ring-emerald-500 ring-1",
        disabledExams.includes(exam.name) && "opacity-50 cursor-not-allowed",
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
      <div className="flex flex-row space-x-2 items-start justify-between w-full">
        <span className="font-semibold mr-auto text-left">
          {exam.type.toUpperCase()} {exam.name}
        </span>
        <span className="text-sm text-neutral-500 min-w-[4rem]">
          {examDates[0].date.getHours() % 12 || 12}:
          {examDates[0].date.getMinutes().toString().padStart(2, "0")}{" "}
          {examDates[0].date.getHours() >= 12 ? "PM" : "AM"}
        </span>
      </div>
      <div className="flex w-full flex-row space-x-2 items-start justify-end">
        <span className="text-sm text-neutral-500 mr-auto">{examLocation}</span>
        <span className="text-sm text-neutral-500">
          {examDates.length === 1
            ? minutesToHours(examDates[0].duration)
            : examDates
                .map((dateInfo) => minutesToHours(dateInfo.duration))
                .join(", ")
                .replace(/, ([^,]*)$/, " and $1")}
        </span>
      </div>
      {examDates.reverse().map(
        (examDate, index) =>
          examDate.paper && (
            <div
              className={clsx(
                "text-[11px] flex w-5 items-center justify-center text-neutral-500 absolute -bottom-2 bg-white border-[1px] rounded-full aspect-square",
                fraunces.className,
              )}
              style={{ right: `${-0.25 + index * 1.4}rem` }}
              key={examDate.paper}
              title={"Paper " + examDate.paper}
            >
              {romanize(examDate.paper)}
            </div>
          ),
      )}
      {examDates[0].makeup && (
        <div
          className={clsx(
            "text-[11px] flex w-5 items-center justify-center text-neutral-500 absolute -bottom-2 bg-white border-[1px] rounded-full aspect-square",
            fraunces.className,
          )}
          style={{ right: `${-0.25 + (examDates.length - 1) * 1.4}rem` }}
          title={"Makeup exam"}
        >
          M
        </div>
      )}
      {examDates
        .reverse()
        .map((dateInfo) => dateInfo.calculator)
        .filter((calculator, index, self) => self.indexOf(calculator) === index)
        .filter((calculator) => calculator)
        .map(
          (calculator, index) =>
            calculator && (
              <div
                className={clsx(
                  "text-[11px] flex w-5 items-center justify-center text-neutral-500 absolute -bottom-2 bg-white border-[1px] rounded-full aspect-square",
                  fraunces.className,
                )}
                style={{ left: `${-0.25 + index * 1.4}rem` }}
                key={calculator}
                title={capitalize(calculator) + " calculators recommended"}
              >
                {calculatorSymbol(calculator)}
              </div>
            ),
        )}
      {examDates
        .reverse()
        .map((dateInfo) => dateInfo.lang)
        .filter((lang, index, self) => self.indexOf(lang) === index)
        .filter((lang) => lang)
        .map(
          (lang, index) =>
            lang && (
              <div
                className={clsx(
                  "text-[11px] flex w-5 items-center justify-center text-neutral-500 absolute -bottom-2 bg-white border-[1px] rounded-full aspect-square",
                  fraunces.className,
                )}
                style={{ left: `${-0.25 + index * 1.4}rem` }}
                key={lang}
                title={capitalize(lang) + " portion of exam"}
              >
                {langSymbol(lang)}
              </div>
            ),
        )}
    </button>
  );
};

export default Exam;
