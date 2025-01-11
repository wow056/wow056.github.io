export type Education = {
  title: string;
  events: {
    date: {
      year: number;
      month: number;
    };
    description: string;
  }[];
};

export const educations: Education[] = [
  {
    title: "포항공과대학교",
    events: [
      {
        date: {
          year: 2024,
          month: 2,
        },
        description: "컴퓨터공학과 졸업"
      },
      {
        date: {
          year: 2018,
          month: 9,
        },
        description: "컴퓨터공학과 전공 변경"
      },
      {
        date: {
          year: 2017,
          month: 2,
        },
        description: "화학공학과 입학"
      }
    ],
  },
];
