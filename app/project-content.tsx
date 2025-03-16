import Image from 'next/image';
import { Dialog } from 'radix-ui';

export function ProjectContent() {
  const data = {
    title: '이쪽술집',
    team: '사이드 프로젝트 팀 퇴근길',
    image: {
      url: '/itzbar.svg',
      description: 'itzbar 로고',
    },
    short_description: '퀴어 프렌들리 장소 검색 및 추천 웹사이트',
    descriptions: [
      {
        subheading: '약력',
        items: [
          '2023. 05. - 1인 프로젝트로 시작',
          '2023. 06. - 대학교 개발동아리 해커톤 대회 1등',
          '2023. 08. - 4인 팀으로 확장',
          '2023. 10. - 방문객 일 200명 돌파',
          '2023. 11. - 프라이드 엑스포 부스 운영',
          '2024. 01. - 운영 종료',
        ],
      },
      {
        subheading: '언어',
        items: ['TypeScript, JavaScript', 'PostgreSQL'],
      },
      {
        subheading: '프레임워크',
        items: [
          'Frontend : Next.js, TailwindCSS',
          'Backend : Next.js, NestJS, WebSocket, Prisma',
          'DB : PostgreSQL',
          'Hosting : Netlify, Vercel, AWS',
          'CI/CD : Github Action',
        ],
      },
    ],
  };
  return (
    <div className="flex flex-col md:grid md:grid-cols-[240px_auto] md:gap-x-8 md:gap-y-10">
      <div className="flex justify-start items-center relative gap-2 pb-2 border-b border-black">
        <Dialog.Title className="flex-grow-0 flex-shrink-0 text-[20px] font-bold text-[#111]">
          {data.title}
        </Dialog.Title>
        <Dialog.Description className="flex-grow-0 flex-shrink-0 text-[16px] font-semibold text-[#111]">
          {data.team}
        </Dialog.Description>
      </div>
      <div className="hidden md:block border-b border-black" />
      <div className="flex flex-col items-start relative">
        <div className="hidden md:block aspect-w-3 aspect-h-2 w-full">
          <Image
            src={'/itzbar.svg'}
            alt={'itzbar 로고'}
            width={240}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-[14px] text-left text-[#444] md:pt-4 pt-3">
          2023. 05. - 2023. 12.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-[18px] font-semibold text-left text-[#111]">
          {data.short_description}
        </p>
        <div className="flex flex-col justify-start items-start relative gap-5">
          {data.descriptions.map((description, index) => {
            return (
              <div key={index} className="text-sm text-left text-[#444]">
                <p className="font-semibold">{description.subheading}</p>
                <ul className="list-disc list-outside pl-5">
                  {description.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
