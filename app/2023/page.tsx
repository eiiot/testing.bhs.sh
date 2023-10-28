import Schedule from "@/components/Schedule";
import { Metadata } from 'next'
import { bhsExams } from "@/data/2023";
import version from "@/utils/version";


export const metadata: Metadata = {
  title: '2023 BHS Testing Schedule',
  icons: "https://emojicdn.elk.sh/📝"
}

const days = new Array(28).fill(0).map((_, i) => new Date(2023, 3, 27 + i));

export default function Home() {
  return <Schedule days={days} exams={bhsExams} version={version} link="/" year={2023} />;
}
