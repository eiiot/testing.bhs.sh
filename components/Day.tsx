import { ExamInfo } from "@/data/exams";
import Exam from "./Exam";
import clsx from "clsx";

interface DayProps {
  date: Date;
  exams: ExamInfo[];
}

const dateToString = (date: Date) => {
  // return month/day

  return `${date.getMonth() + 1}/${date.getDate()}`;
};

const dayToString = (date: Date) => {
  // return day of week

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
};

const Day = ({ date, exams }: DayProps) => {
  const sortedExams =
    // remove any days that are not on this date
    exams
      .map((exam) => ({
        ...exam,
        dates: exam.dates.filter(
          (examDate) =>
            examDate.date.getDate() === date.getDate() &&
            examDate.date.getMonth() === date.getMonth() &&
            examDate.date.getFullYear() === date.getFullYear()
        ),
      }))
      // sort by start time
      .sort((a, b) => {
        const aTime = a.dates[0].date;
        const bTime = b.dates[0].date;

        if (aTime < bTime) return -1;
        if (aTime > bTime) return 1;
        return 0;
      });

  return (
    <div
      className={clsx(
        "p-3 rounded-sm border-[1px] border-neutral-200 flex flex-col space-y-2",
        date.getDay() === 0 || date.getDay() === 6
          ? "bg-neutral-50"
          : "bg-white",
        new Date().getDate() === date.getDate() &&
          new Date().getMonth() === date.getMonth() &&
          new Date().getFullYear() === date.getFullYear() &&
          "ring-yellow-500 ring-1",
        // is the new date before the current date, or the month is before the current month, or the year is before the current year
        (new Date().getDate() > date.getDate() ||
          new Date().getMonth() > date.getMonth() ||
          new Date().getFullYear() > date.getFullYear()) &&
          "opacity-50 contrast-more:opacity-100"
      )}
      id={
        new Date().getDate() === date.getDate() &&
        new Date().getMonth() === date.getMonth() &&
        new Date().getFullYear() === date.getFullYear()
          ? "today"
          : ""
      }
    >
      <span className="text-neutral-500 font-light flex flex-row justify-between">
        <span>{dateToString(date)}</span>
        <span>{dayToString(date)}</span>
      </span>
      <div
        className={clsx(
          "flex-grow flex flex-col space-y-2",
          exams.length === 0 && "hidden"
        )}
      >
        {sortedExams.map((exam) => (
          <Exam key={exam.name} exam={exam} date={date} />
        ))}
      </div>
    </div>
  );
};

export default Day;
