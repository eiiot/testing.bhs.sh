import Schedule from "@/components/Schedule";
import { Metadata } from "next";
import { bhsExams } from "@/data/2024";

export const metadata: Metadata = {
  title: "BHS Testing Schedule",
};

const pad = (n: number) => (n < 10 ? "0" + n : n);

const days = new Array(17)
  .fill(0)
  .map((_, i) => new Date(`2024-05-${pad(1 + i)}T00:00:00-07:00`));

console.log("Time Period:", days[0], "to", days[days.length - 1]);

export default function Home() {
  return <Schedule days={days} exams={bhsExams} link="/2023" year={2024} />;
}
