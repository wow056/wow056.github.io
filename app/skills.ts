export type Skill = {
  image_url: string;
  name: string;
  descriptions: string[];
};
export type SkillGroup = {
  name: string;
  skills: Skill[];
};

export const skills: SkillGroup[] = [
  {
    name: "Major",
    skills: [
      {
        name: "Next.js",
        image_url: "/nextjs.svg",
        descriptions: [
          "사이드 프로젝트 (itzbar.com) 개발 및 운영",
          "SEO 극대화를 위해 SSR 사용",
          "App router 사용 경험",
          "3개월 이상 일평균 200명 이상 방문",
        ],
      },
      {
        name: "Android",
        image_url: "/android-plain.svg",
        descriptions: [
          "실무 경력 3년",
          "다수의 모빌리티 서비스 앱 및 OTT 앱 (왓챠) 개발",
          "Jetpack Compose, Room, Retrofit 실무 적용 경험",
        ],
      },
      {
        name: "Kotlin",
        image_url: "/kotlin.svg",
        descriptions: ["함수형 프로그래밍 선호", "Coroutine, Flow 실무 적용"],
      },
    ],
  },
  {
    name: "Available",
    skills: [
      {
        name: "AWS",
        image_url: "/aws.svg",
        descriptions: [
          "사이드 프로젝트 (itzbar.com) 개발 및 운영",
          "EC2, Elastic Beanstalk, RDS (Postgres), Route53, S3, ECS 사용 경험",
        ],
      },
      {
        name: "JAVA",
        image_url: "/java-original.svg",
        descriptions: ["Andriod 앱 유지보수 경험", "Spring boot 학습 경험"],
      },
      {
        name: "Docker",
        image_url: "/docker.svg",
        descriptions: ["웹 개발 사용 경험", "ECS 사용 경험"],
      },
    ],
  },
];
