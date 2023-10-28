interface ExamDate {
  date: Date;
  location?: string;
  duration: number; // in minutes
  paper?: number; // for IB exams
  makeup?: boolean;
  lang?: "reading" | "listening",
  calculator?: "graphing" | "scientific" | "four-function";
}

export interface ExamInfo {
  name: string;
  dates: ExamDate[];
  subject: string;
  type: "ib" | "ap";
}
