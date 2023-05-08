interface ExamDate {
  date: Date;
  location: string;
  duration: number; // in minutes
  paper?: number; // for IB exams
  calculator?: 'graphing' | 'scientific' | 'four-function'
}

export interface ExamInfo {
  name: string;
  dates: ExamDate[];
  subject: string;
  type: "ib" | "ap";
}

export const ibExams: ExamInfo[] = [
  {
    name: "Art History SL",
    dates: [
      {
        date: new Date("2023-04-27T12:00:00-07:00"),
        location: "G109",
        duration: 60,
        paper: 1,
      },
      {
        date: new Date("2023-04-28T12:00:00-07:00"),
        location: "G109",
        duration: 90,
        paper: 2,
      },
    ],
    subject: "Art History",
    type: "ib",
  },
  {
    name: "Lang & Lit HL",
    dates: [
      {
        date: new Date("2023-05-03T12:00:00-07:00"),
        location: "M Gym",
        duration: 135,
        paper: 1,
      },
      {
        date: new Date("2023-05-04T12:00:00-07:00"),
        location: "M Gym",
        duration: 105,
        paper: 2,
      },
    ],
    subject: "Lang & Lit",
    type: "ib",
  },
  {
    name: "Enviro Systems SL",
    dates: [
      {
        date: new Date("2023-05-05T12:00:00-07:00"),
        location: "M Gym",
        duration: 60,
        paper: 1,
        calculator: 'scientific'
      },
      {
        date: new Date("2023-05-08T08:00:00-07:00"),
        location: "M Gym",
        duration: 120,
        paper: 2,
        calculator: 'scientific'
      },
    ],
    subject: "Enviro Systems",
    type: "ib",
  },
  {
    name: "Computer Science SL",
    dates: [
      {
        date: new Date("2023-05-05T12:00:00-07:00"),
        location: "M Gym",
        duration: 90,
        paper: 1,
      },
      {
        date: new Date("2023-05-08T08:00:00-07:00"),
        location: "M Gym",
        duration: 60,
        paper: 2,
      },
    ],
    subject: "Computer Science",
    type: "ib",
  },
  {
    name: "Computer Science HL",
    dates: [
      {
        date: new Date("2023-05-05T12:00:00-07:00"),
        location: "M Gym",
        duration: 130,
        paper: 1,
      },
      {
        date: new Date("2023-05-08T08:00:00-07:00"),
        location: "M Gym",
        duration: 80,
        paper: 2,
      },
      {
        date: new Date("2023-05-08T08:00:00-07:00"),
        location: "M Gym",
        duration: 60,
        paper: 3,
      },
    ],
    subject: "Computer Science",
    type: "ib",
  },
  {
    name: "Math Applications SL",
    dates: [
      {
        date: new Date("2023-05-08T12:00:00-07:00"),
        location: "M Gym",
        duration: 90,
        paper: 1,
        calculator: 'graphing'
      },
      {
        date: new Date("2023-05-09T12:00:00-07:00"),
        location: "M Gym",
        duration: 90,
        paper: 2,
        calculator: 'graphing'
      },
    ],
    subject: "Math Applications",
    type: "ib",
  },
  {
    name: "Math Analysis SL",
    dates: [
      {
        date: new Date("2023-05-08T12:00:00-07:00"),
        location: "M Gym",
        duration: 90,
        paper: 1,
      },
      {
        date: new Date("2023-05-09T12:00:00-07:00"),
        location: "M Gym",
        duration: 90,
        paper: 2,
        calculator: 'graphing'
      },
      {
        date: new Date("2023-05-09T12:00:00-07:00"),
        location: "M Gym",
        duration: 120,
        paper: 3,
      },
    ],
    subject: "Math Analysis",
    type: "ib",
  },
  {
    name: "Math Analysis HL",
    dates: [
      {
        date: new Date("2023-05-08T12:00:00-07:00"),
        location: "M Gym",
        duration: 120,
        paper: 1,
      },
      {
        date: new Date("2023-05-09T12:00:00-07:00"),
        location: "M Gym",
        duration: 90,
        paper: 2,
        calculator: 'graphing'
      },
      {
        date: new Date("2023-05-09T12:00:00-07:00"),
        location: "M Gym",
        duration: 60,
        paper: 3,
        calculator: 'graphing'
      },
    ],
    subject: "Math Analysis",
    type: "ib",
  },
  {
    name: "Mandarin SL",
    dates: [
      {
        date: new Date("2023-05-09T08:00:00-07:00"),
        location: "M Gym",
        duration: 75,
        paper: 1,
      },
      {
        date: new Date("2023-05-10T08:00:00-07:00"),
        location: "M Gym",
        duration: 60,
        paper: 2,
      },
    ],
    subject: "Mandarin",
    type: "ib",
  },
  {
    name: "History HL",
    dates: [
      {
        date: new Date("2023-05-10T12:00:00-07:00"),
        location: "M Gym",
        duration: 60,
        paper: 1,
      },
      {
        date: new Date("2023-05-10T12:00:00-07:00"),
        location: "M Gym",
        duration: 90,
        paper: 2,
      },
      {
        date: new Date("2023-05-11T08:00:00-07:00"),
        location: "M Gym",
        duration: 150,
        paper: 3,
      },
    ],
    subject: "History",
    type: "ib",
  },
  {
    name: "French B SL",
    dates: [
      {
        date: new Date("2023-05-12T08:00:00-07:00"),
        location: "G109",
        duration: 45,
        paper: 2,
      },
    ],
    subject: "French B",
    type: "ib",
  },
  {
    name: "French B HL",
    dates: [
      {
        date: new Date("2023-05-12T08:00:00-07:00"),
        location: "G109",
        duration: 60,
        paper: 2,
      },
    ],
    subject: "French B",
    type: "ib",
  },
  {
    name: "French SL",
    dates: [
      {
        date: new Date("2023-05-15T08:00:00-07:00"),
        location: "Donahue Gym",
        duration: 75,
        paper: 1,
      },
      {
        date: new Date("2023-05-15T09:30:00-07:00"),
        location: "Donahue Gym",
        duration: 60,
        paper: 2,
      },
    ],
    subject: "French",
    type: "ib",
  },
  {
    name: "French HL",
    dates: [
      {
        date: new Date("2023-05-15T08:00:00-07:00"),
        location: "Donahue Gym",
        duration: 90,
        paper: 1,
      },
      {
        date: new Date("2023-05-15T09:30:00-07:00"),
        location: "Donahue Gym",
        duration: 60,
        paper: 2,
      },
    ],
    subject: "French",
    type: "ib",
  },
  {
    name: "Economics SL",
    dates: [
      {
        date: new Date("2023-05-15T12:00:00-07:00"),
        location: "Donahue Gym",
        duration: 75,
        paper: 1,
      },
      {
        date: new Date("2023-05-16T12:00:00-07:00"),
        location: "Donahue Gym",
        duration: 105,
        paper: 2,
        calculator: 'scientific'
      },
    ],
    subject: "Economics",
    type: "ib",
  },
  {
    name: "Spanish SL",
    dates: [
      {
        date: new Date("2023-05-16T08:00:00-07:00"),
        location: "Donahue Gym",
        duration: 75,
        paper: 1,
      },
      {
        date: new Date("2023-05-16T09:30:00-07:00"),
        location: "Donahue Gym",
        duration: 60,
        paper: 2,
      },
    ],
    subject: "Spanish",
    type: "ib",
  },
  {
    name: "Spanish HL",
    dates: [
      {
        date: new Date("2023-05-16T08:00:00-07:00"),
        location: "Donahue Gym",
        duration: 90,
        paper: 1,
      },
      {
        date: new Date("2023-05-16T09:30:00-07:00"),
        location: "Donahue Gym",
        duration: 60,
        paper: 2,
      },
    ],
    subject: "Spanish",
    type: "ib",
  },
  {
    name: "Spanish B SL",
    dates: [
      {
        date: new Date("2023-05-17T08:00:00-07:00"),
        location: "G109",
        duration: 45,
        paper: 2,
      },
    ],
    subject: "Spanish B",
    type: "ib",
  },
  {
    name: "Spanish B HL",
    dates: [
      {
        date: new Date("2023-05-17T08:00:00-07:00"),
        location: "G109",
        duration: 60,
        paper: 2,
      },
    ],
    subject: "Spanish B",
    type: "ib",
  },
  {
    name: "Biology SL",
    dates: [
      {
        date: new Date("2023-05-17T12:00:00-07:00"),
        location: "G109",
        duration: 45,
        paper: 1,
      },
      {
        date: new Date("2023-05-17T13:30:00-07:00"),
        location: "G109",
        duration: 75,
        paper: 2,
        calculator: 'scientific'
      },
      {
        date: new Date("2023-05-18T08:00:00-07:00"),
        location: "G109",
        duration: 60,
        paper: 3,
        calculator: 'scientific'
      },
    ],
    subject: "Biology",
    type: "ib",
  },
];

export const apExams: ExamInfo[] = [
  {
    name: "Government",
    dates: [
      {
        date: new Date("2023-05-01T08:00:00-07:00"),
        location: "Donahue Gym",
        duration: 180, // 3 hours
      },
    ],
    subject: "Government",
    type: "ap",
  },
  {
    name: "Chemistry",
    dates: [
      {
        date: new Date("2023-05-01T12:00:00-07:00"),
        location: "Donahue Gym",
        duration: 195, // 3 hours, 15 minutes
        calculator: 'graphing'
      },
    ],
    subject: "Chemistry",
    type: "ap",
  },
  {
    name: "Spanish Literature",
    dates: [
      {
        date: new Date("2023-05-01T12:00:00-07:00"),
        location: "Portable 3",
        duration: 180, // 3 hours
      },
    ],
    subject: "Spanish Literature",
    type: "ap",
  },
  {
    name: "Chinese Language",
    dates: [
      {
        date: new Date("2023-05-02T08:00:00-07:00"),
        location: "Library Lab",
        duration: 135, // 2 hours, 1 minute
      },
    ],
    subject: "Chinese Language",
    type: "ap",
  },
  {
    name: "Environmental Science",
    dates: [
      {
        date: new Date("2023-05-02T07:45:00-07:00"),
        location: "Donahue Gym",
        duration: 160, // 2 hours, 40 minutes
        calculator: 'graphing'
      },
    ],
    subject: "Environmental Science",
    type: "ap",
  },
  {
    name: "Psychology",
    dates: [
      {
        date: new Date("2023-05-02T12:00:00-07:00"),
        location: "Donahue Gym",
        duration: 120, // 2 hours
      },
    ],
    subject: "Psychology",
    type: "ap",
  },
  {
    name: "English Literature",
    dates: [
      {
        date: new Date("2023-05-03T07:45:00-07:00"),
        location: "Donahue Gym",
        duration: 160, // 2 hours, 40 minutes
      },
    ],
    subject: "English Literature",
    type: "ap",
  },
  {
    name: "Computer Science A",
    dates: [
      {
        date: new Date("2023-05-03T12:00:00-07:00"),
        location: "Donahue Gym",
        duration: 180, // 3 hours
      },
    ],
    subject: "Computer Science A",
    type: "ap",
  },
  {
    name: "Macroeconomics",
    dates: [
      {
        date: new Date("2023-05-04T08:00:00-07:00"),
        location: "Donahue Gym",
        duration: 130, // 2 hours, 10 minutes
        calculator: 'four-function'
      },
    ],
    subject: "Macroeconomics",
    type: "ap",
  },
  {
    name: "Statistics",
    dates: [
      {
        date: new Date("2023-05-04T12:00:00-07:00"),
        location: "Donahue Gym",
        duration: 180, // 3 hours
        calculator: 'graphing'
      },
    ],
    subject: "Statistics",
    type: "ap",
  },
  {
    name: "US History",
    dates: [
      {
        date: new Date("2023-05-05T07:45:00-07:00"),
        location: "Donahue Gym",
        duration: 195, // 3 hours, 15 minutes
      },
    ],
    subject: "US History",
    type: "ap",
  },
  {
    name: "Art History",
    dates: [
      {
        date: new Date("2023-05-05T12:00:00-07:00"),
        location: "Donahue Gym",
        duration: 180, // 3 hours
      },
    ],
    subject: "Art History",
    type: "ap",
  },
  {
    name: "Calculus AB",
    dates: [
      {
        date: new Date("2023-05-08T08:00:00-07:00"),
        location: "Donahue Gym",
        duration: 195, // 3 hours, 15 minutes
        calculator: 'graphing'
      },
    ],
    subject: "Calculus AB",
    type: "ap",
  },
  {
    name: "Calculus BC",
    dates: [
      {
        date: new Date("2023-05-08T08:00:00-07:00"),
        location: "Donahue Gym",
        duration: 195, // 3 hours, 15 minutes
        calculator: 'graphing'
      },
    ],
    subject: "Calculus BC",
    type: "ap",
  },
  {
    name: "CS Principles",
    dates: [
      {
        date: new Date("2023-05-08T12:00:00-07:00"),
        location: "Donahue Gym",
        duration: 180, // 3 hours
      },
    ],
    subject: "CS Principles",
    type: "ap",
  },
  {
    name: "English Language",
    dates: [
      {
        date: new Date("2023-05-09T07:45:00-07:00"),
        location: "Donahue Gym/ TBD",
        duration: 195, // 3 hours, 15 minutes
      },
    ],
    subject: "English Language",
    type: "ap",
  },
  {
    name: "Japanese Language",
    dates: [
      {
        date: new Date("2023-05-09T08:00:00-07:00"),
        location: "Library Lab",
        duration: 120, // 2 hours
      },
    ],
    subject: "Japanese Language",
    type: "ap",
  },
  {
    name: "Physics C: Mechanics",
    dates: [
      {
        date: new Date("2023-05-09T12:00:00-07:00"),
        location: "Donahue Gym",
        duration: 120, // 2 hours
        calculator: 'graphing'
      },
    ],
    subject: "Physics C: Mechanics",
    type: "ap",
  },
  {
    name: "Physics C: E&M",
    dates: [
      {
        date: new Date("2023-05-09T14:00:00-07:00"),
        location: "Donahue Gym",
        duration: 120, // 2 hours
        calculator: 'graphing'
      },
    ],
    subject: "Physics C: E&M",
    type: "ap",
  },
  {
    name: "Spanish Language",
    dates: [
      {
        date: new Date("2023-05-10T07:45:00-07:00"),
        location: "Berkeley Adult School",
        duration: 183, // 3 hours, 3 minutes
      },
    ],
    subject: "Spanish Language",
    type: "ap",
  },
  {
    name: "French Language",
    dates: [
      {
        date: new Date("2023-05-11T08:00:00-07:00"),
        location: "Donahue Gym",
        duration: 180, // 3 hours
      },
    ],
    subject: "French Language",
    type: "ap",
  },
  {
    name: "Physics 1: Algebra",
    dates: [
      {
        date: new Date("2023-05-11T11:45:00-07:00"),
        location: "Donahue Gym",
        duration: 165, // 2 hours, 45 minutes
        calculator: 'graphing'
      },
    ],
    subject: "Physics 1: Algebra",
    type: "ap",
  },
  {
    name: "Music Theory",
    dates: [
      {
        date: new Date("2023-05-12T08:00:00-07:00"),
        location: "A201",
        duration: 160, // 2 hours, 40 minutes
      },
    ],
    subject: "Music Theory",
    type: "ap",
  },
  {
    name: "German Language",
    dates: [
      {
        date: new Date("2023-05-12T08:00:00-07:00"),
        location: "A201",
        duration: 160, // 2 hours, 40 minutes
      },
    ],
    subject: "German Language",
    type: "ap",
  },
  {
    name: "Biology",
    dates: [
      {
        date: new Date("2023-05-24T07:45:00-07:00"),
        location: "Donahue Gym",
        duration: 165, // 2 hours, 45 minutes
        calculator: 'graphing'
      },
    ],
    subject: "Biology",
    type: "ap",
  },
];

export const bhsExams = [...apExams, ...ibExams];

export const uniqueExamNames = new Set(
  bhsExams.map((exam) => exam.type.toUpperCase() + " " + exam.name)
);
