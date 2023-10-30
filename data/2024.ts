import { ExamInfo } from "./types";

const dateFormatter = (month: number, day: number, time: 'm' | 'a') => {
  let paddedMonth = month < 10 ? `0${month}` : `${month}`;
  let paddedDay = day < 10 ? `0${day}` : `${day}`;
  let hour = (time == 'm') ? `08` : `12`;
  return new Date(`2024-${paddedMonth}-${paddedDay}T${hour}:00:00-07:00`)
}

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
        date: dateFormatter(5, 6, 'a'),
        // location: "M Gym",
        duration: 75,
        lang: 'reading',
        paper: 1,
      },
      {
        date: dateFormatter(5, 6, 'a'),
        // location: "M Gym",
        duration: 60,
        lang: 'reading',
        paper: 2,
      },
      {
        date: dateFormatter(5, 7, 'm'),
        // location: "M Gym",
        duration: 45,
        lang: 'listening',
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
        date: dateFormatter(5, 7, 'a'),
        // location: "M Gym",
        duration: 60,
        paper: 1,
      },
      {
        date: dateFormatter(5, 7, 'a'),
        // location: "M Gym",
        duration: 90,
        paper: 2,
      },
      {
        date: dateFormatter(5, 8, 'm'),
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
        date: dateFormatter(5, 16, 'a'),
        // location: "G109",
        duration: 60,
        lang: 'reading',
        paper: 1,
      },
      {
        date: dateFormatter(5, 16, 'a'),
        // location: "G109",
        duration: 60,
        lang: 'reading',
        paper: 2,
      },
      {
        date: dateFormatter(5, 17, 'm'),
        // location: "G109",
        duration: 45,
        lang: 'listening',
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
        date: dateFormatter(5, 16, 'a'),
        // location: "G109",
        duration: 75,
        lang: 'reading',
        paper: 1,
      },
      {
        date: dateFormatter(5, 16, 'a'),
        // location: "G109",
        duration: 60,
        lang: 'reading',
        paper: 2,
      },
      {
        date: dateFormatter(5, 17, 'm'),
        // location: "G109",
        duration: 45,
        lang: 'listening',
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
        date: dateFormatter(5, 15, 'a'),
        // location: "Donahue Gym",
        duration: 75,
        paper: 1,
      },
      {
        date: dateFormatter(5, 16, 'm'),
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
        date: dateFormatter(5, 14, 'a'),
        // location: "Donahue Gym",
        duration: 75,
        lang: 'reading',
        paper: 1,
      },
      {
        date: dateFormatter(5, 14, 'a'),
        // location: "Donahue Gym",
        duration: 60,
        lang: 'reading',
        paper: 2,
      },
      {
        date: dateFormatter(5, 15, 'm'),
        // location: "Donahue Gym",
        duration: 45,
        lang: 'listening',
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
        date: dateFormatter(5, 14, 'a'),
        // location: "Donahue Gym",
        duration: 75,
        lang: 'reading',
        paper: 1,
      },
      {
        date: dateFormatter(5, 14, 'a'),
        // location: "Donahue Gym",
        duration: 60,
        lang: 'reading',
        paper: 2,
      },
      {
        date: dateFormatter(5, 15, 'm'),
        // location: "Donahue Gym",
        duration: 45,
        lang: 'listening',
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
        date: dateFormatter(5, 13, 'a'),
        // location: "G109",
        duration: 45,
        paper: 1,
      },
      {
        date: dateFormatter(5, 14, 'm'),
        // location: "G109",
        duration: 75,
        paper: 2,
        calculator: "scientific",
      },
      {
        date: dateFormatter(5, 13, 'a'),
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
        date: dateFormatter(5, 6, 'a'),
        // location: "G109",
        duration: 90,
        paper: 1,
      },
      {
        date: dateFormatter(5, 7, 'm'),
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
        date: dateFormatter(5, 6, 'a'),
        // location: "G109",
        duration: 120,
        paper: 1,
      },
      {
        date: dateFormatter(5, 7, 'm'),
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
        date: dateFormatter(5, 2, 'a'),
        // location: "G109",
        duration: 60,
        paper: 1,
      },
      {
        date: dateFormatter(5, 6, 'm'),
        // location: "G109",
        duration: 120,
        paper: 2,
      },
    ],
    subject: "ESS",
    type: "ib",
  }
];

export const bhsExams = [...ibExams];

export const uniqueExamNames = new Set(
  bhsExams.map((exam) => exam.type.toUpperCase() + " " + exam.name)
);
