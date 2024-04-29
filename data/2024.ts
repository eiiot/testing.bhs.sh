import { ExamInfo } from "./types";

const dateFormatter = (month: number, day: number, time: "m" | "a") => {
  let paddedMonth = month < 10 ? `0${month}` : `${month}`;
  let paddedDay = day < 10 ? `0${day}` : `${day}`;
  let hour = time == "m" ? `08` : `12`;
  return new Date(`2024-${paddedMonth}-${paddedDay}T${hour}:00:00-07:00`);
};

export const ibExams: ExamInfo[] = [
  {
    name: "Art History SL",
    dates: [
      {
        date: new Date("2024-05-16T12:00:00-07:00"),
        // location: "G109",
        duration: 60,
        paper: 1,
      },
      {
        date: new Date("2024-05-17T08:00:00-07:00"),
        // location: "G109",
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
        date: new Date("2024-05-09T12:00:00-07:00"),
        // location: "M Gym",
        duration: 135,
        paper: 1,
      },
      {
        date: new Date("2024-05-10T08:00:00-07:00"),
        // location: "M Gym",
        duration: 105,
        paper: 2,
      },
    ],
    subject: "Lang & Lit",
    type: "ib",
  },
  // {
  //   name: "Enviro Systems SL",
  //   dates: [
  //     {
  //       date: new Date("2023-05-05T12:00:00-07:00"),
  //       location: "M Gym",
  //       duration: 60,
  //       paper: 1,
  //       calculator: "scientific",
  //     },
  //     {
  //       date: new Date("2023-05-08T08:00:00-07:00"),
  //       location: "M Gym",
  //       duration: 120,
  //       paper: 2,
  //       calculator: "scientific",
  //     },
  //   ],
  //   subject: "Enviro Systems",
  //   type: "ib",
  // },
  {
    name: "Computer Science SL",
    dates: [
      {
        date: new Date("2024-05-02T12:00:00-07:00"),
        // location: "M Gym",
        duration: 90,
        paper: 1,
      },
      {
        date: new Date("2024-05-06T08:00:00-07:00"),
        // location: "M Gym",
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
        date: new Date("2024-05-02T12:00:00-07:00"),
        // location: "M Gym",
        duration: 130,
        paper: 1,
      },
      {
        date: new Date("2024-05-06T08:00:00-07:00"),
        // location: "M Gym",
        duration: 80,
        paper: 2,
      },
      {
        date: new Date("2024-05-06T08:00:00-07:00"),
        // location: "M Gym",
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
        date: new Date("2024-05-01T12:00:00-07:00"),
        // location: "M Gym",
        duration: 90,
        paper: 1,
        calculator: "graphing",
      },
      {
        date: new Date("2024-05-02T08:00:00-07:00"),
        // location: "M Gym",
        duration: 90,
        paper: 2,
        calculator: "graphing",
      },
    ],
    subject: "Math Applications",
    type: "ib",
  },
  {
    name: "Math Analysis SL",
    dates: [
      {
        date: new Date("2024-05-01T12:00:00-07:00"),
        // location: "M Gym",
        duration: 90,
        paper: 1,
      },
      {
        date: new Date("2024-05-02T08:00:00-07:00"),
        // location: "M Gym",
        duration: 90,
        paper: 2,
        calculator: "graphing",
      },
    ],
    subject: "Math Analysis",
    type: "ib",
  },
  {
    name: "Math Analysis HL",
    dates: [
      {
        date: new Date("2024-05-01T12:00:00-07:00"),
        // location: "M Gym",
        duration: 120,
        paper: 1,
      },
      {
        date: new Date("2024-05-02T08:00:00-07:00"),
        // location: "M Gym",
        duration: 120,
        paper: 2,
        calculator: "graphing",
      },
      {
        date: new Date("2024-05-06T12:00:00-07:00"),
        // location: "M Gym",
        duration: 60,
        paper: 3,
        calculator: "graphing",
      },
    ],
    subject: "Math Analysis",
    type: "ib",
  },
  {
    name: "Mandarin SL",
    dates: [
      {
        date: dateFormatter(5, 6, "a"),
        // location: "M Gym",
        duration: 75,
        lang: "reading",
        paper: 1,
      },
      {
        date: dateFormatter(5, 6, "a"),
        // location: "M Gym",
        duration: 60,
        lang: "reading",
        paper: 2,
      },
      {
        date: dateFormatter(5, 7, "m"),
        // location: "M Gym",
        duration: 45,
        lang: "listening",
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
        date: dateFormatter(5, 7, "a"),
        // location: "M Gym",
        duration: 60,
        paper: 1,
      },
      {
        date: dateFormatter(5, 7, "a"),
        // location: "M Gym",
        duration: 90,
        paper: 2,
      },
      {
        date: dateFormatter(5, 8, "m"),
        // location: "M Gym",
        duration: 150,
        paper: 3,
      },
    ],
    subject: "History",
    type: "ib",
  },
  {
    name: "French B HL",
    dates: [
      {
        date: dateFormatter(5, 16, "a"),
        // location: "G109",
        duration: 60,
        lang: "reading",
        paper: 1,
      },
      {
        date: dateFormatter(5, 16, "a"),
        // location: "G109",
        duration: 60,
        lang: "reading",
        paper: 2,
      },
      {
        date: dateFormatter(5, 17, "m"),
        // location: "G109",
        duration: 45,
        lang: "listening",
        paper: 2,
      },
    ],
    subject: "French B",
    type: "ib",
  },
  {
    name: "French B SL",
    dates: [
      {
        date: dateFormatter(5, 16, "a"),
        // location: "G109",
        duration: 75,
        lang: "reading",
        paper: 1,
      },
      {
        date: dateFormatter(5, 16, "a"),
        // location: "G109",
        duration: 60,
        lang: "reading",
        paper: 2,
      },
      {
        date: dateFormatter(5, 17, "m"),
        // location: "G109",
        duration: 45,
        lang: "listening",
        paper: 2,
      },
    ],
    subject: "French B",
    type: "ib",
  },
  {
    name: "Economics SL",
    dates: [
      {
        date: dateFormatter(5, 15, "a"),
        // location: "Donahue Gym",
        duration: 75,
        paper: 1,
      },
      {
        date: dateFormatter(5, 16, "m"),
        // location: "Donahue Gym",
        duration: 105,
        paper: 2,
        calculator: "scientific",
      },
    ],
    subject: "Economics",
    type: "ib",
  },
  {
    name: "Spanish B SL",
    dates: [
      {
        date: dateFormatter(5, 14, "a"),
        // location: "Donahue Gym",
        duration: 75,
        lang: "reading",
        paper: 1,
      },
      {
        date: dateFormatter(5, 14, "a"),
        // location: "Donahue Gym",
        duration: 60,
        lang: "reading",
        paper: 2,
      },
      {
        date: dateFormatter(5, 15, "m"),
        // location: "Donahue Gym",
        duration: 45,
        lang: "listening",
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
        date: dateFormatter(5, 14, "a"),
        // location: "Donahue Gym",
        duration: 75,
        lang: "reading",
        paper: 1,
      },
      {
        date: dateFormatter(5, 14, "a"),
        // location: "Donahue Gym",
        duration: 60,
        lang: "reading",
        paper: 2,
      },
      {
        date: dateFormatter(5, 15, "m"),
        // location: "Donahue Gym",
        duration: 45,
        lang: "listening",
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
        date: dateFormatter(5, 13, "a"),
        // location: "G109",
        duration: 45,
        paper: 1,
      },
      {
        date: dateFormatter(5, 14, "m"),
        // location: "G109",
        duration: 75,
        paper: 2,
        calculator: "scientific",
      },
      {
        date: dateFormatter(5, 13, "a"),
        // location: "G109",
        duration: 60,
        paper: 3,
        calculator: "scientific",
      },
    ],
    subject: "Biology",
    type: "ib",
  },
  {
    name: "Latin SL",
    dates: [
      {
        date: dateFormatter(5, 6, "a"),
        // location: "G109",
        duration: 90,
        paper: 1,
      },
      {
        date: dateFormatter(5, 7, "m"),
        // location: "G109",
        duration: 90,
        paper: 2,
      },
    ],
    subject: "Latin",
    type: "ib",
  },
  {
    name: "Latin HL",
    dates: [
      {
        date: dateFormatter(5, 6, "a"),
        // location: "G109",
        duration: 120,
        paper: 1,
      },
      {
        date: dateFormatter(5, 7, "m"),
        // location: "G109",
        duration: 90,
        paper: 2,
      },
    ],
    subject: "Latin",
    type: "ib",
  },
  {
    name: "ESS SL",
    dates: [
      {
        date: dateFormatter(5, 2, "a"),
        // location: "G109",
        duration: 60,
        paper: 1,
      },
      {
        date: dateFormatter(5, 6, "m"),
        // location: "G109",
        duration: 120,
        paper: 2,
      },
    ],
    subject: "ESS",
    type: "ib",
  },
];

export const apExams: ExamInfo[] = [
  {
    name: "Government",
    dates: [
      {
        date: dateFormatter(5, 6, "m"),
        // location: "Donahue Gym",
        duration: 180, // 3 hours
      },
      // {
      //   date: new Date("2023-05-19T12:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 180, // 3 hours
      //   makeup: true,
      // },
    ],
    subject: "Government",
    type: "ap",
  },
  {
    name: "Chemistry",
    dates: [
      {
        date: dateFormatter(5, 6, "a"),
        // location: "Donahue Gym",
        duration: 195, // 3 hours, 15 minutes
        calculator: "graphing",
      },
      // {
      //   date: new Date("2023-05-17T08:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 195, // 3 hours, 15 minutes
      //   calculator: "graphing",
      //   makeup: true,
      // },
    ],
    subject: "Chemistry",
    type: "ap",
  },
  {
    name: "Spanish Literature",
    dates: [
      {
        date: dateFormatter(5, 10, "a"),
        // location: "Portable 3",
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
        date: dateFormatter(5, 9, "m"),
        // location: "Library Lab",
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
        date: dateFormatter(5, 9, "m"),
        // location: "Donahue Gym",
        duration: 160, // 2 hours, 40 minutes
        calculator: "graphing",
      },
      // {
      //   date: new Date("2023-05-17T12:00:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 160, // 2 hours, 40 minutes
      //   calculator: "graphing",
      //   makeup: true,
      // },
    ],
    subject: "Environmental Science",
    type: "ap",
  },
  {
    name: "Psychology",
    dates: [
      {
        date: dateFormatter(5, 9, "a"),
        // location: "Donahue Gym",
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
        date: dateFormatter(5, 8, "m"),
        // location: "Donahue Gym",
        duration: 160, // 2 hours, 40 minutes
      },
      // {
      //   date: new Date("2023-05-17T12:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 160, // 2 hours, 40 minutes
      //   makeup: true,
      // },
    ],
    subject: "English Literature",
    type: "ap",
  },
  {
    name: "Computer Science A",
    dates: [
      {
        date: dateFormatter(5, 8, "a"),
        // location: "Donahue Gym",
        duration: 180, // 3 hours
      },
      // {
      //   date: new Date("2023-05-17T08:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 180, // 3 hours, 15 minutes
      //   makeup: true,
      // },
    ],
    subject: "Computer Science A",
    type: "ap",
  },
  {
    name: "Macroeconomics",
    dates: [
      {
        date: dateFormatter(5, 10, "a"),
        // location: "Donahue Gym",
        duration: 130, // 2 hours, 10 minutes
        calculator: "four-function",
      },
      // {
      //   date: new Date("2023-05-02T07:45:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 130, // 2 hours, 10 minutes
      //   calculator: "four-function",
      //   makeup: true,
      // },
    ],
    subject: "Macroeconomics",
    type: "ap",
  },
  {
    name: "Statistics",
    dates: [
      {
        date: dateFormatter(5, 7, "a"),
        // location: "Donahue Gym",
        duration: 180, // 3 hours
        calculator: "graphing",
      },
      // {
      //   date: new Date("2023-05-17T08:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 180, // 3 hours
      //   calculator: "graphing",
      //   makeup: true,
      // },
    ],
    subject: "Statistics",
    type: "ap",
  },
  {
    name: "US History",
    dates: [
      {
        date: dateFormatter(5, 10, "m"),
        // location: "Donahue Gym",
        duration: 195, // 3 hours, 15 minutes
      },
      // {
      //   date: new Date("2023-05-17T08:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 195, // 3 hours, 15 minutes
      //   makeup: true,
      // },
    ],
    subject: "US History",
    type: "ap",
  },
  {
    name: "Art History",
    dates: [
      {
        date: dateFormatter(5, 6, "a"),
        // location: "Donahue Gym",
        duration: 180, // 3 hours
      },
      // {
      //   date: new Date("2023-05-18T12:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 180, // 3 hours
      //   makeup: true,
      // },
    ],
    subject: "Art History",
    type: "ap",
  },
  {
    name: "Calculus AB",
    dates: [
      {
        date: dateFormatter(5, 13, "m"),
        // location: "Donahue Gym",
        duration: 195, // 3 hours, 15 minutes
        calculator: "graphing",
      },
      // {
      //   date: new Date("2023-05-19T08:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 195, // 3 hours, 15 minutes
      //   calculator: "graphing",
      //   makeup: true,
      // },
    ],
    subject: "Calculus AB",
    type: "ap",
  },
  {
    name: "Calculus BC",
    dates: [
      {
        date: dateFormatter(5, 13, "m"),
        // location: "Donahue Gym",
        duration: 195, // 3 hours, 15 minutes
        calculator: "graphing",
      },
      // {
      //   date: new Date("2023-05-19T08:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 195, // 3 hours, 15 minutes
      //   calculator: "graphing",
      //   makeup: true,
      // },
    ],
    subject: "Calculus BC",
    type: "ap",
  },
  {
    name: "CS Principles",
    dates: [
      {
        date: dateFormatter(5, 15, "a"),
        // location: "Donahue Gym",
        duration: 180, // 3 hours
      },
      // {
      //   date: new Date("2023-05-17T12:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 180, // 3 hours
      //   makeup: true,
      // },
    ],
    subject: "CS Principles",
    type: "ap",
  },
  {
    name: "English Language",
    dates: [
      {
        date: dateFormatter(5, 8, "m"),
        // location: "Donahue Gym/ TBD",
        duration: 195, // 3 hours, 15 minutes
      },
      // {
      //   date: new Date("2023-05-18T08:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 195, // 3 hours, 15 minutes
      //   makeup: true,
      // },
    ],
    subject: "English Language",
    type: "ap",
  },
  {
    name: "Japanese Language",
    dates: [
      {
        date: dateFormatter(5, 16, "a"),
        // location: "Library Lab",
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
        date: dateFormatter(5, 14, "a"),
        // location: "Donahue Gym",
        duration: 120, // 2 hours
        calculator: "graphing",
      },
      // {
      //   date: new Date("2023-05-19T12:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 120, // 2 hours
      //   calculator: "graphing",
      //   makeup: true,
      // },
    ],
    subject: "Physics C: Mechanics",
    type: "ap",
  },
  {
    name: "Physics C: E&M",
    dates: [
      {
        date: new Date("2024-05-14T14:00:00-07:00"),
        // location: "Donahue Gym",
        duration: 120, // 2 hours
        calculator: "graphing",
      },
      // {
      //   date: new date("2023-05-17t08:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 120, // 2 hours
      //   calculator: "graphing",
      //   makeup: true,
      // },
    ],
    subject: "Physics C: E&M",
    type: "ap",
  },
  {
    name: "Spanish Language",
    dates: [
      {
        date: dateFormatter(5, 16, "m"),
        // location: "Berkeley Adult School",
        duration: 183, // 3 hours, 3 minutes
      },
      // {
      //   date: new Date("2023-05-10T07:45:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 183, // 3 hours, 3 minutes
      //   makeup: true,
      // },
    ],
    subject: "Spanish Language",
    type: "ap",
  },
  {
    name: "French Language",
    dates: [
      {
        date: dateFormatter(5, 15, "m"),
        // location: "Donahue Gym",
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
        date: dateFormatter(5, 17, "m"),
        // location: "Donahue Gym",
        duration: 165, // 2 hours, 45 minutes
        calculator: "graphing",
      },
      // {
      //   date: new Date("2023-05-18T08:30:00-07:00"),
      //   location: "Donahue Gym",
      //   duration: 165, // 2 hours, 45 minutes
      //   calculator: "graphing",
      //   makeup: true,
      // },
    ],
    subject: "Physics 1: Algebra",
    type: "ap",
  },
  {
    name: "Music Theory",
    dates: [
      {
        date: dateFormatter(5, 15, "a"),
        // location: "A201",
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
        date: dateFormatter(5, 17, "m"),
        // location: "A201",
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
        date: dateFormatter(5, 16, "a"),
        // location: "Donahue Gym",
        duration: 165, // 2 hours, 45 minutes
        calculator: "graphing",
      },
    ],
    subject: "Biology",
    type: "ap",
  },
];

export const bhsExams = [...ibExams, ...apExams];

export const uniqueExamNames = new Set(
  bhsExams.map((exam) => exam.type.toUpperCase() + " " + exam.name),
);
