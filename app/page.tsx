import Schedule from "@/components/Schedule";
import { Metadata } from 'next'
import { bhsExams } from "@/data/2024";


export const metadata: Metadata = {
  title: 'BHS Testing Schedule',
  icons: "https://emojicdn.elk.sh/📝"
}

const days = new Array(20).fill(0).map((_, i) => new Date(2024, 4, 1 + i));

export default function Home() {
  return <Schedule days={days} exams={bhsExams} link="/2023" year={2024} />;
}
