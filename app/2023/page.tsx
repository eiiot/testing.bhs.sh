import Schedule from "@/components/Schedule";
import { Metadata } from 'next'
import { bhsExams } from "@/data/2023";


export const metadata: Metadata = {
  title: '2023 BHS Testing Schedule',
}

const days = new Array(28).fill(0).map((_, i) => new Date(2023, 3, 27 + i));

export default function Home() {
  return <Schedule days={days} exams={bhsExams} link="/" year={2023} />;
}
